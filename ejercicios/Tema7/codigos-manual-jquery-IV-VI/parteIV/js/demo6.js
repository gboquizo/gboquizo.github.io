/**
 * Demo 6, parte IV
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        let msg =
            `   <span>$("input").prop("checked", false) : ${$("input").prop("checked",false)}</span><br/><br/>
        <span>$("input").prop("checked"): ${$("input").prop("checked")}</span><br/><br/>`;
        $("#mensaje").html(msg);
    }
    $(init);
}