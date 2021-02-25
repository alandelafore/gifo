var resultado                       =[];
const mi_boton_ocultar_tus_gifos    = document.getElementById("mi-boton-ocultar-tus-gifos"); 
const link_mis_gifos                =document.getElementById("link-mis-gifos");
const cabeza_grande_tus_gifos_img   = document.getElementById("cabeza-grande-tus-gifos");
const texto_seccion_cabeza_grande   = document.getElementById("texto-seccion-cabeza-grande");
const todos_los_gif                 = document.getElementsByClassName("contenedor-gift");




document.getElementById("mi-boton-ocultar-tus-gifos").addEventListener("click",function (ev) {


  
  var arr_gif_none_tus_gifo =[];
  for (let index = 0; index < todos_los_gif.length; index++) {

    if(todos_los_gif[index].style.display == "none"){
      arr_gif_none_tus_gifo.push(todos_los_gif[index]);
    }
    
  }


  if(arr_gif_none_tus_gifo.length >12){

    for (let index = 0; index < 12; index++) {

      arr_gif_none_tus_gifo[index].style.display ="block"
    }
  }else{
    for (let index = 0; index < arr_gif_none_tus_gifo.length; index++) {

      arr_gif_none_tus_gifo[index].style.display ="block";
    }
  }

 });


link_mis_gifos.addEventListener("click",function (ev) {


  if((localStorage.getItem('tus_gifos'))!= null && (localStorage.getItem("tus_gifos")) != "undefined" ){
      fetch_busqueda_tus_gifos();
  }
  setTimeout(() => {
    //desaparezco los div a partir del indice 12;

  for (let index = 12; index < todos_los_gif.length; index++) {

    todos_los_gif[index].style.display ="none"
    }
  
}, 500);
})


