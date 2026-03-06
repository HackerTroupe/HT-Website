# HackerTroupe Website - Cloudflare Pages Deployment Guide

## Overview

This is a static React website built with Vite, ready to be deployed on Cloudflare Pages.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Cloudflare account

## Local Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## Deploying to Cloudflare Pages

### Method 1: Using Cloudflare Dashboard (Recommended)

1. **Connect Your Repository**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Create a project**
   - Connect your Git repository (GitHub, GitLab, or Bitbucket)

2. **Configure Build Settings**
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave blank if at root)

3. **Environment Variables** (if needed)
   - No environment variables required for basic deployment
   - Add `NODE_VERSION` = `18` if you encounter build issues

4. **Deploy**
   - Click **Save and Deploy**
   - Cloudflare will build and deploy your site automatically
   - Every push to your main branch will trigger a new deployment

### Method 2: Using Wrangler CLI

1. **Install Wrangler**

   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**

   ```bash
   wrangler login
   ```

3. **Deploy**
   ```bash
   npm run build
   wrangler pages deploy dist --project-name=hackertroupe-website
   ```

## Build Configuration

The site uses Vite as the build tool with the following configuration:

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6.x
- **Output Directory**: `dist/`
- **SPA Routing**: Handled via `_redirects` file in `public/` directory

## Features

- ✅ Static site generation with Vite
- ✅ Client-side routing with React Router
- ✅ Responsive design
- ✅ Dark/Light theme support
- ✅ LocalStorage-based data management
- ✅ No backend required

## Adding Content

### Adding a New Member

1. Open `src/data/members.ts`
2. Use the template in `templates/member-template.md`
3. Add your member object to the `members` array

### Adding a New Operation

1. Open `src/data/operations.ts`
2. Use the template in `templates/operation-template.md`
3. Add your operation object to the `defaultOperations` array

### Adding a New Post

1. Open `src/data/posts.ts`
2. Use the template in `templates/post-template.md`
3. Add your post object to the `posts` array

## Custom Domain

To use a custom domain with Cloudflare Pages:

1. Go to your Pages project settings
2. Navigate to **Custom domains**
3. Click **Set up a custom domain**
4. Follow the DNS configuration instructions
5. Cloudflare will automatically provision an SSL certificate

## Performance

The site is optimized for performance:

- Static HTML, CSS, and JS bundles
- Automatic code splitting
- CDN distribution via Cloudflare's global network
- Automatic caching and optimization

## Troubleshooting

### Build Fails

- Ensure Node.js version is 18 or higher
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check build logs for specific errors

### Routing Issues (404 on refresh)

- Ensure `_redirects` file is present in `public/` directory
- The `_redirects` file handles SPA routing by redirecting all requests to `index.html`

### Content Not Updating

- Data is stored in localStorage in the browser
- Clear localStorage to see default data: Open DevTools → Application → Local Storage → Clear

## Support

For issues or questions, check the project documentation or contact the team.
