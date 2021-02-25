
var arr_ids_tus_gifos=[]
const contenedor_de_botones_descarga_y_link =document.getElementById("contenedor-botones-seccion-crear");
let form_data                             = new FormData();
const url_up                              = 'https://upload.giphy.com/v1/gifs';
const api_key                             = 'PoR3CQt5ZlA0CoMpJi1MK9iCYQG6fgkT';
var mi_gif_para_descargar;
var link_del_gifo;



document.getElementById("descargar").addEventListener("click",function (ev) {
    invokeSaveAsDialog(mi_gif_para_descargar);
    
})

document.getElementById("btn-crear-gifo").addEventListener("click",function (ev) {
    contenedor_de_botones_descarga_y_link.classList.add("ocultar");
    
    
})

document.getElementById("btn-comenzar").addEventListener("click",function(){
btn_comenzar();
pintar_btn_1();
contenedor_de_botones_descarga_y_link.classList.add("ocultar");


setTimeout(function(){
    dar_acceso_camara();
  },3000);


})
document.getElementById("btn-grabar").addEventListener("click",function(ev) {
    document.getElementById("cronometro").classList.remove("ocultar");
    btn_grabar();
    btn_finalizar();
    empezar_detener(ev);
    cuando_toca_btn_grabar();
})
document.getElementById("btn-finalizar").addEventListener("click",function(ev) {
    document.getElementById("cronometro").classList.add("ocultar");
    document.getElementById("btn-finalizar").classList.add("ocultar");
    document.getElementById("repetir-captura").classList.remove("ocultar");
    darle_stop_a_grabar_subir();
    mostrar_btn_subir_gifo();

    
})
document.getElementById("btn-subir-gifo").addEventListener("click",function(ev) {
    
    pintar_btn_3();
    despintar_btn_2();
    video_poner_stop_filtro();
    estamos_subiendo_tu_gifo();
   /*  setTimeout(() => {
        gifo_subido_con_exito();
    }, 10000); */
})
document.getElementById("repetir-captura").addEventListener("click",function () {
    repetir_captura();
    ocultar_div_filtro();
    ocultar_loader();
    contenedor_de_botones_descarga_y_link.classList.add("ocultar");

})

    function btn_comenzar() {
    //agrego el texto preguntando si se da permiso a la camara
        let titulo_a_camabiar=document.getElementById("estilo-titulo");
        titulo_a_camabiar.innerHTML ="¿Nos das acceso"+"<br>"+ "a tu cámara?";

        
        let p_texto=document.getElementById("crea-tu-gifo");
        p_texto.innerHTML ="El acceso a tu camara será válido sólo"+"<br>"+ "por el tiempo en el que estés creando el GIFO.";
    
        //oculto btn comenzar
        let btn_comenzar=document.getElementById("btn-comenzar");
        btn_comenzar.classList.add("ocultar");
        
    }
    //pido acceso a la camara
    function dar_acceso_camara() {
        despintar_btn_1();
        pintar_btn_2();
        mostrar_btn_grabar();
        mi_solicitud_video();

    
    }
    //muestro el btn de grabar y oculto el de comenzar
    function mostrar_btn_grabar() {
        // pongo de color oscuro el btn-2
        let btn_2=  document.getElementById("btn-2");
       

        let btn_grabar =document.getElementById("btn-grabar");
        let btn_comenzar = document.getElementById("btn-comenzar");
        btn_grabar.classList.remove("ocultar");
        

        let imagen_de_la_camara=document.getElementById("contenedor-imagen-camara");
        imagen_de_la_camara.classList.remove("ocultar");
        
        let titulo =document.getElementById("estilo-titulo").innerHTML ="";
        let texto_del_p =document.getElementById("crea-tu-gifo").innerHTML ="";


    }
    //btn grabar oculto el btn de grabar
    function btn_grabar() {
        let btn_grabar = document.getElementById("btn-grabar");
        btn_grabar.classList.add("ocultar");


    }
    //btn de finalizar lo muestro
    function btn_finalizar() {
        let btn_finalizar = document.getElementById("btn-finalizar");
        btn_finalizar.classList.remove("ocultar");
    }
    // muestro el btn de subir gifo
    function mostrar_btn_subir_gifo() {
    let subir_gifo=document.getElementById("btn-subir-gifo");
    subir_gifo.classList.remove("ocultar");
    }

    //EMPIEZO EL CORNOMETRO
	function empezar_detener(elemento)
	{
       inicio=0;
        timeout=0;

		if(timeout==0)
		{
			
			// Obtenemos el valor actual
			inicio=vuelta=new Date().getTime();
			
			cronometro();
		}
	}
	
    //cronometro 
	function cronometro()
	{
		// OBTENGO LA FECHA ACTUAL
		var actual = new Date().getTime();
		
		// OBTENGO LA DIFERENCIA ENTRE LA FECHA ACTUAL Y EN LA QUE INICIO EL CRONOMETRO
		var diff=new Date(actual-inicio);

		// SIMPLEMENTE HAGO UN HINNER HTML PARA MOSTRAR EL CRONOMETRO
		var result=agragar_cero(diff.getUTCHours())+":"+agragar_cero(diff.getUTCMinutes())+":"+agragar_cero(diff.getUTCSeconds());
		document.getElementById('crono').innerHTML = result;

		timeout=setTimeout("cronometro()",1000);
	}
	
	//ESTA FUNCION AGREGA UN 0 
	function agragar_cero(Time) {
		return (Time < 10) ? "0" + Time : + Time;
    }
    
    //PINTA EL BTN 1
    function pintar_btn_1(){
       btn_1= document.getElementById("btn-1").classList.add("estilo-de-mis-botones-click");

    }
    //PINTA BTN 2
    function pintar_btn_2(){
       btn_2= document.getElementById("btn-2").classList.add("estilo-de-mis-botones-click");

        
    }
    //PINTA BTN 3
    function pintar_btn_3(){
       btn_3= document.getElementById("btn-3").classList.add("estilo-de-mis-botones-click");

        
    }
    //VUELVE AL ESTILO ORIGINAL EL BTN 1
    function despintar_btn_1(){
       btn_1= document.getElementById("btn-1").classList.add("estilo-de-mis-botones");
       btn_1= document.getElementById("btn-1").classList.remove("estilo-de-mis-botones-click");

        

    }
    //VUELVE AL ESTILO ORIGINAL EL BTN 2
    function despintar_btn_2(){
        btn_2= document.getElementById("btn-2").classList.add("estilo-de-mis-botones");
       btn_2= document.getElementById("btn-2").classList.remove("estilo-de-mis-botones-click");


        
    }
    //VUELVE AL ESTILO ORIGINAL EL BTN 3
    function despintar_btn_3(){
     btn_3= document.getElementById("btn-3").classList.add("estilo-de-mis-botones");
     btn_2= document.getElementById("btn-3").classList.remove("estilo-de-mis-botones-click");


        
    }
    //PIDO LA SOLICITUD A LA CAMARA DE VIDEO
    function mi_solicitud_video() {
        navigator.mediaDevices.getUserMedia({audio: false,video : true,height: { max: 480 }} , ).then(record)
        .catch(err=> console.log(err));
      
    }
        
    // OBTENGO LA ETIQUETA DE VIDEO LE DOY PLAY AUTOMATICO 
    async function record(stream) {
        
       let video= document.getElementById("video");
        video.srcObject = stream;
        //CUANDO SE CARGAN LOS DATOS DE VIDEO
        video.onloadedmetadata=function(){
            //AGREGO PLAY 
        video.play();
        
        } 
        // DOY USO DE LA LIBRERIA RECORD RTC
        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
          
            });
       
       
    }
    //
    async function cuando_toca_btn_grabar() {
                 
        recorder.startRecording();
       /*  const sleep = m => new Promise(r => setTimeout(r, m));
        await sleep(3000); */
            
    }
    async function darle_stop_a_grabar_subir() {

        recorder.stopRecording( async function() {
                let blob = await recorder.getBlob();
                form_data.append('file', blob, 'myGif.gif');

                //esta linea es para descargar el gif
                //invokeSaveAsDialog(blob);
                fetch_subir()
                mi_gif_para_descargar = blob;
            });
            
    }
    function repetir_captura() {
        let subir_gifo=document.getElementById("btn-subir-gifo");
        subir_gifo.classList.add("ocultar");
        let repetir_captura=document.getElementById("repetir-captura");
        repetir_captura.classList.add("ocultar");

        dar_acceso_camara();
        despintar_btn_3();
            
    }

    //Pongo en stop el video, y muestro el filtro
    function video_poner_stop_filtro() {
       let video= document.getElementById("video");
        video.pause(); 
        mostrar_div_filtro();
        
    }

    //esta funcion oculta el el div que tiene el filtro de color violeta
    function ocultar_div_filtro() {
        let div_filtro=document.getElementById("div-con-filtro");
        div_filtro.classList.add("ocultar");
        
    }
    // esta funcion muestra el div con filtro violeta
    function mostrar_div_filtro() {
        let div_filtro=document.getElementById("div-con-filtro");
        div_filtro.classList.remove("ocultar");

    }
    //funcion cargando el
    function estamos_subiendo_tu_gifo(){
    //le  la imagen del loader
    let mi_loader = document.getElementById("loader");
    //texto que voy a ir bariando
    let estamos_subiendo_tu_gifo_texto = document.getElementById("estamos-subiendo-tu-gifo");
    //mostrando div contenedor 
    //pongo la ruta de la imagen del loader
    mi_loader.setAttribute("src","Assets/loader.svg");
    estamos_subiendo_tu_gifo_texto .innerHTML ="Estamos subiendo tu GIFO";
    //muestro el contenedor
    mostrar_loader();
    }
    function gifo_subido_con_exito(){
        //le  la imagen del loader
        let mi_loader = document.getElementById("loader");
        //texto que voy a ir bariando
        let estamos_subiendo_tu_gifo_texto = document.getElementById("estamos-subiendo-tu-gifo");
        //mostrando div contenedor 
        //pongo la ruta de la imagen del loader
        mi_loader.setAttribute("src","Assets/check.svg");
        estamos_subiendo_tu_gifo_texto .innerHTML ="GIFO subido con éxito";
        //muestro el contenedor
        mostrar_loader();
    contenedor_de_botones_descarga_y_link.classList.remove("ocultar");
        
    }
    function ocultar_loader() {
        let div_contenedor = document.getElementById("cargando-gif");
        div_contenedor.classList.add("ocultar");
        
    }
    function mostrar_loader() {
        let div_contenedor = document.getElementById("cargando-gif");
        div_contenedor.classList.remove("ocultar");
        
    }
   
   //fetch para subir

    async function fetch_subir() {
        let url_key = `${url_up}?api_key=${api_key}`;
    
        fetch(url_key, {
            method: 'POST',
            //        mode: 'cors',
            body: form_data
        })
            .then(response => response.json())
            .then(result => {
                res = result;
               if(res == result){
                gifo_subido_con_exito();
                let urls_gif =`https://api.giphy.com/v1/gifs/${res.data.id}?api_key=${api_key}`;

                    //PRIMERO MANDO EL ID QUE VIENE DE LA RESPUESTA
               arr_ids_tus_gifos.push(res.data.id);

                    //en esta condicion checkeo que el local Storage no esta vacio
                   if (localStorage.getItem('tus_gifos') != null && localStorage.getItem('tus_gifos') != "undefined") {
                   //OBTENGO EL NUEVO ARRAY
                    arr_ids_tus_gifos = JSON.parse(localStorage.getItem('tus_gifos'));
                    arr_ids_tus_gifos.push(res.data.id);

                    document.getElementById("boton-link").addEventListener("click",function (ev) {
                    link_del_gifo= `https://media4.giphy.com/media/${res.data.id}/giphy.gif?`;
                    console.log(link_del_gifo);
                    //le doy el link del link del gif
                    var link;
                    link= document.getElementById("link-gif").setAttribute("href",link_del_gifo);
                    
                    })
                   
                  }
    


              saveInLocalStorage_02(arr_ids_tus_gifos);
               
               
                
               }
               
            })
            .catch(err => {
            });
    }


    


