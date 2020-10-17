var busqueda = "";
var numero;
var array_busqueda = [];
var offset = 0;
var arrayFavoritos =[];
var bt_switch = false;
var arr_local_storage =[];

var ver_mas = document.getElementById("mi-boton");

var numero_gift = 12; //Esta variable la uso para dar la cantidad de gift

//con este Envento hago la busqueda
document.getElementById("btn").addEventListener("click", (ev) => {
  
  ev.preventDefault();
  busqueda = document.getElementById("busqueda").value;// Obtengo el elemento con el id busqueda 
  //aca paso el valor de la buqueda a la funcion para que lo escriba
  texto_tipo_busqueda(busqueda);
  //con esta funcion le saco la clase que oculata el boton cuando hago click
  mostrar_boton();
  //esta funcion la utilizo para obtener datos de la api mediate un fetch
  fetch_busqueda();


});
document.getElementById("mi-boton").addEventListener("click", () => {

  offset += 12;
  fetch_busqueda();
  

});
document.getElementById("btn-borrar").addEventListener("click", () => {

  document.getElementById("btn-borrar").classList.add("ocultar");
  
  // esta funcion  borra el contenido de la busqueda
  for (let index = 0; index < 100; index++) {
    borrar_busqueda();

  }


})



//Creo los div Y les doy sus respectivos tamaños a las imagenes traidas de giphy
function addtoDOM(info) {
  //creo un div
  let ctn = document.createElement("div");
  //CREO UNA IMAGEN gift
  let img = document.createElement("img");
  img.classList.add("gift-posicion");

  let btn_corazon = document.createElement("button");
  let imagen_btn_corazon_violeta = document.createElement("img");
  let imagen_btn_corazon = document.createElement("img");

  let btn_descarga = document.createElement("button");
  let imagen_btn_descarga = document.createElement("img");

  let btn_agrandar = document.createElement("button");
  let imagen_btn_agrandar = document.createElement("img");



  let gifts = document.getElementById("gifts");
  //A LA IMAGEN LE AGREGO UN ATRIBUTO SOURCE Y COMO SEGUNDO PARAMETRO LE AGREGO LA INFO. EL SPRITE Y EL FRENTE
  //aca agrago una imagen la pagina te devuelve un array de imagenes el i (indice es el indice del while que esta afuera)
  img.setAttribute("src", info.images.downsized_large.url);

  //tamaño de las imagenes que se traen de giphy
  /* img.style.width = "243px"
  img.style.height = "187px" */
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /* BOTON DE FAVORITOS */
  ctn.appendChild(btn_corazon);
  btn_corazon.classList.add("boton-favoritos-corazon-activo");
  ctn.classList.add("no-activo");

  btn_corazon.id = "btn-favoritos";
  btn_corazon.appendChild(imagen_btn_corazon);
  imagen_btn_corazon.setAttribute("src", "Assets/icon-fav-hover.svg")
  imagen_btn_corazon.classList.add("boton-corazon-hover");
  imagen_btn_corazon.classList.add("corazon-blanco");
  





 
  imagen_btn_corazon_violeta.setAttribute("src","Assets/icon-fav-active.svg")
  imagen_btn_corazon_violeta.classList.add("boton-corazon-hover");
  imagen_btn_corazon_violeta.classList.add("corazon-violeta");
  imagen_btn_corazon_violeta.classList.add("ocultar");

  btn_corazon.appendChild(imagen_btn_corazon_violeta);
  imagen_btn_corazon_violeta.id ="boton-corazon-violeta";
  imagen_btn_corazon.id="boton-corazon-blanco";
//ACA HAGO EL CAMBIO DEL BOTON
  btn_corazon.addEventListener("click", (ev) => {
  
  //ACA REMUEVO LA CLASE OCULTAR AL BOTON VIOLETA PARA QUE SE MUESTRE
  if (bt_switch == false) {
    imagen_btn_corazon_violeta.classList.remove("ocultar")
    //ACA AGREGO LA CLASE OCULTAR AL BOTON CORAZON BLANCO PARA QUE SE OCULTE
    imagen_btn_corazon.classList.add("ocultar");
    ctn.classList.add("activo")
    ctn.classList.remove("no-activo")
    ctn.classList.add(info.id);

    arrayFavoritos.push(info.id);

    saveInLocalStorage(arrayFavoritos); 
    if((localStorage.getItem('favoritos'))!= null && (localStorage.getItem("favoritos")) != "undefined")
      fetch_busqueda_favoritos();
    bt_switch = true;
}
else {
  //Y ACA SIMPLEMENTE ES LO CONTRARIO PARA QUE PUEDA HACER UN LOOP DE CLICKS
  imagen_btn_corazon.classList.remove("ocultar")
  imagen_btn_corazon_violeta.classList.add("ocultar")  
  ctn.classList.add("no-activo")
  ctn.classList.remove("activo");
    bt_switch = false;
}



 
})

  
  /* FIN BOTON FAVORITOS */
  //////////////////////////////////////

  /* BOTON DE DESCARGA */
  ctn.appendChild(btn_descarga);
  btn_descarga.classList.add("boton-descarga");
  btn_descarga.id = "btn-descarga";
  btn_descarga.appendChild(imagen_btn_descarga);
  imagen_btn_descarga.setAttribute("src", "Assets/icon-download.svg")
  /* FIN BOTON DE DESCARGA */


  /* BOTON DE AGRANDAR */
  ctn.appendChild(btn_agrandar);
  btn_agrandar.classList.add("boton-agrandar");
  btn_agrandar.id = "btn-agrandar";
  btn_agrandar.appendChild(imagen_btn_agrandar);
  imagen_btn_agrandar.setAttribute("src", "Assets/icon-max.svg")
  /* FIN BOTON DE AGRANDAR */

  // HAGO HIJO A LA IMAGEN DEL DIV QUE CREE
  ctn.appendChild(img);
  //HAGO HIJO TODOS LOS DIVS DE MI DIV CON EL ID CTN
  gifts.appendChild(ctn);
  ctn.classList.add("contenedor-gift");

}
// esta funcion pide como parametro el valor que usuario escribe en el input
function texto_tipo_busqueda(info_texto) {
  let h2_texto = document.getElementById("tipo-de-busqueda-titulo");
  h2_texto.textContent = info_texto;
  h2_texto.classList.remove("ocultar")


}

