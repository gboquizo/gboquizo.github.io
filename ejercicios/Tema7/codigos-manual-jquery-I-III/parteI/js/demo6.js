/**
 * Demo 6, parte I
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {

        $("#enlaceajax").click(function (evento) {
            evento.preventDefault();
            $("#destino").load("recibe-parametros.php", {
                nombre: "Pepe",
                edad: 45
            }, function () {
                alert("recibidos los datos por ajax")
            });
        });
    }

    $(init)
}