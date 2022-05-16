function activar(){
    var windows = document.getElementById('botonWindows');
    var inicio = document.getElementById('inicio');
    var botonWindows2 = document.getElementById('botonWindows2');

    inicio.classList.add("activar");
    windows.classList.add("desactivar");
    botonWindows2.classList.add("activar");
}
function desactivar(){
    var windows = document.getElementById('botonWindows');
    var inicio = document.getElementById('inicio');
    var botonWindows2 = document.getElementById('botonWindows2');

    inicio.classList.remove("activar");
    windows.classList.remove("desactivar");
    botonWindows2.classList.remove("activar");
}
function abrirVentana(){
    var botonCarpeta = document.getElementById('botonArchivo');
    var botonCarpeta2 = document.getElementById('botonArchivo2');
    var ventana = document.getElementById('ventana');

    botonCarpeta.classList.add("desactivar");
    botonCarpeta2.classList.add("activar");
    ventana.classList.add("activar");
}
function cerarVentana(){
    var botonCarpeta = document.getElementById('botonArchivo');
    var botonCarpeta2 = document.getElementById('botonArchivo2');
    var ventana = document.getElementById('ventana');

    botonCarpeta.classList.remove("desactivar");
    botonCarpeta2.classList.remove("activar");
    ventana.classList.remove("activar");
}

function reloj(){
    var reloj = document.getElementById('botonReloj');
    var horaYFecha = document.getElementById('horaYFecha');

    horaYFecha.classList.add("activar");
}
function noVerReloj(){
    var reloj = document.getElementById('botonReloj');
    var horaYFecha = document.getElementById('horaYFecha');

    horaYFecha.classList.remove("activar");
}
function apagar(){
    var iconoApagar = document.getElementById('iconoApagar');
    var apagando = document.getElementById('apagar');

    apagando.classList.add("activar");
}
function encender(){
    var iconoApagar = document.getElementById('iconoApagar');
    var encender = document.getElementById('apagar');

    encender.classList.remove("activar");
}