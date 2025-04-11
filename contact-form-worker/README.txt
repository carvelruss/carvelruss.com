# Contact Form Worker

## 🚀 How to Deploy

1. Open terminal in this folder
2. Run:
   wrangler login
3. Then:
   wrangler deploy

## 📦 What It Does
- Accepts contact form submissions at: POST /api/contact
- Saves them in your D1 database
- (Optional) Sends you an email via Resend if API key is set

## 📬 Enable Email Notifications
- Go to https://resend.com
- Get your API key
- Set it via Cloudflare Dashboard → Workers → Variables or edit `wrangler.toml`

Enjoy!
