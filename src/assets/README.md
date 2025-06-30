# 📁 Assets Organization Guide

## Folder Structure

```
src/assets/
  images/
    logo/
      logo.png (main logo)
      logo-white.png (white version)
    hero/
      hero-background.jpg
      hero-dog.jpg
    gallery/
      before-after-1.jpg
      before-after-2.jpg
      grooming-action-1.jpg
    icons/
      (any custom SVG icons)

public/
  favicon.png
  og-image.jpg (for social sharing)
```

## Image Optimization Tips

### 1. Use Modern Formats

- **WebP** for photos (smaller than JPEG)
- **PNG** for logos with transparency
- **SVG** for simple graphics and icons

### 2. Optimal Sizes

- **Hero images**: 1920x1080px max
- **Gallery images**: 800x600px max
- **Thumbnails**: 300x300px max
- **Logo**: 200x200px max

### 3. Compression

- Use tools like TinyPNG or ImageOptim
- Aim for <100KB per image for web

## Usage Examples

### In Components

```tsx
import heroImage from "../assets/images/hero/hero-dog.jpg";
import logo from "../assets/images/logo/logo.png";

// Use in JSX
<img src={heroImage} alt="Happy dog after grooming" />;
```

### In Public Folder

```tsx
// For favicon, og-image, etc.
<img src="/favicon.png" alt="Logo" />
```

## Performance Benefits

- Vite automatically optimizes images during build
- Images are cached by Cloudflare CDN
- Automatic code splitting for large images
- Build-time compression and optimization
