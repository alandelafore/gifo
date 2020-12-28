function mobible_desktop(media_q) {
    if (media_q.matches) {
      alert("DESKTOP")
      ocultar_hamburgurza();
      
    } else {
     alert("mobible")
     mostrar_hamburgueza();
    }
  }
  
  var media_q = window.matchMedia("(min-width: 768px)")
  mobible_desktop(media_q) 
  media_q.addListener(mobible_desktop) 



  function ocultar_hamburgurza() {
      document.getElementById("mi-boton-menu").classList.add("ocultar");
      
  }function mostrar_hamburgueza(params) {
    document.getElementById("mi-boton-menu").classList.remove("ocultar");
      
  }