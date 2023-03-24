let tabsContainer = document.getElementById('tabs-swipe-demo');

let scrollDown, scrollUp;
window.onscroll = function () {
    scrollDown = window.scrollY;
    scrollUp = window.scrollX;

    console.log(scrollDown)

    if(scrollDown >= 145){
        tabsContainer.classList.add('tabsFixed');
    }else{
        tabsContainer.classList.remove('tabsFixed');
    }
};

