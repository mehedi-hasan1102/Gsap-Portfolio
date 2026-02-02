# GSAP Portfolio

A modern, animated portfolio website built with Next.js 16, React 19, GSAP, and Tailwind CSS. Features smooth animations, responsive design, and a clean user interface showcasing projects, skills, experience, and certifications.

## ✨ Features

- **Smooth Animations** - Powered by GSAP (GreenSock Animation Platform) for fluid, professional animations
- **Modern Stack** - Built with Next.js 16 App Router and React 19
- **Responsive Design** - Fully responsive layout optimized for all devices
- **TypeScript** - Type-safe codebase for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Component-Based** - Modular architecture with reusable components
- **SEO Optimized** - Next.js optimization features for better search engine visibility

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/)
- **UI Library:** [React 19](https://react.dev/)
- **Animation:** [GSAP 3.14](https://greensock.com/gsap/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 📁 Project Structure

```
├── app/
│   ├── components/         # React components
│   │   ├── About.tsx
│   │   ├── Certificates.tsx
│   │   ├── Confetti.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/
│   ├── assets/            # Static assets
│   │   ├── images/
│   │   └── video/
│   └── data/              # JSON data files
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd Gsap-Portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## 📝 Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint for code quality checks

## 🎨 Customization

### Update Content

- **Projects:** Edit [public/data/projects.json](public/data/projects.json)
- **Components:** Modify components in [app/components/](app/components/)
- **Styles:** Update [app/globals.css](app/globals.css) or use Tailwind classes

### Add Assets

- Place images in `public/assets/images/`
- Place videos in `public/assets/video/`
- Update data files in `public/data/`

## 🌐 Deployment

### Deploy to Vercel

The easiest way to deploy this portfolio is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

For other deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For any inquiries or feedback, please reach out through the contact form on the portfolio website.

---

Built with ❤️ using Next.js and GSAP
