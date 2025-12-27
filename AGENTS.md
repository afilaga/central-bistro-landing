# 🤖 AI Agent Instructions

## Project Overview

This is a **premium landing page** for Central Bistro in Sochi, Russia. The project emphasizes:
- **Visual Excellence**: Rich animations, 3D effects, glassmorphism
- **Mobile-First**: All features must work perfectly on mobile
- **Performance**: Fast loading, optimized assets
- **SEO**: Semantic HTML, meta tags, accessibility

---

## Core Principles

### 1. Design Philosophy
- **Premium Feel**: Every element should feel expensive and polished
- **Animations**: Use Framer Motion for smooth, purposeful animations
- **3D Effects**: Liquid background, card effects, hover states
- **Color Palette**: 
  - Primary: Slate/Dark (`#1a3d2f`, `#001a11`)
  - Accent: Amber/Gold (`#f59e0b`, `#fbbf24`)
  - Background: Light slate/white

### 2. Mobile-First Requirements
- Header must show **phone number and address** on mobile
- All interactive elements must be touch-friendly (min 44px)
- Text must be readable without zooming
- Animations should be subtle on mobile to save battery

### 3. Content Guidelines
- **Tone**: Professional, warm, inviting
- **Language**: Russian (primary audience)
- **Key Messages**:
  - European-style bistro in Sochi
  - Fresh bakery and pastry
  - Loyalty program with cashback
  - Gastronomic dinners and exclusive offers

---

## Component Structure

### Header (`components/Header.tsx`)
- Sticky, glassmorphic design
- **Desktop**: Full address, phone, WhatsApp, Telegram
- **Mobile**: Compact address, phone icon, messengers
- **NO Instagram** in header (only in footer)

### Hero (`components/Hero.tsx`)
- Large logo (but not oversized)
- Opening hours: "8:00 - 0:00"
- "МЫ ОТКРЫЛИСЬ" announcement
- Animated liquid background

### Loyalty Section (`components/LoyaltySection.tsx`)
- **Card Design**: Dark gradient with animated effects
- **Logo**: Large and prominent on card
- **Effects**: 
  - Shine beam animation (every 3s)
  - Mouse-following glow on hover
  - Pulsing elements
  - Hover scale and glow
- **Text**: "Регистрируйтесь в нашей системе лояльности и получайте свежую информацию об эксклюзивных предложениях, гастрономических ужинах и копите баллы."
- **NO "European Bistro"** text on card (replaced with star icon)

### Footer (`components/Footer.tsx`)
- Dark background (`#001a11`)
- Contact info, social links, legal info
- Yandex rating widget
- **Text**: "Central Bistro • Sochi" (NO "European Style")

### Background (`components/LiquidBackground.tsx`)
- 3D-style animated spheres
- Subtle, not distracting
- Performance-optimized

---

## Technical Guidelines

### File Organization
```
components/
  ├── Header.tsx          # Navigation
  ├── Hero.tsx            # Hero section
  ├── LoyaltySection.tsx  # Loyalty card
  ├── FeedbackSection.tsx # Reviews
  ├── Footer.tsx          # Footer
  ├── LiquidBackground.tsx # Animated background
  └── Logo.tsx            # Logo component (dark/white variants)
public/
  ├── logo.png           # Dark logo
  └── white_logo.png     # White logo
```

### Styling
- Use **Tailwind CSS** utilities
- Custom animations via Framer Motion
- Responsive breakpoints: `md:` (768px), `lg:` (1024px)

### Performance
- Images in `public/` folder (auto-copied to dist)
- Lazy load heavy components
- Optimize animations for 60fps

---

## Common Tasks

### Adding New Section
1. Create component in `components/`
2. Import in `App.tsx`
3. Add to component tree
4. Test on mobile and desktop

### Updating Text
- Check `LoyaltySection.tsx` for loyalty text
- Check `Hero.tsx` for hero text
- Check `Footer.tsx` for contact info

### Changing Colors
- Search for color classes: `bg-slate-900`, `text-amber-500`
- Update consistently across components
- Test contrast for accessibility

### Adding Animation
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

## Deployment

### Build
```bash
npm run build
```

### Preview Production
```bash
npm run preview
```

### Deploy to Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploy on push to `main`

### Important Files
- `vercel.json`: Vercel config (iframe support, caching)
- `vite.config.ts`: Vite config
- `package.json`: Dependencies

---

## Contact Information

**Central Bistro**
- Address: Воровского, 35А, Сочи
- Phone: +7 (988) 286-66-99
- Email: centralbistro@yandex.ru
- Website: bistro-central.ru
- Instagram: @central.bistro.sochi

---

## Change Log

### Key Changes Made
1. ✅ Removed Instagram from header
2. ✅ Added phone + address to mobile header
3. ✅ Removed "European Style" from footer
4. ✅ Enlarged logo on loyalty card
5. ✅ Moved register button below card
6. ✅ Added premium effects to loyalty card
7. ✅ Updated loyalty description text
8. ✅ Removed "European Bistro" from card
9. ✅ Added `robots.txt` for Vercel & verified Tilda SEO in Yandex Webmaster
10. ✅ Submitted `/allmenubackend` for priority indexing

---

## AI Agent Notes

When working on this project:
- **Always test on mobile** - most users view on phones
- **Preserve animations** - they're core to the premium feel
- **Check text carefully** - client is particular about messaging
- **Maintain performance** - keep bundle size reasonable
- **Ask before major changes** - especially to design/layout
- **Commit often** - use semantic commit messages

### Menu Data Exports (External Assets)
- Source menus live outside this repo in `../Menu`
- Aggregator exports in `../Menu`:
  - `price-list-food.xml` (Yandex XML with placeholder image)
  - `price-list-food.xls` (Yandex XLS)
  - `Price_2GIS_Food.xlsx` (2GIS XLSX)
- Tilda import with variants and SEO in `../Menu/tilda-menu-variants-seo.csv`
- SEO master CSV in `../Menu/master-menu-seo.csv`
- Breakfast items grouped under a single category `Завтраки`
- Specific pastry items moved to `Десерты` (not in `Завтраки`)

### Semantic Commits
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting, styling
- `refactor:` - Code restructuring
- `perf:` - Performance improvement
- `test:` - Tests
- `chore:` - Maintenance

---

**Last Updated**: 2025-12-25
