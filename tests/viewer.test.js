/**
 * @jest-environment jsdom
 */

import mermaidViewer from '../src/viewer';

describe('Mermaid Viewer', () => {
  beforeEach(() => {
    // Set up DOM
    document.body.innerHTML = '<div id="md-mermaid-viewer"></div>';
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  describe('renderContent', () => {
    it('should render basic markdown', () => {
      const markdown = '# Hello World\n\nThis is a test.';
      mermaidViewer.renderContent(markdown);
      
      const container = document.getElementById('md-mermaid-viewer');
      expect(container.innerHTML).toContain('<h1');
      expect(container.innerHTML).toContain('Hello World');
      expect(container.innerHTML).toContain('This is a test');
    });

    it('should render GFM tables', () => {
      const markdown = `
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`;
      mermaidViewer.renderContent(markdown);
      
      const container = document.getElementById('md-mermaid-viewer');
      expect(container.innerHTML).toContain('<table');
      expect(container.innerHTML).toContain('<th');
      expect(container.innerHTML).toContain('<td');
      expect(container.innerHTML).toContain('Header 1');
      expect(container.innerHTML).toContain('Cell 1');
    });

    it('should identify mermaid code blocks', () => {
      const markdown = `
# Diagram

\`\`\`mermaid
graph TD
    A --> B
\`\`\`
`;
      mermaidViewer.renderContent(markdown);
      
      const container = document.getElementById('md-mermaid-viewer');
      const mermaidElements = container.querySelectorAll('.mermaid');
      expect(mermaidElements.length).toBeGreaterThan(0);
    });

    it('should render lists correctly', () => {
      const markdown = `
- Item 1
- Item 2
- Item 3
`;
      mermaidViewer.renderContent(markdown);
      
      const container = document.getElementById('md-mermaid-viewer');
      expect(container.innerHTML).toContain('<ul');
      expect(container.innerHTML).toContain('<li');
      expect(container.innerHTML).toContain('Item 1');
    });

    it('should handle empty content', () => {
      mermaidViewer.renderContent('');
      
      const container = document.getElementById('md-mermaid-viewer');
      expect(container.innerHTML).toBe('');
    });

    it('should render inline code', () => {
      const markdown = 'This is `inline code` example.';
      mermaidViewer.renderContent(markdown);
      
      const container = document.getElementById('md-mermaid-viewer');
      expect(container.innerHTML).toContain('<code');
      expect(container.innerHTML).toContain('inline code');
    });

    it('should render links', () => {
      const markdown = '[Click here](https://example.com)';
      mermaidViewer.renderContent(markdown);
      
      const container = document.getElementById('md-mermaid-viewer');
      expect(container.innerHTML).toContain('<a');
      expect(container.innerHTML).toContain('href="https://example.com"');
      expect(container.innerHTML).toContain('Click here');
    });

    it('should render strikethrough (GFM)', () => {
      const markdown = '~~strikethrough text~~';
      mermaidViewer.renderContent(markdown);
      
      const container = document.getElementById('md-mermaid-viewer');
      expect(container.innerHTML).toContain('<del');
      expect(container.innerHTML).toContain('strikethrough text');
    });

    it('should handle multiple mermaid blocks', () => {
      const markdown = `
\`\`\`mermaid
graph TD
    A --> B
\`\`\`

Some text

\`\`\`mermaid
sequenceDiagram
    A->>B: Hello
\`\`\`
`;
      mermaidViewer.renderContent(markdown);
      
      const container = document.getElementById('md-mermaid-viewer');
      const mermaidElements = container.querySelectorAll('.mermaid');
      expect(mermaidElements.length).toBe(2);
    });

    it('should not break on special characters in markdown', () => {
      const markdown = '# Test & Special < Characters > "Quotes"';
      mermaidViewer.renderContent(markdown);
      
      const container = document.getElementById('md-mermaid-viewer');
      expect(container.innerHTML).toContain('<h1');
    });
  });
});
