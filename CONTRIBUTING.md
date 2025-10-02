# Contributing to Azure DevOps Mermaid

Thank you for your interest in contributing to Azure DevOps Mermaid! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on GitHub with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (browser, Azure DevOps version, etc.)

### Suggesting Features

We welcome feature suggestions! Please create an issue with:
- A clear description of the feature
- Use cases and benefits
- Any relevant examples or mockups

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our coding standards
3. **Write tests** for your changes
4. **Update documentation** as needed
5. **Run tests** to ensure nothing breaks
6. **Create a pull request** with a clear description

## 🛠️ Development Setup

### Prerequisites

- Node.js 16+ and npm
- Git
- A code editor (VS Code recommended)

### Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/azure-devops-mermaid.git
cd azure-devops-mermaid

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📝 Coding Standards

### JavaScript Style

- Use ES6+ features
- Use `const` and `let`, avoid `var`
- Use arrow functions where appropriate
- Add comments for complex logic
- Keep functions small and focused

### Testing

- Write unit tests for new features
- Ensure all tests pass before submitting PR
- Aim for good code coverage
- Use descriptive test names

### Commits

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add support for custom mermaid themes
fix: resolve table rendering issue in dark mode
docs: update installation instructions
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm test -- --coverage
```

### Writing Tests

Place tests in the `tests/` directory with `.test.js` extension:

```javascript
describe('Feature Name', () => {
  it('should do something', () => {
    // Test code
    expect(result).toBe(expected);
  });
});
```

## 📚 Documentation

- Update README.md for user-facing changes
- Update marketplace/overview.md for marketplace description
- Add entries to marketplace/changelog.md for releases
- Update inline code comments as needed

## 🔄 Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the marketplace/changelog.md following the format
3. The PR will be merged once you have approval from a maintainer
4. Ensure CI checks pass

## 🎯 Areas for Contribution

We especially welcome contributions in:

- **New Features**: Mermaid configuration options, export features, etc.
- **Bug Fixes**: Any reported issues
- **Documentation**: Examples, tutorials, translations
- **Tests**: Improving test coverage
- **Performance**: Optimization improvements

## ❓ Questions?

Feel free to:
- Open an issue for discussion
- Start a GitHub Discussion
- Email: javier.ramos1@gmail.com

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Every contribution, no matter how small, is valuable. Thank you for helping make Azure DevOps Mermaid better!
