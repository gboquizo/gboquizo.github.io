/**
 *
 *
 *
 * @author Guillermo Boquizo Sánchez
 */
{
	let nombre;
	let correo;
	let fechaLlegada;
	let horaLlegada;
	let numNoches;
	let numPersonas;
	let radioJoven;
	let radioMediano;
	let radioMaduro;
	let spanNombre;
	let spanCorreo;
	let spanFechaLlegada;
	let spanHoraLlegada;
	let spanNumNoches;
	let spanNumPersonas;
	let spanError;
	let inputInvalidos = new Map();

	function init() {
		let form = document.getElementsByTagName('form')[0];

		nombre = document.getElementById('nombre');
		correo = document.getElementById('correo');
		fechaLlegada = document.getElementById('fechaLlegada');
		horaLlegada = document.getElementById('horaLlegada');
		numNoches = document.getElementById('numNoches');
		numPersonas = document.getElementById('numPersonas');
		checkDesayuno = document.getElementById('checkDesayuno');
		checkAlmuerzo = document.getElementById('checkAlmuerzo');
		checkCena = document.getElementById('checkCena');
		radioJoven = document.getElementById('radioJoven');
		radioMediano = document.getElementById('radioMediano');
		radioMaduro = document.getElementById('radioMaduro');

		spanNombre = document.getElementById('spanNombre');
		spanCorreo = document.getElementById('spanCorreo');
		spanFechaLlegada = document.getElementById('spanFechaLlegada');
		spanHoraLlegada = document.getElementById('spanHoraLlegada');
		spanNumNoches = document.getElementById('spanNumNoches');
		spanNumPersonas = document.getElementById('spanNumPersonas');
		spanError = document.getElementById('spanError');

		nombre.addEventListener('blur', comprobarNombre);
		correo.addEventListener('blur', comprobarCorreo);
		fechaLlegada.addEventListener('blur', comprobarFechaLlegada);
		horaLlegada.addEventListener('blur', comprobarHoraLlegada);
		numNoches.addEventListener('blur', comprobarNumNoches);
		numPersonas.addEventListener('blur', comprobarNumPersonas);
		form.addEventListener('submit', (ev) => {
			ev.preventDefault();
			crearReserva();
		});
	}

	/**
	 *
	 */
	let patrones = {
		nombre: [
			/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ]+[/\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])+[/\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])?$/g,
			'Nombre y apellido, mínimo 3 caracteres, comienza en mayúscula.'
		],
		hora: [/(?:[01]\d|2[0123]):(?:[012345]\d)$/gm, 'Formato válido hh:mm'],
		correo: [
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
			'Correo no válido'
		]
	};

	let tester = {
		testearNumeros(campo, elementMsg, mapKey) {
			if (campo.value <= 0 || campo.value === '') {
				inputInvalidos.set(mapKey, campo);
				if (campo.value < 0) {}
				elementMsg.textContent = 'Error, número inválido.';
				if (campo.value === '') {
					elementMsg.textContent = 'Rellene este campo.';
				}
			} else {
				tester.limpiar(spanError, elementMsg, mapKey);
			}
		},
		test(patron, campo, elementMsg, mapKey) {
			let regex = new RegExp(patron[0]);
			if (!regex.test(campo.value)) {
				inputInvalidos.set(mapKey, campo);
				elementMsg.textContent = patron[1];
			} else {
				tester.limpiar(spanError, elementMsg, mapKey);
			}
		},
		testFecha(campo, elementMsg, mapKey) {
			let valorFecha = Date.parse(campo.value);
			if (isNaN(valorFecha)) {
				elementMsg.textContent = 'La fecha de llegada no puede estar vacía.';
				inputInvalidos.set(mapKey, campo);
			} else {
				tester.limpiar(spanError, elementMsg, mapKey);
			}
		},
		limpiar(spanError, elementMsg, mapKey) {
			if (inputInvalidos.has(mapKey)) {
				inputInvalidos.delete(mapKey);
			}
			elementMsg.textContent = '';
			spanError.textContent = '';
		}
	};

	let comprobarNombre = () => tester.test(patrones.nombre, nombre, spanNombre, 'Nombre_completo');
	let comprobarCorreo = () => tester.test(patrones.correo, correo, spanCorreo, 'Correo');
	let comprobarFechaLlegada = () => tester.testFecha(fechaLlegada, spanFechaLlegada, 'Fecha_de_llegada');
	let comprobarHoraLlegada = () => tester.test(patrones.hora, horaLlegada, spanHoraLlegada, 'Hora_llegada');
	let comprobarNumNoches = () => tester.testearNumeros(numNoches, spanNumNoches, 'Numero_noches');
	let comprobarNumPersonas = () => tester.testearNumeros(numPersonas, spanNumPersonas, 'Numero_personas');

	let comprobarCheckBox = function () {
		return Array.from(document.querySelectorAll("input[type='checkbox']:checked"));
	};

	let comprobarRadios = function () {
	return Array.from(document.querySelectorAll("input[type='radio']:checked"))[0].value;
	};

	let crearReserva = function () {
		try {
			inputInvalidos.clear();
			comprobarNombre();
			comprobarCorreo();
			comprobarFechaLlegada();
			comprobarHoraLlegada();
			comprobarNumNoches();
			comprobarNumPersonas();
			if (inputInvalidos.size > 0) {
				spanError.textContent = '';
				inputInvalidos.forEach((element) => {
					element.focus();
					throw false;
				});
			} else if (inputInvalidos.size === 0) {
				try {
					spanError.textContent = '';
					let reserva = new Reserva(
						nombre.value,
						correo.value,
						new Date(fechaLlegada.value),
						horaLlegada.value,
						numNoches.value,
						numPersonas.value,
						comprobarCheckBox(),
						comprobarRadios()
					);
					reserva.mostrar();
				} catch (error) {
					spanError.textContent = error.message;
				}
			}
		} catch (e) {}
	};

	document.addEventListener('DOMContentLoaded', init);
}
