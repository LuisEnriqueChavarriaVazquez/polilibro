function buscar_concepto(){
    let criterio=document.getElementById('inputBrowser').value; 
    criterio=criterio.toLowerCase();
    let items=$('.conceptCard')

    for(item=0;item<items.length;item++){
        if (!items[item].innerHTML.toLowerCase().includes(criterio)) {
            items[item].style.display="none";
        }
        else {
            items[item].style.display="grid";               
        }
    }
}