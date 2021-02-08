var mi_url                 ="https://x.giphy.com/v1/stories?username=entertainment&api_key=3eFQvabDx69SMoOemSPiYfh9FY0nzO9x&limit=10";



var reactions      =document.getElementById("Reactions");
var entertainment  =document.getElementById("Entertainment");
var sports         =document.getElementById("Sports");
var stickers       =document.getElementById("Stickers");
var artists        =document.getElementById("Artists");




var array_busqueda_reactions    =[];
var array_busqueda_entetainment =[];
var array_busqueda_sports       =[];
var array_busqueda_stickers     =[];
var array_busqueda_artists      =[];


var arr_01 =[];
var arr_02 =[];
var arr_03 =[];



//terminar
document.getElementById("link-modo-nocturno").onclick =function () {
  fetch_busqueda2();
  document.getElementById("lupa-derecha").classList.add("ocultar"); 
  document.getElementById("btn-borrar").classList.remove("ocultar");
  
}

function addtoDOM2(info) {
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



  let gifts = document.getElementById("gifts");
  //A LA IMAGEN LE AGREGO UN ATRIBUTO SOURCE Y COMO SEGUNDO PARAMETRO LE AGREGO LA INFO. EL SPRITE Y EL FRENTE
  //aca agrago una imagen la pagina te devuelve un array de imagenes el i (indice es el indice del while que esta afuera)
  img.setAttribute("src", info.gif.images.downsized_large.url);

 
  ctn.appendChild(btn_corazon);
  btn_corazon.classList.add("boton-favoritos-corazon-activo");
  ctn.classList.add("no-activo");

  btn_corazon.id = "btn-favoritos";
  btn_corazon.appendChild(imagen_btn_corazon);
  imagen_btn_corazon.setAttribute("src", "Assets/icon-fav-hover.svg")
  imagen_btn_corazon.classList.add("boton-corazon-hover");
  imagen_btn_corazon.classList.add("corazon-blanco");







  imagen_btn_corazon_violeta.setAttribute("src", "Assets/icon-fav-active.svg")
  imagen_btn_corazon_violeta.classList.add("boton-corazon-hover");
  imagen_btn_corazon_violeta.classList.add("corazon-violeta");
  imagen_btn_corazon_violeta.classList.add("ocultar");

  btn_corazon.appendChild(imagen_btn_corazon_violeta);
  imagen_btn_corazon_violeta.id = "boton-corazon-violeta";
  imagen_btn_corazon.id = "boton-corazon-blanco";
  //ACA HAGO EL CAMBIO DEL BOTON

  if (localStorage.getItem("favoritos") != null && localStorage.getItem("favoritos") != "undefined"){
    array_botones_favoritos = JSON.parse(localStorage.getItem("favoritos"));

    
    console.log("arr", array_botones_favoritos);


      if (array_botones_favoritos.includes(info.gif.id)) {
        imagen_btn_corazon.classList.add("ocultar");
      }
      
       if(array_botones_favoritos.includes(info.gif.id)){
        imagen_btn_corazon_violeta.classList.remove("ocultar");
      }
  }
  
 

  btn_corazon.addEventListener("click", (ev) => {

   
if (localStorage.getItem("favoritos") != null && localStorage.getItem("favoritos") != "undefined" && localStorage.getItem("favoritos") != "") {
            array_botones_favoritos = JSON.parse(localStorage.getItem("favoritos"));
                if (array_botones_favoritos.includes(info.gif.id)) {
                  imagen_btn_corazon_violeta.classList.add("ocultar");
                  imagen_btn_corazon.classList.remove("ocultar");
                  
                    eliminarFavoritos(info);
                } else {
                  imagen_btn_corazon.classList.add("ocultar");
                  imagen_btn_corazon_violeta.classList.remove("ocultar");
                  
                  ctn.classList.add("activo");
                  ctn.classList.remove("no-activo");
                  ctn.classList.add(info.gif.id);
                  
                    array_ids_favoritos = JSON.parse(localStorage.getItem('favoritos'));
                    array_ids_favoritos.push(info.gif.id);
                 
                  
                  saveInLocalStorage(array_ids_favoritos);
                }
            }
          else
          {
            imagen_btn_corazon_violeta.classList.add("ocultar");
            
            ctn.classList.add("activo");
            ctn.classList.remove("no-activo");
            ctn.classList.add(info.gif.id);
            array_ids_favoritos.push(info.gif.id);
              
            saveInLocalStorage(array_ids_favoritos);
            
          }
          if (localStorage.getItem("favoritos") != null && localStorage.getItem("favoritos") != "undefined") {
           
            fetch_busqueda_favoritos();
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

  let titulo = document.createElement("p");
      titulo.innerHTML =info.gif.title;
      titulo.setAttribute("class","titulos-gifs")
      ctn.appendChild(titulo);

      let user = document.createElement("p");
      user.innerHTML =info.id;
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
       
       btn_descarga.addEventListener("click", function () {
          
        async function prueba(img) {
          var blob = await fetch(img).then((r) => r.blob());
          invokeSaveAsDialog(blob);
        }
        prueba(info.gif.images.downsized_large.url);
      });


}

function fetch_busqueda2() {
  mi_url;

  fetch(mi_url)
    .then((respuesta) => respuesta.json())
    .then((info) => {
      if (info.data == "") {
        seccion_no_encontrados()
        
      } else {
        seccion_no_encontrados_02();
      }
      
      for (let index = 0; index < info.data.length; index++) {
      
      console.log(index)
        
        addtoDOM2(info.data[index].gifs[index]);

        //agrego el boton de ver mas en cada una de las busquedas
        ver_mas.style.display = "inline-block"
      }

    })

    .catch(() => {
    })
}
