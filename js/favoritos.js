


var favoritesArray=[];


var contenedor_corazon_verde = document.getElementById("contenedor-corazon-verde");

var favoritesArray =[];

function displayLocalStorageFavorites() {
  let newArray = JSON.parse(localStorage.getItem('favoritos'));
  //console.log(newArray);
  return newArray;
}

document.getElementById("link-favoritos").addEventListener("click", function () {
    
  console.log(url+ "   mis urls")
  
})
    
function eliminarFavoritos(info)
{
  console.log("info:",info);
   for(i =0; i< favoritesArray.length;i++){
      favoritesArray.splice(i,1);
      //logica para borrar el div
      //var idAEliminar = getElementById(i);
      ctn.classList.add("ocultar");

   }
   saveInLocalStorage(favoritesArray);
   fetch_busqueda_favoritos();
   //ACA TENGO QUE VOLVER A VER EL ARRAY
}


function addtoFavoritos(info) {
    console.log(info);
    if(!favoritesArray.includes(info.id)){
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

    favoritesArray.push(info.id);
  }

}
  


  function fetch_busqueda_favoritos() {
    url = "https://api.giphy.com/v1/gifs?api_key=2QRBa2w3k34LbUKfXGoNpuL3Mj6sHAEQ&ids="+displayLocalStorageFavorites();
    console.log(array_ids);
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((info) => {
        for (let index = 0; index < info.data.length; index++) {
          addtoFavoritos(info.data[index]);
          //agrego el boton de ver mas en cada una de las busquedas
          ocultar_corazon_grande_favoritos()
          
        }
   
        console.log(info);
      })
  
      .catch(() => {
        console.log("err")
      })
  }
  

function ocultar_corazon_grande_favoritos(){

  if(favoritesArray || array_ids !=""){
    // console.log("verifico si el array esta vacio " +array_ids)
     var ocultar_corazon_grande_favoritos=document.getElementsByClassName("corazon-grande-favoritos-ocultar")
     for (let index = 0; index < ocultar_corazon_grande_favoritos.length; index++) {
       ocultar_corazon_grande_favoritos[index].classList.add("ocultar");
       
     }
   }
 }
   
  