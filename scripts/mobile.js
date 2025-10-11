document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle hamburger menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    }

    // Close menu when clicking on a link
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Event listeners
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu on window resize (desktop view)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add loading animation for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards for animation
    document.querySelectorAll('.card, .content-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Touch gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && navMenu.classList.contains('active')) {
                // Swipe left - close menu
                closeMenu();
            } else if (diff < 0 && !navMenu.classList.contains('active')) {
                // Swipe right - open menu (optional)
                // toggleMenu();
            }
        }
    }

    // Add ripple effect to buttons
    document.querySelectorAll('.cta-button, .card').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .cta-button, .card {
            position: relative;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);

    // Add mobile calendar functionality
    const mobileCalendarBtn = document.getElementById('mobile-calendar-btn');
    const calendarModal = document.getElementById('calendar-modal');
    const closeCalendar = document.getElementById('close-calendar');

    if (mobileCalendarBtn && calendarModal) {
        mobileCalendarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            calendarModal.style.display = 'flex'; // Changed to flex for better centering
            document.body.style.overflow = 'hidden';
            closeMenu(); // Close hamburger menu when opening calendar
            vibrate([50]); // Add haptic feedback
        });
    }

    if (closeCalendar && calendarModal) {
        closeCalendar.addEventListener('click', function() {
            calendarModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            vibrate([30]);
        });
    }

    // Close calendar when clicking outside
    if (calendarModal) {
        calendarModal.addEventListener('click', function(e) {
            if (e.target === calendarModal) {
                calendarModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Mobile-specific performance optimizations
    const cards = document.querySelectorAll('.card');
    let ticking = false;

    function updateCards() {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !card.classList.contains('visible')) {
                card.classList.add('visible');
            }
        });
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateCards);
            ticking = true;
        }
    }

    // Throttled scroll for better performance on mobile
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(requestTick, 10);
    });

    // Add vibration feedback for supported devices
    function vibrate(pattern = [100]) {
        if ('vibrate' in navigator) {
            navigator.vibrate(pattern);
        }
    }

    // Add vibration to button clicks
    document.querySelectorAll('.cta-button, .hamburger').forEach(button => {
        button.addEventListener('click', function() {
            vibrate([50]);
        });
    });

    // Network status handling
    function updateNetworkStatus() {
        const isOnline = navigator.onLine;
        const statusIndicator = document.querySelector('.network-status');
        
        if (!isOnline && !statusIndicator) {
            const indicator = document.createElement('div');
            indicator.className = 'network-status offline';
            indicator.textContent = '📡 Offline - Some features may be limited';
            indicator.style.cssText = `
                position: fixed;
                top: 70px;
                left: 0;
                right: 0;
                background: #f59e0b;
                color: white;
                text-align: center;
                padding: 0.5rem;
                z-index: 999;
                font-size: 0.9rem;
            `;
            document.body.appendChild(indicator);
        } else if (isOnline && statusIndicator) {
            statusIndicator.remove();
        }
    }

    window.addEventListener('online', updateNetworkStatus);
    window.addEventListener('offline', updateNetworkStatus);
    updateNetworkStatus(); // Check initial status

    // Language Switcher functionality
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', function(e) {
            const selectedLang = e.target.value;
            
            // Add visual feedback
            vibrate([30]);
            
            // Here you can add actual language switching logic
            console.log('Language switched to:', selectedLang);
            
            // Example: You could redirect to different language versions
            // or dynamically change text content
            
            // For now, just show a notification
            showLanguageNotification(selectedLang);
        });
    }

    // Language notification function
    function showLanguageNotification(lang) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: linear-gradient(45deg, #64ffda, #4fc3f7);
            color: #0f0f23;
            padding: 0.8rem 1.2rem;
            border-radius: 8px;
            font-weight: 600;
            z-index: 1001;
            animation: slideIn 0.3s ease;
        `;
        
        const langNames = {
            'en': 'English',
            'es': 'Español'
        };
        
        notification.textContent = `Language: ${langNames[lang] || lang}`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // Add animation styles for notifications
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyles);
});
