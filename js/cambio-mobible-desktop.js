function mobible_desktop(media_q) {
    if (media_q.matches) {
      ocultar_hamburgurza();
      mostrar_menu();
      btn_crear_gifo_mostrar();

      
    } else {
     mostrar_hamburgueza();
     ocultar_menu();
     btn_crear_gifo_ocultar();
    }
  }
  
  var media_q = window.matchMedia("(min-width: 768px)")
  mobible_desktop(media_q) 
  media_q.addListener(mobible_desktop) 



  function ocultar_hamburgurza() {
      document.getElementById("mi-boton-menu").classList.add("ocultar");
      
  }
  function mostrar_hamburgueza(params) {
    document.getElementById("mi-boton-menu").classList.remove("ocultar");
      
  }

function mostrar_menu() {
    document.getElementById("menu").classList.remove("ocultar");
    
}
function ocultar_menu() {
    document.getElementById("menu").classList.add("ocultar");
    
}


function btn_crear_gifo_ocultar() {
 document.getElementById("btn-crear-gifo").classList.add("ocultar")
  
}
function btn_crear_gifo_mostrar() {
  document.getElementById("btn-crear-gifo").classList.remove("ocultar")
   
 }