/**
 * Demo 4, parte I
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        $("a").mouseover(() => $("#capa").addClass("clasecss"));
        $("a").mouseout(() => $("#capa").removeClass("clasecss"));
    }

    $(init)
}