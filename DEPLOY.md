# 🚀 Deployment Guide: Nodes of You

Your project is packaged and ready. Follow these two simple steps to get it online for beta testers.

## Step 1: GitHub (Source Code)

1.  **Log in to GitHub** and [create a new repository](https://github.com/new).
    *   Repository name: `nodes-of-you`
    *   Public or Private: Your choice.
    *   **Do not** initialize with README/gitgnore (we already have them).

2.  **Push the code** by running these commands in your terminal:

```bash
# Navigate to the project folder
cd /Users/macbookpro/.gemini/antigravity/scratch/zk-podcast-web

# Link to your new GitHub repo (Replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/nodes-of-you.git

# Rename branch to main
git branch -M main

# Push the code
git push -u origin main
```

---

## Step 2: Vercel (Hosting)

1.  **Log in to [Vercel](https://vercel.com)**.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Continue with GitHub"**.
4.  Find and select the `nodes-of-you` repository you just pushed.
5.  Click **"Deploy"**.

**That's it!** Vercel will give you a live URL (e.g., `https://nodes-of-you.vercel.app`) to share with your beta testers.
