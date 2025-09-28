# Interactive Map Setup Guide

## 🗺️ **Option 1: Google Maps Embed (Recommended)**

### **Why Google Maps?**
- ✅ **Free** - No cost or API keys needed
- ✅ **Reliable** - Works on all devices and browsers
- ✅ **User-friendly** - Guests can get directions easily
- ✅ **Mobile-optimized** - Perfect for smartphones

### **Step-by-Step Setup:**

#### **1. Find Your Venue**
1. Go to [maps.google.com](https://maps.google.com)
2. Search for **"Lythwood Lodge"** (or your venue's full address)
3. Make sure you select the correct location

#### **2. Get Embed Code**
1. **Click on your venue** to open the info panel
2. **Click "Share"** button (usually in the bottom left)
3. **Select "Embed a map"** tab
4. **Choose size**: 
   - Small (400px) - For small screens
   - **Medium (600px)** - **Recommended for wedding sites**
   - Large (800px) - For larger displays
5. **Copy the iframe code** that appears

#### **3. Add to Your Website**
1. Open `wedding website/index.html`
2. Find the venue map section (around line 131)
3. **Replace the placeholder** with your code:

```html
<!-- Remove the map-placeholder div and replace with: -->
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
    width="100%" 
    height="300" 
    style="border:0; border-radius: 15px;" 
    allowfullscreen="" 
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

### **Example Result:**
Your embed code will look something like this:
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.96!2d-74.004!3d40.748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259!2sLythwood%20Lodge!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
    width="100%" 
    height="300" 
    style="border:0; border-radius: 15px;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

---

## 🌟 **Option 2: Custom Styled Map**

If you want a more branded look, you can customize the map styling:

### **Using Google Maps API (Advanced)**
1. Get a [Google Maps API key](https://developers.google.com/maps/gmp-get-started)
2. Use custom styling to match your wedding colors
3. Add custom markers with your venue info

### **Benefits:**
- Custom colors to match your wedding theme
- Custom markers and info windows
- More control over zoom and center point

---

## 🎯 **Option 3: Alternative Map Services**

### **Apple Maps (for iOS-focused guests)**
- Great for iPhone users
- Similar embed process
- Less universal than Google Maps

### **OpenStreetMap (Privacy-focused)**
- Open source alternative
- Good for privacy-conscious couples
- Requires more technical setup

---

## 🛠️ **Troubleshooting**

### **Map Not Showing?**
1. **Check the URL** - Make sure you copied the complete embed code
2. **Verify venue location** - Ensure you selected the right place
3. **Test on different browsers** - Some browsers block iframes

### **Map Too Small/Large?**
- Adjust the `height="300"` value (try 250, 350, 400)
- For mobile, the width="100%" will automatically adjust

### **Want Different View?**
- Go back to Google Maps
- Zoom to your preferred level
- Get new embed code with that zoom level

---

## 📱 **Mobile Optimization**

Your map is already mobile-optimized with:
- `width="100%"` - Responsive width
- `loading="lazy"` - Fast loading
- `border-radius: 15px` - Matches your site design

---

## 🎨 **Styling Tips**

The map automatically inherits your website's styling:
- **Rounded corners** match your card design
- **Shadow effects** from the `.venue-map` class
- **Responsive sizing** for all devices

---

## ⚡ **Quick Start Checklist**

- [ ] Go to Google Maps
- [ ] Search for "Lythwood Lodge"
- [ ] Click "Share" → "Embed a map"
- [ ] Choose "Medium" size
- [ ] Copy the iframe code
- [ ] Replace placeholder in `index.html`
- [ ] Test on your browser
- [ ] Check on mobile device

---

## 🚨 **Important Notes**

1. **Privacy**: Google Maps embed doesn't require personal API keys
2. **Performance**: Uses lazy loading for fast page speeds
3. **Accessibility**: Screen readers can access the map information
4. **Backup**: Consider adding venue address text below the map

---

## 💡 **Pro Tips**

### **Add Venue Address Below Map**
```html
<div style="text-align: center; margin-top: 1rem; color: var(--text-light);">
    <p><strong>Lythwood Lodge</strong></p>
    <p>123 Wedding Lane, Johannesburg, South Africa</p>
    <p>+27 11 XXX XXXX</p>
</div>
```

### **Add Directions Button**
```html
<div style="text-align: center; margin-top: 1rem;">
    <a href="https://maps.google.com/maps?daddr=Lythwood+Lodge" 
       class="btn-primary" 
       target="_blank">
        Get Directions
    </a>
</div>
```

---

## 🎉 **You're All Set!**

Once you add your Google Maps embed code, your guests will be able to:
- **View the venue location** interactively
- **Get directions** with one click
- **See nearby landmarks** and parking
- **Use on any device** - desktop, tablet, mobile

Your interactive map will perfectly complement your beautiful wedding website! 🗺️💕 