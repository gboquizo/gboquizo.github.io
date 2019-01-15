/**
 * Demo 4, parte V
 * @author Guillermo Boquizo Sánchez
 */
function init() {

    let c = $("#micapa");
    let mostrandose;
    let msg = `<span>La capa no se está mostrando</span>`;
    let msg2 = `<span>¡Que la capa no se está mostrando! No se puede cambiar el fondo a naranja</span>`;
    let msg3 = `<span>Y dale...No se puede cambiar el fondo a gris</span>`;


    $("#micapa").css("color", "green");

    $("#micapa").css({
        "background-color": "#ff8800",
        "position": "absolute",
        "width": "100px",
        "top": "100px",
        "left": "200px"
    });

    $("#fondogris").click(function (e) {
        e.preventDefault();
        mostrandose = c.css("display");
        if (mostrandose == "block") {
            $("#micapa").css("background-color", "#999");
        } else {
            $("#mensaje").html(msg3);
        }

    });

    $("#fondonaranja").click(function (e) {
        e.preventDefault();
        mostrandose = c.css("display");
        if (mostrandose == "block") {
            $("#micapa").css("background-color", "#f80");
        } else {
            $("#mensaje").html(msg2);
        }

    });

    $("#ocultarmostrar").click(function (e) {
        e.preventDefault();
        mostrandose = c.css("display");
        if (mostrandose == "block") {
            c.css("display", "none");
            $("#mensaje").html(msg);
        } else {
            c.css("display", "block");
            $("#mensaje").html("");
        }
    });

    $("#micapa").mouseover(function () {
        antiguoLeft = parseInt($(this).css("left"));
        $(this).css("left", antiguoLeft + 10 + "px");
    })

    $("#micapa").click(function () {
        $(this).css("width", function (index, value) {
            let aumento = prompt("¿Cuánto píxeles quieres aumentar?", "25");
            return (parseInt(value) + parseInt(aumento)) + "px";
        });
    });
}
$(init);