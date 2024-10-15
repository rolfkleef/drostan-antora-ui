import hljs from 'highlight.js'
import '../css/theme/hljs-github-light-dark.css'
import hl_treeview from './vendor/hljs-treeview.js'

// Asciidoctor puts callouts as HTML in <pre><code> blocks.
// HighlightJS likes to strip those out.
// So we replace them with a placeholder before highlighting and restore them after highlighting.
hljs.addPlugin({
  'before:highlightElement': ({ el }) => {
    // Store callouts in a map and replace them with placeholders
    el.innerHTML = el.innerHTML.replace(/<i class="conum" data-value="(\d+)"><\/i><b>\(\d+\)<\/b>/g, (match, index) => {
      return `___CALL_OUT_PLACEHOLDER_${index}___`; // Replace with a unique placeholder
    });
  },
  'after:highlightElement': ({ el }) => {
    // Restore callouts by replacing the placeholders with the original HTML
    el.innerHTML = el.innerHTML.replace(/___CALL_OUT_PLACEHOLDER_(\d+)___/g, (match, index) => {
      return `<i class="conum" data-value="${index}"></i><b>(${index})</b>`; // Replace each placeholder with the original callout HTML
    });
  }
});

hl_treeview(hljs)

hljs.highlightAll()
