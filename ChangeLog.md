# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

- **`package.json`** carries the npm package version used for tooling and publishing metadata.
- **`vss-extension.json`** carries the Marketplace extension **version**; it may lag or differ from `package.json` between releases—see each release note when aligning both for a Marketplace upload.

Marketplace-facing notes also live under [`marketplace/changelog.md`](./marketplace/changelog.md).

## [Unreleased]

### Changed

- Updated **mermaid** dependency from 10.x to **11.x** (current lock: 11.14.0).

## [1.1.0] - 2024-09-12

### Added

- Relied on **mermaid** 10.9.x for diagram rendering.

## [1.0.0] - 2024-03-01

### Added

- Initial Markdown content renderer for Azure Repos preview: Mermaid fenced blocks in `.md` files are rendered as diagrams.
