/**
 * Demo 5, parte I
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        $("#ocultar").click((event) => {
            event.preventDefault();
            $("#capaefectos").hide("slow");
        });
        $("#mostrar").click((event) => {
            event.preventDefault();
            $("#capaefectos").show(2000);
        });
    }

    $(init)
}