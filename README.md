# Bairisetty Pavan - Portfolio Website

A stunning, modern portfolio website with dark/light mode, glassmorphism effects, animations, and responsive design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence
- **Glassmorphism Design** - Modern frosted glass effects throughout
- **Animated Background** - Floating gradient shapes with parallax mouse tracking
- **Typewriter Effect** - Dynamic role display in hero section
- **Animated Counters** - Scroll-triggered stat counters
- **Magnetic Buttons** - Interactive button hover effects
- **Card Tilt Effects** - 3D perspective on hover
- **Smooth Scroll** - Seamless section navigation
- **Fully Responsive** - Mobile-first design

## 🚀 Deploy to GitHub Pages

### Step 1: Create Repository
1. Go to [github.com/new](https://github.com/new)
2. **Repository name**: `bairisettypavan1.github.io` (must match your username exactly!)
3. Make it **Public**
4. Click "Create repository"

### Step 2: Upload Files
```bash
# Navigate to portfolio folder
cd portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio website"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/bairisettypavan1/bairisettypavan1.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository Settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "main" branch
4. Click Save
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Live Site
🎉 Your portfolio is now live at: **https://bairisettypavan1.github.io**

## 📁 Project Structure

```
portfolio/
├── index.html      # Main HTML structure
├── styles.css      # All styling & themes
├── script.js       # Interactivity & animations
└── README.md       # This file
```

## 🔧 Customization

### Update Your Info
Edit `index.html` to update:
- Your name and title
- About section text
- Skills list
- Project details
- Contact information

### Change Colors
Edit `styles.css` CSS variables at the top:
```css
:root {
    --primary: #6366f1;        /* Main accent color */
    --secondary: #06b6d4;      /* Secondary accent */
    --accent: #f43f5e;         /* Highlight color */
}
```

### Add More Projects
Copy the project card template in `index.html` and modify the content.

## 🌐 Local Development

```bash
# Using Python (built-in server)
python -m http.server 3000

# Or using Node.js
npx http-server -p 3000 -o
```

Then open: http://localhost:3000

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📝 License

MIT License - Feel free to use and modify!

---

**Built with ❤️ by Bairisetty Pavan**
