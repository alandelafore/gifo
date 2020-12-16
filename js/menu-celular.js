
var bt_switch = false;


//cada vez que doy click a un boton que tiene el id mi boton menu lo desaprece y tambien obtengo todos los elementos que tengan la calse boton menu
document.getElementById("mi-boton-menu").addEventListener("click", function () {

    
 cambiar_menu_de_estado();


});

document.getElementById("link-modo-nocturno").addEventListener("click",function (ev) {
    ev.preventDefault();
    agrega_clase_dark();
    modo_nocturno_modo_diurno();
  
   
  
})


function modo_nocturno_modo_diurno() {
    let x= document.getElementById("link-modo-nocturno");

    if(x.innerHTML == "Modo Nocturno"){
        x.innerHTML ="Modo Diurno";
    }
    else {
        x.innerHTML ="Modo Nocturno";

    }
    
}
function agrega_clase_dark() {
    //agrega la clase dark si es que no la tiene y si la tiene la quita
    document.body.classList.toggle("dark");
}
function cambiar_menu_de_estado(){
    if (bt_switch == false) {
        // Cuando cliqueo el boton se oculta el menu haburguesa // agragando la clase ocultar (display none)
        document.getElementById("hamburguesa").classList.add("ocultar");
        //Aca remuevo la clase ocultar, para que aparezca la cruz
        document.getElementById("cruz-menu").classList.remove("ocultar");
        
        //Remuevo la clase ocultar para que aparezca el menu
        document.getElementById("menu").classList.remove("ocultar");

        var menu = document.getElementById("menu");

       

        bt_switch = true;
    }
    else {
        //aca cuando se vuelve a clickear le remuevo la clase ocultar osea que muestro el menu hamburguesa
        document.getElementById("hamburguesa").classList.remove("ocultar");
        //Por ende aca oculto la cruz
        document.getElementById("cruz-menu").classList.add("ocultar");
        //aca oculto el menu
        document.getElementById("menu").classList.add("ocultar");
      
        // LE APLICO LA TRANSITION AL MENU
        bt_switch = false;
    }

    //document.getElementById("menu-link").classList.add("ocultar");

}
