const tab = document.querySelectorAll('.tab__item')

tab.forEach((el) => {
  el.addEventListener('click', () => {
    tab.forEach((event) => {
      event.classList.remove('active')
    })
    el.classList.add('active')
  })
})