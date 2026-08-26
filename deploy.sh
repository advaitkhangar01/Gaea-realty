#!/bin/bash
# ==============================================================================
# GAEA Realty One-Click Deployment Script
# Domain: gaearealty.in | VPS: 69.62.77.95
# ==============================================================================

set -e

APP_DIR="/var/www/gaearealty"

echo "🚀 Starting Deployment for GAEA Realty (gaearealty.in)..."

if [ -d "$APP_DIR" ]; then
    cd "$APP_DIR"
else
    echo "❌ Directory $APP_DIR does not exist. Run setup-vps.sh first."
    exit 1
fi

echo "📥 Pulling latest changes from GitHub..."
git pull origin main

echo "📦 Installing production dependencies..."
npm install

echo "🏗️ Building Next.js application..."
npm run build

echo "📂 Copying standalone static assets..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

echo "🔄 Restarting application with PM2..."
pm2 reload ecosystem.config.js || pm2 start ecosystem.config.js
pm2 save

echo ""
echo "✅ Deployment completed successfully!"
echo "🌐 Visit: https://gaearealty.in"