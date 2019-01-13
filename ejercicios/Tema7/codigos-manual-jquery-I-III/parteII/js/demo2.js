/**
 * Demo 2, parte II
 * @author Guillermo Boquizo Sánchez
 */
function init() {
    $("#capa").data("nombre", "Guillermo Boquizo Sánchez");
    alert("Nombre cargado:" +
        $("#capa").data("nombre"));

    // remover el dato
    $("#capa").removeData("nombre");
    alert("Tras eliminar el dato, el estado del nombre es " + $("#capa").data("nombre"))
}
$(init)