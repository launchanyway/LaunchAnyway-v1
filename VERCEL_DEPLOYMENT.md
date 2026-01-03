# Vercel Deployment Guide

This project is configured to deploy to Vercel with a full-stack Express backend and React frontend.

## Quick Setup

1. **Push changes to Git**
   ```bash
   git add .
   git commit -m "Fix Vercel deployment"
   git push
   ```

2. **Configure Vercel Project**

   Go to your project in Vercel dashboard → **Settings** → **General**:

   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: (leave empty)
   - **Install Command**: `npm install`

3. **Add Environment Variables**

   In **Settings** → **Environment Variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

   Add them for Production, Preview, and Development environments.

4. **Deploy**

   Trigger a new deployment from the Deployments tab.

## How It Works

The build process:
1. Builds React frontend → `public/` directory
2. Bundles Express backend → `api/index.js` serverless function
3. The serverless function serves static files and handles all routes

Key files:
- `vercel.json` - Routes all requests through the Express function and includes static files
- `api/index.js` - Express serverless handler (created during build)
- `public/` - Static React app files (created during build)
- `server/vercel.ts` - Source for the serverless function

## Troubleshooting

**404 NOT_FOUND Error:**
- Check build logs for errors
- Verify environment variables are set
- Ensure `vercel.json` and build files are committed to Git
- The `includeFiles` setting in `vercel.json` ensures `public/` is bundled with the function

**Static Files Not Loading:**
- Check that `public/` directory includes static files after build
- Verify `includeFiles` configuration in `vercel.json`

**Build Fails:**
- Review Vercel build logs for specific errors
- Confirm all dependencies install correctly
- Check that environment variables are set for the correct environment