// remuevo la clase de ocultar de
function mostrar_boton() {
  var boton = document.getElementById("mi-boton-ocultar").classList.remove("ocultar");


}


function fetch_busqueda() {
  url = "https://api.giphy.com/v1/gifs/search?api_key=2QRBa2w3k34LbUKfXGoNpuL3Mj6sHAEQ&limit=12&offset=" + offset + "&q=" + busqueda;

  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((info) => {
      if(info.data ==""){
        console.log("mi array esta vacio");
     
      
      }
      console.log("este es es info.data",info)
      for (let index = 0; index < info.data.length; index++) {
        addtoDOM(info.data[index]);

        //agrego el boton de ver mas en cada una de las busquedas
        ver_mas.style.display ="inline-block"
      }

    })

    .catch(() => {
    })
}


function borrar_busqueda() {
  var gift_js
  //borro el boton
  ver_mas.style.display ="none";

  gift_js = document.getElementsByClassName("contenedor-gift");

  // con esta linea borro el formulario de busqueda
  document.getElementById("formulario").reset()

  // obtengo el div que contiene las busquedas 
  var reset_div_busquedas = document.getElementById("busquedaautocompletar-lista")
  //borro el contenido del div
  reset_div_busquedas.innerHTML = "";
  // por si acaso lo hago invisible con de la clase ocultar display none
  reset_div_busquedas.classList.add("ocultar");
  // hago invisible el logo de la lupa
  lupa.style.opacity = "0";
  
  //borro el contenido del titulo de la busqueda 
  /* Borro los elementos y ademas borro el valor de busqueda */
  for (let index = 0; index < gift_js.length; index++) {
    //borro el contenido de la busqueda
    gift_js[index].innerHTML = "";
    gift_js[index].remove();


    let texto_obtenido = document.getElementById("tipo-de-busqueda-titulo");
    //oculto el texto agregando esta clase
    texto_obtenido.classList.add("ocultar");
    

  }
}
//hago visible la lupa cuando escribo
var lupa = document.getElementById("lupa");
tags = document.getElementById('busqueda')
div_tags = document.getElementById('busquedaautocompletar-lista')
tags.addEventListener('input', function (event) {
  var val = this.value;
  //oculto la lupa de la derecha que es la que esta en el btn
  var lupa_derecha = document.getElementById("lupa-derecha").classList.add("ocultar");
  if (val == "") {
    //Si no hay nada en val significa que tengo que remover la clase ocultar para que se muestre la lupa
    var lupa_derecha = document.getElementById("lupa-derecha").classList.remove("ocultar");
    //esta es la lupa de la izquierda borro la lupa de la izquierda si el usuario escribe
    lupa.style.opacity = "0";
    //oculto la cruz
    var cruz_buscar = document.getElementById("btn-borrar").classList.add("ocultar");

  }
  else {
    //muestro la lupa si el usuario no esta escribiendo
    lupa.style.opacity = 1;
    //Muestro la cruz
    var cruz_buscar = document.getElementById("btn-borrar").classList.remove("ocultar");
  }

  let div_contenedor_busquedas;
  div_contenedor_busquedas = document.getElementById("busquedaautocompletar-lista");
  div_contenedor_busquedas.classList.remove("ocultar");

  fetch_tags(val);





})




