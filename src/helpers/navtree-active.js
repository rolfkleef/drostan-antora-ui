'use strict'

module.exports = (thisItem, currentPage) => {
  return isActive(thisItem)

  function isActive (thisItem) {
    return (thisItem.url === currentPage.url) || (thisItem.items && thisItem.items.some(isActive))
  }
}
