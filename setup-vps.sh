#!/bin/bash
# ==============================================================================
# GAEA Realty VPS Initial Setup Script (Ubuntu / Debian)
# Server IP: 69.62.77.95 | Domain: gaearealty.in
# ==============================================================================

set -e

DOMAIN="gaearealty.in"
REPO_URL="https://github.com/advaitkhangar01/Gaea-realty.git"
APP_DIR="/var/www/gaearealty"

echo "🚀 Starting VPS Setup for $DOMAIN..."

echo "=== 1. Updating System Packages ==="
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git nginx certbot python3-certbot-nginx ufw

echo "=== 2. Installing Node.js 20 LTS ==="
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt install -y nodejs
fi
echo "Node.js Version: $(node -v)"
echo "NPM Version: $(npm -v)"

echo "=== 3. Installing PM2 Globally ==="
if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
fi

echo "=== 4. Setting up Web Directory ==="
sudo mkdir -p /var/www
sudo chown -R $USER:$USER /var/www

if [ -d "$APP_DIR" ]; then
    echo "Directory $APP_DIR already exists. Pulling latest code..."
    cd "$APP_DIR"
    git pull origin main
else
    git clone "$REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
fi

echo "=== 5. Installing NPM Packages & Building Next.js App ==="
npm install
npm run build

echo "=== 6. Copying Standalone Static Assets ==="
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

echo "=== 7. Starting Application with PM2 ==="
pm2 start ecosystem.config.js
pm2 save
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME || true

echo "=== 8. Configuring Nginx Reverse Proxy ==="
sudo cp nginx.conf.example /etc/nginx/sites-available/$DOMAIN
sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx

echo "=== 9. Setting Up Firewall (UFW) ==="
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
echo "y" | sudo ufw enable || true

echo ""
echo "✅ Initial VPS Setup Completed Successfully!"
echo "🌐 Your site is live at: http://$DOMAIN (or http://69.62.77.95)"
echo ""
echo "🔒 To enable HTTPS SSL, run:"
echo "sudo certbot --nginx -d gaearealty.in -d www.gaearealty.in"