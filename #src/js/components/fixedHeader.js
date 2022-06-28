window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0)
  logo.classList.toggle('sticky', window.scrollY > 0)
})