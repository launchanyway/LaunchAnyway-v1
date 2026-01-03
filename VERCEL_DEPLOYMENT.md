# Vercel Deployment Guide

This project is configured to deploy to Vercel with a full-stack Express backend and React frontend.

## Setup Steps

1. **Push your code to Git**
   ```bash
   git add .
   git commit -m "Fix Vercel deployment configuration"
   git push
   ```

2. **Configure Build Settings in Vercel**

   In your Vercel project dashboard, go to **Settings** → **General**:

   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: Leave blank (configuration is in vercel.json)
   - **Install Command**: `npm install`
   - **Root Directory**: `.` (default)

3. **Add Environment Variables**

   In Vercel dashboard, go to **Settings** → **Environment Variables** and add:

   - `VITE_SUPABASE_URL` - Your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key
   - Any other environment variables your app uses

   Make sure to add them for **Production**, **Preview**, and **Development** environments.

4. **Redeploy**

   After updating settings, trigger a new deployment:
   - Go to **Deployments** tab
   - Click the **...** menu on the latest deployment
   - Select **Redeploy**

## How It Works

- `vercel.json` configures builds and routes
- Static files (React app) are built to `/public` directory
- Express server is bundled to `/api/index.js` as a serverless function
- Static assets (.js, .css, images) are served directly from `/public`
- All other routes go through the Express serverless function for proper SPA routing

## Troubleshooting

**404 Errors:**
- Make sure the build completes successfully (check Vercel build logs)
- Verify `api/index.js` and `public/` directory exist after build
- Check that vercel.json is in the root directory

**Build Failures:**
- Check environment variables are set correctly
- Review build logs in Vercel dashboard for specific errors

**Static Files Not Loading:**
- Ensure file paths in your code are absolute (start with `/`)
- Check the Vercel logs to see if files are being requested correctly
