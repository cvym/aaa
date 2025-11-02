// Snowflake Animation
const canvas = document.getElementById('snowflakes');
const ctx = canvas.getContext('2d');

let snowflakes = [];
const snowflakeCount = 120;

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Snowflake class
class Snowflake {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 1.5 + 0.3;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.wobble = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.015 + 0.005;
        this.glowIntensity = Math.random() * 0.5 + 0.5;
    }

    update() {
        this.y += this.speed;
        this.x += Math.sin(this.wobble) * 0.3;
        this.wobble += this.wobbleSpeed;

        // Reset snowflake when it goes off screen
        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
        
        if (this.x > canvas.width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = canvas.width;
        }
    }

    draw() {
        // Glow effect
        ctx.shadowBlur = this.size * 3;
        ctx.shadowColor = `rgba(255, 255, 255, ${this.opacity * this.glowIntensity})`;
        
        // Main circle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
        
        // Draw snowflake cross pattern
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.size);
        ctx.lineTo(this.x, this.y + this.size);
        ctx.moveTo(this.x - this.size, this.y);
        ctx.lineTo(this.x + this.size, this.y);
        ctx.moveTo(this.x - this.size * 0.6, this.y - this.size * 0.6);
        ctx.lineTo(this.x + this.size * 0.6, this.y + this.size * 0.6);
        ctx.moveTo(this.x + this.size * 0.6, this.y - this.size * 0.6);
        ctx.lineTo(this.x - this.size * 0.6, this.y + this.size * 0.6);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Reset shadow
        ctx.shadowBlur = 0;
    }
}

// Initialize snowflakes
function initSnowflakes() {
    snowflakes = [];
    for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push(new Snowflake());
    }
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    snowflakes.forEach(snowflake => {
        snowflake.update();
        snowflake.draw();
    });
    
    requestAnimationFrame(animate);
}

// Start animation
initSnowflakes();
animate();

// Bitcoin copy functionality
const bitcoinLogo = document.getElementById('bitcoinLogo');
const bitcoinLogoWrapper = bitcoinLogo ? bitcoinLogo.closest('.bitcoin-logo-wrapper') : null;
const btcAddress = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh';

if (bitcoinLogo || bitcoinLogoWrapper) {
    const clickTarget = bitcoinLogoWrapper || bitcoinLogo;
    clickTarget.addEventListener('click', async function() {
        try {
            // Copy to clipboard
            await navigator.clipboard.writeText(btcAddress);
            
            // Show toast notification
            showToast('Bitcoin address copied!');
            
            // Add click animation
            if (bitcoinLogo) {
                bitcoinLogo.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    bitcoinLogo.style.transform = '';
                }, 150);
            }
            
        } catch (err) {
            console.error('Failed to copy:', err);
            showToast('Failed to copy address', 'error');
        }
    });
}

// Discord text copy functionality
const discordText = document.getElementById('discordText');
if (discordText) {
    discordText.addEventListener('click', async function() {
        try {
            const discordUsername = 'kyvy';
            await navigator.clipboard.writeText(discordUsername);
            
            // Show toast notification
            showToast('Discord username copied!');
            
            // Add click animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
        } catch (err) {
            console.error('Failed to copy:', err);
            showToast('Failed to copy', 'error');
        }
    });
}

// Toast notification function
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Hide and remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Add click effect to link cards
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.classList.add('ripple-effect');
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        width: 0;
        height: 0;
        transform: translate(-50%, -50%);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 3D Parallax Effect - Follow Mouse
let container = null;
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

// Cursor hover state management
let isHoveringClickable = false;
let hoverCheckTimeout = null;

// Smooth cursor position tracking
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
let targetCursorX = cursorX;
let targetCursorY = cursorY;

function updateCursorPosition(x, y) {
    targetCursorX = x;
    targetCursorY = y;
}

