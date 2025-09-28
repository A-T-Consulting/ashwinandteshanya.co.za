# Ashwin & Teshanya Wedding Website

A beautiful, modern, and elegant wedding e-invitation website built with HTML, CSS, and JavaScript.

## 🎨 Design Features

- **Modern & Elegant Design**: Clean, sophisticated layout with muted pastel colors
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Subtle animations and transitions for enhanced user experience
- **Muted Color Palette**: Complements ivory outfits and multicolored pastel reception decor
- **Easy Customization**: Simple to update with your specific details

## 📁 File Structure

```
wedding-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start

1. **Download/Clone** the files to your computer
2. **Open** `index.html` in your web browser to preview
3. **Customize** the content with your specific details
4. **Deploy** to your preferred hosting service

## ✏️ Customization Guide

### 1. Update Wedding Details

Edit the following sections in `index.html`:

#### Hero Section (Lines 45-60)
```html
<h1 class="hero-title">
    <span class="name">Ashwin</span>
    <span class="and">&</span>
    <span class="name">Teshanya</span>
</h1>
<p class="hero-date">January 17, 2026</p>
<p class="hero-time">2:00 PM</p>
```

#### Event Details (Lines 80-120)
```html
<p class="detail-time">2:00 PM</p>
<p class="detail-venue">Lythwood Lodge</p>
<p class="detail-dress">Formal Attire</p>
```

#### Venue Information (Lines 140-160)
```html
<div class="venue-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Add your venue address here</span>
</div>
```

### 2. Add Your Photos

Replace the placeholder background in the hero section:

1. Add your image to the project folder
2. Update the CSS in `styles.css` (around line 150):
```css
.hero {
    background: linear-gradient(135deg, var(--pastel-pink) 0%, var(--pastel-lavender) 50%, var(--pastel-mint) 100%),
                url('your-image.jpg') center/cover;
}
```

### 3. Update Contact Information

Edit the contact section in `index.html` (around line 220):
```html
<div class="contact-item">
    <i class="fas fa-phone"></i>
    <div>
        <h4>Phone</h4>
        <p>+27 XX XXX XXXX</p>
    </div>
</div>
```

### 4. Toggle Registry Section

In `script.js`, change line 45:
```javascript
const showRegistry = true; // Set to true to show registry section
```

When enabled, update the registry links in `index.html` (around line 200):
```html
<a href="your-registry-link" class="registry-link">
    <i class="fas fa-gift"></i>
    <span>Your Registry Name</span>
</a>
```

### 5. Add Interactive Map

Replace the map placeholder in `index.html` (around line 170):
```html
<div class="venue-map">
    <iframe 
        src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
        width="100%" 
        height="300" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy">
    </iframe>
</div>
```

## 🎨 Color Customization

The website uses CSS custom properties for easy color changes. Edit these in `styles.css`:

```css
:root {
    --primary-color: #d4c4b7;    /* Muted beige */
    --secondary-color: #e8d5c4;  /* Soft cream */
    --accent-color: #b8a9a9;     /* Dusty rose */
    --pastel-pink: #f5e6e8;      /* Pastel pink */
    --pastel-lavender: #e8e6f0;  /* Pastel lavender */
    --pastel-mint: #e6f0e8;      /* Pastel mint */
    --pastel-peach: #f0e8e6;     /* Pastel peach */
}
```

## 📱 RSVP Form

The RSVP form is currently set up to show an alert message. To collect actual RSVPs, you'll need to:

1. **Set up a backend service** (Formspree, Netlify Forms, or your own server)
2. **Update the form action** in `index.html`
3. **Modify the JavaScript** in `script.js` to handle the response

Example with Formspree:
```html
<form class="rsvp-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly
4. Get a custom domain if desired

### Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Deploy automatically

### Traditional Web Hosting
Upload the files to your web hosting provider via FTP or file manager.

## 🔧 Technical Features

- **Mobile-First Design**: Responsive across all devices
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Loading**: Optimized CSS and minimal JavaScript
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Cross-Browser Compatible**: Works on all modern browsers

## 📞 Support

If you need help customizing your wedding website:

1. **Check the comments** in the code files
2. **Review this README** for common customizations
3. **Test on different devices** to ensure responsiveness
4. **Validate your HTML** using online validators

## 🎉 Congratulations!

Your wedding website is ready to share with your guests! The elegant design with muted pastel colors will perfectly complement your ivory outfits and multicolored pastel reception decor.

---

*Built with ❤️ for Ashwin & Teshanya's special day* 