const hamburgerLines = document.querySelector(".header-nav-hamburger-hamb");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerLines.addEventListener('click', () => {
  if(hamburgerMenu.style.display === "block"){
    hamburgerMenu.style.display = "none"
  }else {
    hamburgerMenu.style.display = "block"
  }
})