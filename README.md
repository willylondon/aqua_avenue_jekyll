# Aqua Avenue - Jekyll Portfolio & Blog

A modern, minimal Jekyll website featuring a blog, portfolio, and dark mode support. Optimized for GitHub Pages deployment.

## Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌓 Dark mode toggle with localStorage persistence
- 📝 Medium-like typography for optimal reading experience
- 🎨 Clean, professional design with neutral color palette
- 💻 Rouge syntax highlighting for code blocks
- 🚀 GitHub Pages compatible
- ⚡ Fast and lightweight
- 📊 Project portfolio with custom collection
- 📰 Blog with post listings

## Tech Stack

- **Jekyll** 3.9.3
- **GitHub Pages** compatible
- **Rouge** for syntax highlighting
- Vanilla JavaScript (no dependencies)
- Pure CSS (no frameworks)

## Quick Start

### Prerequisites

- Ruby (2.7.0 or higher)
- RubyGems
- Bundler

### Installation

1. **Clone the repository** (or download the files)
   ```bash
   cd aqua_avenue_jekyll
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000`

### Build for Production

```bash
bundle exec jekyll build
```

The site will be generated in the `_site` directory.

## GitHub Pages Deployment

### Option 1: Direct Push to GitHub Pages

1. **Create a new repository** on GitHub (e.g., `username.github.io` or any repo name)

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Aqua Avenue Jekyll site"
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to **Pages** section
   - Under **Source**, select `main` branch
   - Select `/ (root)` folder
   - Click **Save**

4. **Configure base URL** (if not using username.github.io)
   - Edit `_config.yml`
   - Set `baseurl: "/repository-name"`
   - Commit and push changes

5. **Access your site**
   - User/Organization site: `https://username.github.io`
   - Project site: `https://username.github.io/repository-name`

### Option 2: Using GitHub Actions (Recommended)

GitHub Pages now supports Jekyll automatically. Just push your code and it will build automatically.

## Project Structure

```
aqua_avenue_jekyll/
├── _config.yml           # Jekyll configuration
├── Gemfile              # Ruby dependencies
├── README.md            # This file
├── index.md             # Homepage
├── portfolio.md         # Portfolio page
├── blog.md              # Blog listing page
├── _layouts/            # HTML templates
│   ├── default.html     # Base layout
│   ├── home.html        # Homepage layout
│   ├── page.html        # Standard page layout
│   ├── post.html        # Blog post layout
│   └── project.html     # Project detail layout
├── _includes/           # Reusable components
│   ├── head.html        # HTML head with meta tags
│   ├── header.html      # Site header
│   ├── navigation.html  # Navigation menu
│   └── footer.html      # Site footer
├── assets/              # Static assets
│   ├── css/
│   │   └── main.css     # All styles (responsive + dark mode)
│   └── js/
│       └── theme-toggle.js  # Dark mode functionality
├── _posts/              # Blog posts (Markdown)
│   ├── 2026-01-15-building-scalable-web-applications.md
│   └── 2026-01-10-modern-frontend-development-practices.md
└── _projects/           # Portfolio projects (Markdown)
    ├── ai-powered-chatbot.md
    └── cloud-infrastructure-automation.md
```

## Adding Content

### Creating a New Blog Post

1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.md`
2. Add front matter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2026-01-20
   categories: [category1, category2]
   tags: [tag1, tag2]
   excerpt: "A brief description of your post"
   ---
   ```
3. Write your content in Markdown below the front matter

### Creating a New Project

1. Create a new file in `_projects/` with the format: `project-name.md`
2. Add front matter:
   ```yaml
   ---
   layout: project
   title: "Project Name"
   description: "Brief project description"
   technologies: [Tech1, Tech2, Tech3]
   github: https://github.com/username/project
   demo: https://project-demo.com
   featured: true
   image: /assets/images/project-image.jpg
   ---
   ```
3. Write your project details in Markdown below the front matter

## Customization

### Colors

Edit the CSS variables in `assets/css/main.css`:

```css
:root {
  --primary-color: #2563eb;
  --background-color: #ffffff;
  --text-color: #1f2937;
  /* ... etc */
}
```

### Navigation

Edit `_includes/navigation.html` to add/remove menu items.

### Social Links

Update social media usernames in `_config.yml`:

```yaml
twitter_username: your_username
instagram_username: your_username
tiktok_username: your_username
github_username: your_username
```

### Site Information

Edit `_config.yml` to update:
- Site title
- Description
- Email
- Author information

## Dark Mode

The dark mode toggle is implemented with vanilla JavaScript and persists user preference using localStorage. The icon automatically changes between sun (☀️) and moon (🌙) based on the current theme.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Minimal CSS (no frameworks)
- No external dependencies for dark mode
- Optimized images (use compressed formats)
- Static site generation for fast loading

## Troubleshooting

### Bundle install fails
```bash
gem install bundler
bundle update
```

### Port 4000 already in use
```bash
bundle exec jekyll serve --port 4001
```

### Changes not showing up
```bash
bundle exec jekyll serve --force_polling
```

Or clear the cache:
```bash
bundle exec jekyll clean
bundle exec jekyll serve
```

## License

Free to use for personal and commercial projects.

## Contact

- Email: willardwells@gmail.com
- Twitter: [@willylondon](https://twitter.com/willylondon)
- Instagram: [@willylondon](https://instagram.com/willylondon)
- TikTok: [@willylondon](https://tiktok.com/@willylondon)

---

**Built with ❤️ using Jekyll**
