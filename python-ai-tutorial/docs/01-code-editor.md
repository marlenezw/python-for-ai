# Chapter 1: Your First Code Editor

Welcome to your first step in becoming an Python and AI developer! Before we can build projects, we need a place to write our code.

## What is a Code Editor?

Think of a code editor like Microsoft Word, but for code! It helps you:
- Write code with pretty colors (syntax highlighting)
- Catch mistakes before you run your code
- Organize your files

## Setting Up GitHub

### Step 1: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose a professional username (this will be your developer identity!)
4. Verify your email

!!! tip "Username Tip"
    Pick a username you'd be happy to share with future employers!

### Step 2: Create Your First Repository

1. Click the "+" button in the top right
2. Select "New repository"
3. Name it `python-for-ai`
4. Make it public
5. Click "Create repository"

## GitHub Codespaces - Your Cloud Computer

### What is a Codespace?

Imagine having a computer in the cloud that's already set up for coding. That's Codespaces!

### Creating Your Codespace

1. In your new repository, click the green "Code" button
2. Click on the "Codespaces" tab
3. Click "Create codespace on main"

!!! note "First Time?"
    It might take a minute to set up. Perfect time for a quick stretch!

### Welcome to VS Code!

Once your codespace loads, you'll see VS Code in your browser. Let's explore:

- **Left Side**: File explorer (like folders on your computer)
- **Center**: Where you write code
- **Bottom**: Terminal (where you run commands)

## Your First Python File

### Step 1: Create a New File

1. Click "New File" in the explorer
2. Name it `hello_ai.py` (the `.py` means it's a Python file)

### Step 2: Write Your First AI-Themed Code

```python
# My first AI program!
ai_name = "Assistant Pro"
greeting = "Hello, I am"

print(f"{greeting} {ai_name}!")
```

### Step 3: Run Your Code

1. Open the terminal (View → Terminal if it's not open)
2. Type: `python hello_ai.py`
3. Press Enter

You should see: `Hello, I am Assistant Pro!`

**Congratulations!** You just wrote and ran your first Python program!

## Understanding Your Code

Let's break down what you just wrote:

```python
# My first AI program!  # This is a comment - notes for humans
ai_name = "Assistant Pro"  # This is a variable storing text
greeting = "Hello, I am"  # Another variable

print(f"{greeting} {ai_name}!")  # This displays text
```

### Key Concepts:

1. **Comments** (`#`): Notes that Python ignores
2. **Variables**: Containers that store information
3. **Strings**: Text in quotes
4. **Functions**: Commands like `print()` that do something

## Try It Yourself!

Modify your code to:

1. Change the AI's name
2. Add your name as a variable
3. Make the AI greet you personally

<details>
<summary>Click for Solution</summary>

```python
# My personalized AI program!
ai_name = "Assistant Pro"
your_name = "Alex"  # Put your name here!
greeting = "Hello"

print(f"{greeting} {your_name}, I am {ai_name}!")
print(f"Ready to help you learn AI!")
```

</details>

## Checkpoint

You've learned:
- How to create a GitHub account
- How to create a repository
- How to use GitHub Codespaces
- How to create a Python file
- How to use variables and the print function

**Great job completing Chapter 1!** You've taken your first steps into the world of Python programming.

<span class="md-button md-button--primary">Next Chapter: Python Basics (Coming Soon!)</span>

**What's Next?** More exciting chapters are coming soon! Check back regularly for new content that will expand your Python and AI knowledge.
