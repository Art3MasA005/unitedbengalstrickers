# United Bengal Strikers — Official Franchise Website

Official website for the **United Bengal Strikers** cricket franchise, a premier sports concern of the **United Bengal Group**.

> **Motto:** *“Born to Strike”*  
> **Headquarters:** Uttara Elegance, Choighati, Rajabari Bazar, Rajshahi, Bangladesh  
> **Contact:** 01300726702 (Call / WhatsApp) | info.classicalsports@gmail.com  
> **RHHS Premier League 2026:** Semi-Finalists  
> **Head of Digital & Media:** Md. Yeasir Arafat  

---

## 🏏 Overview & Architecture

Designed in accordance with the handwritten architectural blueprint (`Architecture.jpeg`) and inspired by modern international franchise sports design standards:

1. **Top Announcement Bar:** Live tournament status, quick WhatsApp link, email, and location.
2. **Sticky Navigation:** Shield crest branding, desktop links, Fan Zone button, and responsive mobile drawer.
3. **Cinematic Hero Banner:** Full squad photo background with "Squad Edition" / "Lightning Edition" toggle, "Born to Strike" battle cry, call-to-action buttons, and animated franchise milestone counters (2019, 2026, 15+, 100%).
4. **Official Partners Logo Marquee:** Dual-row infinite scrolling partner ticker featuring all 10 official sponsors with autocropped brand logos.
5. **Our Strikers Side-Scrolling Carousel:** Draggable and chevron-controlled carousel showcasing all 15 official players with jersey tags, category filter tabs (Batters, Bowlers, All-Rounders), and interactive modal player profiles with career stats.
6. **Strikers Gallery:** Filterable media grid (Matchdays, Celebrations, Official Posters) with high-definition fullscreen lightbox viewer and keyboard arrow navigation.
7. **About Us & United Bengal Group:** Detailed history explaining the transition from Galaxy (2019) to United Bengal Strikers (2026).
8. **Leadership & Team Management:** 6 executive leadership profiles (Directors, Team Manager, Head of Digital & Media with portfolio & GitHub links).
9. **History & Legacy Timeline:** Milestones from 2019 inception to the 2026 RHHS Premier League Semi-Finals.
10. **Become a Partner:** Corporate partnership tiers, perks grid, and interactive sponsorship inquiry form.
11. **Official Headquarters & Contact:** Address card, one-click WhatsApp launcher, phone dialer, and direct email link.
12. **Fan Zone & Cheer Wall:** Real-time click cheer counter with canvas celebratory confetti sparks, audio chime, and browser `localStorage` persistence.
13. **Franchise Footer:** Comprehensive site map, branding badges, non-breaking developer attribution, and legal credits.

---

## 📁 Repository Structure

```
e:/unitedBengal/
├── Architecture.jpeg              # Original handwritten architectural blueprint
├── index.html                     # Semantic HTML5 single-page application with developer spotlight
├── vercel.json                    # Vercel production deployment configuration
├── README.md                      # Documentation and deployment instructions
├── css/
│   ├── animations.css             # Keyframe animations (marquee, glows, pulses)
│   └── style.css                  # Core franchise design system (Dark obsidian & Gold)
├── js/
│   ├── main.js                    # Carousel, modals, lightbox, filters, hero toggle
│   └── cheer.js                   # Fan Zone cheer counter & canvas confetti
└── assets/
    ├── logo/                      # Transparent RGBA high-resolution shields
    ├── hero/                      # Full squad & lightning edition banners
    ├── players/                   # 15 autocataloged squad player posters
    ├── management/                # 6 leadership portraits
    ├── developer/                 # Md. Yeasir Arafat portraits & avatars
    ├── sponsors/                  # 10 official sponsor logos
    ├── matchday/                  # High-res RHHS tournament action shots
    └── gallery/                   # Brotherhood, ceremonies, and celebrations
```

---

## 🚀 How to Deploy

### Option 1: Deploying to GitHub Pages (100% Free)

1. Initialize git and commit files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of United Bengal Strikers official website"
   ```
2. Create a new repository on GitHub named `united-bengal-strikers` (or your preferred name).
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/<YOUR_USERNAME>/united-bengal-strikers.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, navigate to **Settings** &rarr; **Pages**.
5. Under **Build and deployment** &rarr; **Branch**, select `main` and `/ (root)`, then click **Save**.
6. Your website will be live at `https://<YOUR_USERNAME>.github.io/united-bengal-strikers/` in under 60 seconds!

---

### Option 2: Deploying to Vercel (Instant CDN)

1. **Via Vercel Web Dashboard:**
   - Go to [vercel.com](https://vercel.com/) and click **Add New Project**.
   - Import your GitHub repository.
   - Framework Preset: Select **Other** (Pure HTML/CSS/JS).
   - Click **Deploy**. Vercel will automatically detect `vercel.json` and serve the site globally with edge caching.

2. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```
   Follow the CLI prompts to link and deploy in seconds.

---

## ⚡ Tech Stack & Performance

- **Zero External Runtime Dependencies:** Pure HTML5, CSS3, and Vanilla JavaScript for maximum loading speed (Score 98+ on Google Lighthouse).
- **Typography:** Google Fonts (`Teko`, `Barlow Condensed`, `Outfit`, `Cinzel`).
- **Responsive Design:** Mobile-first responsive breakpoints supporting 320px smartphones, iPads, tablets, and 4K desktop screens.
- **Accessible:** Semantic landmarks, ARIA labels for screen readers, and full keyboard navigation.
