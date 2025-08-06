// Enhanced navigation and reading progress for Python for AI

document.addEventListener('DOMContentLoaded', function() {
    // Add reading progress bar
    addProgressBar();
    
    // Add chapter navigation
    addChapterNavigation();
    
    // Track reading progress
    trackReadingProgress();
    
    // Smooth scroll for anchors
    setupSmoothScrolling();
    
    // Add estimated reading time
    addReadingTime();
});

function addProgressBar() {
    // Create progress bar container
    const progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    progressContainer.appendChild(progressBar);
    
    document.body.insertBefore(progressContainer, document.body.firstChild);
    
    // Update progress on scroll
    window.addEventListener('scroll', updateProgress);
}

function updateProgress() {
    const progressBar = document.querySelector('.progress-bar');
    if (!progressBar) return;
    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    progressBar.style.width = scrolled + '%';
}

function addChapterNavigation() {
    // Get current page info
    const currentUrl = window.location.pathname;
    const chapters = [
        { url: '/01-code-editor/', title: 'Your First Code Editor', number: 1 },
        { url: '/02-python-basics/', title: 'Python Basics - Hello AI', number: 2 },
        { url: '/03-modules/', title: 'Importing Modules', number: 3 },
        { url: '/04-packages/', title: 'Python Packages - Make it Pretty', number: 4 },
        { url: '/05-llms/', title: 'Introduction to LLMs', number: 5 },
        { url: '/06-django-intro/', title: 'Django - Your Web Framework', number: 6 },
        { url: '/07-chat-interface/', title: 'Creating a Chat Interface', number: 7 },
        { url: '/08-final-app/', title: 'Your Own ChatGPT', number: 8 },
        { url: '/09-conclusion/', title: "What's Next?", number: 9 }
    ];
    
    const currentChapterIndex = chapters.findIndex(ch => currentUrl.includes(ch.url.slice(1, -1)));
    
    if (currentChapterIndex >= 0) {
        addFooterNavigation(chapters, currentChapterIndex);
    }
}

function addFooterNavigation(chapters, currentIndex) {
    const content = document.querySelector('.md-content__inner');
    if (!content) return;
    
    const navContainer = document.createElement('div');
    navContainer.className = 'chapter-footer-nav';
    
    // Previous chapter
    const prevDiv = document.createElement('div');
    prevDiv.className = 'nav-item prev';
    
    if (currentIndex > 0) {
        const prevChapter = chapters[currentIndex - 1];
        const prevLink = document.createElement('a');
        prevLink.href = prevChapter.url;
        prevLink.className = 'nav-link';
        prevLink.innerHTML = `
            <span class="nav-direction">Previous</span>
            <span class="nav-title">${prevChapter.title}</span>
        `;
        prevDiv.appendChild(prevLink);
    }
    navContainer.appendChild(prevDiv);
    
    // Chapter info
    const chapterInfo = document.createElement('div');
    chapterInfo.className = 'chapter-info';
    chapterInfo.innerHTML = `Chapter ${chapters[currentIndex].number} of ${chapters.length}`;
    navContainer.appendChild(chapterInfo);
    
    // Next chapter
    const nextDiv = document.createElement('div');
    nextDiv.className = 'nav-item next';
    
    if (currentIndex < chapters.length - 1) {
        const nextChapter = chapters[currentIndex + 1];
        const nextLink = document.createElement('a');
        nextLink.href = nextChapter.url;
        nextLink.className = 'nav-link';
        nextLink.innerHTML = `
            <span class="nav-direction">Next</span>
            <span class="nav-title">${nextChapter.title}</span>
        `;
        nextDiv.appendChild(nextLink);
    }
    navContainer.appendChild(nextDiv);
    
    // Add to bottom of content
    content.appendChild(navContainer);
}

function trackReadingProgress() {
    // Store reading progress in localStorage
    const currentUrl = window.location.pathname;
    const readChapters = JSON.parse(localStorage.getItem('readChapters') || '[]');
    
    if (!readChapters.includes(currentUrl)) {
        readChapters.push(currentUrl);
        localStorage.setItem('readChapters', JSON.stringify(readChapters));
    }
    
    // Update navigation to show completed chapters
    updateNavigationProgress(readChapters);
}

function updateNavigationProgress(readChapters) {
    const navLinks = document.querySelectorAll('.md-nav__link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && readChapters.some(read => href.includes(read.replace('/', '')))) {
            link.style.color = 'var(--md-primary-fg-color)';
            link.style.fontWeight = 'bold';
        }
    });
}

function setupSmoothScrolling() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add estimated reading time
function addReadingTime() {
    const content = document.querySelector('.md-content__inner');
    if (!content) return;
    
    const text = content.textContent || content.innerText;
    const words = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(words / 200); // Average reading speed
    
    const timeIndicator = document.createElement('div');
    timeIndicator.innerHTML = `<small>Estimated reading time: ${readingTime} minutes</small>`;
    timeIndicator.style.cssText = 'margin-bottom: 1rem; color: var(--md-default-fg-color--light); font-size: 0.9rem;';
    
    const firstHeading = content.querySelector('h1');
    if (firstHeading) {
        firstHeading.parentNode.insertBefore(timeIndicator, firstHeading.nextSibling);
    }
}
