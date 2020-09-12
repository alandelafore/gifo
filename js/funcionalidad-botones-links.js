//este es el link del menu
var link_favoritos = document.getElementById("link-favoritos");
//este es el logo gifos-del menu
var home_section = document.getElementById("home-section");
//esta es la seccion
var seccion_favoritos = document.getElementById("seccion-favoritos");
//esta es la seccion de mis gifos
var seccion_tus_gifos = document.getElementById("seccion-tus-gifos");



//Oculto todas las secciones menos la de menu favoritos
document.getElementById("link-favoritos").addEventListener("click", function (ev) {
  //Pongo el prevent default para que no se comporte como habitualmente.
  ev.preventDefault();
  //oculto la seccion entera
  home_section.classList.add("ocultar")
  seccion_favoritos.classList.remove("ocultar");
  //oculto el menu cuando doy click a la seccion favoritos
  document.getElementById("menu").classList.add("ocultar");
  //muestro el menu hamburgueza
  document.getElementById("hamburguesa").classList.remove("ocultar");
  //oculto la cruz
  document.getElementById("cruz-menu").classList.add("ocultar");
  seccion_tus_gifos.classList.add("ocultar");

  cambiar_menu_de_estado();

});
//obtengo el logo oculto todas las secciones menos la del logo  
document.getElementById("logo").addEventListener("click", (ev) => {
  ev.preventDefault();
  home_section.classList.remove("ocultar");
  seccion_favoritos.classList.add("ocultar");
  seccion_tus_gifos.classList.add("ocultar");





})
 
//oculto todas las secciones menos la de mis gifos 
document.getElementById("link-mis-gifos").addEventListener("click",function (ev){
  ev.preventDefault();
  home_section.classList.add("ocultar");
  seccion_favoritos.classList.add("ocultar");
  seccion_tus_gifos.classList.remove("ocultar");
  cambiar_menu_de_estado();

})


