/**
 * Demo 5, parte VI
 * @author Guillermo Boquizo Sánchez
 */
function init() {
    $(document).keypress(operaEvento);
    $(document).keydown(operaEvento);
    $(document).keyup(operaEvento);
}

function operaEvento(evento) {
    $("#loescrito").html($("#loescrito").html() + evento.type + ": " + evento.which + ", ")
}
$(init);