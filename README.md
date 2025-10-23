# Abyssal Website 🌊

Modern and minimalist website for Abyssal cheat.

## 📁 Files

- `index.html` - HTML structure of the site
- `style.css` - Styles and animations
- `script.js` - JavaScript animations and interactions
- `logo.png` - Cheat logo

## ⚙️ Configuration Required

### 1. Discord Link

Replace Discord links in `script.js`:

```javascript
// Line ~174
window.open('https://discord.gg/YOUR-INVITE', '_blank');
```

### 2. Payment System

Configure your payment gateway in `script.js`:

```javascript
// Line ~164
window.location.href = 'https://your-payment-link.com';
```

**Recommended options:**
- Sellix (https://sellix.io)
- Shoppy (https://shoppy.gg)
- PayPal Business
- Stripe

### 3. Hosting

To put the site online:

**Option 1: GitHub Pages (Free)**
1. Create a GitHub repo
2. Upload the files
3. Enable GitHub Pages in Settings
4. Your site will be at `username.github.io/repo-name`

**Option 2: Vercel (Free)**
1. Create an account on vercel.com
2. Import the folder
3. Automatic deployment

**Option 3: Netlify (Free)**
1. Create an account on netlify.com
2. Drag & drop the folder
3. Site online instantly

**Option 4: Hostinger/OVH (Paid but custom domain)**
1. Buy a domain (e.g., abyssal-cheat.com)
2. Upload via FTP
3. Professional site with domain name

## 🎨 Customization

### Colors

Modify colors in `style.css`:

```css
:root {
    --accent: #8b5cf6;  /* Main purple */
    --blue: #3b82f6;    /* Blue accent */
}
```

### Price

Change the price in `index.html` line ~330:

```html
<span class="price-amount">4.99</span>
```

### Features

Add/modify features in `index.html` section "Features" (line ~150+)

### Stats

Modify stats in `index.html` section "Hero Stats" (line ~85):
- Number of users
- Uptime
- Support

## 🚀 Features

✅ Modern dark minimalist design
✅ Particle animations
✅ Parallax effect
✅ Scroll animations
✅ FAQ accordion
✅ Mobile responsive
✅ Cursor glow effect
✅ Animated counter for stats
✅ Hover effects on cards
✅ Ripple effect on buttons

## 📱 Responsive

The site is fully responsive and adapts to all screen sizes:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (375px+)

## 🔧 SEO Optimizations

To improve SEO, add in `<head>` of `index.html`:

```html
<meta name="description" content="Abyssal - The most powerful Roblox cheat. Aimbot, ESP, Orbit and more. Only €4.99 lifetime.">
<meta name="keywords" content="roblox cheat, abyssal, roblox hack, da hood cheat, roblox executor">
<meta property="og:title" content="Abyssal - Premium Roblox Cheat">
<meta property="og:description" content="The most powerful cheat for Roblox. €4.99 lifetime.">
<meta property="og:image" content="logo.png">
```

## 📊 Analytics (Optional)

To track visitors, add Google Analytics before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🛡️ Security

- Use HTTPS (required for payments)
- Validate all payments server-side
- NEVER store sensitive data in frontend code
- Use a secure payment gateway (Sellix, Stripe, etc.)

## 💡 Tips

1. **Test the site on multiple browsers** (Chrome, Firefox, Safari)
2. **Optimize images** with TinyPNG for fast loading
3. **Add screenshots/videos** of the cheat in action
4. **Create a complete FAQ** to reduce support questions
5. **Update regularly** features and status

## 📞 Support

If you have any questions, contact me on Discord!

---

Made with 💜 by Abyssal Team
