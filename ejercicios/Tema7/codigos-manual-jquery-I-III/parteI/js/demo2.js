/**
 * Demo 2, parte I
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        $("#capa").mouseenter(() => $("#mensaje").css("display", "block"));
        $("#capa").mouseleave(() => $("#mensaje").css("display", "none"));
    }

    $(init)
}