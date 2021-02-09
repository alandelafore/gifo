
var trend_01   =document.getElementById("trend-01");
var trend_02   =document.getElementById("trend-02");
var trend_03   =document.getElementById("trend-03");
var trend_04   =document.getElementById("trend-04");
var trend_05   =document.getElementById("trend-05");


trend_01.addEventListener("click",function (ev) {
  alert(trend_01.textContent);
 busqueda=document.getElementById("busqueda").value =trend_01.textContent;
 fetch_busqueda();
  
})
trend_02.addEventListener("click",function (ev) {
  busqueda=document.getElementById("busqueda").value =trend_02.textContent;
 fetch_busqueda();
  
})
trend_03.addEventListener("click",function (ev) {
  busqueda=document.getElementById("busqueda").value =trend_03.textContent;
 fetch_busqueda();
  
})
trend_04.addEventListener("click",function (ev) {
  busqueda=document.getElementById("busqueda").value =trend_04.textContent;
 fetch_busqueda();
  
})
trend_05.addEventListener("click",function (ev) {
  busqueda=document.getElementById("busqueda").value =trend_05.textContent;
 fetch_busqueda();
  
})




function fetch_busqueda2() {
  url = "https://api.giphy.com/v1/trending/searches?api_key=PoR3CQt5ZlA0CoMpJi1MK9iCYQG6fgkT";


  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((info) => {
      console.log(info);
      
        trend_01.innerHTML =`${info.data[0]},`;
        trend_02.innerHTML =`${info.data[2]},`;
        trend_03.innerHTML =`${info.data[3]},`;
        trend_01.innerHTML =`${info.data[4]},`;
        trend_05.innerHTML =`${info.data[5]},`;

      
     
    })

    .catch(() => {
    })
}

fetch_busqueda2();