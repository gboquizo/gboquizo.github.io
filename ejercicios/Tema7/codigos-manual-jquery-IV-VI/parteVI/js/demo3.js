/**
 * Demo 3, parte VI
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        $(document).click(e => {
            $("#mensaje").text("X: " + e.pageX + " - Y: " + e.pageY);
        });
        $(document).mousemove(function (e) {
            $("h2").html("X: " + e.pageX + " | Y: " + e.pageY)
        });
    }
    $(init);
}