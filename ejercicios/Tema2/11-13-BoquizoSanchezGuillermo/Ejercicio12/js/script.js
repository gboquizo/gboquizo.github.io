/**
 *
 * Completar el código JavaScript proporcionado para que cuando se pinche sobre el enlace 
 * se muestre completo el contenido de texto.
 *
 * @author Guillermo Boquizo Sánchez
 */
{
    let more;
    let linkReadMore;

    function showMeMore() {
        more.style.display = "none";
        linkReadMore.addEventListener("click", function (event) {

            event.preventDefault;

            more.style.display = "inline";

            this.style.display = "none";

        });
    }

    function init() {

        more = document.getElementById("more");

        linkReadMore = document.getElementById("linkReadMore");

        showMeMore();
    }

    document.addEventListener('DOMContentLoaded', init);
}