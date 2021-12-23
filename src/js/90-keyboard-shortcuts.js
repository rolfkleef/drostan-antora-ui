;(function () {
  'use strict'

  /*
  When not in a text input field:
  - Go to previous or next page with arrow keys, j/k/n/p
  - Focus search box with "/"
  When in input field:
  - Remove focus with Esc
  */
  document.addEventListener('keydown', function (event) {
    const input = ['INPUT', 'TEXTAREA'].includes(event.target.tagName)
    const keyModified = event.altKey | event.ctrlKey | event.shiftKey | event.metaKey

    if (!keyModified) {
      if (!input) {
        switch (event.key) {
          case 'ArrowLeft':
          case 'k':
          case 'p': {
            const prev = document.querySelector('link[rel="prev"]')
            if (prev) window.location.assign(prev.href)
            break
          }
          case 'ArrowRight':
          case 'j':
          case 'n': {
            const next = document.querySelector('link[rel="next"]')
            if (next) window.location.assign(next.href)
            break
          }
          case '/': {
            const search = document.getElementById('search-input')
            if (search) search.focus()
            event.preventDefault()
            break
          }
        }
      } else {
        switch (event.key) {
          case 'Escape':
            document.activeElement.blur()
            break
        }
      }
    }
  }, false)
})()
