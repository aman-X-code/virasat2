# Hero Section Redesign - Skiper UI Masked Div

## Overview
The hero section has been completely redesigned using the Skiper UI masked div component, creating a modern and visually striking landing experience.

## Features

### 🎨 Masked Div Component
- **4 Different Mask Types**: Classic, Modern, Artistic, and Minimal
- **Interactive Selection**: Users can switch between mask types
- **Responsive Design**: Adapts to all screen sizes
- **Smooth Animations**: Framer Motion animations for enhanced UX

### 🎯 Key Improvements
1. **Modern Layout**: Two-column grid layout with text and image
2. **Brand Integration**: Uses existing brand colors (brand-red, brand-earthen, brand-brown)
3. **Enhanced Typography**: Improved font hierarchy and spacing
4. **Interactive Elements**: Hover effects and smooth transitions
5. **Floating Decorations**: Animated decorative elements for visual interest

### 📱 Responsive Design
- **Mobile**: Single column layout with stacked content
- **Tablet**: Optimized spacing and sizing
- **Desktop**: Full two-column layout with enhanced visual elements

### 🎭 Mask Types Available
- **Type 1 (Classic)**: Traditional rounded rectangle with subtle curves
- **Type 2 (Modern)**: Angular design with sharp edges
- **Type 3 (Artistic)**: Organic flowing shapes
- **Type 4 (Minimal)**: Clean, simple geometric form

## Usage

The hero section is now a separate component (`HeroSection.tsx`) that can be easily customized:

```tsx
import HeroSection from '@/components/HeroSection';

// In your page component
<HeroSection />
```

## Customization

### Changing the Image
Replace the image in `/public/images/first.jpeg` with your desired hero image.

### Modifying Colors
Update the gradient and brand colors in the component:
- Background gradient: Lines 25-29 in HeroSection.tsx
- Brand colors: Defined in tailwind.config.ts

### Adding New Mask Types
The masked div component supports custom SVG paths. You can add new mask types by extending the `svgPaths` object in `masked-div.tsx`.

## Dependencies
- **Skiper UI**: Masked div component
- **Framer Motion**: Animations
- **Next.js Image**: Optimized image loading
- **Lucide React**: Icons

## Browser Support
- Modern browsers with CSS mask support
- Fallback provided for older browsers
