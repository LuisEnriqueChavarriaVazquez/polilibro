//Botones del menu
let menuIconUnity = document.getElementById('menuIconUnity');
let menuIconUnityContent = document.getElementById('menuIconUnityContent');


//Elementos del menu
let lateralUnityMenuBackOne = document.getElementById('lateralUnityMenuBackOne');
let lateralUnityMenuBackTwo = document.getElementById('lateralUnityMenuBackTwo');
let lateralUnityMenuBackThree = document.getElementById('lateralUnityMenuBackThree');
let lateralUnityMenuBackFour = document.getElementById('lateralUnityMenuBackFour');
let lateralUnityMenu = document.getElementById('lateralUnityMenu');

//Click al boton
menuIconUnity.addEventListener('click', () => {
    if(menuIconUnityContent.textContent === 'menu'){
        menuIconUnityContent.textContent = 'close';
        lateralUnityMenuBackOne.classList.add('menuLateralWidthHide');
        lateralUnityMenuBackTwo.classList.add('menuLateralWidthHide');
        lateralUnityMenuBackThree.classList.add('menuLateralWidthHide');
        lateralUnityMenuBackFour.classList.add('menuLateralWidthHide');
        lateralUnityMenu.classList.add('menuLateralWidthHide');

        lateralUnityMenuBackOne.classList.remove('menuLateralWidthShow');
        lateralUnityMenuBackTwo.classList.remove('menuLateralWidthShow');
        lateralUnityMenuBackThree.classList.remove('menuLateralWidthShow');
        lateralUnityMenuBackFour.classList.remove('menuLateralWidthShow');
        lateralUnityMenu.classList.remove('menuLateralWidthShow');
    }else{
        menuIconUnityContent.textContent = 'menu';
        lateralUnityMenuBackOne.classList.remove('menuLateralWidthHide');
        lateralUnityMenuBackTwo.classList.remove('menuLateralWidthHide');
        lateralUnityMenuBackThree.classList.remove('menuLateralWidthHide');
        lateralUnityMenuBackFour.classList.remove('menuLateralWidthHide');
        lateralUnityMenu.classList.remove('menuLateralWidthHide');

        lateralUnityMenuBackOne.classList.add('menuLateralWidthShow');
        lateralUnityMenuBackTwo.classList.add('menuLateralWidthShow');
        lateralUnityMenuBackThree.classList.add('menuLateralWidthShow');
        lateralUnityMenuBackFour.classList.add('menuLateralWidthShow');
        lateralUnityMenu.classList.add('menuLateralWidthShow');
    }
})