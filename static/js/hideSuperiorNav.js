let expandButton = document.getElementById('expandButton');
let expandIcon = document.getElementById('expandIcon');
let navSuperior = document.getElementById('nav-superior');

//Guarda el estado del menu del poli
let saveStateMenu;

//Funcion para ocultar/mostrar el menu
function hideMenu(){
    expandIcon.textContent = 'expand_more';
    navSuperior.classList.add('nav-superior-hidden');
    expandButton.classList.add('nav-buttonExpand');
    expandButton.classList.add('shadow4');
}

function showMenu(){
    expandIcon.textContent = 'expand_less';
    navSuperior.classList.remove('nav-superior-hidden');
    expandButton.classList.remove('nav-buttonExpand');
    expandButton.classList.remove('shadow4');
}

//Inicializa el valor según memoria
if(localStorage.getItem('menuHide') === 'hide'){
    hideMenu();
}else if(localStorage.getItem('menuHide') === 'show'){
    showMenu();
}else{
    localStorage.setItem('menuHide', 'show');
    showMenu();
}

//Detonamos el evento
expandButton.addEventListener('click', () => {
    if(expandIcon.textContent === 'expand_less'){
        localStorage.setItem('menuHide', 'hide');
        hideMenu();
    }else{
        localStorage.setItem('menuHide', 'show');
        showMenu();
    }
})
