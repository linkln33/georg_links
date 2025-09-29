# Georg Links - Personal Portfolio

A modern, colorful personal portfolio website showcasing Full Stack & Web3 development expertise. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Hero Section** with animated code typing effect and neon aesthetics
- **About Section** highlighting professional experience and expertise
- **Skills Section** with animated progress bars and colorful gradients
- **Projects Section** featuring a grid of Web3 and blockchain projects
- **AI × Web3 Section** showcasing innovative AI-blockchain integrations
- **Contact Section** with interactive form and social links
- **Responsive Design** optimized for all devices
- **Smooth Animations** using Framer Motion
- **Modern UI** with neon color scheme and glassmorphism effects

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Components:** Radix UI primitives

## 🎨 Design Features

- Dark theme with bright neon accents (blue, green, cyan, pink, purple)
- Grid pattern background with subtle glow effects
- Terminal-style code display with syntax highlighting
- Animated progress bars for skills visualization
- Card hover effects with smooth transitions
- Mobile-first responsive design

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/georglinks/portfolio
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with every push

### Manual Build

```bash
npm run build
npm start
```

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **`lib/utils.ts`** - Skills data, projects data, and social links
2. **`app/layout.tsx`** - SEO metadata and site information
3. **`components/sections/hero.tsx`** - Name, bio, and stats
4. **`components/sections/about.tsx`** - Professional summary and achievements

### Styling

- **Colors:** Modify neon colors in `tailwind.config.js`
- **Fonts:** Update font imports in `app/globals.css`
- **Animations:** Customize animations in individual component files

### Content

- **Projects:** Add your projects to `projectsData` in `lib/utils.ts`
- **Skills:** Update `skillsData` with your proficiency levels
- **Social Links:** Modify `socialLinks` array with your profiles

## 📊 Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── navigation/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   ├── sections/
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── projects.tsx
│   │   ├── ai-web3.tsx
│   │   └── contact.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts
└── public/
    └── (your images)
```

## 🎯 SEO Optimization

The portfolio includes:
- Optimized meta tags and Open Graph data
- Semantic HTML structure
- Fast loading with Next.js optimization
- Mobile-responsive design
- Accessible components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website:** [georglinks.dev](https://georglinks.dev)
- **Email:** hello@georglinks.dev
- **LinkedIn:** [linkedin.com/in/georglinks](https://linkedin.com/in/georglinks)
- **GitHub:** [github.com/georglinks](https://github.com/georglinks)

---

Built with ❤️ using Next.js and modern web technologies.
