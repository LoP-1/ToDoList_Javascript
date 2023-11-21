function agregarTarea(){

  var tarea = document.getElementById("ingresoTarea");
  var descripcion = document.getElementById("ingresoDescripcion");
  var lista = document.getElementById('listaTareas');

  console.log(tarea.value);
  console.log(descripcion.value);

  const li = document.createElement('li');
  const des = document.createElement('div');
  
  des.innerHTML = `<strong>${tarea.value}</strong>: ${descripcion.value}
  <button>123</button>`;

  li.appendChild(des);
  lista.appendChild(li);




  //regresa el cuadro de texto(tarea) a un valor vacio 
  tarea.value = "";
  descripcion.value = "";

}








//llamar al boton para ejecutar el codigo
document.getElementById('btnAgregar').addEventListener('click', agregarTarea);

