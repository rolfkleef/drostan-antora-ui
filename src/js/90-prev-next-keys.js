;(function () {
  'use strict'

  /* Go to previous or next page with arrow keys (when not in a text input field) */
  document.addEventListener('keydown', function (event) {
    const focusElement = document.activeElement.tagName
    const notHere = ['INPUT', 'TEXTAREA'].includes(focusElement.toUpperCase())
    const keyModeOk = !(event.altKey | event.ctrlKey | event.shiftKey | event.metaKey)

    if (!notHere & keyModeOk) {
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
      }
    }
  }, false)
})()
