
var array_ids = [];
var arr_obj_gift = [];
var offset = 0;
var limit;
let previous = document.getElementById("previous");
let next = document.getElementById("next");
var file = {};
var array_ids_favoritos = [];
var url;
var container=document.getElementById("trend_container");
var inicio_toqueX;
var diferencia;
var toque;
previous.addEventListener("click", function () {
  if (offset != 0) {
    offset -= 1;
    container.innerHTML = "";
    getTrendings();
  }
});
next.addEventListener("click", function () {
  offset += 1;
  container.innerHTML = "";
  getTrendings();
});

function saveInLocalStorage(arr_nuevo) {
  if (localStorage.getItem("favoritos") != null &&localStorage.getItem("favoritos") != "undefined") {
    let array_viejo = [];
    array_viejo = JSON.parse(localStorage.getItem("favoritos"));

    var array_a_guardar = arr_nuevo;

    for (i = 0; i < array_a_guardar.length; i++) {
      array_viejo.push(array_viejo[i]);

    }
    localStorage.setItem("favoritos", JSON.stringify(array_viejo));
    
  }
  
  localStorage.setItem("favoritos", JSON.stringify(arr_nuevo));
  
     
}


function getTrendings() {
  
  if(window.innerWidth <768){
    limit =1;
    
    url=`https://api.giphy.com/v1/gifs/trending?api_key=2QRBa2w3k34LbUKfXGoNpuL3Mj6sHAEQ&limit=${limit}&offset=${offset}`
  }else{
    url =
    "https://api.giphy.com/v1/gifs/trending?api_key=2QRBa2w3k34LbUKfXGoNpuL3Mj6sHAEQ&limit=3&offset=" +offset;
  }
 
  fetch(url)
    .then(function (response) {
      return (response = response.json());
    })
    .then(function (info) {
      for (let index = 0; index < info.data.length; index++) {
        img = info.data[index].images.downsized_large.url;
        
        console.log(info, "esto es lo que trae infoooo")
        let div_contenedor_botones_textos = document.createElement("div");
        let div_contenedor_botones = document.createElement("div");
        let div_contenedor_texto = document.createElement("div");

        div_contenedor_botones_textos.setAttribute("class","div-contenedor-botones-textos");
        div_contenedor_botones.setAttribute("class","div-contenedor-botones");
        div_contenedor_texto.setAttribute("class","div_contenedor_texto");




        /* CREO LOS BOTONES */
        let btn_corazon = document.createElement("button");
        let imagen_btn_corazon = document.createElement("img");
        let imagen_btn_corazon_violeta = document.createElement("img");

        let btn_descarga = document.createElement("button");
        let imagen_btn_descarga = document.createElement("img");

        let btn_agrandar = document.createElement("button");
        let imagen_btn_agrandar = document.createElement("img");

        /* CREO EL DIV */
        let ctn = document.createElement("div");
        let imagen = document.createElement("img");
        imagen.setAttribute("src", img);
        //hago hijo del conteiner a mi div
        container.append(ctn);
        //hago hija a la imagen de mi div
        ctn.append(imagen);
        //agrego la clase gift posicion
        imagen.classList.add("gift-posicion");
        //Ha ese div le agrego la clase
        ctn.classList.add("contenedor-gift-trending");
        ctn.classList.add("no-activo");


        //TITULO DEL GIF
      let titulo = document.createElement("p");
      titulo.innerHTML =info.data[index].title;
      titulo.setAttribute("class","titulos-gifs")
      ctn.appendChild(titulo);

      let user = document.createElement("p");
      user.innerHTML =info.data[index].username;
      user.setAttribute("class","user-gifs")
      ctn.appendChild(user);
      
        //OCULTO LOS BOTONES
   

        /* BOTON DE FAVORITOS */
        ctn.appendChild(btn_corazon);
        btn_corazon.classList.add("boton-favoritos-corazon-activo");
        btn_corazon.id = "btn-favoritos";
        btn_corazon.appendChild(imagen_btn_corazon);
        imagen_btn_corazon.setAttribute("src", "Assets/icon-fav-hover.svg");
        imagen_btn_corazon.classList.add("boton-corazon-hover");
        imagen_btn_corazon.id = "boton-corazon-blanco";
        imagen_btn_corazon.classList.add("corazon-blanco");
        imagen_btn_corazon_violeta.setAttribute("src","Assets/icon-fav-active.svg");
        imagen_btn_corazon_violeta.classList.add("boton-corazon-hover");
        imagen_btn_corazon_violeta.classList.add("corazon-violeta");

        

       

        

        
        if (localStorage.getItem("favoritos") != null && localStorage.getItem("favoritos") != "undefined"){
          array_botones_favoritos = JSON.parse(localStorage.getItem("favoritos"));
            if (array_botones_favoritos.includes(info.data[index].id)) {
              imagen_btn_corazon.classList.add("ocultar");
            }
            
            else{
              imagen_btn_corazon_violeta.classList.add("ocultar");
            }
        }
        
        else{
          imagen_btn_corazon_violeta.classList.add("ocultar");
        }


        btn_corazon.addEventListener("click",()=>{
          
         
          if (localStorage.getItem("favoritos") != null && localStorage.getItem("favoritos") != "undefined" && localStorage.getItem("favoritos") != "") {
            array_botones_favoritos = JSON.parse(localStorage.getItem("favoritos"));
                if (array_botones_favoritos.includes(info.data[index].id)) {
                  imagen_btn_corazon_violeta.classList.add("ocultar");
                  imagen_btn_corazon.classList.remove("ocultar");
                  
                    eliminarFavoritos(info.data[index]);
                } else {
                  imagen_btn_corazon.classList.add("ocultar");
                  imagen_btn_corazon_violeta.classList.remove("ocultar");
                  
                  ctn.classList.add("activo");
                  ctn.classList.remove("no-activo");
                  ctn.classList.add(info.data[index].id);
                  
                //  if (localStorage.getItem("favoritos") != null && localStorage.getItem("favoritos") != "undefined") {
                    array_ids_favoritos = JSON.parse(localStorage.getItem('favoritos'));
                    array_ids_favoritos.push(info.data[index].id);
                  //}
    
                  // else{
                  // array_ids_favoritos = [];
                  // array_ids_favoritos.push(info.data[index].id);
                  // }
                  
                  saveInLocalStorage(array_ids_favoritos);
                }
            }
          else
          {
            imagen_btn_corazon_violeta.classList.add("ocultar");
            
            ctn.classList.add("activo");
            ctn.classList.remove("no-activo");
            ctn.classList.add(info.data[index].id);
            array_ids_favoritos.push(info.data[index].id);
              
            saveInLocalStorage(array_ids_favoritos);
            
          }
          if (localStorage.getItem("favoritos") != null && localStorage.getItem("favoritos") != "undefined") {
           
            fetch_busqueda_favoritos();
          }
          
      /*     let Promesa1 = new Promise((resolve,reject)=>{
            document.getElementById("trend_container").innerHTML = "";
            resolve("primer promesa");
          })
          let Promesa2 = new Promise((resolve,reject)=>{
          getTrendings();
          resolve("segunda promesa");

          })
          Promise.all([Promesa1,Promesa2])
          .then((values)=>{
            console.log("estos son los valores",values);

          }) */
        });
        

        
        btn_corazon.appendChild(imagen_btn_corazon_violeta);
        imagen_btn_corazon_violeta.id = "boton-corazon-violeta";

       

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
          prueba(info.data[index].images.downsized_large.url);
        });

        imagen_btn_descarga.setAttribute("src", "Assets/icon-download.svg");

        /* FIN BOTON DE DESCARGA */

        /* BOTON DE AGRANDAR */
        ctn.appendChild(btn_agrandar);
        btn_agrandar.classList.add("boton-agrandar");
        btn_agrandar.id = "btn-agrandar";
        btn_agrandar.appendChild(imagen_btn_agrandar);
        imagen_btn_agrandar.setAttribute("src", "Assets/icon-max.svg");
        /* FIN BOTON DE AGRANDAR */
        

        imagen.classList.add("mi-imagen");
        titulo.classList.add("ocultar");
        user.classList.add("ocultar");
        btn_corazon.classList.add("ocultar");
        btn_descarga.classList.add("ocultar");
        btn_agrandar.classList.add("ocultar");

        ctn.addEventListener("mouseout",function (ev) {
        user.classList.add("ocultar");
        titulo.classList.add("ocultar");
        btn_corazon.classList.add("ocultar");
        btn_descarga.classList.add("ocultar");
        btn_agrandar.classList.add("ocultar");
        })
        ctn.addEventListener("mouseover",function (ev) {
        user.classList.remove("ocultar");
         titulo.classList.remove("ocultar");
         btn_corazon.classList.remove("ocultar");
         btn_descarga.classList.remove("ocultar");
         btn_agrandar.classList.remove("ocultar");
      
       })

       //TODO: PONER DEPUES EN LOS DISTINTOS LUGARES FAV Y BUSCADOR
       div_contenedor_botones_textos.appendChild(div_contenedor_botones);
       div_contenedor_botones_textos.appendChild(div_contenedor_texto);
       ctn.appendChild(div_contenedor_botones_textos);

       div_contenedor_botones.appendChild(btn_corazon);
       div_contenedor_botones.appendChild(btn_agrandar);
       div_contenedor_botones.appendChild(btn_descarga);
       div_contenedor_texto.appendChild(user);
       div_contenedor_texto.appendChild(titulo);

      }

    });
}
async function prueba(url) {
  var response = await fetch(url);
  file = await response.blob();
}

