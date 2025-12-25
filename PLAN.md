# Dav/Devs Paper Plan

## 1. Component Inventory (Full System)

### A. **Foundations (Shared by Basic & Premium)**

These are non-negotiable and define the system’s “paper” identity.

#### 🎨 Design Tokens

* Colors (Tailwind-compatible)
* Spacing scale
* Border radius
* Shadows (paper depth)
* Typography scale
* Z-index layers
* Motion tokens (hover / lift / press)

#### 🧩 Primitives

* `Box` (paper container base)
* `Stack` (vertical spacing)
* `Inline` (horizontal spacing)
* `Divider`
* `Surface` (theme-aware background)

---

### B. **Typography (Required)**

> Typography is a *selling point*, not an afterthought.

#### Headings

* `H1` – `H6`
* Serif option toggle (Playfair)

#### Text

* `Text` (body, muted, caption)
* `Lead`
* `Small`
* `CodeInline`

#### Rich Content

* `Prose` (MDX/blog content)
* `Blockquote`
* `List` (ordered/unordered)

---

### C. **Layout Components**

* `Page`
* `Container`
* `Grid`
* `PaperStack` (stacked sheets look 👀)
* `SidebarLayout`
* `Section`

---

### D. **UI Components**

#### Core

* `Card`
* `Button`
* `Badge`
* `Tag`
* `Avatar`
* `Icon`
* `Tooltip`

#### Forms

* `Input`
* `Textarea`
* `Select`
* `Checkbox`
* `Radio`
* `Switch`
* `Label`
* `FormField`

#### Feedback

* `Alert`
* `Toast`
* `Modal`
* `Drawer`
* `Skeleton`
* `Progress`

---

### E. **Navigation**

* `Navbar`
* `Footer`
* `Breadcrumb`
* `Tabs`
* `Pagination`

---

## 2. Split: **Basic vs Premium**

### 🟦 BASIC (Free / Entry Tier)

> Clean, Tailwind-native, no textures.

**Includes**

* All primitives
* Full typography
* Core layout components
* Standard UI components
* Light + Dark mode
* Uses **Tailwind default spectrum only**

**Color Strategy**

```txt
Primary: blue-600
Secondary: slate-600
Text: gray-800 / gray-200
BG: white / slate-950
```

**No textures, no paper effects**, but spacing + shadows already hint at paper.

---

### 🟨 PREMIUM (Paid Tier)

> This is where the magic is ✨

**Adds**

* Paper & dark-paper backgrounds
* Subtle grain / texture
* Lifted paper shadows
* Torn / stacked variants
* Fancy typography presets
* Decorative dividers
* Themed templates

**Premium-Only Components**

* `PaperCard`
* `PaperModal`
* `Notebook`
* `PaperTabs`
* `PaperAlert`
* `PaperProse`
* `PaperHero`
* `PaperTimeline`

---

## 3. Fonts Setup (Your Chosen Stack ❤️)

```txt
Sans: Montserrat
Serif: Playfair Display
Mono: Source Code Pro
Fallback: system-ui, sans-serif, serif, monospace
```

**Implementation**

* CSS variables (`--font-sans`, etc.)
* Tailwind `fontFamily` mapping
* Optional `@fontsource/*` packages

---

## 4. Paper & Dark Paper Background Colors

### 📄 Light Paper (Premium)

Pairs beautifully with Tailwind gray spectrum:

```txt
Paper Base:      #FAF9F7
Paper Warm:     #F4F2EE
Paper Border:   #E5E2DC
Paper Shadow:   rgba(0,0,0,0.06)
```

### 🌑 Dark Paper

Not pure black—still readable and warm.

```txt
Dark Paper Base:   #121212
Dark Paper Warm:  #181818
Dark Border:      #2A2A2A
Dark Shadow:      rgba(0,0,0,0.8)
```

💡 These sit perfectly between `gray-100 → gray-900` without clashing.

---

## 5. Tech Stack (Best Choice for Selling Later)

### 🥇 Recommended Stack

#### Core

* **TypeScript**
* **React (headless-first)**
* **Tailwind CSS**
* **CSS Variables**

#### Build

* **Vite** ✅ (faster, modern, Astro-friendly)
* Library mode (`build.lib`)

#### Outputs

* ESM
* CJS
* CSS-only build (bonus)

---

### Why **Vite > Webpack**

| Feature        | Vite   | Webpack |
| -------------- | ------ | ------- |
| DX             | ⭐⭐⭐⭐⭐  | ⭐⭐⭐     |
| Astro support  | Native | Meh     |
| Library builds | Easy   | Painful |
| Selling later  | Yes    | No      |

---

## 6. Compatibility Plan (Bonus Requirement ✔)

### React / Next.js / Astro

* Export headless logic + styled components
* No framework assumptions
* No Next-specific APIs

### Raw HTML / CSS / JS

* Ship:

  * `paper.css`
  * `paper.dark.css`
* Components degrade to class-based usage:

```html
<div class="paper-card paper-elevated">
```

---

## 7. Build & Setup Plan (Step-by-Step)

### Phase 1 – Foundations

* Tokens (colors, fonts, spacing)
* Paper shadows & surfaces
* Dark mode system

### Phase 2 – Core Components

* Typography
* Layout
* Buttons, cards, inputs

### Phase 3 – Premium Layer

* Paper textures
* Dark paper variants
* Signature components

### Phase 4 – Packaging

* Storybook / Ladle
* Docs site (Astro 👌)
* Pricing tiers
* License

---

## 8. Naming Ideas (Optional but Important)

* **PaperUI**
* **Fold**
* **Crease**
* **Leaf UI**
* **Parchment**
* **Notebook UI**
