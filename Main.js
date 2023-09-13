var hamburgere = document.querySelector('.hamburger');
var mobileLinks = document.querySelector('.mobile-links-holder');
var shower = document.querySelector('.backdrop')
function AddClass () {
    hamburgere.classList.toggle('show');
    mobileLinks.classList.toggle('showLinks');
    shower.classList.toggle('.showLinks')
}