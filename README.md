# 🌟 LumiKids Academy — "Little Minds, Big Dreams!"

Welcome to the official web platform for **LumiKids Academy**, a premier modern kindergarten and primary school blending experiential STEAM discovery, Reggio Emilia inquiry, and joyful curiosity.

---

## 🎨 Brand Identity & Design System

- **Brand Name**: LumiKids Academy
- **Tagline**: *"Little Minds, Big Dreams!"*
- **Primary Color**: Warm Sunny Yellow (`#FFB547`)
- **Secondary Color**: Mint Green (`#4CBF9F`)
- **Typography**: 
  - **Headings**: [Baloo 2](https://fonts.google.com/specimen/Baloo+2) (Friendly, playful, rounded)
  - **Body Copy**: [Nunito](https://fonts.google.com/specimen/Nunito) (Clean, modern, highly readable)
- **Theme Modes**: Sunlit Light Mode ☀️ & Cozy Dark Mode 🌙 (persisted via `localStorage`)
- **Brand Logo**: Dual-mode authentic mascot logo (`assets/logo-light.png` & `assets/logo-dark.png`) featuring the two happy smiling students, radiant sun, open book, and wonder sparkles with seamless CSS-driven light/dark mode auto-switching.
- **Unified Master Footer**: 5-column responsive grid (`lg:grid-cols-6`) matching the exact header branding, featuring:
  1. **Brand Identity**: Dual-mode logo, `LumiKids` + `ACADEMY` badge, tagline, mission statement, and social channels.
  2. **Quick Links**: Direct navigation to Campus (Home 1), Premium (Home 2), About, Classes, Admissions, and Gallery.
  3. **Programs**: Toddlers, Kindergarten, Primary, STEAM Robotics, Nature Play, and Arts & Music.
  4. **Parent Hub (New Column)**: Live Parent Portal Login, 2026-27 Academic Calendar, Weekly Organic Menu, Bus Route GPS Tracker, Tuition Calculator, and Handbook PDF.
  5. **Campus & Visit**: Physical address, direct telephone, inquiry email, operating hours, and 1-click modal for booking campus tours.

---

## 📂 Modular File Architecture (Separate HTML, CSS & JS)

### 📄 Separate HTML Pages
1. [index.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/index.html) — **Home 1 (Standard)**: Campus tour, learning approach, stats counter, hero badges, testimonials, and enrollment call to action.
2. [home2.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/home2.html) — **Home 2 (Premium Edition)**: 6 high-impact sections featuring an Immersive Bento Hero, 4-Pillar Experiential Learning Matrix, Interactive 360° Facilities Showcase with dynamic switcher, Signature Age-Tier Roadmap, Parent Community Wall, and VIP Tour Reservation Scheduler.
3. [about.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/about.html) — **About Us (6 Dedicated Sections)**: Founding Story, Vision/Mission & 4 Core Values, Educational Leadership & Mentors, Safety & HEPA-H14 Accreditation, 15-Year Milestone Timeline, and Executive Campus Tour Scheduler.
4. [classes.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/classes.html) — **Classes & Curriculum**: In-depth breakdown of Toddler Discoverers (1.5-3y), Kindergarten Explorers (3-5y), Primary Innovators (Grades 1-5), and daily schedule explorer.
3. [admissions.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/admissions.html) — **Admissions & Tuition**: 4-step admissions roadmap, interactive tuition calculator, family inquiry form, and prospectus download.
4. [gallery.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/gallery.html) — **Events & Gallery**: Filterable photo showcase with high-res photos, interactive lightbox viewer, and upcoming celebration calendar.
5. [dashboard.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/dashboard.html) — **Parent Portal**: Child switcher (Leo vs. Mia), attendance log, milestone progress bars, official printable report card generator, fee status & simulator, and live teacher chat.
6. [login.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/login.html) — **Parent Login**: Sign-in portal with 1-click quick demo access for instant demonstration.

### 🎨 Separate CSS Stylesheets
- [css/styles.css](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/css/styles.css) — Master theme tokens (`#FFB547` and `#4CBF9F`), dark/light mode variables, typography, animations, and glassmorphic cards.
- [css/dashboard.css](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/css/dashboard.css) — Dedicated styles for parent portal grids, attendance metrics, skill progress bars, invoice cards, and chat bubbles.

### ⚙️ Separate JavaScript Modules
- [js/main.js](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/js/main.js) — Master site controller for dark/light mode toggle, mobile navigation drawer, tour booking modal, active link highlighting, and toast alerts.
- [js/calculator.js](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/js/calculator.js) — Interactive tuition cost calculator with real-time add-on updates for `admissions.html`.
- [js/gallery.js](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/js/gallery.js) — Gallery category filter buttons and full-screen image lightbox for `gallery.html`.
- [js/dashboard.js](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/js/dashboard.js) — Complete interactive student profile switcher, attendance tracker, report card generator, fee payment gateway simulator, and live teacher messaging.

---

## 🚀 How to Run the Website

Simply double-click on any `.html` file (e.g. [index.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/index.html) or [dashboard.html](file:///c:/Users/Dell/Desktop/project1/Kindergarten%20&%20Primary%20School/dashboard.html)) to open it in your browser. All links seamlessly navigate across the separate pages.
