import { marked } from "marked";
import Mermaid from "mermaid";

const mermaidViewer = (function () {
	"use strict";
	return {
		renderContent: function (rawContent, options) {
			// Configure marked to support GFM (GitHub Flavored Markdown)
			marked.setOptions({
				gfm: true,
				breaks: true,
			});

			// Convert markdown to HTML with GFM support (including tables)
			var resultHtml = marked.parse(rawContent);

			// Get the container and inject the rendered HTML
			var container = document.getElementById('md-mermaid-viewer');
			container.innerHTML = resultHtml;
			
			// Find all mermaid code blocks
			var mermaidParagraphs = container.querySelectorAll('pre > code.language-mermaid')

			// Parse the mermaid strings
			var parser = new DOMParser();
			mermaidParagraphs.forEach((p) => {
				var parsed = parser.parseFromString(p.innerHTML, 'text/html')
				p.innerHTML = parsed.documentElement.textContent

				// Add class to indicate the node should be rendered
				p.classList.add('mermaid')
			})

			// Generate the mermaid diagrams
			Mermaid.run()
		}
	};
}());

export default mermaidViewer


