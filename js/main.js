var barra = document.getElementById('barraTareas');
var windows = document.getElementById('windows');

function activar(){
    windows.classList.add("activar");
}

windows.addEventListener('click', activar);