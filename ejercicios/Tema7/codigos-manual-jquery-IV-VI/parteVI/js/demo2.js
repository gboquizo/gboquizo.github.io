/**
 * Demo 2, parte VI
 * @author Guillermo Boquizo Sánchez
 */
function init() {
    let numClics = 0;
    let numDobleClics = 0;

    $("#micapa").dblclick(function (e) {
        numDobleClics++;
        $("#mensaje").html("Has hecho doble-clic<br>" + "Número de clics: " + numClics + "<br>Número de doble clics: " + numDobleClics);
    });
    $("#micapa").click(function (e) {
        numClics++;
        $("#mensaje").html("Has hecho clic<br>" + "Número de clics: " + numClics + "<br>Número de doble clics: " + numDobleClics);
    });
}
$(init);