/**
 * Spec Architect Landing Page - Application Script
 * Handles smooth scrolling, navigation, and download links
 */

// Configuration
const RELEASE_REPO = 'MarceloFullStack/spec-architect-app';

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeLatestRelease();
    initializeTheme();
});

/**
 * Initialize navigation smooth scrolling and active link highlighting
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.navbar-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only prevent default for hash links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Download buttons link to releases/latest/download/<file>, which always
 * serves the newest release. This only adds the version and file sizes;
 * if the GitHub API is unreachable the buttons keep working as they are.
 */
function initializeLatestRelease() {
    fetch(`https://api.github.com/repos/${RELEASE_REPO}/releases/latest`)
        .then(res => (res.ok ? res.json() : Promise.reject(res.status)))
        .then(release => {
            const version = document.getElementById('dl-version');
            if (version && release.tag_name) {
                const date = release.published_at ? new Date(release.published_at).toLocaleDateString('pt-BR') : '';
                version.textContent = `Versão ${release.tag_name}${date ? ` · publicada em ${date}` : ''}`;
                version.hidden = false;
            }
            const sizes = {};
            (release.assets || []).forEach(a => { sizes[a.name] = a.size; });
            document.querySelectorAll('[data-asset]').forEach(link => {
                const size = sizes[link.dataset.asset];
                const meta = link.querySelector('.dl-meta');
                if (size && meta) meta.textContent = `${meta.textContent} · ${(size / 1048576).toFixed(1)} MB`;
            });
        })
        .catch(() => {});
}

/**
 * Initialize theme detection and switching
 */
function initializeTheme() {
    // Detect system theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (!localStorage.getItem('spec-architect-theme')) {
        localStorage.setItem('spec-architect-theme', prefersDark ? 'dark' : 'light');
    }

    // Apply saved theme
    const theme = localStorage.getItem('spec-architect-theme');
    document.documentElement.style.colorScheme = theme;
}

/**
 * Smooth scroll to top
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Track analytics events (placeholder for future implementation)
 */
function trackEvent(eventName, eventData = {}) {
    // This is a placeholder for analytics integration
    // Future implementation could use Plausible, Fathom, or similar privacy-respecting analytics
    console.debug('Event tracked:', eventName, eventData);
}

// Track when users click download buttons
document.addEventListener('click', function(e) {
    if (e.target.closest('.download-link')) {
        const link = e.target.closest('.download-link');
        trackEvent('download_click', { asset: link.dataset.asset || link.textContent.trim() });
    }
});
