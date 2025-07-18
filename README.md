# Ayana Izumi Website

A beautiful, modern showcase website for Ayana Izumi - an AI-powered WhatsApp bot that can chat, sing, speak, and generate images.

## 🌟 Features

- **Responsive Design**: Beautiful layout that works on all devices
- **Modern UI**: Built with Tailwind CSS for a sleek, contemporary look
- **Static Site**: Optimized for fast loading and easy deployment
- **TypeScript**: Type-safe development with excellent DX
- **Component-Based**: Modular React components for easy maintenance

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ayana-website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── Gallery.tsx     # Screenshots gallery
│   ├── SocialLinks.tsx # Contact links
│   └── Footer.tsx      # Footer component
public/                 # Static assets
├── screenshots/        # Demo images (placeholders)
└── favicon.ico        # Site icon
```

## 🛠️ Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Static Export** - Pre-built static files for deployment

## 📝 Customization

### Update Content

1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **Features**: Modify `src/components/Features.tsx`
3. **Contact Links**: Update `src/components/SocialLinks.tsx`
4. **Gallery**: Replace placeholders in `src/components/Gallery.tsx`

### Add Screenshots

1. Add your actual Ayana demo screenshots to `public/screenshots/`
2. Update the image paths in `src/components/Gallery.tsx`
3. Remove placeholder content and uncomment the Image components

### Update Contact Information

Replace placeholder links in `src/components/SocialLinks.tsx` and `src/components/Footer.tsx`:
- WhatsApp number
- Social media links
- Email address
- Website URL

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

### Deploy Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Upload the `out/` contents to your repository
- **Any Static Hosting**: Upload the `out/` directory contents

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🎨 Color Scheme

- **Primary**: Purple to Pink gradient
- **Secondary**: Blue accents
- **Background**: White with subtle gradients
- **Text**: Dark gray for readability

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation links if needed

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions about the website, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

Built with ❤️ for the Ayana Izumi project
