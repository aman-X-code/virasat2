# VIRASAT - Cultural Heritage Website

A modern, responsive website celebrating cultural heritage and tradition, built with Next.js 13, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd virasat/project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production
```bash
npm run build
npm start
```

## 🛠️ What Was Fixed

1. **CSS Errors**: Fixed undefined Tailwind CSS classes (`border-border`, `bg-background`, `text-foreground`)
2. **Missing Dependencies**: Added `framer-motion` for animations
3. **Image References**: Replaced missing hero background image with CSS gradient
4. **Build Issues**: Resolved all TypeScript and build errors

## 🎨 Features

- **Loading Screen**: Animated 3D loading experience with GSAP
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion powered transitions
- **Modern UI**: Clean, cultural aesthetic with custom color palette
- **Multiple Pages**: Home, About, Team, Gallery, Blogs, Contact, Travel

## 🎯 Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## 📱 Pages

- `/` - Loading screen and redirect to home
- `/home` - Main landing page
- `/about` - About the organization
- `/team` - Team members
- `/gallery` - Photo gallery
- `/blogs` - News and blog posts
- `/contact` - Contact information
- `/travel` - Travel experiences

## 🎨 Custom Colors

The project uses a custom color palette defined in `tailwind.config.ts`:
- `brand-red`: #c0392b
- `brand-red-dark`: #a52f23
- `brand-black`: #1a1a1a
- `brand-white`: #f5f5f5
- `brand-brown`: #5a3e36
- `brand-earthen`: #8b786d
- `brand-earthen-light`: #bcaea4

## 🚀 Performance

- Optimized build with Next.js
- Static page generation where possible
- Efficient image handling
- Minimal JavaScript bundle size

## 🔧 Development

The project is now error-free and ready for development. All pages compile successfully and the development server runs without issues.
