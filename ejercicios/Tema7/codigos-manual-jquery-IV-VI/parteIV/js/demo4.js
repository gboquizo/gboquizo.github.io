/**
 * Demo 4, parte IV
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        $("input.fecha").val(setFecha());
    }

    let setFecha = function () {
        let f = new Date();
        return f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
    };

    $(init);
}