#!/bin/bash


echo "🚀 Starting Skill Share deployment to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the skill-share project directory"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build and export the project
echo "🔨 Building project for GitHub Pages..."
npm run export

# Create docs directory if it doesn't exist
if [ ! -d "docs" ]; then
    echo "📁 Creating docs directory..."
    mkdir docs
fi

# Copy build files to docs
echo "📋 Copying build files to docs folder..."
cp -r .next/out/* docs/

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git remote add origin https://github.com/Maxhawkinz/skill-share.git
fi

# Add all files and commit
echo "💾 Committing changes..."
git add .
git commit -m "Deploy: Skill Share Platform with Community Features and Gamification"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo "🌐 Your site will be available at: https://maxhawkinz.github.io/skill-share"
echo "⏰ Please wait 5-10 minutes for changes to appear."
echo ""
echo "📚 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings > Pages"
echo "3. Select 'Deploy from a branch'"
echo "4. Choose 'main' branch and '/docs' folder"
echo "5. Click Save"
echo ""
echo "🎉 Happy coding!"
