#!/usr/bin/env python3
"""
Chapter Publishing Script for Python for AI

This script helps you publish chapters one at a time by:
1. Moving a chapter from unpublished/ to docs/
2. Updating the navigation in mkdocs.yml
3. Rebuilding the site

Usage:
    python publish_chapter.py 02-python-basics
    python publish_chapter.py 03-modules
    etc.
"""

import os
import shutil
import sys
import yaml

# Chapter information
CHAPTERS = {
    "02-python-basics": {
        "title": "2. Python Basics - Hello AI",
        "section": "Getting Started"
    },
    "03-modules": {
        "title": "3. Importing Modules", 
        "section": "Building Blocks"
    },
    "04-packages": {
        "title": "4. Python Packages - Make it Pretty",
        "section": "Building Blocks"
    },
    "05-llms": {
        "title": "5. Introduction to LLMs",
        "section": "AI Magic"
    },
    "06-django-intro": {
        "title": "6. Django - Your Web Framework",
        "section": "Web Development"
    },
    "07-chat-interface": {
        "title": "7. Creating a Chat Interface",
        "section": "Web Development"
    },
    "08-final-app": {
        "title": "8. Your Own ChatGPT",
        "section": "Bringing it Together"
    },
    "09-conclusion": {
        "title": "9. What's Next?",
        "section": "Bringing it Together"
    }
}

def publish_chapter(chapter_name):
    """Publish a specific chapter"""
    
    if chapter_name not in CHAPTERS:
        print(f"❌ Chapter '{chapter_name}' not found!")
        print(f"Available chapters: {', '.join(CHAPTERS.keys())}")
        return False
    
    # Paths
    unpublished_path = f"docs/unpublished/{chapter_name}.md"
    published_path = f"docs/{chapter_name}.md"
    
    # Check if chapter exists in unpublished
    if not os.path.exists(unpublished_path):
        print(f"❌ Chapter file '{unpublished_path}' not found!")
        return False
    
    # Move the chapter file
    try:
        shutil.move(unpublished_path, published_path)
        print(f"✅ Moved {chapter_name}.md to docs/")
    except Exception as e:
        print(f"❌ Error moving file: {e}")
        return False
    
    # Update mkdocs.yml navigation
    try:
        update_navigation(chapter_name)
        print(f"✅ Updated navigation in mkdocs.yml")
    except Exception as e:
        print(f"❌ Error updating navigation: {e}")
        return False
    
    print(f"🎉 Chapter '{CHAPTERS[chapter_name]['title']}' has been published!")
    print("🔄 Run 'mkdocs serve' to see the changes")
    
    return True

def update_navigation(chapter_name):
    """Update the navigation in mkdocs.yml"""
    
    # Read current mkdocs.yml
    with open('mkdocs.yml', 'r') as f:
        config = yaml.safe_load(f)
    
    chapter_info = CHAPTERS[chapter_name]
    section_name = chapter_info['section']
    chapter_title = chapter_info['title']
    
    # Find or create the section
    nav = config['nav']
    section_found = False
    
    for item in nav:
        if isinstance(item, dict) and section_name in item:
            # Section exists, add chapter to it
            if isinstance(item[section_name], list):
                item[section_name].append({chapter_title: f"{chapter_name}.md"})
            else:
                # Convert single item to list
                current_item = item[section_name]
                item[section_name] = [current_item, {chapter_title: f"{chapter_name}.md"}]
            section_found = True
            break
    
    if not section_found:
        # Create new section
        nav.append({section_name: [{chapter_title: f"{chapter_name}.md"}]})
    
    # Write back to mkdocs.yml
    with open('mkdocs.yml', 'w') as f:
        yaml.dump(config, f, default_flow_style=False, sort_keys=False)

def list_unpublished():
    """List all unpublished chapters"""
    unpublished_dir = "docs/unpublished"
    if not os.path.exists(unpublished_dir):
        print("❌ No unpublished directory found!")
        return
    
    files = [f for f in os.listdir(unpublished_dir) if f.endswith('.md')]
    
    if not files:
        print("🎉 No unpublished chapters remaining!")
        return
    
    print("📚 Unpublished chapters:")
    for file in sorted(files):
        chapter_name = file[:-3]  # Remove .md extension
        if chapter_name in CHAPTERS:
            print(f"  • {chapter_name} - {CHAPTERS[chapter_name]['title']}")
        else:
            print(f"  • {chapter_name}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("📖 Python for AI - Chapter Publisher")
        print()
        print("Usage:")
        print("  python publish_chapter.py <chapter-name>")
        print("  python publish_chapter.py list")
        print()
        print("Examples:")
        print("  python publish_chapter.py 02-python-basics")
        print("  python publish_chapter.py list")
        sys.exit(1)
    
    command = sys.argv[1]
    
    if command == "list":
        list_unpublished()
    else:
        publish_chapter(command)
