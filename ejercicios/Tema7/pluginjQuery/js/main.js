/**
*   Diseña un formulario, con tres input de tipo texto(nombre, apellido y correo electrónico) y un textArea(mensaje).
*
*   Crea un plugin jQuery denominado examen.Validará las cajas de texto de los formularios según las expresiones regulares predefinidas por 
*   el plugin e indicadas en los elementos html con el atributo“ tipo”.

*   Se invocará de la siguiente forma: $("form").examen();
*
*   El funcionamiento del plugin será el siguiente:
*       A cada uno de los elementos input de tipo text se le asociarán dos eventos: al perder el foco y al ganarlo.
*
*           Al perder el foco se realizará la validación en función del atributo“ tipo” indicado en el elemento html.
*           Se cambiará el formato de la caja de texto si el texto no es válido.
*
*           Al ganar el foco se volverá al formato css inicial.
*
*   El evento submit tendrá el siguiente comportamiento:
*       Por cada uno de los elementos input de tipo text se le aplicará el evento de pérdida de foco, validándose así todos.
*       Si hay alguno erróneo, se devolverá el foco al primero de ellos.
*       Si todos están correctos, se realizará una solicitud ajax que mostrará un fichero de texto en la textarea
*
*   El plugin admitirá valores por defecto que podrán ser sustituidos por los que el usuario envíe como parámetros.
*   Los parámetros serán las características css aplicables a las cajas de texto cuando la entrada de datos no sea correcta.
*
*   Los valores por defecto serán:
*
*       color #ff0000
*       background-color #ffDEDE
*       border 2 px solid #ffD3D7

*   Has de cumplir los siguientes requisitos:
*
*   Las expresiones regulares definidas serán las siguientes:
*
*   <input type="text" tipo='nombre'>
*       admite varias nombres separados por espacios de al menos 3 caracteres.
*       Se aplicará a las cajas nombre y apellidos.
*
*    <input type="text" tipo='correo'>
*       admite estos correos válidos: examen @exm.c, ex.dwec @ex.m.c
*       no admite estos correos: exa..men @exm.c, e @examen
*
*   Crea un objeto / closure Tester al que se le pase texto a validar / tipo de texto a validar y 
*   devuelva si es válido o no(puede devolver el mensaje de error, aunque no se use en este ejercicio)
*
*/
{
	let init = function() {
		$('form').validar(
			{
				// Se añade un objeto con las regex y mensajes a mostrar.
				objPatterns: {
					nombre: [ /([a-zA-Z]{1,}\s?){1,3}/, 'Probando extends con el patrón nombre.' ],
					apellidos: [ /([a-zA-Z]{1,}\s?){1,3}/, 'Probando extends con el patrón apellidos.' ],
					correo: [
						/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
						'Probando extends con el patrón correo.'
					],
					textarea: [ /(\w\s?.?\s?){10,}/, 'Probando extends con el patrón textarea.' ]
				}
			},

			// Se añade clase css para el foco.
			'input',

			//Se pasa un objeto con los parámetros para AJAX.
			{
				type: 'POST',
				url: './data.php',
				element: $('#showData')
			}
		);
	};
	$(init);
}
