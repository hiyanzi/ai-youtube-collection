#!/bin/sh
set -eu

mkdir -p /home/node/.n8n/ssh /home/node/.ssh

if [ ! -f /home/node/.n8n/ssh/id_ed25519 ]; then
  ssh-keygen -t ed25519 -C "n8n-ai-youtube-collection" -f /home/node/.n8n/ssh/id_ed25519 -N "" >/dev/null
fi

ssh-keyscan github.com > /home/node/.n8n/ssh/known_hosts 2>/dev/null

chmod 700 /home/node/.n8n/ssh /home/node/.ssh
chmod 600 /home/node/.n8n/ssh/id_ed25519 /home/node/.n8n/ssh/known_hosts
chmod 644 /home/node/.n8n/ssh/id_ed25519.pub

cat > /home/node/.ssh/config <<'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile /home/node/.n8n/ssh/id_ed25519
  UserKnownHostsFile /home/node/.n8n/ssh/known_hosts
  StrictHostKeyChecking yes
EOF

chmod 600 /home/node/.ssh/config

git config --global url."git@github.com:hiyanzi/".insteadOf "https://github.com/hiyanzi/"
cat /home/node/.n8n/ssh/id_ed25519.pub
