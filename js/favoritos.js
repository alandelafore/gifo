//este es el btn ver mas de favoritos, lo muestro cuando hay gif y lo quito cuando no hay
var btn_ver_mas_f            =  document.getElementById("mi-boton-ocultar-f");
var contenedores_gifs        =[];
//obtengo contendores gif todos los gif de la seccion favoritos;
var contenedores_gifs        = document.getElementsByClassName("contenedor-gift");
//declaro el a apartir del once este va ser el indice en el que se va comenzar a ejecutar
var a                       =11;

var favoritesArray           =[];
var listaFavoritos           =[];
var container                = document.getElementById("trend_container");
var contenedor_corazon_verde = document.getElementById("contenedor-corazon-verde");  
 
/* document.getElementById("mi-boton-ocultar-f").addEventListener("click",function (ev) {

contenedores_gifs         = document.getElementsByClassName("contenedor-gift");

  for (let index = 0; index < 12; index++) {
  a ++ ;

    contenedores_gifs[a].style.display ="block"

  }
  

  

 });

   */

/* document.getElementById("link-favoritos").addEventListener("click", function () {
 
    
  if((localStorage.getItem('favoritos'))!= null && (localStorage.getItem("favoritos")) != "undefined" ){
    fetch_busqueda_favoritos();


  }
    setTimeout(() => {
        //desaparezco los div a partir del indice 12;

      for (let index = 12; index < contenedores_gifs.length; index++) {
  
        contenedores_gifs[index].style.display ="none"
        }
      
    }, 1000);
 
    
})
 */




document.getElementById("link-favoritos").addEventListener("click", function (ev) {
 
    
  if((localStorage.getItem('favoritos'))!= null && (localStorage.getItem("favoritos")) != "undefined" ){
    fetch_busqueda_favoritos();
    console.log("evento de click en el btn fav",ev);


  }
  
    
    
})


 function displayLocalStorageFavorites() {
  let newArray = JSON.parse(localStorage.getItem('favoritos'));
  //si el arr es mayor a 12 muestra el btn;
  if(newArray.length>=12){
    btn_ver_mas_f.classList.remove("ocultar");

  }else{
    btn_ver_mas_f.classList.add("ocultar");
  }
  return newArray;
}


    
function eliminarFavoritos(info)
{
 let arr_localStorage= JSON.parse(localStorage.getItem('favoritos'));
   for(i =0; i< arr_localStorage.length; i++){
     if(info.id == arr_localStorage[i]){
      arr_localStorage.splice(i,1);
      if (document.getElementById(info.id) != null)
      document.getElementById(info.id).style.display = "none";
      //logica para borrar el div
      
      borrarCorazonTrendings(info.id)
      //ctn.classList.add("ocultar");
     }
   }
   saveInLocalStorage(arr_localStorage);

   container.innerHTML ="";
  setTimeout(() => {
    getTrendings();
    if (localStorage.getItem("favoritos") != null && localStorage.getItem("favoritos") != "undefined" && JSON.parse(localStorage.getItem("favoritos")) != "") {
      ocultar_corazon_grande_favoritos();
    }
    else{
      mostrar_corazon_grande_favoritos();
    }
  }, 900);
}

function borrarCorazonTrendings(id){
  if(document.getElementById("boton-corazon-violeta_"+id) != null){
  document.getElementById("boton-corazon-violeta_"+id).style.display = "none";
  }
}

