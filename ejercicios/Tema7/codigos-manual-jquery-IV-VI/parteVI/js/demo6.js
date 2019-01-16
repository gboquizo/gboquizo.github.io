/**
 * Demo 5, parte VI
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        $("#mitexto").keypress(function (e) {
            e.preventDefault();
            $("#loescrito").html(e.which + "<br><b>Letra:</b><br> " + String.fromCharCode(e.which))
        });
    }
    $(init);
}