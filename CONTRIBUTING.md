# Contributing to HackerTroupe Website

Thank you for considering contributing to the HackerTroupe website! This document outlines the process for contributing to this project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Adding Content](#adding-content)
- [Submitting Changes](#submitting-changes)
- [Code Style](#code-style)
- [Reporting Issues](#reporting-issues)

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your changes
4. Make your changes
5. Test your changes
6. Submit a pull request

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- Git

### Installation

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/hackertroupe-website.git
cd hackertroupe-website

# Install dependencies
npm install

# Start development server
npm run dev
```

## Making Changes

### Branch Naming Convention

Use descriptive branch names:

- `feature/add-new-member`
- `fix/navigation-bug`
- `docs/update-readme`
- `refactor/clean-up-styles`

### Commit Messages

Write clear, concise commit messages:

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit first line to 72 characters
- Reference issues when applicable

Examples:

```
Add dropdown filter for year selection
Fix navigation menu mobile responsiveness
Update README with deployment instructions
Refactor member card component
```

## Adding Content

### Adding a New Member

1. Open `src/data/members.ts`
2. Use the template from `templates/member-template.md`
3. Add your member object to the array
4. Test the changes in the Members page

### Adding a New Operation

1. Open `src/data/operations.ts`
2. Use the template from `templates/operation-template.md`
3. Add your operation object to the array
4. Test the changes in the Operations page

### Adding a New Post

1. Open `src/data/posts.ts`
2. Use the template from `templates/post-template.md`
3. Add your post object with full Markdown content
4. Test the changes in the Posts page

## Submitting Changes

1. **Test Your Changes**

   ```bash
   npm run build
   ```

   Ensure the build completes successfully without errors.

2. **Push to Your Fork**

   ```bash
   git add .
   git commit -m "Your descriptive commit message"
   git push origin your-branch-name
   ```

3. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template with:
     - Description of changes
     - Type of change (feature, bugfix, docs, etc.)
     - Screenshots if UI changes
     - Related issues
   - Submit the pull request

4. **PR Review Process**
   - Maintainers will review your PR
   - Address any requested changes
   - Once approved, your PR will be merged

## Code Style

### TypeScript/JavaScript

- Use TypeScript for type safety
- Use functional components with hooks
- Follow existing code patterns
- Use meaningful variable and function names
- Add comments for complex logic

### CSS

- Use CSS variables for colors and common values
- Follow the existing naming conventions
- Keep specificity low
- Use mobile-first approach for responsive design

### File Organization

- Components in `src/components/`
- Pages in `src/pages/`
- Data files in `src/data/`
- Utilities in `src/utils/`
- Styles in `src/styles/`

## Code Review Checklist

Before submitting, ensure:

- [ ] Code builds without errors
- [ ] Changes work in both light and dark modes
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] No console errors or warnings
- [ ] TypeScript types are properly defined
- [ ] New features are documented
- [ ] Existing functionality is not broken

## Reporting Issues

### Bug Reports

Include:

- Clear title and description
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser and OS information

### Feature Requests

Include:

- Clear description of the feature
- Use case and benefits
- Possible implementation approach
- Examples or mockups if available

## Questions?

If you have questions:

- Check existing issues and PRs
- Review documentation
- Open a new issue with the "question" label

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

---

Thank you for contributing to HackerTroupe! 🎉
