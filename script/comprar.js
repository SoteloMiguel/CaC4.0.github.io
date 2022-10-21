const descuentos = {
  'valorEntrada' : 200,
  'sinDescuento' : 0,
  'Estudiante' : 0.80,
  'Trainee' : 0.50,
  'Junior' : 0.15
}

const btnBorrar = document.getElementById('btnBorrar');
const btnResumen = document.getElementById('btnResumen');
const spanResumen = document.getElementById('spanResumen');

function limpiar(){
  // window.location.reload()
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("email").value = "";
  document.getElementById('inputCantidad').value = 1;
  document.getElementById('inputDescuento').value = 'sinDescuento';
  spanResumen.innerHTML = '';
}

function resumen(){
  const cantidad = document.getElementById('inputCantidad');
  const descuento = document.getElementById('inputDescuento');

  spanResumen.innerHTML = Math.round(descuentos.valorEntrada * cantidad.value * ( 1 - descuentos[descuento.value]));
}

btnBorrar.onclick = limpiar;
btnResumen.onclick = resumen;

console.log(0);
