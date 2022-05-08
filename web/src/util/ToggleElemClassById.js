/**
 * Toggle Item Class
 *
 * A simple utility to toggle a passed classname to an element for quick n' dirty style changes.
 *
 * onClick={(e) => ToggleElemClassById(e, 'inactive', 'sidebar')}
 */
const ToggleElemClassById = (elem, className, targId) => {
  elem.preventDefault()

  var targ = document.getElementById(targId)

  var newClass = ' ' + targ.className.replace(/[\t\r\n]/g, ' ') + ' '

  if (new RegExp(' ' + className + ' ').test(' ' + targ.className + ' ')) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ')
    }
    targ.className = newClass.replace(/^\s+|\s+$/g, '')
  } else {
    targ.className += ' ' + className
  }
}

export default ToggleElemClassById
