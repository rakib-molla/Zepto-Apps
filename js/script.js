const userMenu = document.getElementById('user-menu-button');

const userMenuToggle = document.getElementById('user-menu-toggle');

userMenu.addEventListener('click', function(){
   userMenuToggle.classList.toggle('hidden')
});