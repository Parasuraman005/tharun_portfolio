# Video Editor Portfolio Website

A modern, responsive portfolio website for video editors showcasing projects, skills, and contact information with beautiful animations and hover effects.

## 🎬 Features

### Design & Layout
- **Modern Dark Theme**: Professional dark gradient background with glass-morphism effects
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover transitions and effects throughout the site
- **Neon Navigation**: Glowing hover effects on navigation links with different colors

### Sections
1. **About Me**: 
   - Profile photo (clickable - links to Instagram)
   - Professional description with Sora + Cormorant Garamond fonts
   - Hover effects and transitions

2. **Projects**: 
   - Carousel with 3/2/1 videos per view (responsive)
   - Left/right arrow navigation
   - Smooth scrolling between projects
   - Clickable project items

3. **Software & Skills**: 
   - Grid layout showcasing video editing software
   - Hover effects with shimmer animations
   - Compact, professional design

4. **Contact**: 
   - Multiple contact options (Email, Instagram, WhatsApp, YouTube)
   - Enhanced hover effects with shimmer animations
   - Color-coded buttons for each platform

### Interactive Elements
- **Navigation**: Smooth scrolling to sections
- **Carousel**: Arrow-controlled project video navigation
- **Hover Effects**: Neon glows, shimmer effects, scale animations
- **Links**: Instagram integration throughout the site

## 📁 File Structure

```
pa/
├── index.html          # Main HTML file
├── pf.css             # Stylesheet with all CSS
├── pf.js              # JavaScript functionality
├── README.md          # This file
├── tharun.jpeg        # Profile photo
├── prj1.mp4           # Project video 1
├── prj2.mp4           # Project video 2
├── prj3.mp4           # Project video 3
├── prj4.mp4           # Project video 4
├── prj1_th.jpeg       # Project 1 thumbnail
├── prj3_th.jpeg       # Project 3 thumbnail
└── [other media files]
```

## 🚀 Setup Instructions

1. **Download Files**: Save all files in the same directory
2. **Add Media**: 
   - Replace `tharun.jpeg` with your profile photo
   - Add your project videos (prj1.mp4, prj2.mp4, etc.)
   - Add thumbnail images for projects
3. **Customize Content**: Edit `index.html` to update:
   - Your name and title
   - About me description
   - Project descriptions
   - Contact links
4. **Open Website**: Double-click `index.html` to view in browser

## 🎨 Customization Guide

### Colors & Theme
```css
/* Main colors in pf.css */
--bg: #0F1419;              /* Background */
--text: #E8E8E8;            /* Text color */
--accent-blue: #3F8EFC;     /* Blue accent */
--accent-coral: #FF6B6B;    /* Coral accent */
```

### Fonts Used
- **Navigation & Headings**: Poppins
- **Body Text**: Roboto
- **About Me Heading**: Sora
- **About Me Body**: Cormorant Garamond

### Adding New Projects
1. Add video file to directory
2. Add thumbnail image
3. Update HTML in projects section:
```html
<div class="video-item">
    <video controls poster="your-thumbnail.jpg">
        <source src="your-video.mp4" type="video/mp4">
    </video>
    <p>Your Project Description</p>
</div>
```

### Modifying Contact Links
Update the href attributes in the contact section:
```html
<a href="mailto:your-email@example.com" class="contact-btn">Email Me</a>
<a href="https://instagram.com/your-profile" target="_blank" class="contact-btn instagram">Instagram</a>
```

## 🔧 Technical Details

### CSS Features
- **CSS Variables**: For consistent theming
- **Flexbox & Grid**: Modern layout techniques
- **Backdrop Filters**: Glass-morphism effects
- **Cubic-bezier Transitions**: Smooth animations
- **Media Queries**: Responsive design

### JavaScript Features
- **Carousel Navigation**: Dynamic scroll calculation
- **Smooth Scrolling**: Section navigation
- **Responsive Behavior**: Adapts to screen size
- **Event Handling**: Click and hover interactions

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers supported
- Progressive enhancement approach

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+ (3 videos per carousel view)
- **Tablet**: 700px-1024px (2 videos per carousel view)
- **Mobile**: <700px (1 video per carousel view)

## 🎯 Performance Tips

1. **Optimize Images**: Compress profile photo and thumbnails
2. **Video Compression**: Use MP4 format with reasonable quality
3. **Minimize Files**: Consider minifying CSS/JS for production
4. **CDN**: Host large videos on external platforms if needed

## 🔗 Social Media Integration

The portfolio includes Instagram integration in multiple places:
- Profile photo (About section)
- Contact section
- Footer link

## 📄 License

This project is for personal portfolio use. Customize freely for your own projects.

## 🤝 Support

For questions or customization help, refer to the code comments or modify the CSS variables for easy theming.

---

**Created by**: G PARASU RAMAN 
**Purpose**: Portfolio for Video Editors 
**Last Updated**: 2025
