window.addEventListener('load', ()=> {

    const menu_hamburguer = document.getElementById('icon-hamburguer');
    const menu_lateral = document.getElementById('menu-lateral');
    const icon_cruz = document.querySelector('.icon-cruz');

    menu_hamburguer.addEventListener('click', () => {
        menu_lateral.style.display = 'block';
    })

    icon_cruz.addEventListener('click', () => {
        menu_lateral.style.display = 'none';
    })

})