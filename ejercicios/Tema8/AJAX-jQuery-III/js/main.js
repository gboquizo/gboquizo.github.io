/**
 *   Utilizando Ajax, realiza una comunicación con el servidor que reciba sugerencias de nombres almacenadas en un array php.
 *   El funcionamiento será el siguiente:
 *
 *   Página html con un input
 *       Conforme se introduzca texto, se buscarán las coincidencias en un array php que contendrá 
 *       los nombres de los compañeros del módulo(introduce nombre y apellidos, para ver más coincidencias, de al menos 10 compañeros)
 *   Las sugerencias(coincidencias en el array) se mostrarán.
 *   En caso de no haber coincidencia, se mostrará el mensaje "No hay coincidencias"
 *
 *   Responde a las siguientes preguntas:
 *       ¿Cómo se trata el envío de un parámetro a php ?. Indica todos los pasos(html, javascript, php)
 *      En HTML se prepara un input <input id="suggestedSearch" type="search" name="search">.
 *      En js se realiza una petición AJAX, indicando en el data que se precisan los valores de search, a obtener por GET.
 *      En php si se da la variable $_GET para search, se recorre el array, se fragmenta por nombre y apellido, se añade a un array que se pasa a JSON.
 *      Finalmente en js se trata, si la petición tiene éxito, los resultados parseados a JSON y se hace un append para mostrar en un div con un id determinado en HTML.
 * 
 *   Atributo donde se recibe la respuesta
 *   La respuesta, una vez realizada con éxito la petición, se recibe en el atributo success.
 *
 *   Envía el ejercicio operativo online y copia de los ficheros
 * @author Guillermo Boquizo Sánchez
 */

{
    let init = function () {
        $('#suggestedSearch').keyup(function () {
            let value = $(this).val() !== '' ? $(this).val() : '';
            if (value.length >= 0) {
                $.ajax({
                    type: 'GET',
                    url: './info.php',
                    data: {
                        search: value
                    },
                    dataType: 'text',
                    success: function (response) {
                        let responseJSON =
                            response !== '' && response !== 'No hay coincidencias' ? JSON.parse(response) : {};
                        if (!$.isEmptyObject(responseJSON)) {
                            $('#searchedInfo').html('');
                            let html = ``;
                            for (let i in responseJSON) {
                                html += `<p class="suggest ripple animated rollIn delay-${i}s">${responseJSON[i].first_name} ${responseJSON[i]
									.last_name}</p>`;
                            }
                            $('#searchedInfo').append(html);
                            $('.suggest').click(function () {
                                $('#suggestedSearch').val($(this).text());
                            });
                        } else {
                            $('#searchedInfo').html(`<p class="animated jello">No hay coincidencias</p>`);
                        }
                    },
                    complete: function () {
                        $('#searchedInfo').css('background', 'rgba(255,255,255,0.2)');
                    }
                });
            }
        });
    };
    $(init);
}