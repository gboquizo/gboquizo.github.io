/**
 *@author Guillermo Boquizo Sánchez.
 *
 */
{
    function init() {
        let contador = document.getElementById('contador');
        let nombre = document.getElementById('nombres');
        contador.addEventListener('click', abrirContador);
        nombre.addEventListener('click', abrirNombres);
    }

    let abrirContador = function (ev) {
        ev.preventDefault;
        window.open("./contador.html", "_self");
    }

    let abrirNombres = function (ev) {
        ev.preventDefault;
        window.open("./nombres.html", "_self");
    }

    document.addEventListener('DOMContentLoaded', init);
}