function displayFavoritos(info) {

  let div_contenedor_botones_textos = document.createElement("div");
        let div_contenedor_botones = document.createElement("div");
        let div_contenedor_texto = document.createElement("div");

        div_contenedor_botones_textos.setAttribute("class","div-contenedor-botones-textos");
        div_contenedor_botones.setAttribute("class","div-contenedor-botones");
        div_contenedor_texto.setAttribute("class","div_contenedor_texto");  
     
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
  
  
  
    let gifts = document.getElementById("favoritos");
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
    btn_corazon.id = "btn-favoritos";
    btn_corazon.appendChild(imagen_btn_corazon);
    imagen_btn_corazon.setAttribute("src", "Assets/icon-fav-hover.svg")
    imagen_btn_corazon.classList.add("boton-corazon-hover");
    imagen_btn_corazon.classList.add("corazon-blanco");
    imagen_btn_corazon.classList.add("ocultar");
  
  
  
  
   
    imagen_btn_corazon_violeta.setAttribute("src","Assets/icon-fav-active.svg")
    imagen_btn_corazon_violeta.classList.add("boton-corazon-hover");
    imagen_btn_corazon_violeta.classList.add("corazon-violeta");
    //imagen_btn_corazon_violeta.classList.add("ocultar");
  
    btn_corazon.appendChild(imagen_btn_corazon_violeta);
    imagen_btn_corazon_violeta.id ="boton-corazon-violeta";
    imagen_btn_corazon.id="boton-corazon-blanco";
    //ACA HAGO EL CAMBIO DEL BOTON
    btn_corazon.addEventListener("click", (ev) => {
    
    //ACA REMUEVO LA CLASE OCULTAR AL BOTON VIOLETA PARA QUE SE MUESTRE
    //TODO
    if (bt_switch == false) {
      imagen_btn_corazon.classList.remove("ocultar");
      imagen_btn_corazon_violeta.classList.add("ocultar");
      //ACA AGREGO LA CLASE OCULTAR AL BOTON CORAZON BLANCO PARA QUE SE OCULTE
      //imagen_btn_corazon.classList.add("ocultar");
      eliminarFavoritos(info);
      bt_switch = true;
    }
    else {
      //Y ACA SIMPLEMENTE ES LO CONTRARIO PARA QUE PUEDA HACER UN LOOP DE CLICKS
      imagen_btn_corazon.classList.add("ocultar");
      imagen_btn_corazon_violeta.classList.remove("ocultar");
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
    btn_descarga.addEventListener("click", function () {
          
      async function prueba(img) {
        var blob = await fetch(img).then((r) => r.blob());
        invokeSaveAsDialog(blob);
      }
      prueba(info.images.downsized_large.url);
    });

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
    ctn.id = info.id;
    listaFavoritos.push(info.id);

    let titulo = document.createElement("p");
      titulo.innerHTML =info.title;
      titulo.setAttribute("class","titulos-gifs")
      ctn.appendChild(titulo);

      let user = document.createElement("p");
      user.innerHTML =info.username;
      user.setAttribute("class","user-gifs")
      ctn.appendChild(user);


      img.classList.add("mi-imagen");
      titulo.classList.add("ocultar");
        btn_corazon.classList.add("ocultar");
        btn_descarga.classList.add("ocultar");
        btn_agrandar.classList.add("ocultar");
        user.classList.add("ocultar");

        ctn.addEventListener("mouseout",function (ev) {
        titulo.classList.add("ocultar");
        btn_corazon.classList.add("ocultar");
        btn_descarga.classList.add("ocultar");
        btn_agrandar.classList.add("ocultar");
        user.classList.add("ocultar");
        })
        ctn.addEventListener("mouseover",function (ev) {
          user.classList.remove("ocultar");
         titulo.classList.remove("ocultar");
         btn_corazon.classList.remove("ocultar");
         btn_descarga.classList.remove("ocultar");
         btn_agrandar.classList.remove("ocultar");
      
       })
       div_contenedor_botones_textos.appendChild(div_contenedor_botones);
       div_contenedor_botones_textos.appendChild(div_contenedor_texto);
       ctn.appendChild(div_contenedor_botones_textos);

       div_contenedor_botones.appendChild(btn_corazon);
       div_contenedor_botones.appendChild(btn_agrandar);
       div_contenedor_botones.appendChild(btn_descarga);
       div_contenedor_texto.appendChild(user);
       div_contenedor_texto.appendChild(titulo);

    async function prueba(url) {
      var response = await fetch(url);
      file = await response.blob();
    }
  }

  listaFavoritos = JSON.parse(localStorage.getItem('favoritos'));
//}
  


  function fetch_busqueda_favoritos() {
    console.log("mostrame favoritos, ", localStorage.getItem("favoritos"))
    if (localStorage.getItem("favoritos") != null && localStorage.getItem("favoritos") != "undefined" && JSON.parse(localStorage.getItem("favoritos")) != "") {
      document.getElementById("favoritos").innerHTML ="";
      ocultar_corazon_grande_favoritos();
    


      url = "https://api.giphy.com/v1/gifs?api_key=PoR3CQt5ZlA0CoMpJi1MK9iCYQG6fgkT&ids="+displayLocalStorageFavorites();
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((info) => {
        

          for (let index = 0; index < info.data.length; index++) {
            displayFavoritos(info.data[index]);

          }
        })
    }else{
     
      mostrar_corazon_grande_favoritos();
    }
  }
  

function ocultar_corazon_grande_favoritos(){
  favoritesArray = JSON.parse(localStorage.getItem('favoritos'));
   //if(favoritesArray || array_ids !=""){
     var ocultar_corazon_grande_favoritos=document.getElementsByClassName("corazon-grande-favoritos-ocultar")
     for (let index = 0; index < ocultar_corazon_grande_favoritos.length; index++) {
       ocultar_corazon_grande_favoritos[index].classList.add("ocultar");
       
      }
    //}
 }
   
function mostrar_corazon_grande_favoritos(){
  favoritesArray = JSON.parse(localStorage.getItem('favoritos'));
    var mostrar_corazon_grande_favoritos=document.getElementsByClassName("corazon-grande-favoritos-ocultar");
        

     for (let index = 0; index < mostrar_corazon_grande_favoritos.length; index++) {
       mostrar_corazon_grande_favoritos[index].classList.remove("ocultar");
        btn_ver_mas_f.classList.add("ocultar");


       
      }
 }
   