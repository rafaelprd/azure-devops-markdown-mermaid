# Changelog

All notable changes to the Azure DevOps Mermaid extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-10-02

### 🎉 Major Release - Complete Rewrite

This is a major release that completely modernizes the extension with breaking changes and significant improvements.

### ✨ Added
- **GitHub Flavored Markdown Support**: Full GFM compatibility including tables, task lists, and strikethrough
- **Professional Table Styling**: Beautiful table formatting with borders, headers, alternating rows, and hover effects
- **Mermaid v11**: Upgraded to the latest Mermaid.js version (11.12.0) with new diagram types and features
- **Modern Dependencies**: All packages updated to their latest stable versions
- **Enhanced Performance**: Optimized rendering and build process
- **Comprehensive Tests**: Added Jest testing framework with unit tests
- **Improved Documentation**: Complete rewrite of README and marketplace overview
- **Better Error Handling**: More robust error messages and graceful fallbacks

### 🔧 Changed
- **BREAKING**: Replaced CommonMark parser with Marked.js for better GFM support
- **BREAKING**: Minimum required browser versions updated for better performance
- Upgraded webpack from v5.90 to v5.102
- Upgraded webpack-cli from v5.1 to v6.0
- Upgraded webpack-dev-server from v5.0 to v5.2
- Upgraded Azure DevOps SDK from v4.0 to v4.1
- Renamed npm scripts: `serve` → `dev` for clarity
- Updated extension ID to `azure-devops-mermaid`
- Changed publisher from `talisca` to `jramos`
- Updated repository URLs to reflect new ownership

### 🔨 Fixed
- Tables now render correctly with proper HTML structure
- Improved Mermaid code block detection and parsing
- Better handling of special characters in markdown
- Fixed rendering issues with nested code blocks
- Resolved styling conflicts with Azure DevOps themes

### 📝 Documentation
- Completely rewritten README with examples and detailed usage
- New professional marketplace overview with feature highlights
- Added comprehensive troubleshooting guide
- Included contribution guidelines
- Added development setup instructions

### 🗑️ Removed
- Removed CommonMark dependency (replaced with Marked)
- Removed outdated build artifacts
- Cleaned up unused dev dependencies

---

## [1.0.1] - Previous Version

### Initial release from original author
- Basic Mermaid diagram rendering
- CommonMark markdown parsing
- Azure DevOps integration

---

## Upgrade Guide

### Migrating from 1.x to 2.0

The 2.0 release is a drop-in replacement with no configuration changes required. However, note these improvements:

**What stays the same:**
- All your existing Mermaid diagrams continue to work
- Same installation process
- No configuration changes needed

**What's better:**
- Tables now render beautifully (they may have been broken before)
- More Mermaid diagram types supported
- Better performance and reliability
- GFM features like task lists now work

**Action required:**
- None! Just update the extension and enjoy the improvements.

---

## Support

- Report bugs: [GitHub Issues](https://github.com/javiramos1/azure-devops-mermaid/issues)
- Feature requests: [GitHub Discussions](https://github.com/javiramos1/azure-devops-mermaid/discussions)
- Email: javier.ramos1@gmail.com

---

*For the complete list of changes, see the [commit history](https://github.com/javiramos1/azure-devops-mermaid/commits/main).*
