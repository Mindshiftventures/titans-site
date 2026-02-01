# Titans Site Mobile Audit

**Audited:** 2025-01-25
**Viewport tested:** 375px (iPhone SE), 390px (iPhone 14)
**Pages reviewed:** Homepage, /designers, /designers/dieter-rams

---

## 🚨 CRITICAL: Horizontal Scroll Overflow

**All pages have 121px horizontal overflow.**

- Document width: 511px
- Viewport width: 390px
- **Root cause:** Navigation bar links extend beyond viewport

```
The flex container with nav links doesn't wrap or collapse on mobile.
```

---

## Issues by Priority

### P0 — CRITICAL (Ship blockers)

#### 1. Navigation Overflow — Causes Horizontal Scroll

**What's wrong:**
The navigation bar has `flex gap-6` with 4 category links that extend to 511px total width, causing horizontal scrolling on all pages.

**Where:** `<nav>` component, appears on ALL pages

**Current structure:**
```html
<div class="flex gap-6 text-sm label-style">
  <a>DESIGNERS</a>
  <a>DEVELOPERS</a>
  <a>RESEARCHERS</a>
  <a>WRITERS</a>
</div>
```

**Fix — Option A (Recommended): Hamburger Menu**
```jsx
// Add mobile hamburger menu that shows on sm: breakpoint and below
// Hide horizontal nav on mobile, show hamburger icon
// Slide-out or dropdown menu on tap

// Tailwind classes:
<nav className="hidden md:flex gap-6 ...">  {/* Desktop nav */}
<button className="md:hidden">☰</button>    {/* Mobile hamburger */}
```

**Fix — Option B (Quick fix): Stack vertically on mobile**
```jsx
<div className="flex flex-col gap-2 sm:flex-row sm:gap-6 text-sm">
```

**Fix — Option C (Minimal): Reduce gap and font size on mobile**
```jsx
<div className="flex gap-2 text-xs sm:gap-6 sm:text-sm">
```

---

### P1 — HIGH (Usability issues)

#### 2. Touch Targets Too Small

**What's wrong:**
All navigation and breadcrumb links have heights below the 44px minimum for comfortable mobile tapping.

**Measurements:**
| Element | Height | Width | Minimum |
|---------|--------|-------|---------|
| TITANS (logo) | 28px | 84px | 44px |
| Nav links | 20px | ~80px | 44px |
| Breadcrumb links | 16px | ~30-70px | 44px |
| "BACK TO ALL" link | 16px | 180px | 44px |

**Where:** Header nav, breadcrumbs, footer links

**Fix:**
Add padding to increase tap area without changing visual size:
```jsx
// Nav links
<a className="py-3 -my-3 hover:text-accent transition-colors">
  DESIGNERS
</a>

// Or use min-h-[44px] with flex items-center
<a className="min-h-[44px] flex items-center hover:text-accent">
  DESIGNERS  
</a>
```

For breadcrumbs:
```jsx
<a className="py-2 -my-2 text-xs text-muted hover:text-foreground">
  HOME
</a>
```

---

### P2 — MEDIUM (Polish issues)

#### 3. Breadcrumb Text Very Small

**What's wrong:**
Breadcrumb text on titan profile pages is tiny and hard to read/tap on mobile.

**Where:** `/designers/dieter-rams` and similar profile pages

**Current:** ~12px text, 16px height links

**Fix:**
```jsx
// Increase text size on mobile, add more padding
<nav className="text-sm sm:text-xs py-2">
  <a className="py-2 inline-block">HOME</a>
  <span>/</span>
  <a className="py-2 inline-block">DESIGNERS</a>
</nav>
```

#### 4. "BACK TO ALL" Link Small Touch Target

**What's wrong:**
The back link at the bottom of profile pages has a 16px height.

**Where:** Bottom of titan profile pages

**Fix:**
```jsx
<a className="py-3 inline-flex items-center gap-2 hover:text-accent">
  ← BACK TO ALL DESIGNERS
</a>
```

---

### P3 — LOW (Nice to have)

#### 5. Footer Text Stacking

**What's wrong:**
Footer text stacks vertically on mobile which is fine, but could be tightened.

**Where:** Footer component

**Current behavior:** Acceptable, no fix needed unless desired.

#### 6. Stats Bar Spacing

**What's wrong:**
The 2x2 stats grid on mobile homepage works but numbers are a bit cramped.

**Where:** Homepage stats section

**Fix (optional):**
```jsx
// Add more vertical gap between rows
<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
```

---

## Summary Checklist for Developer

```
[ ] P0: Implement mobile navigation (hamburger menu OR collapse)
[ ] P0: Add overflow-x-hidden to body/html as safety net
[ ] P1: Increase touch targets to minimum 44px height
[ ] P2: Increase breadcrumb text size and tap targets on mobile
[ ] P2: Increase "Back to all" link tap target
```

---

## Quick Wins (add to globals.css)

```css
/* Prevent horizontal scroll as safety net */
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}

/* Improve touch targets globally */
@media (max-width: 640px) {
  a, button {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}
```

---

## Test Verification

After fixes, verify:
1. `document.documentElement.scrollWidth === window.innerWidth` (no horizontal scroll)
2. All interactive elements have minimum 44x44px tap area
3. Navigation collapses properly at 375px and 390px
4. No text truncation or overflow

---

*Audit by Designer Agent*
