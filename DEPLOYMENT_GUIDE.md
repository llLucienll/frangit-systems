# Deployment Guide

This project is already prepared to build as a static site with Vite.

## Recommended Option

Cloudflare Pages is the preferred first option because it is simple, free for this kind of project, and works well with React + Vite.

## Build Output

When you run:

```powershell
& "C:\Program Files\nodejs\npm.cmd" run build
```

Vite generates the production files in:

`dist/`

That folder is the final static website.

## Cloudflare Pages Setup

Suggested configuration:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

If Cloudflare needs Node version details later, we can add them, but for now the project is simple enough to deploy with the default Vite setup.

## GitHub Pages Note

GitHub Pages is also possible, but it may require an additional `base` configuration in `vite.config.js` depending on whether the site is deployed to:

- a custom domain
- a user site
- a project subpath

Because of that, Cloudflare Pages is usually the smoother first deployment path for this project.

## Pre-Publish Checklist

- Confirm final WhatsApp number
- Confirm final Instagram profile
- Review service copy and CTA text
- Review favicon and social preview image
- Run build successfully
- Test the page on desktop and mobile

## Future Improvements Before Public Launch

- Replace temporary preview metadata with final production URL
- Add analytics if needed
- Add a contact form if the business wants an additional lead channel
- Add a custom domain later
