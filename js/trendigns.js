
var array_ids = [];
var arr_obj_gift = [];
var offset = 0;

let previous = document.getElementById("previous");
let next = document.getElementById("next");
var file = {};
var array_ids_favoritos = [];

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
  url =
    "https://api.giphy.com/v1/gifs/trending?api_key=2QRBa2w3k34LbUKfXGoNpuL3Mj6sHAEQ&limit=3&offset=" +offset;
  fetch(url)
    .then(function (response) {
      return (response = response.json());
    })
    .then(function (info) {
      for (let index = 0; index < info.data.length; index++) {
        img = info.data[index].images.downsized_large.url;

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
      }
    });
}
async function prueba(url) {
  var response = await fetch(url);
  file = await response.blob();
}

getTrendings();
