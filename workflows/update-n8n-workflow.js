const fs = require("fs");

const input = process.argv[2] || "/tmp/current-youtube-workflow.json";
const output = process.argv[3] || "/tmp/updated-youtube-workflow.json";
const workflows = JSON.parse(fs.readFileSync(input, "utf8"));
const wf = workflows[0];

const command = `set -eu
PROJECT_DIR="\${PROJECT_DIR:-/workspace/ai-youtube-collection}"
git config --global --add safe.directory "$PROJECT_DIR" || true
git config --global user.name "n8n Auto Update"
git config --global user.email "n8n@roylin1985.com"
cd "$PROJECT_DIR"
git pull --ff-only
python3 -m pip install -r requirements.txt
python3 scripts/fetch_playlists.py
python3 scripts/summarize.py
if git diff --quiet --ignore-space-at-eol -I '^(// Auto-generated|[[:space:]]*"generated_at":)' -- config.json data/videos.js; then
  git restore config.json data/videos.js
  echo "NO_CHANGES"
  exit 0
fi
git add config.json data/videos.js
git commit -m "Auto update YouTube video collection"
git push
echo "UPDATED"`;

const fetchNode = wf.nodes.find((node) => node.name === "Fetch, Summarize, Commit, Push");
if (!fetchNode) {
  throw new Error("Fetch, Summarize, Commit, Push node not found");
}

fetchNode.parameters.command = command;
wf.connections = {
  "Every 6 Hours": {
    main: [[{ node: "Fetch, Summarize, Commit, Push", type: "main", index: 0 }]],
  },
  "Fetch, Summarize, Commit, Push": {
    main: [[{ node: "Was Updated?", type: "main", index: 0 }]],
  },
  "Was Updated?": {
    main: [
      [{ node: "Check Website", type: "main", index: 0 }],
      [{ node: "No Changes", type: "main", index: 0 }],
    ],
  },
};

fs.writeFileSync(output, JSON.stringify(workflows, null, 2));
