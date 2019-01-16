/**
 * 
 * 
 * @author Guillermo Boquizo Sánchez
 */
{
    /**
     * Función encargada de la carga predeterminada del script main.js
     */
    function init() {
        abrirEjercicio1();
        abrirEjercicio2();
    }

    /**
     * Función encargada del comportamiento del enlace al ejercicio 1.
     */
    let abrirEjercicio1 = function () {
        document.getElementById('ejercicio1').addEventListener('click', ev => {
            ev.preventDefault;
            window.open("ejercicio1.html", "_self");
        });
    }

    /**
     * Función encargada del comportamiento del enlace al ejercicio 2.
     */
    let abrirEjercicio2 = function () {
        document.getElementById('ejercicio2').addEventListener('click', ev => {
            ev.preventDefault;
            window.open("ejercicio2.html", "_self");
        });
    }

    // Manejador del evento de document encargado de la carga inicial.
    document.addEventListener('DOMContentLoaded', init);
}