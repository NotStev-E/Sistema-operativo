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
    var horaYFecha = document.getElementById('horaYFecha');

    horaYFecha.classList.add("activar");
}
function noVerReloj(){
    var horaYFecha = document.getElementById('horaYFecha');

    horaYFecha.classList.remove("activar");
}


function apagar(){
    var apagando = document.getElementById('apagar');

    apagando.classList.add("actApagar");
}
function encender(){
    var encender = document.getElementById('apagar');

    encender.classList.remove("actApagar");
}
function maximizar(){
    var botonMaximizar = document.getElementById('maximizar');
    var botonMaximizar2 = document.getElementById('maximizar2');
    var ventana = document.getElementById('ventana');

    ventana.classList.add("maximizar");
    botonMaximizar2.classList.add("activar");
    botonMaximizar.classList.add("desactivar");
}
function minimizar(){
    var botonMaximizar = document.getElementById('maximizar');
    var botonMaximizar2 = document.getElementById('maximizar2');
    var ventana = document.getElementById('ventana');

    ventana.classList.remove("maximizar");
    botonMaximizar2.classList.remove("activar");
    botonMaximizar.classList.remove("desactivar");
}
function salir(){
    var botonMaximizar = document.getElementById('maximizar');
    var botonMaximizar2 = document.getElementById('maximizar2');
    var ventana = document.getElementById('ventana');
    var botonCarpeta = document.getElementById('botonArchivo');
    var botonCarpeta2 = document.getElementById('botonArchivo2');
    var ventana = document.getElementById('ventana');

    ventana.classList.remove("maximizar");
    botonMaximizar2.classList.remove("activar");
    botonMaximizar.classList.remove("desactivar");
    botonCarpeta.classList.remove("desactivar");
    botonCarpeta2.classList.remove("activar");
    ventana.classList.remove("activar");
}


function abrirAjustes(){
    var ventana = document.getElementById('ventanaAjustes');
    var icoAjustes = document.getElementById('icoAjustes');
    var icoAjustes2 = document.getElementById('icoAjustes2');

    ventana.classList.add("activar");
    icoAjustes2.classList.add("activar")
    icoAjustes.classList.remove("activar");
}
function abrirAjus2(){
    var ventana = document.getElementById('ventanaAjustes');
    var icoAjustes = document.getElementById('icoAjustes');

    ventana.classList.add("activar");
    icoAjustes.classList.add("activar");
}
function cerrarAjustes(){
    var ventana = document.getElementById('ventanaAjustes');
    var icoAjustes= document.getElementById('icoAjustes');
    var icoAjustes2 = document.getElementById('icoAjustes2');

    ventana.classList.remove("activar");
    icoAjustes2.classList.remove("activar");
    icoAjustes.classList.add("activar");
}
function maximizarAjustes(){
    var botonMaximizarAjustes = document.getElementById('maximizarAjustes');
    var botonMinimizarAjustes = document.getElementById('minimizarAjustes');
    var ventana = document.getElementById('ventanaAjustes');

    botonMaximizarAjustes.classList.add("desactivar");
    botonMinimizarAjustes.classList.add("activar");
    ventana.classList.add('maximizarAjustes');
}
function minimizarAjustes(){
    var botonMaximizarAjustes = document.getElementById('maximizarAjustes');
    var botonMinimizarAjustes = document.getElementById('minimizarAjustes');
    var ventana = document.getElementById('ventanaAjustes');

    botonMaximizarAjustes.classList.remove("desactivar");
    botonMinimizarAjustes.classList.remove("activar");
    ventana.classList.remove('maximizarAjustes');
}
function salirAjustes(){
    var ventana = document.getElementById('ventanaAjustes');
    var icoAjustes= document.getElementById('icoAjustes');
    var icoAjustes2 = document.getElementById('icoAjustes2');
    
    icoAjustes.classList.remove("desactivar");
    ventana.classList.remove("activar");
    icoAjustes2.classList.remove("activar");
    icoAjustes.classList.remove("activar");
}