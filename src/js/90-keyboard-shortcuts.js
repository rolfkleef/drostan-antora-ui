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
          case 'p':
            if (document.querySelector('link[rel="prev"]')) {
              window.location.assign(document.querySelector('link[rel="prev"]').href)
            }
            break
          case 'ArrowRight':
          case 'j':
          case 'n':
            if (document.querySelector('link[rel="next"]')) {
              window.location.assign(document.querySelector('link[rel="next"]').href)
            }
            break
          case '/':
            document.getElementById('search-input').focus()
            event.preventDefault()
            break
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
