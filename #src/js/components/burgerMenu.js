function toggleMenu () {
  burger.classList.toggle('show')
  nav.classList.toggle('show')
  body.classList.toggle('lock')
}

function disableMenu () {
  burger.classList.remove('show')
  nav.classList.remove('show')
  body.classList.remove('lock')
}