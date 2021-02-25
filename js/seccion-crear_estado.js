var seccion_entera = document.getElementById("seccion-crear-gif");
var todo_el_body =document.body;
var content = document.getElementById("content");


document.getElementById("btn-crear-gifo").addEventListener("click",function (ev) {


var clone = seccion_entera.cloneNode(true);

setTimeout(() => {
var borrar_seccion =content.removeChild(seccion_entera);
    
}, 500);

setTimeout(() => {
    content.append(seccion_entera);
        
    }, 1000);


    



})