getTrendings();




var media_q = window.matchMedia("(min-width: 768px)")

  


function cambio_desktop_mobible(media_q) {
  if(media_q.matches){
    document.body.style.backgroundColor ="red"
    container.innerHTML ="";
    getTrendings();
    next.classList.remove("ocultar");
    previous.classList.remove("ocultar");
   
  }else{
    document.body.style.backgroundColor ="blue"
    container.innerHTML ="";
    getTrendings();
    next.classList.add("ocultar");
    previous.classList.add("ocultar");
    document.getElementById("trend_container").addEventListener("touchstart", touch_start)
    document.getElementById("trend_container").addEventListener("touchmove",touch_move)
    document.getElementById("trend_container").addEventListener("touchend",mouse_end)
    




  }
  
  
}
media_q.addListener(cambio_desktop_mobible);



function touch_start(event) {
      inicio_toqueX =event.touches[0].clientX;
      console.log("donde hago el primer click  : ",inicio_toqueX);
  
}
//funcion para cuando se mueve el mouse
function touch_move(event) {
  toque =event.touches[0];

  diferencia = inicio_toqueX - toque.clientX;
  console.log(inicio_toqueX);
  console.log("diferencia ",diferencia);

  
}

//funcion para cuando se levanta el mouse
function mouse_end() {
  if(diferencia<=-6){
    offset += 1;
  container.innerHTML = "";
  getTrendings();

    

}
if (offset != 0 &&diferencia>=6) {
  offset -= 1;
  container.innerHTML = "";
  getTrendings();
}
  
}