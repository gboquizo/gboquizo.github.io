/**
 * Demo 1, parte VI
 * @author Guillermo Boquizo Sánchez
 */
function init() {
    $(".mienlace").click(function (e) {
        e.preventDefault();
        $("#mensaje").html("Has hecho clic<br>Como he hecho preventDefault, no te llevaré a DesarrolloWeb.com");
    });
    $(".mienlace").mouseleave(function (e) {
        $("#mensaje").html("");
    });
}
$(init);