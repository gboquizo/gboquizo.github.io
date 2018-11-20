/**
 * 
 * 
 * @author Guillermo Boquizo Sánchez
 */
{
    function init() {
        document.getElementById('ejercicio1').addEventListener('click', ev => {
            ev.preventDefault;
            window.open("./ejercicio1.html", "_self");
        });
        document.getElementById('ejercicio2').addEventListener('click', ev => {
            ev.preventDefault;
            window.open("./ejercicio2.html", "_self");
        });
    }
    document.addEventListener('DOMContentLoaded', init);
}