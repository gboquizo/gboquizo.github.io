/**
 *@Author: Guillermo Boquizo Sánchez.
 *
 */
{
	let nombre;
	let apellidos;
	let entrada;
	let spanError;
	let setValidacion;

	function init() {
		nombre = document.getElementById('nombre');
		apellidos = document.getElementById('apellidos');
		entrada = document.getElementById('entrada');
		spanError = document.getElementById('spanError');
		setValidacion = new Set();
		entrada.addEventListener('blur', validarNombres);
		volver();
	}

	let ErrorException = function(msg, name) {
		this.message = msg;
		this.name = name;
	};

	let validarNombres = function() {
		let patron = '^((?:[a-záéíóúñ]{1,})(?:[ ]{1,}(?:[a-záéíóúñ]{1,}))*)' + '[ ]*,[ ]*' + '([a-záéíóúñ]{1,})$';
		let regex = new RegExp(patron, 'i');
		let valorEntrada = entrada.value;
		let valores = regex.exec(valorEntrada.trim());
		try {
			if (valores !== null) {
				spanError.textContent = '';
				[ , rapellidos, rnombre ] = valores;
				nombre.innerHTML = `Nombre:  <b>${rnombre}</b>`;
				apellidos.innerHTML = `Apellidos:  <b>${rapellidos.replace(/\s+/g, ' ')}</b>`;
			} else {
				let miExcepcion = new ErrorException('Error. Formato correcto: Cuadrado Perfecto, Anacleto', 'error');
				throw miExcepcion;
			}
			comprobarRepeticion(setValidacion, spanError);
		} catch (e) {
			spanError.textContent = e.message;
		}
	};

	let comprobarRepeticion = function(setValidacion, spanError) {
		let nombreCompleto = rnombre + rapellidos.replace(/\s+/g, ' ');
		if (!setValidacion.has(nombreCompleto)) {
			setValidacion.add(nombreCompleto);
		} else {
			spanError.textContent = 'REPETIDO';
		}
	};

	let volver = function() {
		let back = document.getElementById('back');
		back.addEventListener('click', (ev) => {
			ev.preventDefault;
			history.go(-1);
		});
	};

	document.addEventListener('DOMContentLoaded', init);
}
