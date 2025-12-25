# 📁 Project Structure

## Directory Tree

```
central-bistro-landing/
├── .git/                      # Git repository
├── .gitignore                 # Git ignore rules
├── node_modules/              # Dependencies (not in git)
├── dist/                      # Production build (not in git)
├── public/                    # Static assets
│   ├── logo.png              # Dark logo (53KB)
│   └── white_logo.png        # White logo (40KB)
├── components/                # React components
│   ├── Header.tsx            # Sticky header with contacts
│   ├── Hero.tsx              # Hero section with announcement
│   ├── LoyaltySection.tsx    # Loyalty card with effects
│   ├── FeedbackSection.tsx   # Customer reviews
│   ├── Footer.tsx            # Footer with contact info
│   ├── LiquidBackground.tsx  # Animated 3D background
│   └── Logo.tsx              # Logo component (variants)
├── App.tsx                    # Main app component
├── index.tsx                  # React entry point
├── index.html                 # HTML template
├── index.css                  # Global styles
├── package.json               # Dependencies & scripts
├── package-lock.json          # Locked dependencies
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite bundler config
├── vercel.json                # Vercel deployment config
├── README.md                  # Project documentation
├── AGENTS.md                  # AI agent instructions
└── STRUCTURE.md               # This file
```

---

## File Descriptions

### Root Files

#### `package.json`
- **Purpose**: Project metadata and dependencies
- **Key Dependencies**:
  - `react@19.2.3` - UI library
  - `framer-motion@12.23.26` - Animations
  - `lucide-react@0.562.0` - Icons
  - `vite@6.2.0` - Build tool
- **Scripts**:
  - `npm run dev` - Start dev server (port 3000)
  - `npm run build` - Build for production
  - `npm run preview` - Preview production build

#### `vite.config.ts`
- **Purpose**: Vite configuration
- **Key Settings**:
  - Dev server on port 3000
  - React plugin enabled
  - Path aliases (`@` → root)
  - Environment variables support

#### `vercel.json`
- **Purpose**: Vercel deployment configuration
- **Key Settings**:
  - Framework: Vite
  - Output: `dist/`
  - Headers: iframe support, caching
  - Rewrites: SPA routing

#### `tsconfig.json`
- **Purpose**: TypeScript configuration
- **Target**: ES2020
- **JSX**: React
- **Strict mode**: Enabled

---

## Components

### `Header.tsx` (48 lines)
**Purpose**: Sticky navigation header

**Features**:
- Glassmorphic design (backdrop-blur)
- Responsive layout
- Desktop: Full address + phone + messengers
- Mobile: Compact address + phone icon + messengers
- No Instagram (removed per client request)

**Props**: None

**State**: None

**Animations**: Slide down on mount

---

### `Hero.tsx` (~80 lines)
**Purpose**: Hero section with announcement

**Features**:
- Large logo display
- "МЫ ОТКРЫЛИСЬ" announcement
- Opening hours: "8:00 - 0:00"
- Animated background integration

**Props**: None

**State**: None

**Animations**: Fade in, scale effects

---

### `LoyaltySection.tsx` (180 lines)
**Purpose**: Interactive loyalty card showcase

**Features**:
- Premium card design with effects
- Mouse-following shine
- Animated light beam (3s interval)
- Pulsing elements
- Hover glow and scale
- Large logo on card
- Register button below card

**Props**: None

**State**: 
- `mousePosition` - Tracks cursor for shine effect
- `isHovered` - Tracks hover state

**Animations**:
- Shine beam sweep
- Mouse-following glow
- Pulsing chip and star
- Hover scale and glow
- Background pulse

**Key Text**: "Регистрируйтесь в нашей системе лояльности и получайте свежую информацию об эксклюзивных предложениях, гастрономических ужинах и копите баллы."

---

### `FeedbackSection.tsx` (~100 lines)
**Purpose**: Customer reviews section

**Features**:
- Review cards
- Star ratings
- Customer names and dates

**Props**: None

**State**: None

**Animations**: Stagger fade-in

---

### `Footer.tsx` (97 lines)
**Purpose**: Site footer with contact info

**Features**:
- Dark background theme
- Contact information
- Social media links
- Yandex rating widget
- Legal info (ОГРН, ИНН, КПП)

**Props**: None

**State**: None

**Key Text**: "Central Bistro • Sochi" (NO "European Style")

