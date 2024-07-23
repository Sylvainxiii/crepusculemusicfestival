import './assets/styles/style.css'

document.querySelector('#app').innerHTML = `
  <div id="accueil-entete">
  <video width="100%" autoplay muted playsinline loop>
  <source src="/teaser.mp4" type="video/mp4" />
  </video>
  <img src="logo.svg" id="accueil-entete-logo" />
  </div>
`