function fetch_tags(busqueda) {
  url = "https://api.giphy.com/v1/gifs/search/tags?api_key=2QRBa2w3k34LbUKfXGoNpuL3Mj6sHAEQ&q=" + busqueda;
  fetch(url)
    .then(function (response) {
      return response = response.json();
    })
    .then(function (info) {
      mostrar_busqueda_tags(info.data);
    })
    .then(function () {
    })
}

function mostrar_busqueda_tags(arrayTags) {

  let div_contenedor_busquedas;
  div_tags.innerHTML = ''

  for (let index = 0; index < arrayTags.length; index++) {
    div = document.createElement("div");
    div.textContent = arrayTags[index].name;
    div.addEventListener('click', function () {
    tags.value = this.textContent;

      busqueda = document.getElementById("busqueda").value;// Obtengo el elemento con el id busqueda 
      //aca paso el valor de la buqueda a la funcion para que lo escriba

      texto_tipo_busqueda(busqueda);
      //con esta funcion le saco la clase que oculata el boton cuando hago click

      mostrar_boton();
      //esta funcion la utilizo para obtener datos de la api mediate un fetch

      fetch_busqueda();

      div_tags.innerHTML = ''

    })
    div_tags.append(div);
  }
  if (arrayTags == "") {
    //Si array tags esta vacio le pongo opacidad 0
    //Si array tags esta vacio agrego la clase ocultar
    div_contenedor_busquedas = document.getElementById("busquedaautocompletar-lista");
    div_contenedor_busquedas.classList.add("ocultar");
    

  }



}


function Agregar_clase_ocultar_corazon_blanco(){
  corazon_blanco=document.getElementById("boton-corazon-blanco");

  corazon_blanco.classList.add("ocultar");
}


function Remover_clase_ocultar_corazon_blanco(){
  corazon_blanco=document.getElementById("boton-corazon-blanco");

  corazon_blanco.classList.remove("ocultar");
}


function Agregar_clase_ocultar_corazon_violeta(){
  corazon_violeta=document.getElementById("boton-corazon-violeta");

  corazon_violeta.classList.add("ocultar");
}

function Remover_clase_ocultar_corazon_violeta(){
  corazon_violeta=document.getElementById("boton-corazon-violeta");

  corazon_violeta.classList.remove("ocultar");
}




function seccion_no_encontrados(){
  let contendor_gifts=document.getElementById("gifts");

  let contendor_gifts=document.getElementById("gifts");
  contendor_gifts.append()

  
}

