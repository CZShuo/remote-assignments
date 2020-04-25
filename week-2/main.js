const welcomeMessage = document.querySelector('.welcome-message h1')

welcomeMessage.addEventListener('click', () => {
    welcomeMessage.textContent = 'Have a Good Time!';
})

const triggerIcon = document.querySelector('#trigger');
const hiddenMenu = document.querySelector('#hidden-menu');
const closeMenu = document.querySelector('#close-menu');

triggerIcon.addEventListener('click', () => {
    hiddenMenu.style.display = 'block';
})
closeMenu.addEventListener('click', () => {
    hiddenMenu.style.display = 'none';
})

const actionButton = document.querySelector('.action-button');
const addOn = document.querySelector('#add-on')

actionButton.addEventListener('click', () => {
    addOn.style.display = 'block';
})