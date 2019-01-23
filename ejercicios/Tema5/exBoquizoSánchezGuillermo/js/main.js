/**
 *
 * @author Guillermo Boquizo Sánchez
 */
{
	let spans;
	let form;
	let spanError;
	let inputs;

	let init = function () {
		form = document.getElementsByTagName('form')[0];
		inputs = Array.from(document.querySelectorAll("input:not([type='submit']):not([type='checkbox']):not([type='radio'])"));
		spans = Array.from(document.querySelectorAll('.spanErrorMsg'));
		spanError = document.getElementById('spanError');
		validarAcciones();
		form.addEventListener('submit', (ev) => {
			ev.preventDefault();
			crearReserva();
		});
	};

	let patrones = {
		nombre: [
			/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ]+[/\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])+[/\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])?$/g,
			'Nombre y apellido, mínimo 3 caracteres, comienza en mayúscula.'
		],
		horaLlegada: [/(?:[01]\d|2[0123]):(?:[012345]\d)$/gm, 'Formato válido hh:mm'],
		correo: [
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
			'Correo no válido'
		],
		fechaLlegada: [/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/, 'Formato de fecha yyyy-mm-DD'],
		numero: [/^[1-9]{1,}$/, 'El número ha de ser mayor de 0']
	};


	let validarAcciones = function (accion) {
		inputs.forEach(function (elemento, index) {
			if (accion === 'trigger') {
				elemento.addEventListener('blur', (function () {
					comprobarInputs(elemento, index);
				})());
			} else {
				elemento.addEventListener('blur', function () {
					comprobarInputs(elemento, index);
				});
			}
		});
	};

	let comprobarInputs = function (elemento, indiceSpan) {
		if (elemento.getAttribute('class')) {
			tester.test(patrones[elemento.getAttribute('class')], elemento, spans[indiceSpan]);
		}
	};

	let tester = {
		test(patron, campo, elementMsg) {
			let regex = new RegExp(patron[0]);
			if (!regex.test(campo.value)) {
				elementMsg.textContent = patron[1];
			} else {
				tester.limpiar(spanError, elementMsg);
			}
		},
		limpiar(spanError, elementMsg) {
			elementMsg.textContent = '';
			spanError.textContent = '';
		}
	};

	let comprobarCheckBox = function () {
		return Array.from(document.querySelectorAll("input[type='checkbox']:checked"));
	};

	let comprobarRadios = function () {
		return Array.from(document.querySelectorAll("input[type='radio']:checked"))[0].value;
	};

	let obtenerIndiceSpanErroneos = function () {
		let spanErroneos = [];
		spans.forEach((elemento, indice) => {
			if (elemento.textContent !== '') {
				spanErroneos.push(indice);
			}
		});
		return spanErroneos;
	};

	let crearReserva = function () {
		validarAcciones('trigger');
		if (obtenerIndiceSpanErroneos().length > 0) {
			inputs[obtenerIndiceSpanErroneos()[0]].focus();
			return;
		}
		spanError.textContent = '';
		try {
			let reserva = new Reserva(
				inputs[0].value,
				inputs[1].value,
				new Date(inputs[2].value),
				inputs[3].value,
				inputs[4].value,
				inputs[5].value,
				comprobarCheckBox(),
				comprobarRadios()
			);
			reserva.mostrar();
		} catch (error) {
			spanError.textContent = error.message;
		}
	};
	window.addEventListener('load', init);
}