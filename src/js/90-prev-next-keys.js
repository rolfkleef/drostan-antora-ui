;(function () {
  'use strict'

  /* Go to previous or next page with arrow keys (when not in a text input field) */
  document.addEventListener('keydown', function (event) {
    const notHere = ['INPUT', 'TEXTAREA']
    const focusElement = document.activeElement.tagName.toUpperCase()

    if (!(notHere.includes(focusElement))) {
      switch (event.key) {
        case 'ArrowLeft':
          if (document.querySelector('link[rel="prev"]')) {
            window.location.assign(document.querySelector('link[rel="prev"]').href)
          }
          break
        case 'ArrowRight':
          if (document.querySelector('link[rel="next"]')) {
            window.location.assign(document.querySelector('link[rel="next"]').href)
          }
          break
      }
    }
  }, false)
})()
