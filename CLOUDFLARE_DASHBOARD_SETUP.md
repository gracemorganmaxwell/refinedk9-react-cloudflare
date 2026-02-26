# Cloudflare dashboard setup – step-by-step

This guide follows the **relevant Cloudflare documentation** ([Workers get started – Dashboard](https://developers.cloudflare.com/workers/get-started/dashboard/), [Workers CI/CD Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), [Build configuration](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)) to connect this **Vite + React** static site to Cloudflare as a **Worker** (static assets). Your project already uses Workers with static assets in `wrangler.jsonc`; these steps are for the **dashboard only**.

> **Note:** Cloudflare’s framework docs also cover **RedwoodSDK** (formerly RedwoodJS for Cloudflare). This repo is **Vite + React**; the steps below apply to this setup. RedwoodSDK would use a different build/deploy flow (`npm run release` etc.).

---

## Prerequisites

- [Cloudflare account](https://dash.cloudflare.com/sign-up)
- This repo pushed to **GitHub** or **GitLab** (so the dashboard can “Import a repository”)

---

## Part 1: Create the Worker and connect Git

### Step 1: Open Workers & Pages

1. Log in at [dash.cloudflare.com](https://dash.cloudflare.com).
2. In the left sidebar, click **Workers & Pages**.
3. Click **Create application**.

### Step 2: Import from Git

1. Under **Import a repository**, choose **Get started** (or the option that connects your Git provider).
2. Select your **Git account** (e.g. GitHub or GitLab) and authorize Cloudflare if asked.
3. **Select the repository** that contains this project (e.g. `refinedk9-react-cloudflare`). Use the search bar if needed.
4. Click **Continue** / **Begin setup** (wording may vary).

### Step 3: Configure the project (critical)

You must set these so the build and deploy match your repo.

| Setting | Value | Why |
|--------|--------|-----|
| **Project name** | `refinedk9-react` | Must match the `name` in `wrangler.jsonc` or the build will fail. |
| **Production branch** | `main` (or your default branch) | Deploys from this branch become the live Worker. |
| **Root directory** | *(leave blank)* | App is at the repo root. |
| **Build command** | `pnpm run build` | Runs `tsc -b && vite build` and outputs to `dist`. |
| **Deploy command** | `pnpm run deploy` | Runs `pnpm run build && wrangler deploy` (builds then deploys). |

If you use **npm** instead of pnpm:

- **Build command:** `npm run build`
- **Deploy command:** `npm run deploy`

From the [Workers CI/CD configuration docs](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/):

- The **deploy command** defaults to `npx wrangler deploy`; using `pnpm run deploy` uses the Wrangler version in your `package.json`.
- The **Worker name** in the dashboard must match the `name` in your Wrangler config (`refinedk9-react`).

### Step 4: Save and deploy

1. Click **Save and Deploy** (or **Deploy**).
2. Cloudflare runs: install deps → **Build command** → **Deploy command**.
3. When the build finishes, your site is live at a **`*.workers.dev`** URL (e.g. `https://refinedk9-react.<your-subdomain>.workers.dev`).

---

## Part 2: After the first deployment

### Viewing the Worker

- In **Workers & Pages**, the project appears under **Workers** (not Pages).
- Click the Worker name to open **Overview**, **Deployments**, **Settings**, etc.

### Build history and logs

1. Open your Worker → **Deployments**.
2. At the bottom, use **View build history**.
3. Click a build to see **build logs** and status.

### Preview URLs (non-production branches)

If you enable [non-production branch builds](https://developers.cloudflare.com/workers/ci-cd/builds/build-branches/), pushes to other branches run the **non-production deploy command** (default: `npx wrangler versions upload`), which creates a **preview version** and a **preview URL** instead of changing production.

---

## Part 3: Optional dashboard settings

### Custom domain

1. Worker → **Settings** → **Domains & routes** (or **Triggers** → **Custom Domains**).
2. Add your domain and follow the instructions (CNAME or nameservers at your registrar).

### Build settings later

1. Worker → **Settings** → **Builds**.
2. You can change **Build command**, **Deploy command**, **Root directory**, **Git branch**, and **Build variables / secrets** here. Changes apply to the **next** build.

### Environment variables for the build

- **Build-only** (e.g. for build scripts): **Settings** → **Builds** → **Build variables and secrets**.
- **Runtime** (available in Worker code): **Settings** → **Variables and Secrets**. This project is assets-only, so runtime vars are only needed if you add Worker script later.

### API token (advanced)

- **Settings** → **Builds** → **API token**. By default Cloudflare creates a token for builds. You can replace it with your own token from **My Profile** → **API Tokens** if you need custom permissions.

---

## Summary checklist

- [ ] Log in to Cloudflare → **Workers & Pages** → **Create application**.
- [ ] **Import a repository** → connect Git (GitHub/GitLab) → select this repo.
- [ ] Set **Project name** to `refinedk9-react` (must match `wrangler.jsonc`).
- [ ] Set **Build command** to `pnpm run build` (or `npm run build`).
- [ ] Set **Deploy command** to `pnpm run deploy` (or `npm run deploy`).
- [ ] Set **Production branch** to `main` (or your default branch).
- [ ] **Save and Deploy** and wait for the first build.
- [ ] Open the `*.workers.dev` URL to confirm the site loads.
- [ ] (Optional) Add a **custom domain** under **Settings** → **Domains & routes**.

---

## References

- [Get started – Dashboard](https://developers.cloudflare.com/workers/get-started/dashboard/)
- [Workers CI/CD Builds](https://developers.cloudflare.com/workers/ci-cd/builds/)
- [Build configuration (build/deploy commands, env vars)](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Workers name requirement (troubleshooting)](https://developers.cloudflare.com/workers/ci-cd/builds/troubleshoot/#workers-name-requirement)
- [React + Vite on Workers](https://developers.cloudflare.com/workers/framework-guides/web-apps/react/)
