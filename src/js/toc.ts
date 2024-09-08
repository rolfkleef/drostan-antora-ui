const tocElement = document.getElementById('toc');

// Intersection Observer to mark active ToC items
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    const tocItem = tocElement?.querySelector(`li[data-id="${entry.target.id}"]`);
    if (entry.isIntersecting) {
      tocItem?.classList.add('is_active');
    } else {
      tocItem?.classList.remove('is_active');
    }
  });
}, {
  rootMargin: '120px 0px 0px 0px',
  threshold: 0.9
});

const addToc = function(targetElement: HTMLElement): void {
  const headings = document.querySelectorAll('article h2[id]:not(.discrete), article h3[id]:not(.discrete)');

  const toc = document.createElement('ul');
  targetElement.appendChild(toc);

  headings.forEach(heading => {
    const item = document.createElement('li');
    toc.appendChild(item);
    item.classList.add(heading.tagName.toLowerCase());
    item.setAttribute('data-id', heading.id);

    const link = document.createElement('a');
    item.appendChild(link);
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;

    observer.observe(heading)
  })
}

export default {
  if (tocElement) {
    addToc(tocElement);
  }
}
