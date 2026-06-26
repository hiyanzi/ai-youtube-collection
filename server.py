from __future__ import annotations

import os
import subprocess
from pathlib import Path

from flask import Flask, jsonify

app = Flask(__name__)

PROJECT_DIR = Path(
    os.getenv("PROJECT_DIR", "/workspace/ai-youtube-collection")
).resolve()


def run(command: list[str], cwd: Path = PROJECT_DIR) -> subprocess.CompletedProcess:
    return subprocess.run(
        command,
        cwd=cwd,
        check=True,
        text=True,
        capture_output=True,
    )


@app.route("/healthz", methods=["GET"])
def healthz():
    return jsonify({"status": "ok", "project_dir": str(PROJECT_DIR)}), 200


@app.route("/trigger-update", methods=["POST"])
def trigger_update():
    try:
        run(["git", "config", "--global", "--add", "safe.directory", str(PROJECT_DIR)])
        run(["git", "config", "--global", "user.name", "n8n Auto Update"])
        run(["git", "config", "--global", "user.email", "n8n@roylin1985.com"])
        run(["git", "pull", "--ff-only"])
        run(["python3", "-m", "pip", "install", "-r", "requirements.txt"])
        run(["python3", "scripts/fetch_playlists.py"])
        run(["python3", "scripts/summarize.py"])

        diff = subprocess.run(
            [
                "git",
                "diff",
                "--quiet",
                "--ignore-space-at-eol",
                "-I",
                '^(// Auto-generated|[[:space:]]*"generated_at":)',
                "--",
                "config.json",
                "data/videos.js",
            ],
            cwd=PROJECT_DIR,
        )
        if diff.returncode == 0:
            run(["git", "restore", "config.json", "data/videos.js"])
            return jsonify({"status": "success", "stdout": "NO_CHANGES"}), 200

        run(["git", "add", "config.json", "data/videos.js"])
        run(["git", "commit", "-m", "Auto update YouTube video collection"])
        run(["git", "push"])
        return jsonify({"status": "success", "stdout": "UPDATED"}), 200

    except subprocess.CalledProcessError as error:
        output = "\n".join(
            part
            for part in [error.stdout, error.stderr]
            if part
        ).strip()
        return jsonify({
            "status": "error",
            "stdout": output or str(error),
            "command": error.cmd,
        }), 500
    except Exception as error:
        return jsonify({"status": "error", "stdout": str(error)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
