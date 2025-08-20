# 🚀 GitHub Pages Deployment Guide

> **By [Maxhawkinz](https://github.com/Maxhawkinz)** | Complete guide to deploy Skill Share to GitHub Pages

## 📋 **Prerequisites**

- GitHub account
- Git installed on your computer
- Node.js 18+ installed
- Basic knowledge of Git commands

---

## 🔧 **Step 1: Initialize Git Repository**

```bash
# Navigate to your project directory
cd skill-share

# Initialize Git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Skill Share Platform with Community Features and Gamification"

# Add your GitHub repository as remote origin
git remote add origin https://github.com/Maxhawkinz/skill-share.git

# Push to GitHub
git push -u origin main
```

---

## 🌐 **Step 2: Create GitHub Repository**

1. **Go to [GitHub](https://github.com)**
2. **Click "New repository"**
3. **Repository name**: `skill-share`
4. **Description**: `NMIET College-Only Student Platform for Skill Sharing and Second-Hand Marketplace with Community Features and Gamification`
5. **Visibility**: Public (recommended for portfolio)
6. **Initialize with**: Don't add any files (we'll push our existing code)
7. **Click "Create repository"**

---

## 🚀 **Step 3: Build and Deploy**

### **Option A: Automatic Deployment (Recommended)**

```bash
# Install dependencies
npm install

# Build and export for GitHub Pages
npm run export

# Create docs folder and copy build files
mkdir docs
cp -r .next/out/* docs/

# Add docs folder to Git
git add docs/
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push origin main
```

### **Option B: Using Deploy Script**

```bash
# Run the deploy script
npm run deploy

# Add docs folder to Git
git add docs/
git commit -m "Deploy to GitHub Pages"

# Push to GitHub
git push origin main
```

---

## ⚙️ **Step 4: Enable GitHub Pages**

1. **Go to your repository on GitHub**
2. **Click "Settings" tab**
3. **Scroll down to "Pages" section**
4. **Source**: Select "Deploy from a branch"
5. **Branch**: Select "main"
6. **Folder**: Select "/docs"
7. **Click "Save"**

---

## 🔄 **Step 5: Update Deployment (Future Updates)**

Whenever you make changes to your code:

```bash
# Make your code changes
# ... edit files ...

# Build and export
npm run export

# Copy to docs folder
cp -r .next/out/* docs/

# Commit and push
git add .
git commit -m "Update: [describe your changes]"
git push origin main

# The GitHub Pages will automatically update
```

---

## 🌟 **Step 6: Custom Domain (Optional)**

If you want to use a custom domain:

1. **Go to repository Settings > Pages**
2. **Custom domain**: Enter your domain (e.g., `skillshare.nmiet.edu`)
3. **Save**
4. **Add CNAME record** in your domain provider pointing to `Maxhawkinz.github.io`

---

## 🐛 **Troubleshooting**

### **Build Errors**

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run export
```

### **GitHub Pages Not Updating**

```bash
# Force push (use with caution)
git push origin main --force

# Check GitHub Actions for build status
# Wait 5-10 minutes for changes to appear
```

### **404 Errors**

- Ensure `basePath` is set correctly in `next.config.js`
- Check that all internal links use relative paths
- Verify the `docs` folder contains all build files

---

## 📱 **Testing Your Deployment**

1. **Wait 5-10 minutes** after pushing changes
2. **Visit**: `https://maxhawkinz.github.io/skill-share`
3. **Test all pages**:
   - Homepage
   - Skills
   - Marketplace
   - Community ✨ **NEW!**
   - Badges ✨ **NEW!**

---

## 🔗 **Useful Links**

- **Your Repository**: https://github.com/Maxhawkinz/skill-share
- **Live Demo**: https://maxhawkinz.github.io/skill-share
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Next.js Static Export**: https://nextjs.org/docs/advanced-features/static-html-export

---

## 🎯 **Next Steps**

After successful deployment:

1. **Share your live demo** with friends and colleagues
2. **Add to your portfolio** and resume
3. **Customize the platform** for your specific needs
4. **Integrate Firebase** for real authentication and database
5. **Add more features** and improve the UI/UX

---

## 🆘 **Need Help?**

- **GitHub Issues**: Create an issue in your repository
- **GitHub Discussions**: Use the Discussions tab for questions
- **Documentation**: Check the README.md file
- **Community**: Ask in relevant GitHub communities

---

**Happy Deploying! 🚀**

**Made with ❤️ by [Maxhawkinz](https://github.com/Maxhawkinz)**
