# Git Repository Setup — Desert Diamond Tech

✅ **Git repository initialized successfully!**

## Current Status

- ✅ Git repository created
- ✅ Initial commit made (65 files, 10,574+ lines)
- ✅ Default branch: `main`
- ✅ All files tracked by git
- ✅ `.gitignore` configured (excludes node_modules, .env, build artifacts)

---

## To Push to a Remote Repository

### Option 1: GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `desertdiamondinc` (or your preferred name)
   - Make it **Private** (recommended for business site)
   - **DO NOT** initialize with README, .gitignore, or license
   - Click "Create repository"

2. **Connect and push:**
   ```bash
   cd C:\Users\skond\WorkSpace\Project\desertdiamondinc
   
   git remote add origin https://github.com/YOUR_USERNAME/desertdiamondinc.git
   git push -u origin main
   ```

3. **If using SSH instead:**
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/desertdiamondinc.git
   git push -u origin main
   ```

### Option 2: GitLab

1. **Create a new project on GitLab:**
   - Go to https://gitlab.com/projects/new
   - Project name: `desertdiamondinc`
   - Visibility: **Private**
   - Click "Create project"

2. **Connect and push:**
   ```bash
   cd C:\Users\skond\WorkSpace\Project\desertdiamondinc
   
   git remote add origin https://gitlab.com/YOUR_USERNAME/desertdiamondinc.git
   git push -u origin main
   ```

### Option 3: Bitbucket

1. **Create a new repository on Bitbucket:**
   - Go to https://bitbucket.org/repo/create
   - Repository name: `desertdiamondinc`
   - Access level: **Private**
   - Click "Create repository"

2. **Connect and push:**
   ```bash
   cd C:\Users\skond\WorkSpace\Project\desertdiamondinc
   
   git remote add origin https://bitbucket.org/YOUR_USERNAME/desertdiamondinc.git
   git push -u origin main
   ```

### Option 4: AWS CodeCommit

1. **Create repository:**
   ```bash
   aws codecommit create-repository --repository-name desertdiamondinc
   ```

2. **Connect and push:**
   ```bash
   git remote add origin https://git-codecommit.REGION.amazonaws.com/v1/repos/desertdiamondinc
   git push -u origin main
   ```

---

## Common Git Commands

### Check status
```bash
git status
```

### View commit history
```bash
git log --oneline
git log --graph --oneline --all
```

### Create a new branch
```bash
git checkout -b feature/new-feature
```

### Commit changes
```bash
git add .
git commit -m "Description of changes"
```

### Push changes
```bash
git push origin main
```

### Pull latest changes
```bash
git pull origin main
```

---

## What's Already Tracked

All project files are committed, including:
- Source code (apps/main-site, apps/academy-site)
- Shared package (packages/shared)
- Documentation (README, DEPLOYMENT, etc.)
- Configuration files
- Logo and certification images

### What's Ignored (.gitignore)

- `node_modules/` — Dependencies (not committed)
- `.env*` files — Environment variables (keep secrets local)
- Build outputs (`.next/`, `dist/`, etc.)
- IDE files
- OS files (.DS_Store, Thumbs.db)

---

## Setting Up CI/CD (After Pushing)

Once your code is on GitHub/GitLab:

1. **GitHub Actions** — workflows in `.github/workflows/`
2. **GitLab CI** — `.gitlab-ci.yml`
3. **Bitbucket Pipelines** — `bitbucket-pipelines.yml`

See `DEPLOYMENT.md` for example CI/CD configurations.

---

## Verification

To verify everything is set up correctly:

```bash
# Check git status
git status

# View remote
git remote -v

# View branches
git branch -a

# View last commit
git log -1
```

---

## Next Steps

1. ✅ Repository initialized
2. ✅ Initial commit created
3. ⏳ **Create remote repository** (GitHub/GitLab/Bitbucket/CodeCommit)
4. ⏳ **Add remote:** `git remote add origin <URL>`
5. ⏳ **Push code:** `git push -u origin main`
6. ⏳ Set up CI/CD (optional)
7. ⏳ Deploy to AWS (see DEPLOYMENT.md)

---

**Questions?** Check README.md or reach out at kondey@desertdiamondinc.com
