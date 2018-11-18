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
		let patron = /(\s?[a-zA-ZáéíóúÁÉÍÓÚñÑ]+\s?) (\s?[a-zA-ZáéíóúÁÉÍÓÚñÑ]+\s?)+,(\s?[a-zA-ZáéíóúÁÉÍÓÚñÑ]+\s?)$/g;
		let valorEntrada = entrada.value;
		let valores = patron.exec(valorEntrada);
		try {
			console.log(patron.exec(valorEntrada));
			if (patron.test(valorEntrada)) {
				if (valores !== null) {
					spanError.textContent = '';
					[ , apellido1, apellido2, pnombre ] = valores;
					nombre.textContent = `Nombre: ${pnombre}`;
					apellidos.textContent = `Apellido: ${apellido1 + ' ' + apellido2}`;
				}
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
		if (!setValidacion.has(pnombre.trim())) {
			setValidacion.add(pnombre.trim());
		} else {
			spanError.textContent += 'Nombre repetido. ';
		}
		if (!setValidacion.has(apellido1.trim())) {
			setValidacion.add(apellido1.trim());
		} else {
			spanError.textContent += 'Primer apellido repetido.';
		}
		if (!setValidacion.has(apellido2.trim())) {
			setValidacion.add(apellido2.trim());
		} else {
			spanError.textContent += 'Segundo apellido repetido.';
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