---

### `LiquidBackground.tsx` (~150 lines)
**Purpose**: Animated 3D-style background

**Features**:
- Multiple animated spheres
- Gradient effects
- Blur and opacity animations
- Performance-optimized

**Props**: None

**State**: None

**Animations**: Continuous floating motion

---

### `Logo.tsx` (40 lines)
**Purpose**: Reusable logo component

**Props**:
- `variant`: 'dark' | 'white'
- `className`: Optional Tailwind classes

**Features**:
- Supports dark and white variants
- Responsive sizing via className
- Proper height/width handling

---

## Static Assets

### `public/logo.png` (53KB)
- Dark version of logo
- Used in: Header, Hero
- Format: PNG with transparency

### `public/white_logo.png` (40KB)
- White version of logo
- Used in: Footer, Loyalty card
- Format: PNG with transparency

---

## Build Output

### `dist/` (after build)
```
dist/
├── index.html              # Entry HTML (1.67KB)
├── logo.png               # Copied from public/
├── white_logo.png         # Copied from public/
└── assets/
    ├── index-[hash].css   # Bundled CSS (~0.42KB)
    └── index-[hash].js    # Bundled JS (~340KB, gzip: 107KB)
```

---

## Data Flow

```
index.html
    ↓
index.tsx (React root)
    ↓
App.tsx
    ├── LiquidBackground (full-screen, z-0)
    ├── Header (sticky, z-50)
    ├── Hero
    ├── LoyaltySection
    ├── FeedbackSection
    └── Footer
```

---

## Styling Architecture

### Global Styles (`index.css`)
- Font imports (if any)
- CSS reset/normalize
- Tailwind directives
- Custom utilities

### Component Styles
- **Primary**: Tailwind utility classes
- **Animations**: Framer Motion
- **Custom**: Inline styles for dynamic values

### Color System
```css
/* Primary Colors */
--slate-900: #0f172a
--slate-800: #1e293b
--slate-700: #334155

/* Accent Colors */
--amber-500: #f59e0b
--amber-600: #d97706

/* Backgrounds */
--bg-dark: #001a11
--bg-light: #f8fafc
```

---

## Performance Metrics

### Bundle Size
- **Total JS**: 339.75 KB
- **Gzipped**: 106.70 KB
- **CSS**: 0.42 KB
- **HTML**: 1.67 KB

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## Development Workflow

### 1. Start Dev Server
```bash
npm run dev
```
- Hot reload enabled
- Runs on `http://localhost:3000`

### 2. Make Changes
- Edit components in `components/`
- Changes reflect immediately

### 3. Test
- Check desktop (1280px+)
- Check tablet (768px-1024px)
- Check mobile (375px-768px)

### 4. Build
```bash
npm run build
```
- Creates optimized production build
- Output in `dist/`

### 5. Preview
```bash
npm run preview
```
- Test production build locally
- Runs on `http://localhost:4173`

### 6. Commit
```bash
git add .
git commit -m "feat: description"
git push origin main
```

### 7. Deploy
- Vercel auto-deploys on push to `main`
- Or manually: `npx vercel --prod`

---

## Environment Variables

### `.env.local` (not in git)
```env
GEMINI_API_KEY=your_key_here
```

**Note**: Currently not used in production build

---

## Dependencies

### Production
- `react` - UI library
- `react-dom` - React DOM renderer
- `framer-motion` - Animation library
- `lucide-react` - Icon library

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `typescript` - Type checking
- `@types/node` - Node.js types

---

## Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile**: iOS Safari 14+, Chrome Android 90+
- **No IE11 support** (uses modern ES features)

---

## SEO Structure

### Meta Tags (in `index.html`)
- Title: "Central Bistro • Сочи"
- Description: Bistro description
- Open Graph tags for social sharing
- Viewport meta for mobile

### Semantic HTML
- `<header>` - Site header
- `<main>` - Main content
- `<section>` - Content sections
- `<footer>` - Site footer
- `<nav>` - Navigation (if added)

---

## Accessibility

### ARIA Labels
- Links have descriptive labels
- Icons have titles
- Interactive elements are keyboard accessible

### Color Contrast
- Text meets WCAG AA standards
- Interactive elements have sufficient contrast

### Focus States
- Visible focus indicators
- Logical tab order

---

**Last Updated**: 2025-12-25
