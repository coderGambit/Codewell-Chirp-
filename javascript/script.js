let menuButton = document.getElementById('menuButton');
let menuBar = document.getElementById('menuBar');

menuButton.addEventListener('click', ()=>{
    menuBar.classList.toggle('topBarMobileOpened');
});