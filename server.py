from flask import Flask, jsonify
import subprocess
import os

app = Flask(__name__)

# 設定你的專案根目錄路徑
PROJECT_DIR = r"C:\Claude專案\AI影片收藏網站\AI Youtube影片收藏網站"

@app.route('/trigger-update', methods=['POST'])
def trigger_update():
    try:
        print("收到 n8n 觸發訊號，開始執行更新管線...")
        
        # 1. 執行 fetch_playlists.py
        fetch_path = os.path.join(PROJECT_DIR, "scripts", "fetch_playlists.py")
        subprocess.run(["python", fetch_path], check=True)
        
        # 2. 執行 summarize.py
        summarize_path = os.path.join(PROJECT_DIR, "scripts", "summarize.py")
        subprocess.run(["python", summarize_path], check=True)
        
        # 3. 執行 Git Commit & Push (讓 Vercel 自動更新)
        # 這裡假設你已經設定好 Git 的自動驗證
        subprocess.run(["git", "add", "."], cwd=PROJECT_DIR, check=True)
        subprocess.run(["git", "commit", "-m", "🤖 auto: update youtube collection via n8n"], cwd=PROJECT_DIR, check=True)
        subprocess.run(["git", "push"], cwd=PROJECT_DIR, check=True)
        
        return jsonify({"status": "success", "stdout": "UPDATED"}), 200

    except subprocess.CalledProcessError as e:
        print(f"執行出錯: {str(e)}")
        return jsonify({"status": "error", "stdout": f"Failed at command: {e.cmd}"}), 500
    except Exception as e:
        print(f"系統錯誤: {str(e)}")
        return jsonify({"status": "error", "stdout": str(e)}), 500

if __name__ == '__main__':
    # 啟動在本機的 5000 端口
    app.run(host='0.0.0.0', port=5000)