# Linux VPS Deployment Guide — GAEA Realty & Consultants

- **VPS IP**: `69.62.77.95`
- **Target Domain**: `gaearealty.in` / `www.gaearealty.in`
- **Repository**: `https://github.com/advaitkhangar01/Gaea-realty.git`

This project is configured for deployment on an Ubuntu / Debian Linux VPS using Next.js **standalone mode**, **PM2**, **Nginx**, and **Certbot (SSL)**.

---

## Option A: Automated Initial Setup (Recommended)

Log in to your VPS via SSH and run the following commands:

```bash
# 1. SSH into VPS
ssh root@69.62.77.95

# 2. Clone repository to /var/www/gaearealty
sudo mkdir -p /var/www
cd /var/www
git clone https://github.com/advaitkhangar01/Gaea-realty.git gaearealty
cd gaearealty

# 3. Make scripts executable and run setup
chmod +x setup-vps.sh deploy.sh
./setup-vps.sh
```

`setup-vps.sh` automatically installs Node.js 20, Nginx, PM2, Certbot, builds the Next.js standalone application, configures Nginx for `gaearealty.in`, and starts PM2.

---

## Option B: Future Deployment / Updates

Whenever you push new changes to GitHub, deploy them on your VPS by running:

```bash
cd /var/www/gaearealty
./deploy.sh
```

---

## Step 3: SSL Certificate Setup (Let's Encrypt HTTPS)

After your domain DNS records (`gaearealty.in` and `www.gaearealty.in`) point to IP `69.62.77.95`, run:

```bash
sudo certbot --nginx -d gaearealty.in -d www.gaearealty.in
```

Certbot will automatically obtain free SSL certificates and enable automatic HTTP to HTTPS redirects.

---

## Useful PM2 & Nginx Commands

```bash
# Check PM2 application status
pm2 status

# View application logs
pm2 logs gaea-realty-website

# Restart application
pm2 restart gaea-realty-website

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```