function animateCursor() {
    // Smooth interpolation with consistent speed
    const diffX = targetCursorX - cursorX;
    const diffY = targetCursorY - cursorY;
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);
    
    // Use adaptive speed based on distance for smooth following
    const speed = Math.min(0.25, distance * 0.001 + 0.05);
    
    cursorX += diffX * speed;
    cursorY += diffY * speed;
    
    // Ensure we're very close to target to prevent jitter
    if (Math.abs(diffX) < 0.1 && Math.abs(diffY) < 0.1) {
        cursorX = targetCursorX;
        cursorY = targetCursorY;
    }
    
    document.body.style.setProperty('--cursor-x', cursorX + 'px');
    document.body.style.setProperty('--cursor-y', cursorY + 'px');
    
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOuter = document.querySelector('.cursor-outer');
    
    if (cursorDot) {
        cursorDot.style.left = cursorX + 'px';
        cursorDot.style.top = cursorY + 'px';
    }
    
    if (cursorOuter) {
        cursorOuter.style.left = cursorX + 'px';
        cursorOuter.style.top = cursorY + 'px';
    }
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Update cursor size based on hover state
function updateCursorSize(hovering) {
    if (isHoveringClickable === hovering) return; // Skip if already in correct state
    
    isHoveringClickable = hovering;
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOuter = document.querySelector('.cursor-outer');
    
    if (hovering) {
        if (cursorOuter) {
            cursorOuter.style.width = '36px';
            cursorOuter.style.height = '36px';
            cursorOuter.style.borderColor = 'rgba(255, 255, 255, 0.6)';
        }
        if (cursorDot) {
            cursorDot.style.width = '10px';
            cursorDot.style.height = '10px';
        }
    } else {
        if (cursorOuter) {
            cursorOuter.style.width = '24px';
            cursorOuter.style.height = '24px';
            cursorOuter.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        }
        if (cursorDot) {
            cursorDot.style.width = '8px';
            cursorDot.style.height = '8px';
        }
    }
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Calculate offset from center (max 30px movement)
    targetX = (mouseX - centerX) / centerX * 30;
    targetY = (mouseY - centerY) / centerY * 30;
    
    // Update cursor position (smooth)
    updateCursorPosition(e.clientX, e.clientY);
    
    // Debounced hover check to prevent flickering
    if (hoverCheckTimeout) {
        clearTimeout(hoverCheckTimeout);
    }
    
    hoverCheckTimeout = setTimeout(() => {
        const elementAtPoint = document.elementFromPoint(e.clientX, e.clientY);
        if (!elementAtPoint) {
            updateCursorSize(false);
            return;
        }
        
        const isOverBitcoin = elementAtPoint.closest('.bitcoin-logo-wrapper') !== null || 
                              elementAtPoint.closest('.bitcoin-logo') !== null;
        const isOverDiscord = elementAtPoint.closest('.discord-text') !== null ||
                             elementAtPoint.closest('.discord-wrapper') !== null;
        
        updateCursorSize(isOverBitcoin || isOverDiscord);
    }, 10);
});

// Use mouseenter/mouseleave for more reliable hover detection
document.addEventListener('mouseenter', (e) => {
    if (e.target.closest('.bitcoin-logo-wrapper') || 
        e.target.closest('.bitcoin-logo') ||
        e.target.closest('.discord-text') ||
        e.target.closest('.discord-wrapper')) {
        updateCursorSize(true);
    }
}, true);

document.addEventListener('mouseleave', (e) => {
    if (e.target.closest('.bitcoin-logo-wrapper') || 
        e.target.closest('.bitcoin-logo') ||
        e.target.closest('.discord-text') ||
        e.target.closest('.discord-wrapper')) {
        updateCursorSize(false);
    }
}, true);

function animateParallax() {
    if (!container) return;
    
    // Smooth interpolation for movement
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;
    
    // Calculate rotation based on position
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const rotX = ((mouseY - centerY) / centerY) * 3;
    const rotY = ((mouseX - centerX) / centerX) * 3;
    
    // Apply transform with translation and rotation
    container.style.transform = `
        perspective(1000px) 
        translateX(${currentX}px) 
        translateY(${currentY}px) 
        rotateX(${-rotX}deg) 
        rotateY(${rotY}deg) 
        translateZ(0)
    `;
    
    requestAnimationFrame(animateParallax);
}

// Wait for DOM to be ready and initialize
function initParallax() {
    container = document.querySelector('.container');
    if (container) {
        animateParallax();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallax);
} else {
    initParallax();
}

console.log('❄️ kiyun page loaded');
