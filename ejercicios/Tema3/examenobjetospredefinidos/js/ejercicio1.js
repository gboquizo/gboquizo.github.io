/**
 *@author Guillermo Boquizo Sánchez.
 *
 */
{
	let entrada;
	let cajaEjercicio;
	let spanError;
	let powerRangers;

	/**
	 * Función encargada de la carga predeterminada del script ejercicio1.js
	 */
	function init() {
		entrada = document.getElementById('entrada');
		cajaEjercicio = document.getElementById('cajaEjercicio');
		cajaEjercicio.style.background = '#BDB7BD';
		spanError = document.getElementById('spanError');
		powerRangers = new Map();
		powerRangers.set('rojo', '#FF0000');
		powerRangers.set('amarillo', '#FBFF00');
		powerRangers.set('azul', '#0800FF');
		powerRangers.set('negro', '#000000');
		powerRangers.set('rosa', '#FF0095');
		powerRangers.set('verde', '#00A316');
		powerRangers.set('blanco', '#FFFFFF');
		entrada.addEventListener('blur', validarColor);
		volver();
	}

	/**
	 * Función encargada de la validación del color cargado en la entrada de texto, en función de los elementos predefinidos en un objeto Map.
	 */
	let validarColor = function () {
		let entradaValida = entrada.value.toLowerCase().trim();
		try {
			if (powerRangers.has(entradaValida)) {
				spanError.innerHTML = '¡Go go Power Rangers! ' + "&nbsp" + 'El Power Ranger ' + entradaValida + ' se ha metamorfoseado.';
				cajaEjercicio.style.background = powerRangers.get(entradaValida);
			} else {
				if (entradaValida === '')
					throw new Error('¡Aaaay aaay aay ay ay!.No tenemos Power Rangers por aquí :-(');
				throw new Error('Esto no es un Power Ranger válido, avisa a Zordon :-(');
			}
		} catch (e) {
			cajaEjercicio.style.background = '#BDB7BD';
			spanError.textContent = e.message;
		}
	};

	/**
	 * Función encargada de gestionar el comportamiento del enlace "atrás". 
	 * Usa el objeto predeterminado Window con la propiedad  de solo lectura history para simular el retroceso de página.
	 *
	 */
	let volver = function () {
		document.getElementById('back');
		back.addEventListener('click', (ev) => {
			ev.preventDefault;
			history.back();
		});
	};

	// Manejador del evento de document encargado de la carga inicial.
	document.addEventListener('DOMContentLoaded', init);
}