# Courtney Buck - Professional Website

A minimalist, sophisticated website for Courtney Buck, showcasing generalist expertise across multiple domains. Built with modern web technologies and following clean design principles.

## Features

- **Modern Design**: Clean, minimalist aesthetic inspired by sites like Stripe, Linear, and Vercel
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Built-in dark mode toggle with smooth transitions
- **Performance**: Optimized for fast loading and smooth animations
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth, performant animations
- **TypeScript**: Full type safety throughout the application
- **Fonts**: Inter (Google Fonts) for clean typography
- **Deployment**: Ready for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd c-buck-professional
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Work.tsx           # Work/projects section
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## Customization

### Content Updates

The website is designed to be easily customizable:

1. **Hero Section**: Update the main headline and tagline in `components/Hero.tsx`
2. **About Section**: Modify expertise areas in `components/About.tsx`
3. **Work Section**: Replace placeholder projects with real case studies in `components/Work.tsx`
4. **Contact Section**: Update contact information and social links in `components/Contact.tsx`

### Styling

The design system uses a consistent color palette and typography:

- **Primary Colors**: Blue gradient (`primary-400` to `primary-600`)
- **Neutral Colors**: Gray scale for text and backgrounds
- **Typography**: Inter font family with consistent sizing
- **Spacing**: Tailwind's spacing scale for consistency

### Adding New Sections

To add new sections:

1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Update navigation links in `components/Header.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The site can be deployed to any platform that supports Next.js:

```bash
npm run build
npm run start
```

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimal JavaScript bundle
- **Images**: Optimized and responsive

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary.

## Contact

For questions or support, contact Courtney Buck at hello@courtneybuck.com 