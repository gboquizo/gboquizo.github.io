/**
 * Demo 4, parte IV
 * @author Guillermo Boquizo Sánchez
 */
function init() {
    $("input.fecha").val(setFecha());
}

let setFecha = function () {
    let f = new Date();
    return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
};

$(init);