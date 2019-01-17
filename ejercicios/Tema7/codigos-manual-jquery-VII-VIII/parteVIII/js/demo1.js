/**
 * Demo 1, parte VIII
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        $("#animar").click(function (event) {
            event.preventDefault()
            $("h1").animate({
                'border-bottom-width': "20",
                'font-size': '25pt'
            });
        });

        $("#restaurar").click(function (event) {
            event.preventDefault()
            $("h1").css({
                'border-bottom-width': "1",
                'font-size': '15pt'
            });
        });
    }
    $(init);
}