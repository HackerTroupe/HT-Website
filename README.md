# HackerTroupe Website

[![Deploy with Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange?logo=cloudflare)](https://pages.cloudflare.com/)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)

Independent Security Research & CTF Collective website. A task force of researchers, not a roster.

## 🚀 Features

- ⚡ **Fast**: Built with Vite for lightning-fast development and optimized production builds
- 🎨 **Modern Design**: Minimal blue neon aesthetic with dark/light theme support
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🔍 **SEO Optimized**: Meta tags, sitemap, and robots.txt included
- 📝 **Easy Content Management**: Simple data files for members, operations, and posts
- 🎯 **Filter & Search**: Year-based filtering and search functionality
- 🌐 **Static**: No backend required, deploy anywhere

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6.x
- **Styling**: TailwindCSS with custom CSS variables
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Deployment**: Cloudflare Pages (recommended)

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/hackertroupe-website.git
   cd hackertroupe-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)

   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## 📝 Adding Content

We've created easy-to-use templates for adding new content. Check the `templates/` directory:

### Add a New Member

1. Open `src/data/members.ts`
2. Follow the template in `templates/member-template.md`
3. Add your member object to the array

### Add a New Operation

1. Open `src/data/operations.ts`
2. Follow the template in `templates/operation-template.md`
3. Add your operation object to the array

### Add a New Post

1. Open `src/data/posts.ts`
2. Follow the template in `templates/post-template.md`
3. Add your post object with full Markdown support

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages
3. Create a new project and connect your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18
5. Click **Save and Deploy**

For detailed instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Other Platforms

This site can be deployed to any static hosting platform:

- **Vercel**: Zero-config deployment
- **Netlify**: Drag & drop or Git integration
- **GitHub Pages**: Via GitHub Actions
- **AWS S3 + CloudFront**: Manual setup required

## 📁 Project Structure

```
Website/
├── public/               # Static assets
│   ├── _redirects       # SPA routing rules
│   ├── sitemap.xml      # SEO sitemap
│   └── robots.txt       # SEO robots file
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── ui/         # UI component library
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── data/           # Data files
│   │   ├── members.ts   # Member profiles
│   │   ├── operations.ts # CTFs/Hackathons
│   │   └── posts.ts     # Blog posts/writeups
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Members.tsx
│   │   ├── Operations.tsx
│   │   ├── Posts.tsx
│   │   └── PostDetail.tsx
│   ├── styles/         # Global styles
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── templates/          # Content templates
├── .env.example       # Environment variables example
├── .gitignore        # Git ignore rules
├── index.html        # HTML entry point
├── package.json      # Dependencies
├── vite.config.ts   # Vite configuration
├── DEPLOYMENT.md    # Deployment guide
└── README.md       # This file
```

## 🎨 Customization

### Colors

Edit the color variables in `src/styles/globals.css`:

```css
:root {
  --bg-primary: #f6f6f6;
  --bg-secondary: #ffffff;
  --text-primary: #0b0b0b;
  --text-secondary: #6b6b6b;
  --accent: #00e5ff; /* Main blue neon color */
  --divider: #bebebe;
}
```

### Fonts

Fonts are loaded from Google Fonts. Update the imports in `src/styles/globals.css`.

## 🔧 Configuration

### Environment Variables

See `.env.example` for available configuration options.

### Vite Configuration

Edit `vite.config.ts` for build and dev server settings.

## 📊 SEO

The site includes:

- ✅ Meta tags for social sharing (Open Graph, Twitter Cards)
- ✅ Sitemap.xml for search engines
- ✅ Robots.txt for crawler instructions
- ✅ Semantic HTML structure
- ✅ Mobile-friendly design

Update the meta tags in `index.html` with your site's URL before deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: [https://hackertroupe.pages.dev](https://hackertroupe.pages.dev)
- **Documentation**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Templates**: [templates/](templates/)

## 💬 Support

For questions or issues:

- Open an issue on GitHub
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for common problems
- Review the code documentation

---

Built with ❤️ by HackerTroupe
