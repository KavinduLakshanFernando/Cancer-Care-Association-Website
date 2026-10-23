# Cancer Care Association Website — CapRover CI/CD Deployment Guide

This guide details how this repository is automatically built and deployed to your **CapRover VPS** using **GitHub Actions** and **GitHub Container Registry (GHCR)**.

---

## 1. Required GitHub Secrets

In your GitHub repository:
`https://github.com/KavinduLakshanFernando/Cancer-Care-Association-Website`

Go to **Settings** > **Secrets and variables** > **Actions** and click **New repository secret**.

Add the following 3 secrets:

| Secret Name | Example Value | Description |
|---|---|---|
| `CAPROVER_SERVER` | `https://captain.yourdomain.com` | The full URL of your CapRover dashboard (with `https://`) |
| `CAPROVER_APP` | `cancer-care-app` | The exact app name created in your CapRover dashboard |
| `CAPROVER_APP_TOKEN` | `c34f...` | The app-specific deployment token generated from CapRover |

---

## 2. Setting Up CapRover

1. Open your **CapRover Dashboard** > **Apps**.
2. Under **Create A New App**:
   - Enter your app name (e.g., `cancer-care-app`).
   - Leave *Has Persistent Data* **unchecked** (Next.js is stateless).
   - Click **Create New App**.
3. In your app settings:
   - Under **HTTP Settings**, ensure **Container HTTP Port** is set to `3000`.
4. Under the **Deployment** tab:
   - Scroll to **Method 3: Deploy from Github/Bitbucket/Gitlab**.
   - Click **Enable App Token** (or copy the existing token).
   - Paste this token into your GitHub Secret `CAPROVER_APP_TOKEN`.

---

## 3. GHCR Pull Credentials in CapRover (If Package is Private)

If your GHCR package is private, add your GitHub token to CapRover:
1. In CapRover, go to **Cluster** > **Docker Registry** > **Add Third Party Registry**.
2. **Registry Domain**: `ghcr.io`
3. **Username**: `KavinduLakshanFernando`
4. **Password**: A GitHub Personal Access Token (classic) with `read:packages` permission.

---

## 4. Triggering Deployment

Every push to the `main` branch automatically triggers the deployment workflow (`.github/workflows/deploy.yml`):
1. Builds the Next.js standalone container.
2. Pushes the image to `ghcr.io/kavindulakshanfernando/cancer-care-association-website`.
3. Notifies CapRover to pull and launch the new version.
