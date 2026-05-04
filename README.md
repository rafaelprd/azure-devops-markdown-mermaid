# Markdown Mermaid Renderer (Azure DevOps)

Azure DevOps extension that renders [**Mermaid**](https://mermaid.js.org/) diagrams embedded in Markdown (`.md`) when you preview files in Azure Repos.

The extension contributes a [**content renderer**](https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-content-markdown-extension) wired in [`vss-extension.json`](./vss-extension.json): Markdown is parsed to HTML with [commonmark](https://www.npmjs.com/package/commonmark); fenced code blocks whose language tag is `mermaid` are passed to [mermaid](https://www.npmjs.com/package/mermaid), then diagrams are drawn in the preview.

## Features

- Renders fenced code blocks labeled `mermaid` inside Markdown.
- Works with diagram types supported by the bundled Mermaid version (flowcharts, sequence diagrams, class diagrams, Gantt charts, and others per [Mermaid docs](https://mermaid.js.org/)).

## Prerequisites

- [Node.js](https://nodejs.org/) (current LTS is recommended)
- npm

## Scripts

Install dependencies:

```bash
npm install
```

Run a local webpack dev server to try the viewer against sample Markdown (see [`dev/`](./dev/) and [`dev/test.md`](./dev/test.md)):

```bash
npm run serve
```

Production bundle and Marketplace package ([`.vsix`](https://learn.microsoft.com/en-us/azure/devops/extend/publish/overview)):

```bash
npm run build
```

This generates `dist/` and runs `tfx-cli extension create` to produce the VSIX in the project root (filename varies with publisher/id/version from `vss-extension.json`).

## Documentation

- [Marketplace listing copy](./marketplace/overview.md) (`details` content for the packaged extension).
- [Change history](./ChangeLog.md).

## License

[ISC](./LICENSE) — see also `license` / `author` in [`package.json`](./package.json).
