let browserContainer = document.getElementById('browserContainer-inputContainer');
let buttonBrowser = document.getElementById('buttonBrowser');
let inputBrowser = document.getElementById('inputBrowser');

let scrollDown, scrollUp;
window.onscroll = function () {
    scrollDown = window.scrollY;
    scrollUp = window.scrollX;

    console.log(scrollDown)

    if(scrollDown >= 105){
        browserContainer.classList.add('browserContainer-inputContainer-fixed');
        

        buttonBrowser.classList.add('buttonBrowserOwn-fixed');
        buttonBrowser.classList.add('grey');
        buttonBrowser.classList.add('lighten-2');
        buttonBrowser.classList.remove('darken-4');
        buttonBrowser.classList.add('black-text');
        buttonBrowser.classList.remove('light-blue');
        buttonBrowser.classList.remove('white-text');

        inputBrowser.classList.add('browserContainer-inputContainer-input-fixed');
        
    }else{
        browserContainer.classList.remove('browserContainer-inputContainer-fixed');
        

        buttonBrowser.classList.remove('buttonBrowserOwn-fixed');
        buttonBrowser.classList.remove('grey');
        buttonBrowser.classList.remove('lighten-2');
        buttonBrowser.classList.add('darken-4');
        buttonBrowser.classList.remove('black-text');
        buttonBrowser.classList.add('light-blue');
        buttonBrowser.classList.add('white-text');

        inputBrowser.classList.remove('browserContainer-inputContainer-input-fixed');
    }
};
