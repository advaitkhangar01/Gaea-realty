# Linux VPS Deployment Guide — GAEA Realty & Consultants

This repository is optimized for deployment on a standard Ubuntu / Debian Linux VPS (e.g. DigitalOcean, AWS EC2, Linode, Hetzner) using Next.js `standalone` mode, PM2, and Nginx.

---

## 1. Prerequisites on Linux VPS

Run the following commands on your server:

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 20+ LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx git certbot python3-certbot-nginx

# Install PM2 globally
sudo npm install -g pm2
```

---

## 2. Server Directory Setup & Build Steps

```bash
# Navigate to web root
cd /var/www

# Clone repository
git clone <your-repo-url> gaea-realty
cd gaea-realty

# Install dependencies
npm install

# Build standalone Next.js application
npm run build
```

---

## 3. Standalone Asset Copying & PM2 Setup

Next.js standalone builds generate optimized standalone server files inside `.next/standalone`.
Ensure static assets and public files are copied into the standalone folder:

```bash
# Copy public assets and static files into standalone output
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

# Start application using PM2
pm2 start ecosystem.config.js

# Save PM2 state & enable startup on server reboot
pm2 save
pm2 startup
```

---

## 4. Nginx Reverse Proxy Setup

```bash
# Copy nginx configuration
sudo cp nginx.conf.example /etc/nginx/sites-available/gaearealty.com

# Create symlink to sites-enabled
sudo ln -s /etc/nginx/sites-available/gaearealty.com /etc/nginx/sites-enabled/

# Test Nginx syntax
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

## 5. SSL Certificate Setup (Let's Encrypt Certbot)

```bash
# Provision free SSL certificate for domain
sudo certbot --nginx -d gaearealty.com -d www.gaearealty.com
```

---

## 6. Health Check & Verification

```bash
# Check PM2 process status
pm2 status

# Check Next.js server logs
pm2 logs gaea-realty-website

# Verify local endpoint response
curl -I http://localhost:3000
```
