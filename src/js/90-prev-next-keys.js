document.onkeydown = function (evt) {
  evt = evt || window.event
  switch (evt.keyCode) {
    case 37:
      if (document.querySelector('link[rel="prev"]')) {
        window.location.assign(document.querySelector('link[rel="prev"]').href)
      }
      break
    case 39:
      if (document.querySelector('link[rel="next"]')) {
        window.location.assign(document.querySelector('link[rel="next"]').href)
      }
      break
  }
}
