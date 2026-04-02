# Shihab Shahriar Kabir — Portfolio Website

A personal developer portfolio website built with pure HTML, CSS, and JavaScript.

## 🌐 Live Demo
Hosted on Render: *(add your Render URL here after deploying)*

## 📁 Project Structure

```
portfolio/
├── index.html        ← Main HTML file
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← Interactions & animations
└── README.md
```

## 🚀 How to Deploy on Render (Free)

1. **Push to GitHub:**
   - Create a new GitHub repository (e.g. `portfolio`)
   - Upload all files keeping the folder structure
   - Commit and push

2. **Deploy on Render:**
   - Go to [render.com](https://render.com) and sign up (free)
   - Click **New → Static Site**
   - Connect your GitHub account and select your `portfolio` repo
   - Set these settings:
     - **Build Command:** *(leave empty)*
     - **Publish Directory:** `.` *(just a dot)*
   - Click **Create Static Site**
   - Your site will be live at `https://your-site-name.onrender.com`

## ✏️ How to Customize

### Add your photo
In `index.html`, find the `about-photo-box` section and replace:
```html
<div class="photo-placeholder">...</div>
```
with:
```html
<img src="assets/photo.jpg" alt="Shihab Shahriar Kabir" style="width:100%; aspect-ratio:3.5/4.5; object-fit:cover;" />
```
Then put your photo file inside the `assets/` folder.

### Add GitHub links to projects
In `index.html`, find each project card and update:
```html
<a href="#" class="project-link">GitHub <span>↗</span></a>
```
Replace `#` with your actual GitHub repository URL.

### Add LinkedIn / GitHub in Contact section
In `index.html`, find the contact items and update the `href="#"` links.

## 🛠 Built With
- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript
- Google Fonts (Syne + Space Mono)

## 📬 Contact
- Email: kabir1922@gmail.com
- Phone: +880 1780 749 778
- Location: Dhaka, Bangladesh
