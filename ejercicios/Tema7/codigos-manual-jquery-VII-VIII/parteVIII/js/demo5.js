/**
 * Demo 5, parte VIII
 * @author Guillermo Boquizo Sánchez
 */
{
    let muestraRestantesCola = function () {
        let funcionesEnCola = $("#micapa").queue("fx").length;
        $("#mensaje").text("En el momento de hacer el último clic en los botones hay " +
            funcionesEnCola + " funciones de efectos en cola");
    }
    let init = function () {
        $("#botonfade").click(function () {
            let capa = $("#micapa");
            capa.fadeOut(500);
            capa.fadeIn(500);
            muestraRestantesCola();
        });
        $("#botonslide").click(function () {
            capa = $("#micapa");
            capa.slideUp(500);
            capa.slideDown(500);
            muestraRestantesCola();
        });
        $("#botontamanocola").click(function () {
            muestraRestantesCola();
        });
    }
    $(init);
}