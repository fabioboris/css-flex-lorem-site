(() => {
  const updateScrollArrow = () => {
    const header = document.querySelector('#content>header')
    const arrow = header.querySelector('.pg-down')

    if (document.documentElement.clientWidth >= 600) {
      arrow.style.display = 'none'
      return
    }

    const currYOffset = window.pageYOffset
    if (currYOffset > header.clientHeight / 2) {
      arrow.style.display = 'none'
    } else {
      arrow.style.display = 'block'
    }
  }

  window.addEventListener('scroll', updateScrollArrow)
  window.addEventListener('resize', updateScrollArrow)
})()