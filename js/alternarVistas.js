let lateralUnityContent = document.getElementById('lateralUnityContent');
let buttonList = document.getElementById('buttonList');
let buttonGrid = document.getElementById('buttonGrid');

buttonList.addEventListener('click', () => {
    lateralUnityContent.classList.add('lateralUnityContentList');
    lateralUnityContent.classList.remove('lateralUnityContentSquare');    
})

buttonGrid.addEventListener('click', () => {
    lateralUnityContent.classList.remove('lateralUnityContentList');
    lateralUnityContent.classList.add('lateralUnityContentSquare');    
})