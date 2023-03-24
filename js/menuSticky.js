let menuStickyUnity = document.getElementById('menuStickyUnity');

let scrollDown, scrollUp;
window.onscroll = function () {
    scrollDown = window.scrollY;
    scrollUp = window.scrollX;

    console.log(scrollDown)

    if(scrollDown >= 95){
        menuStickyUnity.classList.add('tabsFixed');
    }else{
        menuStickyUnity.classList.remove('tabsFixed');
    }
};

