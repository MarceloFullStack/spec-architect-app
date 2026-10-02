/**
 * Spec Architect Landing Page - Application Script
 * Handles smooth scrolling, navigation, and download links
 */

// Configuration
const GITHUB_RELEASE_BASE = 'https://github.com/MarceloFullStack/spec-architect-app/releases/download';

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDownloadLinks();
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
 * Initialize download links with version detection and platform-specific handling
 */
function initializeDownloadLinks() {
    const downloadLinks = document.querySelectorAll('.download-link');

    downloadLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = getPlatformFromLink(this);
            const asset = getAssetForPlatform(platform);

            if (asset) {
                window.location.href = asset.url;
            } else {
                alert('Download indisponível no momento. Verifique em GitHub: github.com/marcelo-gm/spec-architect/releases');
            }
        });
    });
}

/**
 * Detect the platform from the download link text
 */
function getPlatformFromLink(element) {
    const text = element.textContent.toLowerCase();

    if (text.includes('.deb')) return 'linux-deb';
    if (text.includes('appimage')) return 'linux-appimage';
    if (text.includes('.msi')) return 'windows-msi';
    if (text.includes('.exe')) return 'windows-exe';

    return null;
}

/**
 * Get the download URL for a specific platform
 * This would normally come from an API, but we provide a fallback
 */
function getAssetForPlatform(platform) {
    const releases = {
        'linux-deb': {
            url: `${GITHUB_RELEASE_BASE}/v0.1.0/spec-architect_0.1.0_amd64.deb`,
            name: 'spec-architect_0.1.0_amd64.deb'
        },
        'linux-appimage': {
            url: `${GITHUB_RELEASE_BASE}/v0.1.0/spec-architect_0.1.0_x64.AppImage`,
            name: 'spec-architect_0.1.0_x64.AppImage'
        },
        'windows-msi': {
            url: `${GITHUB_RELEASE_BASE}/v0.1.0/spec-architect_0.1.0_x64_en-US.msi`,
            name: 'spec-architect_0.1.0_x64_en-US.msi'
        },
        'windows-exe': {
            url: `${GITHUB_RELEASE_BASE}/v0.1.0/spec-architect_0.1.0_x64.exe`,
            name: 'spec-architect_0.1.0_x64.exe'
        }
    };

    return releases[platform] || null;
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
        const platform = getPlatformFromLink(e.target);
        trackEvent('download_click', { platform });
    }
});
