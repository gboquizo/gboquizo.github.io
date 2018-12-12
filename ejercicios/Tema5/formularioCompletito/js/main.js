/**
 * Formulario completito
 * Crea un formulario con todos los tipos de controles y realiza todas las validaciones posibles mediante JavaScript.
 *
 * Utiliza el modelo de registro avanzado de eventos según W3C(addEventListener), así como las expresiones regulares.
 * Asegúrate de validar lo siguiente:
 *
 * Obligatoriedad(campo de texto, opción seleccionada(checkbox, radio button y selección) 
 * Tipo de dato introducido(numérico...) 
 * Dirección de correo válida 
 * Número de DNI válido 
 * Fecha válida 
 * Número de teléfono 
 * Número de cuenta corriente 
 * URL
 *
 * Asegúrate de que:
 *
 * Al perder el foco de cada control se comprueba su validación.Los errores los muestras mediante css.Al enviar el formulario se realizan TODAS LAS VALIDACIONES, yéndose el foco al primer error.
 * Procura aislar las validaciones del interfaz del usuario(arquitectura de tres capas)
 * @author Guillermo Boquizo Sánchez
 *
 */
{
	let nombre;
	let lbNombre;

	let correo;
	let lbCorreo;

	let dni;
	let lbDni;

	let fechaNacimiento;
	let lbFecha;

	let telefono;
	let lbTelefono;

	let cuentaCorriente;
	let lbCuenta;

	let direccionWeb;
	let lbUrl;

	let enviaFormulario;

	let spanError;

	let collectionNoValidos;

	function init() {
		mipagina = new CrearPagina();
		fragment = mipagina.getFragment();
		CrearPagina.prototype.createExercise = () => createExercise();
		mipagina.createPage();
		collectionNoValidos = new Map();

		nombre = document.getElementById('inputNombre');
		lbNombre = document.getElementById('lbNombre');

		correo = document.getElementById('inputCorreo');
		lbCorreo = document.getElementById('lbCorreo');

		dni = document.getElementById('inputDni');
		lbDni = document.getElementById('lbDni');

		fechaNacimiento = document.getElementById('inputFecha');
		lbFecha = document.getElementById('lbFechaNacimiento');

		telefono = document.getElementById('inputTelefono');
		lbTelefono = document.getElementById('lbTelefono');

		cuentaCorriente = document.getElementById('inputCuenta');
		lbCuenta = document.getElementById('lbCuenta');

		direccionWeb = document.getElementById('inputUrl');
		lbUrl = document.getElementById('lbUrl');

		enviaFormulario = document.getElementById('enviaFormulario');

		spanError = document.getElementById('spanError');

		nombre.addEventListener('blur', validarNombre);
		correo.addEventListener('blur', validarCorreo);
		dni.addEventListener('blur', validarDni);
		fechaNacimiento.addEventListener('blur', validarFechaNacimiento);
		telefono.addEventListener('blur', validarTelefono);
		cuentaCorriente.addEventListener('blur', validarCuenta);
		direccionWeb.addEventListener('blur', validarUrl);
		enviaFormulario.addEventListener('click', function(event) {
			event.preventDefault();
			validar();
		});
	}

	let createExercise = function() {
		let h2 = document.createElement('h2');
		h2.textContent = 'Formulario completito en js.';
		let descripcion = document.createElement('article');
		descripcion.innerHTML = `
            <form id="formulario" action="" method="POST">
                <div class="oneColumn">
                    <div>
                        <input type="url" id="inputUrl" placeholder="Dirección web" />
                        <span id="lbUrl"></span>
                    </div>
                </div>
                    <div class="oneColumn">
                    <div>
                        <input type="text" id="inputNombre" placeholder="Nombre y apellidos" />
                        <span id="lbNombre"></span>
                    </div>
                </div>
                <div class="twoColumn">
                    <div>
                        <input type="email" id="inputCorreo" placeholder="Correo" />
                        <span id="lbCorreo"></span>
                    </div>
                    <div>
                        <input type="number" id="inputTelefono" placeholder="Teléfono" />
                        <span id="lbTelefono"></span>
                    </div>
                </div>
                <div class="twoColumn">
                    <div>
                        <input type="date" id="inputFecha" placeholder="Fecha nacimiento" />
                        <span id="lbFechaNacimiento"></span>
                    </div>
                    <div>
                        <input type="text" id="inputDni" placeholder="DNI" />
                        <span id="lbDni"></span>
                    </div>
                </div>
                <div class="oneColumn">
                    <div>
                        <input type="number" id="inputCuenta" placeholder="Cuenta corriente" />
                        <span id="lbCuenta"></span>
                    </div>
                </div>
                <span id="spanError"></span>
                <input id="enviaFormulario" type="submit" name="enviar" value="Enviar" />
            </form>
        `;
		fragment.appendChild(h2);
		fragment.appendChild(descripcion);
	};

	let patrones = {
		nombre: [
			/^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ]+[/\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])+[/\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ])?$/g,
			'Nombre y apellido, mínimo 3 caracteres, comienza en mayúscula'
		],
		dni: [
			/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
			'Formato válido 12345678z',
			'La letra introducida no es válida'
		],
		correo: [
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
			'Formato de correo no válido'
		],
		cuentaCorriente: [ /[/\d]{20}/, 'Error en el formato de la cuenta corriente' ],
		direccionWeb: [ /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi, 'Error en el formato de la dirección web' ]
	};

	let validarNombre = function() {
		let regexNombre = new RegExp(patrones.nombre[0]);
		if (!regexNombre.test(nombre.value)) {
			collectionNoValidos.set('nombre', nombre);
			lbNombre.textContent = patrones.nombre[1];
		} else {
			if (collectionNoValidos.has('nombre')) {
				collectionNoValidos.delete('nombre');
			}
			lbNombre.textContent = '';
			spanError.textContent = '';
		}
		console.log(collectionNoValidos);
	};

	/**
     * Validará un dni,
     * acepta los siguientes formatos (12345678A, 12345678a, 12345678 A, 12345678 a, 12345678-a, 12345678-A).
     */
	let validarDni = function() {
		let letrasValidas = [
			'T',
			'R',
			'W',
			'A',
			'G',
			'M',
			'Y',
			'F',
			'P',
			'D',
			'X',
			'B',
			'N',
			'J',
			'Z',
			'S',
			'Q',
			'V',
			'H',
			'L',
			'C',
			'K',
			'E'
		];
		let regexCorreo = new RegExp(patrones.dni[0]);
		let valorFinalDni = dni.value.replace(/-|\s/, '');

		//letra introducia por el usuario.
		let letraUsuario;

		// letra valida para el dni introducido.
		let letraValida;

		if (!regexCorreo.test(valorFinalDni)) {
			lbDni.textContent = patrones.dni[1];
			collectionNoValidos.set('dni', dni);
		} else if (regexCorreo.test(valorFinalDni) && valorFinalDni.length === 9) {
			letraUsuario = valorFinalDni[8];
			let numerosDniUsuario = parseInt(valorFinalDni.substr(0, 8));
			letraValida = letrasValidas[numerosDniUsuario % 23];

			if (letraUsuario.toUpperCase() != letraValida.toUpperCase()) {
				lbDni.textContent = patrones.dni[2];
				collectionNoValidos.set('dni', dni);
			} else {
				lbDni.textContent = '';
				if (collectionNoValidos.has('dni')) {
					collectionNoValidos.delete('dni');
				}
			}
		} else {
			lbDni.textContent = '';
			spanError.textContent = '';
			if (collectionNoValidos.has('dni')) {
				collectionNoValidos.delete('dni');
			}
		}

		console.log(collectionNoValidos);
	};

	/**
     * Validará una dirección de correo electrónico.
     */
	let validarCorreo = function() {
		let regexCorreo = new RegExp(patrones.correo[0]);
		if (!regexCorreo.test(correo.value)) {
			collectionNoValidos.set('correo', correo);
			lbCorreo.textContent = patrones.correo[1];
		} else {
			if (collectionNoValidos.has('correo')) {
				collectionNoValidos.delete('correo');
			}
			lbCorreo.textContent = '';
			spanError.textContent = '';
		}
		console.log(collectionNoValidos);
	};

	/**
     * Validará una fecha de nacimiento.
     */
	let validarFechaNacimiento = function() {
		let valorFecha = Date.parse(fechaNacimiento.value);
		let annoIntroducido;
		let annoActual;

		if (!isNaN(valorFecha)) {
			let fechaIntroducida = new Date(valorFecha);
			let fechaActual = new Date();

			annoIntroducido = fechaIntroducida.getFullYear();
			annoActual = fechaActual.getFullYear();
		}

		if (isNaN(valorFecha)) {
			lbFecha.innerHTML = 'La fecha nacimiento no puede estar vacía';
			collectionNoValidos.set('fecha', fechaNacimiento);
		} else if (annoIntroducido > annoActual) {
			lbFecha.innerHTML = 'La fecha nacimiento no puede ser superior a la fecha actual';
			collectionNoValidos.set('fecha', fechaNacimiento);
		} else {
			lbFecha.innerHTML = '';
			spanError.textContent = '';
			if (collectionNoValidos.has('fecha')) {
				collectionNoValidos.delete('fecha');
			}
		}
	};

	/**
     * Validará un número telefónico.
     */
	let validarTelefono = function() {
		let valorTelefono = telefono.value;

		if (valorTelefono === '') {
			lbTelefono.innerHTML = 'El teléfono no puede estar vacío';
			collectionNoValidos.set('telefono', telefono);
		} else if (valorTelefono.length < 9) {
			lbTelefono.innerHTML = 'El teléfono introducido es muy corto';
			collectionNoValidos.set('telefono', telefono);
		} else if (!parseInt(valorTelefono)) {
			lbTelefono.innerHTML = 'El formato de teléfono introducido es incorrecto';
			collectionNoValidos.set('telefono', telefono);
		} else {
			lbTelefono.innerHTML = '';
			if (collectionNoValidos.has('telefono')) {
				collectionNoValidos.delete('telefono');
			}
		}
	};

	/**
     * Validará una cuenta corriente, solo el número de cuenta sin IBAN,
     * por tanto validaría los 20 dígitos de la cuenta.
     */
	let validarCuenta = function() {
		let regexCuenta = new RegExp(patrones.cuentaCorriente[0]);

		if (!regexCuenta.test(cuentaCorriente.value)) {
			collectionNoValidos.set('cuenta', cuentaCorriente);
			lbCuenta.textContent = patrones.cuentaCorriente[1];
		} else {
			if (collectionNoValidos.has('cuenta')) {
				collectionNoValidos.delete('cuenta');
			}
			lbCuenta.textContent = '';
		}
		console.log(collectionNoValidos);
	};

	/**
     * Validará una dirección web.
     */
	let validarUrl = function() {
		let regexUrl = new RegExp(patrones.direccionWeb[0]);
		if (!regexUrl.test(direccionWeb.value)) {
			collectionNoValidos.set('url', direccionWeb);
			lbUrl.textContent = patrones.direccionWeb[1];
		} else {
			if (collectionNoValidos.has('url')) {
				collectionNoValidos.delete('url');
			}
			lbUrl.textContent = '';
		}
		console.log(collectionNoValidos);
	};

	/**
     * Realizará la validación de todos los campos y apuntará el foco sobre el primer
     * campo que contenga errores.
     */
	let validar = function() {
		try {
			if (
				nombre.value === '' ||
				dni.value === '' ||
				correo.value === '' ||
				cuentaCorriente.value === '' ||
				fechaNacimiento.value === '' ||
				telefono.value === '' ||
				direccionWeb.value === ''
			) {
				spanError.textContent = 'Rellene los campos';
				collectionNoValidos.forEach((element) => {
					element.focus();
					throw false;
				});
			} else {
				if (collectionNoValidos.size === 0) {
					spanError.textContent = '';
					alert('se enviaría el formulario');
				} else {
					spanError.textContent = '';
					collectionNoValidos.forEach((element) => {
						element.focus();
						throw false;
					});
				}
			}
		} catch (e) {}
	};
	document.addEventListener('DOMContentLoaded', init);
}
