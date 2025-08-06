#!/bin/bash

# Django AI Tutorial - Deployment Script
# This script helps deploy your tutorial to GitHub Pages

echo "🚀 Deploying Django AI Tutorial..."

# Check if we're in the right directory
if [ ! -f "mkdocs.yml" ]; then
    echo "❌ Error: mkdocs.yml not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pip install -r requirements.txt

# Build the documentation
echo "🔨 Building documentation..."
mkdocs build

# Deploy to GitHub Pages (if git is set up)
if git rev-parse --git-dir > /dev/null 2>&1; then
    echo "📤 Deploying to GitHub Pages..."
    mkdocs gh-deploy
    echo "✅ Deployed successfully!"
else
    echo "ℹ️  To deploy to GitHub Pages:"
    echo "   1. Initialize git: git init"
    echo "   2. Add remote: git remote add origin YOUR_REPO_URL"
    echo "   3. Run: mkdocs gh-deploy"
fi

echo "🎉 Tutorial is ready!"
echo "💡 To preview locally: mkdocs serve"
