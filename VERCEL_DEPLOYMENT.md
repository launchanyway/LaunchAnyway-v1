# Vercel Deployment Guide

This project is now configured to deploy to Vercel. Follow these steps:

## Setup

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push
   ```

2. **Configure Vercel Project Settings**

   In your Vercel project dashboard:

   - Go to **Settings** → **General**
   - Set **Build Command** to: `npm run vercel-build`
   - Set **Output Directory** to: `public`
   - Set **Install Command** to: `npm install`

3. **Add Environment Variables**

   In Vercel dashboard, go to **Settings** → **Environment Variables** and add all variables from your `.env` file:

   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - Any other environment variables your app needs

4. **Redeploy**

   After configuring the settings, redeploy your project from the Vercel dashboard.

## How It Works

- The `vercel-build` script builds both the client (React) and server (Express) for Vercel
- Static files are served from the `/public` directory
- API routes are handled by the serverless function in `/api`
- All requests are routed through the Express app for proper handling

## Troubleshooting

If you still see download issues:
- Clear your Vercel deployment cache
- Check that environment variables are set correctly
- Verify the build completes successfully in Vercel logs
