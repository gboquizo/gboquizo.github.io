/**
 * Demo 4, parte I
 * @author Guillermo Boquizo Sánchez
 */

function init() {
    $("a").mouseover(() => $("#capa").addClass("clasecss"));
    $("a").mouseout(() => $("#capa").removeClass("clasecss"));
}

$(init)