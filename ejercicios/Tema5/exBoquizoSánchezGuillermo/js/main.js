/**
 *
 *
 *
 * @author Guillermo Boquizo Sánchez
 */
{
	let inputsText;
	let inputsDate;
	let inputsTime;
	let inputsMail;
	let inputsNumber;
	let spans;
	let form;
	let spanError;
	let inputs;

	let init = function() {
		form = document.getElementsByTagName('form')[0];
		inputsText = Array.from(document.querySelectorAll("input[type='text']"));
		inputsDate = Array.from(document.querySelectorAll("input[type='date']"));
		inputsTime = Array.from(document.querySelectorAll("input[type='time']"));
		inputsMail = Array.from(document.querySelectorAll("input[type='email']"));
		inputsNumber = Array.from(document.querySelectorAll("input[type='number']"));
		inputs = Array.from(document.getElementsByTagName('input'));
		spans = Array.from(document.querySelectorAll('.spanErrorMsg'));
		spanError = document.getElementById('spanError');
		form.addEventListener('submit', (ev) => {
			ev.preventDefault();
			crearReserva();
		});
		validarAcciones('blur');
	};

	/**
	 *
	 */
	let patrones = {
		nombre: [
			/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ]+[/\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])+[/\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])?$/g,
			'Nombre y apellido, mínimo 3 caracteres, comienza en mayúscula.'
		],
		horaLlegada: [ /(?:[01]\d|2[0123]):(?:[012345]\d)$/gm, 'Formato válido hh:mm' ],
		correo: [
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
			'Correo no válido'
		]
	};

	let tester = {
		testearNumeros(campo, elementMsg) {
			if (campo.value <= 0 || campo.value === '') {
				if (campo.value < 0) {
				}
				elementMsg.textContent = 'Error, número inválido.';
				if (campo.value === '') {
					elementMsg.textContent = 'Rellene este campo.';
				}
			} else {
				tester.limpiar(spanError, elementMsg);
			}
		},
		test(patron, campo, elementMsg) {
			let regex = new RegExp(patron[0]);
			if (!regex.test(campo.value)) {
				elementMsg.textContent = patron[1];
			} else {
				tester.limpiar(spanError, elementMsg);
			}
		},
		testFecha(campo, elementMsg) {
			let valorFecha = Date.parse(campo.value);
			if (isNaN(valorFecha)) {
				elementMsg.textContent = 'La fecha de llegada no puede estar vacía.';
			} else {
				tester.limpiar(spanError, elementMsg);
			}
		},
		limpiar(spanError, elementMsg) {
			elementMsg.textContent = '';
			spanError.textContent = '';
		}
	};

	let comprobarInputs = function(elemento, indiceSpan) {
		if (elemento.getAttribute('id')) {
			tester.test(
				patrones[elemento.getAttribute('id')],
				elemento,
				spans[indiceSpan],
				elemento.getAttribute('id')
			);
		}
	};

	let comprobarInputsNumber = function(elemento, indiceSpan) {
		tester.testearNumeros(elemento, spans[indiceSpan]);
	};

	let comprobarInputsDate = function(elemento, indiceSpan) {
		tester.testFecha(elemento, spans[indiceSpan]);
	};

	let validarAcciones = function(accion) {
		inputs.forEach(function(elemento, index) {
			switch (elemento.getAttribute('type')) {
				case 'text':
					if (accion === 'blur') {
						elemento.addEventListener('blur', comprobarInputs.bind(null, elemento, index));
					} else {
						comprobarInputs(elemento, index);
					}
					break;
				case 'number':
					if (accion === 'blur') {
						elemento.addEventListener('blur', comprobarInputsNumber.bind(null, elemento, index));
					} else {
						comprobarInputsNumber(elemento, index);
					}
					break;
				case 'email':
					if (accion === 'blur') {
						elemento.addEventListener('blur', comprobarInputs.bind(null, elemento, index));
					} else {
						comprobarInputs(elemento, index);
					}
					break;
				case 'date':
					if (accion === 'blur') {
						elemento.addEventListener('blur', comprobarInputsDate.bind(null, elemento, index));
					} else {
						comprobarInputsDate(elemento, index);
					}
					break;
				case 'time':
					if (accion === 'blur') {
						elemento.addEventListener('blur', comprobarInputs.bind(null, elemento, index));
					} else {
						comprobarInputs(elemento, index);
					}
					break;

				default:
					break;
			}
		});
	};

	let comprobarCheckBox = function() {
		return Array.from(document.querySelectorAll("input[type='checkbox']:checked"));
	};

	let comprobarRadios = function() {
		return Array.from(document.querySelectorAll("input[type='radio']:checked"))[0].value;
	};

	let crearReserva = function() {
		validarAcciones('submitAction');
		try {
			spans.forEach((elemento, indice) => {
				if (elemento.textContent !== '') {
					inputs[indice].focus();
					throw false;
				}
			});
			spanError.textContent = '';
			try {
				let reserva = new Reserva(
					inputsText[0].value,
					inputsMail[0].value,
					new Date(inputsDate[0].value),
					inputsTime[0].value,
					inputsNumber[0].value,
					inputsNumber[1].value,
					comprobarCheckBox(),
					comprobarRadios()
				);
				reserva.mostrar();
			} catch (error) {
				spanError.textContent = error.message;
			}
		} catch (e) {}
	};
	window.addEventListener('load', init);
}
