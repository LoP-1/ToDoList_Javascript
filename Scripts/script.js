document.addEventListener('DOMContentLoaded', function() {
    cargarTareas();
  });
  


  function añadirTarea() {
    var ingresoTarea = document.getElementById('ingresoTarea');
    var listaTareas = document.getElementById('listaTareas');
  
    if (ingresoTarea.value.trim() !== '') {
      var tareaIndividual = document.createElement('li');
      tareaIndividual.textContent = ingresoTarea.value;
  
      
      listaTareas.appendChild(tareaIndividual);
  
      guardarTarea(ingresoTarea.value);
      ingresoTarea.value = '';
    }
  }
  
  
  
  function guardarTarea(tarea) {
    var tareas = cargarTareas();
    tareas.push({ task: tarea, completada: false });
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }
  

  
  function cargarTareas() {
    var listaTareas = document.getElementById('listaTareas');
    var tareas = extraerTareas();

  
    tareas.forEach(function(tarea) {
      var elemento = document.createElement('li');
      elemento.textContent = listaTareas.value; // Acceder a la propiedad task del objeto tarea
      listaTareas.appendChild(elemento);
    });
  

    return tareas; // Agregado el retorno de las tareas
  }

  
  function extraerTareas() {
    var tareas = localStorage.getItem('tareas');
    return tareas ? JSON.parse(tareas) : [];
  }
  

  function limpiarHtml() {
    var listaTareas = document.getElementById('listaTareas');
  
    listaTareas.innerHTML = '';
  
    limpiarTodo();
  }


  function limpiarTodo() {
    localStorage.removeItem('tareas');
  }
  