# Chapter Publishing Guide

## Overview

Your "Python for AI" course is now set up to publish chapters one at a time. This allows you to:

- Release content gradually
- Keep upcoming chapters hidden until ready
- Build anticipation for new content
- Make updates to future chapters before they're live

## Current Structure

```
django-ai-tutorial/
├── docs/
│   ├── index.md                    # Home page
│   ├── 01-code-editor.md          # Published chapter
│   └── unpublished/               # Hidden chapters
│       ├── 02-python-basics.md
│       ├── 03-modules.md
│       ├── 04-packages.md
│       ├── 05-llms.md
│       ├── 06-django-intro.md
│       ├── 07-chat-interface.md
│       ├── 08-final-app.md
│       └── 09-conclusion.md
├── mkdocs.yml                     # Configuration (only shows published chapters)
└── publish_chapter.py             # Helper script (requires PyYAML)
```

## How to Publish a Chapter

### Method 1: Manual (Recommended)

1. **Move the chapter file:**
   ```bash
   mv docs/unpublished/02-python-basics.md docs/
   ```

2. **Update navigation in `mkdocs.yml`:**
   Add the new chapter to the appropriate section:
   ```yaml
   nav:
     - Home: index.md
     - Getting Started:
       - 1. Your First Code Editor: 01-code-editor.md
       - 2. Python Basics - Hello AI: 02-python-basics.md  # Add this line
   ```

3. **Update the previous chapter** to link to the new one:
   Edit the end of `01-code-editor.md`:
   ```markdown
   [Continue to Python Basics →](02-python-basics.md){ .md-button .md-button--primary }
   ```

4. **Rebuild the site:**
   ```bash
   mkdocs build
   mkdocs serve  # To preview locally
   ```

### Method 2: Using the Script (Advanced)

If you install PyYAML:
```bash
pip install PyYAML
python publish_chapter.py 02-python-basics
```

## Chapter Publishing Order

Here's the recommended order for publishing chapters:

1. ✅ **Chapter 1: Your First Code Editor** (Already published)
2. **Chapter 2: Python Basics - Hello AI**
3. **Chapter 3: Importing Modules**
4. **Chapter 4: Python Packages - Make it Pretty**
5. **Chapter 5: Introduction to LLMs**
6. **Chapter 6: Django - Your Web Framework**
7. **Chapter 7: Creating a Chat Interface**
8. **Chapter 8: Your Own ChatGPT**
9. **Chapter 9: What's Next?**

## Navigation Structure

The chapters are organized into these sections:

- **Getting Started**: Chapters 1-2 (basic setup and Python fundamentals)
- **Building Blocks**: Chapters 3-4 (modules and packages)
- **AI Magic**: Chapter 5 (introduction to LLMs)
- **Web Development**: Chapters 6-7 (Django and interfaces)
- **Bringing it Together**: Chapters 8-9 (final project and conclusion)

## Tips for Publishing

1. **Update Previous Chapter**: Always add a "Next" button to the previously published chapter
2. **Update Home Page**: Consider adding a "Latest Chapter" section to the home page
3. **Test Locally**: Always run `mkdocs serve` to test before publishing
4. **Check Links**: Make sure all internal links work
5. **Update Progress**: Consider updating any progress indicators or completion stats

## Example: Publishing Chapter 2

1. Move the file:
   ```bash
   mv docs/unpublished/02-python-basics.md docs/
   ```

2. Update `mkdocs.yml`:
   ```yaml
   nav:
     - Home: index.md
     - Getting Started:
       - 1. Your First Code Editor: 01-code-editor.md
       - 2. Python Basics - Hello AI: 02-python-basics.md
   ```

3. Update `docs/01-code-editor.md` (replace the ending):
   ```markdown
   [Continue to Python Basics →](02-python-basics.md){ .md-button .md-button--primary }
   ```

4. Test:
   ```bash
   mkdocs serve
   ```

That's it! Your next chapter is now live.
