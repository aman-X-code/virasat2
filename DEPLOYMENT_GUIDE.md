# Virasat Project Deployment Guide

## 🚀 Vercel Deployment (Recommended)

### Prerequisites

- Node.js 18+ installed
- Git repository
- Vercel account

### Steps:

1. **Install Vercel CLI** (if not already installed):

   ```bash
   npm i -g vercel
   ```

2. **Build the project locally** (optional, to test):

   ```bash
   npm run build
   ```

3. **Deploy to Vercel**:

   ```bash
   vercel
   ```

   Or for production:

   ```bash
   vercel --prod
   ```

4. **Alternative: GitHub Integration**
   - Push your code to GitHub
   - Connect your GitHub repo to Vercel
   - Automatic deployments on every push

### Environment Variables (if needed)

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

## 🌐 Other Deployment Options

### Netlify

1. Build command: `npm run build`
2. Publish directory: `out`
3. Upload the `out` folder to Netlify

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Set source to GitHub Actions
3. The `out` folder contains your static files

### Traditional Web Hosting

1. Run `npm run build`
2. Upload contents of `out` folder to your web server
3. Configure your web server to serve static files

## 📁 Project Structure for Reuse

### Core Components

- `components/ParallaxArtistSection.tsx` - Main artist showcase
- `components/Header.tsx` - Animated header with hide/show
- `components/HeroSection.tsx` - Landing section
- `components/FAQSection.tsx` - FAQ component
- `components/PartnersSection.tsx` - Partners showcase
- `components/HighlightsSection.tsx` - Highlights section

### Styling

- `app/globals.css` - Global styles and brand colors
- `tailwind.config.ts` - Tailwind configuration with custom colors

### Assets

- `public/images/artists/` - Artist images
- `public/images/` - Other project images

## 🎨 Customization for Other Projects

### 1. Update Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  'brand-black': '#1a1a1a',
  'brand-white': '#ffffff',
  'brand-red': '#dc2626',
  'brand-brown': '#8b4513',
  'brand-earthen': '#d2b48c',
  'brand-earthen-light': '#f5deb3',
}
```

### 2. Replace Artist Data

Edit `components/ParallaxArtistSection.tsx`:

```typescript
const artists = [
  {
    name: "Your Artist Name",
    title: "Artist Title",
    description: "Artist description...",
    image: "/images/artists/your-image.jpg",
    specialty: "Artist Specialty",
    years: "Active Years",
  },
  // Add more artists...
];
```

### 3. Update Content

- Replace images in `public/images/`
- Update text content in components
- Modify navigation items in `components/Header.tsx`

## 🔧 Technical Notes

### Performance Optimizations

- Images are optimized with Next.js Image component
- GSAP animations are performance-optimized
- Static export for fast loading

### Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interactions

### Dependencies

- Next.js 13.5.1
- GSAP 3.13.0
- Framer Motion 12.23.12
- Tailwind CSS 3.3.3

## 🐛 Troubleshooting

### Build Issues

1. Clear cache: `rm -rf .next node_modules && npm install`
2. Check Node.js version: `node --version` (should be 18+)
3. Update dependencies: `npm update`

### Image Loading Issues

1. Ensure images are in `public/images/` directory
2. Check file paths are correct
3. Verify image formats (jpg, png, webp supported)

### Animation Issues

1. Check GSAP license for commercial use
2. Ensure ScrollTrigger is properly registered
3. Test on different devices and browsers

## 📞 Support

For issues or questions, check the component documentation or create an issue in the repository.
