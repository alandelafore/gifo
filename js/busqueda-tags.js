
var trend_01    = document.getElementById("trend-01");
var trend_02    = document.getElementById("trend-02");
var trend_03    = document.getElementById("trend-03");
var trend_04    = document.getElementById("trend-04");
var trend_05    = document.getElementById("trend-05");
let cruz_buscar = document.getElementById("btn-borrar");
let lupas       = document.getElementById("lupa-derecha");


trend_01.addEventListener("click", function (ev) {
  let texto = trend_01.textContent;
  let resultado = texto.split(",", 1);

  texto_tipo_busqueda(resultado);
  mostrar_boton();


  busqueda = document.getElementById("busqueda").value = resultado;

  fetch_busqueda();

  cruz_buscar.classList.remove("ocultar");

  lupas.classList.add("ocultar");

})
trend_02.addEventListener("click", function (ev) {
  let texto = trend_02.textContent;

  let resultado = texto.split(",", 1);

  busqueda = document.getElementById("busqueda").value = resultado;

  lupas.classList.add("ocultar");

  texto_tipo_busqueda(resultado);

  fetch_busqueda();
  cruz_buscar.classList.remove("ocultar");
  mostrar_boton();


})
trend_03.addEventListener("click", function (ev) {
  let texto = trend_03.textContent;
  let resultado = texto.split(",", 1);
  busqueda = document.getElementById("busqueda").value = resultado;
  fetch_busqueda();
  cruz_buscar.classList.remove("ocultar");
  lupas.classList.add("ocultar");

  texto_tipo_busqueda(resultado);
  mostrar_boton();

})
trend_04.addEventListener("click", function (ev) {
  let texto = trend_04.textContent;
  let resultado = texto.split(",", 1);
  busqueda = document.getElementById("busqueda").value = resultado;
  fetch_busqueda();
  cruz_buscar.classList.remove("ocultar");
  lupas.classList.add("ocultar");
  texto_tipo_busqueda(resultado);
  mostrar_boton();



})
trend_05.addEventListener("click", function (ev) {
  let texto = trend_05.textContent;
  let resultado = texto.split(",", 1);
  busqueda = document.getElementById("busqueda").value = resultado;
  fetch_busqueda();
  cruz_buscar.classList.remove("ocultar");
  lupas.classList.add("ocultar");

  texto_tipo_busqueda(resultado);
  mostrar_boton();


})




function fetch_busqueda2() {
  url = "https://api.giphy.com/v1/trending/searches?api_key=PoR3CQt5ZlA0CoMpJi1MK9iCYQG6fgkT";


  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((info) => {
      console.log(info);

      trend_01.innerHTML = `${info.data[0]},`;
      trend_02.innerHTML = `${info.data[2]},`;
      trend_03.innerHTML = `${info.data[3]},`;
      trend_01.innerHTML = `${info.data[4]},`;
      trend_05.innerHTML = `${info.data[5]},`;



    })

    .catch(() => {
    })
}

fetch_busqueda2();