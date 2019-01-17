/**
 * Script para el cierre de una ventana generada dinámicamente.
 *
 * @author Guillermo Boquizo Sánchez
 */
{

    function init() {
        let btnWindowClose = document.getElementById("windowClose");
        btnWindowClose.addEventListener("click", windowClose);
    }

    let windowClose = function () {
        window.close();
    }

    document.addEventListener("DOMContentLoaded", init);
}