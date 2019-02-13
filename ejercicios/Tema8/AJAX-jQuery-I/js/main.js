/** 
 * Utilizando Ajax con jQuery, realiza una comunicación con el servidor que reciba y muestre un fichero html. El funcionamiento será el siguiente:
 *  Página html con una caja de texto donde se indica una url que vas a descargar del servidor. Inicialmente aparecerá la propia página
 *  Al pulsar el botón "mostrar" mostrará el fichero en un scroller
 *  En un div debe mostrarse en todo momento el estado en el que se encuentra la petición AJAX, indicando tanto el valor numérico como su descripción ("No inicializada", "Abierta"... "Completada") (readyState)
 *  También se mostrará el código y texto del estado de la respuesta del servidor en otro div (status y statusText)
 *  Utiliza estilos y diseña la página de forma equilibrada.
 *  En la misma ruta, deja un fichero index2.html para probar la carga de otros ficheros
 * @author Guillermo Boquizo Sánchez
 */
{
    let init = function () {
        let currentURL = jQuery(location).attr('href');
        console.log(currentURL);
        
        $("#url").html(currentURL);
        $("#btnShow").click(showHTML);

    }

    let showHTML = function () {
        let url = "showedHTML.html" 
        let actions = "";

        $.ajax({
            method: "GET",
            url: url,
            beforeSend: () => actions += "<p>beforeSend</p>",
            complete: () => {
                actions += "<p>complete</p>";
                $("#stateArticle").html(actions);
            },
            success: (data) => {
                $("#infoArticle").text(data);
                actions += "<p>success</p>";
            },
            error: () => actions += "<p>error</p>"
        });
        $("#url").html(url);
    }
    $(init)

}