function eliminar_tus_gifos(info)
{
 let arr_localStorage_mis_gifos= JSON.parse(localStorage.getItem('tus_gifos'));
   for(i =0; i< arr_localStorage_mis_gifos.length; i++){
     if(info.id == arr_localStorage_mis_gifos[i]){
      arr_localStorage_mis_gifos.splice(i,1);
      if (document.getElementById(info.id) != null)
      document.getElementById(info.id).style.display = "none";
     }
   }
  saveInLocalStorage_02(arr_localStorage_mis_gifos);

}

  
  function displayTusGifos(info) {

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
        
        
        
          let gifts = document.getElementById("mis-gifos");
         
          img.setAttribute("src", info.images.downsized_large.url);
        
       
          ctn.appendChild(btn_corazon);
          btn_corazon.classList.add("boton-favoritos-corazon-activo");
          btn_corazon.id = "btn-favoritos";
          btn_corazon.appendChild(imagen_btn_corazon);
          imagen_btn_corazon.setAttribute("src", "Assets/icon_trash.svg")
          imagen_btn_corazon.classList.add("boton-corazon-hover");
          imagen_btn_corazon.classList.add("corazon-blanco");
          imagen_btn_corazon.classList.add("ocultar");
        
        
        
     
        
         
          imagen_btn_corazon_violeta.setAttribute("src","Assets/icon_trash.svg");
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
            eliminar_tus_gifos(info);
              document.getElementById("mis-gifos").innerHTML =""
              
              setTimeout(() => {
                fetch_busqueda_tus_gifos();
              }, 1000);            
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

          
          let btn_cruz = document.createElement("div");
          ctn.appendChild(btn_cruz);
          div_contenedor_botones.appendChild(btn_cruz);
      
          let titulo = document.createElement("p");
            titulo.innerHTML =info.title;
            titulo.setAttribute("class","titulos-gifs")
            ctn.appendChild(titulo);



            
      
            let user = document.createElement("p");
            user.innerHTML =info.username;
            user.setAttribute("class","user-gifs")
            ctn.appendChild(user);
      
            btn_agrandar.addEventListener("click",function (ev) {
              const contenedor_gif_agrandar=document.getElementById(`para-agrandar`);
      
                  img.classList.remove("gift-posicion");
                  img.classList.add("imagen-agrandada-desktop");
                  ctn.classList.add("al-agrandar");
                  ctn.classList.remove("contenedor-gift");
                  btn_cruz.classList.remove("ocultar");
                  btn_agrandar.style.display ="none";
                  btn_cruz.id="cruz-agrandar";
                  btn_cruz.classList.add("cruz-agrandar");
      
                  btn_descarga.style.border= "1px solid  #CED7E1" ;
                  btn_corazon.style.border= "1px solid #CED7E1" ;
      
                  btn_corazon.style.opacity= "1" ;
                  btn_descarga.style.opacity= "1" ;
      
                  div_contenedor_botones_textos.classList.remove("div-contenedor-botones-textos");
                  div_contenedor_botones_textos.classList.add("agrandar-div-cont-btn-txt");
      
                
      
            })
            ctn.addEventListener("touchstart",function (ev) {
              const contenedor_gif_agrandar=document.getElementById(`para-agrandar`);
      
              img.classList.remove("gift-posicion");
              img.classList.add("imagen-agrandada-desktop");
              ctn.classList.add("al-agrandar");
              ctn.classList.remove("contenedor-gift");
              btn_cruz.classList.remove("ocultar");
              btn_agrandar.style.display ="none";
              btn_cruz.id="cruz-agrandar";
              btn_cruz.classList.add("cruz-agrandar");
  
              btn_descarga.style.border= "1px solid  #CED7E1" ;
              btn_corazon.style.border= "1px solid #CED7E1" ;
  
              btn_corazon.style.opacity= "1" ;
              btn_descarga.style.opacity= "1" ;
  
              div_contenedor_botones_textos.classList.remove("div-contenedor-botones-textos");
              div_contenedor_botones_textos.classList.add("agrandar-div-cont-btn-txt");
  

            })
         
            btn_cruz.addEventListener("click",function (ev) {
              img.classList.add("gift-posicion");
              img.classList.remove("imagen-agrandada-desktop");
              ctn.classList.remove("al-agrandar");
              ctn.classList.add("contenedor-gift");
              btn_cruz.classList.add("ocultar");
              
              btn_agrandar.style.display ="block";
              btn_descarga.style.border= "none" ;
              btn_corazon.style.border= "none" ;
              btn_corazon.style.opacity= "0.6" ;
              btn_descarga.style.opacity= "0.6" ;
      
              div_contenedor_botones_textos.classList.add("div-contenedor-botones-textos");
              div_contenedor_botones_textos.classList.remove("agrandar-div-cont-btn-txt");
      
              
      
      
      
      
              
               
               
             })



            
      
            img.classList.add("mi-imagen");
            titulo.classList.add("ocultar");
              btn_corazon.classList.add("ocultar");
              btn_descarga.classList.add("ocultar");
              btn_agrandar.classList.add("ocultar");
              user.classList.add("ocultar");

      if(window.matchMedia("(min-width: 768px)").matches){
             
              ctn.addEventListener("mouseout",function (ev) {
              titulo.classList.add("ocultar");
              btn_corazon.classList.add("ocultar");
              btn_descarga.classList.add("ocultar");
              btn_agrandar.classList.add("ocultar");
              user.classList.add("ocultar");
              })
            }
      if(window.matchMedia("(min-width: 768px)").matches){

              ctn.addEventListener("mouseover",function (ev) {
                user.classList.remove("ocultar");
               titulo.classList.remove("ocultar");
               btn_corazon.classList.remove("ocultar");
               btn_descarga.classList.remove("ocultar");
               btn_agrandar.classList.remove("ocultar");
            
             })
            }
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


    function displayLocalStorageTusGifos() {
        let newArray = JSON.parse(localStorage.getItem("tus_gifos"));
        if(newArray.length>12){
          mi_boton_ocultar_tus_gifos.classList.remove("ocultar");
      
        }else{
          mi_boton_ocultar_tus_gifos.classList.add("ocultar");
        }
        return newArray;
    }


    function fetch_busqueda_tus_gifos() {
      if (localStorage.getItem("tus_gifos") != null && localStorage.getItem("tus_gifos") != "undefined" && JSON.parse(localStorage.getItem("tus_gifos")) != "") {
          
        
        document.getElementById("mis-gifos").innerHTML ="";
        animate_a_crear_tu_primer_gifo_ocultar();
        
        url = "https://api.giphy.com/v1/gifs?api_key=PoR3CQt5ZlA0CoMpJi1MK9iCYQG6fgkT&ids="+displayLocalStorageTusGifos();
          fetch(url)
            .then((respuesta) => respuesta.json())
            .then((info) => {
    
              for (let index = 0; index < info.data.length; index++) {
                displayTusGifos(info.data[index]);
    
              }
           
            })

        
          }else{
            animate_a_crear_tu_primer_gifo_mostrar();

          }

    
    }

    function saveInLocalStorage_02(arr_nuevo) {
    if (localStorage.getItem("tus_gifos") != null &&localStorage.getItem("tus_gifos") != "undefined") {
      let array_viejo = [];
      //obtengo el array del local storage
      array_viejo = JSON.parse(localStorage.getItem("tus_gifos"));
  
      for (i = 0; i < arr_nuevo.length; i++) {
        
        array_viejo.push(arr_nuevo[i]);
  
      }
     // localStorage.setItem("tus_gifos", JSON.stringify(array_viejo));
      
    }
    
   localStorage.setItem("tus_gifos", JSON.stringify(arr_nuevo));
    
       
    }

  //oculta cebza grande 

  function animate_a_crear_tu_primer_gifo_mostrar() {
      
      cabeza_grande_tus_gifos_img.classList.remove("ocultar");
      texto_seccion_cabeza_grande.classList.remove("ocultar");
    }
   
    function animate_a_crear_tu_primer_gifo_ocultar() {
      
      cabeza_grande_tus_gifos_img.classList.add("ocultar");
      texto_seccion_cabeza_grande.classList.add("ocultar");
    }
   
    