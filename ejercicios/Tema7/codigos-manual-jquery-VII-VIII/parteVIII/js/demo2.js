/**
 * Demo 2, parte VIII
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        $("h1").animate({
                color: "#f86"
            },
            3000
        );
        let iluminado = false;
        $("h2").click(function () {
            let elem = $(this);
            if (iluminado) {
                elem.animate({
                    "background-color": "#9f9"
                }, 500);
            } else {
                elem.animate({
                    "background-color": "#ffc"
                }, 500);
            }
            iluminado = !iluminado;
        })
    }
    $(init);
}