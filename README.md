# DBlayer Docs


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Content Management](#content-management)
- [Build and Deployment](#build-and-deployment)
- [Scripts](#scripts)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Overview

This documentation site is designed to provide comprehensive guides, API references, and feature documentation for dblayer. It supports MDX for rich content authoring, includes built-in search functionality, and features a responsive design with dark mode support.

## Features

- **MDX Support**: Write documentation with React components embedded in Markdown
- **Full-Text Search**: Client-side search functionality with pre-generated search index
- **Syntax Highlighting**: Code blocks with syntax highlighting using Prism
- **Math Rendering**: LaTeX math equations support via KaTeX
- **Mermaid Diagrams**: Create flowcharts and diagrams with Mermaid
- **Dark Mode**: Built-in theme switching with next-themes
- **Responsive Design**: Mobile-first responsive layout
- **SEO Optimized**: Automatic sitemap generation and meta tags
- **Table of Contents**: Auto-generated TOC from heading structure
- **Breadcrumb Navigation**: Hierarchical page navigation
- **Analytics Ready**: Google Tag Manager integration
- **Custom Components**: Pre-built components for notes, cards, file trees, and more

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Content**: [MDX](https://mdxjs.com/) via next-mdx-remote
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Code Highlighting**: [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus)
- **Math Rendering**: [KaTeX](https://katex.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.17 or higher
- **pnpm**: Version 8.0 or higher (recommended) or npm/yarn
- **Git**: For version control

You can verify your installations:

```bash
node --version
pnpm --version
```

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/dblayer-dev/docs.dblayer.dev.git
cd docs.dblayer.dev
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables** (optional)

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_ANALYTICS_ID=your_gtm_id_here
```

## Development

Start the development server:

```bash
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

The development server supports:
- Hot Module Replacement (HMR)
- Fast Refresh for React components
- Instant MDX compilation

## Project Structure

```
docs.dblayer.dev/
├── app/                      # Next.js App Router pages
│   ├── docs/                # Documentation pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── sitemap.ts           # Sitemap generation
│   └── robots.ts            # Robots.txt generation
├── components/              # React components
│   ├── markdown/            # MDX components (cards, notes, etc.)
│   ├── navigation/          # Navigation components
│   ├── providers/           # Context providers
│   └── ui/                  # Base UI components
├── contents/                # MDX content files
│   └── docs/                # Documentation content
│       ├── basic-setup/
│       ├── endpoint/
│       ├── features/
│       ├── guides/
│       └── help/
├── lib/                     # Utility functions and configuration
│   ├── components.ts        # MDX component mapping
│   ├── config.ts            # Environment configuration
│   ├── markdown.ts          # MDX parsing and processing
│   ├── meta.ts              # Metadata utilities
│   ├── pageroutes.ts        # Route configuration
│   └── utils.ts             # Helper functions
├── public/                  # Static assets
│   └── search-data/         # Generated search index
├── scripts/                 # Build scripts
│   └── content.ts           # Search index generation
├── settings/                # Site configuration
│   ├── documents.ts         # Documentation structure
│   ├── navigation.tsx       # Navigation links
│   └── settings.ts          # Site settings
├── styles/                  # Global styles
│   └── globals.css          # Tailwind and custom CSS
└── package.json             # Dependencies and scripts
```

## Configuration

### Site Settings

Edit [settings/settings.ts](settings/settings.ts) to configure:

```typescript
export const url = "https://docs.dblayer.dev"
export const sitename = "dblayer"
export const description = "Your site description"
export const keywords = ["keyword1", "keyword2"]
export const branding = true           // Show branding footer
export const rightsidebar = true       // Enable right sidebar
export const tableofcontent = true     // Show table of contents
export const feedbackedit = true       // Show edit feedback button
```

### Navigation

Configure navigation in [settings/navigation.tsx](settings/navigation.tsx):

```typescript
export const Navigations = [
  {
    title: "Docs",
    href: `/docs${PageRoutes[0].href}`,
  },
  {
    title: "Home",
    href: "https://www.dblayer.dev/",
    external: true,
  },
]

export const GitHubLink = {
  href: "https://github.com/scorcism/docs.dblayer.dev",
}
```

### Documentation Structure

Define your documentation hierarchy in [settings/documents.ts](settings/documents.ts). This controls the sidebar navigation and page routing.

## Content Management

### Creating Documentation Pages

1. Create a new directory under `contents/docs/`
2. Add an `index.mdx` file with frontmatter:

```mdx
---
title: Your Page Title
description: Page description for SEO
keywords: ["keyword1", "keyword2"]
---

# Your Page Title

Your content here...
```

3. Update [settings/documents.ts](settings/documents.ts) to include the new page in navigation

### Available MDX Components

The documentation supports custom components:

- `<Note>` - Information callouts
- `<Card>` and `<CardGrid>` - Card layouts
- `<Tabs>`, `<TabsList>`, `<TabsTrigger>` - Tabbed content
- `<Step>` and `<StepItem>` - Step-by-step guides
- `<FileTree>`, `<Folder>`, `<File>` - File structure visualization
- `<Mermaid>` - Mermaid diagram rendering

Example:

```mdx
<Note>
This is an important note for users.
</Note>

<CardGrid>
  <Card title="Feature 1" subtitle="Description">
    Content here
  </Card>
</CardGrid>
```

## Build and Deployment

### Production Build

```bash
pnpm build
```

This will:
1. Generate the search index
2. Compile TypeScript and MDX files
3. Optimize assets
4. Create a production-ready build in `.next/`

### Start Production Server

```bash
pnpm start
```

### Generate Search Index

The search index is automatically generated during build. To manually regenerate:

```bash
pnpm generate-content-json
```

### Deployment Options

This project can be deployed to any platform that supports Next.js:

- **Vercel**: One-click deployment (recommended)
- **Netlify**: Configure build command as `pnpm build`
- **Docker**: Use the standard Next.js Docker configuration
- **Self-hosted**: Use `pnpm start` after building

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Create production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Fix ESLint errors |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |
| `pnpm generate-content-json` | Generate search index |

## Customization

### Styling

- Global styles: [styles/globals.css](styles/globals.css)
- Tailwind config: Uses Tailwind CSS 4 with PostCSS
- Component styles: Inline with Tailwind classes

### Theme

The theme system uses `next-themes` and supports:
- Light mode
- Dark mode
- System preference detection

Customize theme colors in [styles/globals.css](styles/globals.css) using CSS variables.

### Typography

The project uses `@tailwindcss/typography` for prose content. Customize typography in [components/ui/typography.tsx](components/ui/typography.tsx).

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Run `pnpm lint` and `pnpm format` before committing
- Write clear commit messages
- Update documentation for any new features
- Ensure all existing tests pass