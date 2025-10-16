# Deployment to GitHub Pages

This guide covers deploying the Nexus landing site to GitHub Pages with automatic deployment via GitHub Actions.

## Prerequisites

- GitHub account
- Git repository pushed to GitHub
- GitHub Pages enabled for your repository

## Configuration

### 1. Repository Type

GitHub Pages supports two types of deployments:

#### User/Organization Page (username.github.io)

- Repository name: `username.github.io`
- Site URL: `https://username.github.io/`
- **No basePath needed** - current configuration works as-is

#### Project Page (username.github.io/repo-name)

- Repository name: Any name (e.g., `hivesite`)
- Site URL: `https://username.github.io/hivesite/`
- **Requires basePath configuration**

### 2. Configure for Project Pages (if needed)

If deploying to a project page, update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/hivesite', // Replace 'hivesite' with your repo name
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
```

**Important**: After changing `basePath`, update all internal links:

- `href="/"` → `href="/hivesite/"`
- `href="/about"` → `href="/hivesite/about"`

Or use Next.js Link component which handles basePath automatically:

```tsx
import Link from 'next/link';
<Link href="/about">About</Link> // Works with basePath
```

## Deployment Steps

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/username/hivesite.git

# Add and commit all files
git add .
git commit -m "Initial commit - Nexus landing site"

# Push to main branch
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select:
   - Source: **GitHub Actions** (recommended)
   - Or: **Deploy from a branch** and select `gh-pages` branch

**Recommended**: Use **GitHub Actions** as the source (it's already configured via `.github/workflows/deploy.yml`)

### Step 3: Configure Repository Permissions

1. Go to **Settings** > **Actions** > **General**
2. Scroll to **Workflow permissions**
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### Step 4: Trigger Deployment

The site will automatically deploy when you:

- Push to the `main` branch
- Manually trigger the workflow from **Actions** tab

To manually trigger:

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select `main` branch
5. Click **Run workflow**

### Step 5: Verify Deployment

1. Go to **Actions** tab to monitor deployment progress
2. Once complete, visit your GitHub Pages URL:
   - User page: `https://username.github.io/`
   - Project page: `https://username.github.io/hivesite/`

## GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`) automatically:

1. **Checks out** the repository code
2. **Sets up Node.js** (version 20)
3. **Installs dependencies** (`npm ci`)
4. **Builds the site** (`npm run build`)
5. **Adds .nojekyll** file to prevent Jekyll processing
6. **Uploads artifacts** to GitHub Pages
7. **Deploys** to GitHub Pages environment

## Build Output

The build process generates:

- **Output directory**: `./out/`
- **Total pages**: 18 static HTML pages
- **Total size**: ~111 KB First Load JS per page
- **All assets**: Images, CSS, JavaScript in `./out/` folder

## Troubleshooting

### Deployment Fails

**Problem**: GitHub Actions workflow fails
**Solution**:

- Check **Actions** tab for error logs
- Verify repository permissions (Step 3)
- Ensure GitHub Pages is enabled

### 404 Errors on Navigation

**Problem**: Page refreshes result in 404 errors
**Solution**:

- Verify `trailingSlash: true` in `next.config.js`
- For project pages, ensure `basePath` is set correctly

### Images Not Loading

**Problem**: Images show broken links
**Solution**:

- Check image paths in `public/` directory
- For project pages, verify basePath configuration
- Ensure images are committed to repository

### CSS/Styles Not Applied

**Problem**: Page loads but styles are missing
**Solution**:

- Check browser console for 404 errors on CSS files
- Verify basePath configuration for project pages
- Clear browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### Actions Permission Denied

**Problem**: Workflow fails with permission errors
**Solution**:

- Go to **Settings** > **Actions** > **General**
- Enable **Read and write permissions**
- Re-run the workflow

## Local Testing

Test the production build locally before deploying:

```bash
# Build the site
npm run build

# Serve the static site locally
npx serve out

# Visit http://localhost:3000 to test
```

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to `public/` directory:

   ```
   www.hiveomics.com
   ```

2. Configure DNS records with your domain provider:
   - **A records** pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or **CNAME record** pointing to `username.github.io`

3. In GitHub repository **Settings** > **Pages**:
   - Enter your custom domain
   - Enable **Enforce HTTPS**

4. Wait for DNS propagation (up to 24 hours)

## Continuous Deployment

Every push to `main` branch triggers automatic deployment:

```bash
# Make changes locally
git add .
git commit -m "Update content"
git push origin main

# Site automatically rebuilds and deploys
# Check Actions tab for deployment status
```

## Environment URLs

After deployment, view your site at:

- **Production**: Your GitHub Pages URL
- **Actions**: Monitor deployments in **Actions** tab
- **Environments**: View deployment history in **Environments** (Settings > Environments)

## Files Overview

### Deployment Files

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `public/.nojekyll` - Prevents Jekyll processing
- `next.config.js` - Next.js configuration with GitHub Pages settings

### Build Output

- `out/` - Generated static site (not committed to repo)
- `out/.nojekyll` - Created during build

## Support

For issues with:

- **Next.js static export**: See [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- **GitHub Pages**: See [GitHub Pages Documentation](https://docs.github.com/en/pages)
- **GitHub Actions**: See [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Status: ✅ READY FOR DEPLOYMENT

All configuration files are in place. Follow the deployment steps above to publish your site to GitHub Pages.
