function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const avatar = document.querySelector('#profile img')


  if(html.classList.contains('light')) {
  avatar.setAttribute('src', './assets/avatar-light.png')
  } else {
    avatar.setAttribute('src', 'https://github.com/Imperat0.png')
  }
}






