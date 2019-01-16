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

    let radioSexoMujer;

    let radioSexoHombre;

    let radioSexoOtro;

    let checkboxTerminos;

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

        radioSexoMujer = document.getElementById("radioMujer");
        radioSexoHombre = document.getElementById("radioHombre");
        radioSexoOtro = document.getElementById("radioHombre");

        checkboxTerminos = document.getElementById("checkboxTerminos");

        enviaFormulario = document.getElementById('enviaFormulario');

        spanError = document.getElementById('spanError');

        nombre.addEventListener('blur', validarNombre);
        correo.addEventListener('blur', validarCorreo);
        dni.addEventListener('blur', validarDni);
        fechaNacimiento.addEventListener('blur', validarFechaNacimiento);
        telefono.addEventListener('blur', validarTelefono);
        cuentaCorriente.addEventListener('blur', validarCuenta);
        direccionWeb.addEventListener('blur', validarUrl);
        enviaFormulario.addEventListener('click', function (event) {
            event.preventDefault();
            validar();
        });
    }

    let createExercise = function () {
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
                <div class="columnaRadio">
                <div class="radioButtonRow">
                    <div class="containerRadio">
                        <input type="radio" name="sexo" value="Mujer" id="radioMujer"/>
                        <label for="radioMujer">Mujer</label>
                    </div>
                    <div class="containerRadio">
                        <input type="radio" name="sexo" value="Hombre" id="radioHombre"/>
                        <label for="radioHombre">Hombre</label>
                    </div>
                    <div class="containerRadio">
                    <input type="radio" name="sexo" value="Otro" id="radioOtro"/>
                    <label for="radioOtro">Otro</label>
                </div>
                </div>
                <div class="oneColumn">
                        <div class="containerCheckbox">
                            <input type="checkbox" id="checkboxTerminos" name="checkBoxTerminos" required/>
                            <label>Acepto términos</label>
                        </div>
                        <span id="lbDni"></span>
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
        telefono: [/[0-9]{9,}/, "Telefono no válido"],
        dni: [
            /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
            'Formato válido 12345678z',
            'La letra introducida no es válida'
        ],
        correo: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            'Correo no válido'
        ],
        cuentaCorriente: [/[/\d]{20}/, 'Error en el formato de la cuenta corriente'],

        direccionWeb: [/^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi, 'Error en el formato de la dirección web']
    };

    let tester = {

        /**
         * Valida un input
         * @param patron patron de búsqueda para el regex.
         * @param campo input a validar.
         * @param elementoMsg elemento del DOM, donde se mostrarán los mensaje pertinentes.
         * @param mapKey key que se usará en la collection map para añadir y eliminar elementos.
         */
        test(patron, campo, elementoMsg, mapkey) {
            let regex = new RegExp(patron[0]);
            if (!regex.test(campo.value)) {
                collectionNoValidos.set(mapkey, campo);
                elementoMsg.textContent = patron[1];
            } else {
                if (collectionNoValidos.has(mapkey)) {
                    collectionNoValidos.delete(mapkey);
                }
                elementoMsg.textContent = "";
                spanError.textContent = "";
            }
        },

        /**
         * Valida un input dni.
         * @param patron patron de búsqueda para el regex.
         * @param campo input a validar.
         * @param elementoMsg elemento del DOM, donde se mostrarán los mensaje pertinentes.
         * @param mapKey key que se usará en la collection map para añadir y eliminar elementos.
         */
        testDNI(patron, campo, elementoMsg) {
            let regex = new RegExp(patron[0]);
            if (!regex.test(campo.value)) {
                elementoMsg.textContent = "Formato incorrecto";
                collectionNoValidos.set(campo, campo);
            } else {
                elementoMsg.textContent = "DNI válido";
                if (collectionNoValidos.has(mapkey)) {
                    collectionNoValidos.delete(mapkey);
                }
                elementoMsg.textContent = "";
                spanError.textContent = "";
                [, numeros, letra] = regex.exec(campo.value);
                let letraValida = letrasValidas[parseInt(numeros) % 23].toUpperCase();

                if (letra.toUpperCase() !== letraValida) {
                    elementoMsg.textContent = "Letra incorrecta";
                    collectionNoValidos.set(campo, campo);
                }
            }
        },
        testRadio() {
            if (!radioSexoHombre.checked && !radioSexoMujer.checked && !radioSexoOtro.checked) {
                collectionNoValidos.set("radioMujer", radioSexoMujer);
            } else {
                spanError.textContent = "";
                if (collectionNoValidos.has("radioMujer")) {
                    collectionNoValidos.delete("radioMujer");
                }
            }
        },
        testCheckbox() {
            if (!checkboxTerminos.checked) {
                collectionNoValidos.set("checkBoxTerminos", checkboxTerminos);
            } else {
                spanError.textContent = "";
                if (collectionNoValidos.has("checkBoxTerminos")) {
                    collectionNoValidos.delete("checkBoxTerminos");
                }
            }
        },

        /**
         * Valida un input fechaNacimiento
         * @param campo input a validar
         * @param elementoMsg elemento del DOM, donde se mostrarán los mensaje pertinentes
         * @param mapKey key que se usará en la collection map para añadir y eliminar elementos
         */
        testFecha(campo, elementoMsg, mapKey) {
            let valorFecha = Date.parse(campo.value);
            let annoIntroducido;
            let annoActual;

            if (!isNaN(valorFecha)) {
                let fechaIntroducida = new Date(valorFecha);
                let fechaActual = new Date();

                annoIntroducido = fechaIntroducida.getFullYear();
                mesIntroducido = fechaIntroducida.getMonth() + 1;
                diaIntroducido = fechaIntroducida.getDay();

                annoActual = fechaActual.getFullYear();
                mesActual = fechaActual.getMonth() + 1;
                diaActual = fechaActual.getDay();
            }
            if (isNaN(valorFecha)) {
                elementoMsg.textContent = "La fecha nacimiento no puede estar vacía";
                collectionNoValidos.set(mapKey, campo);
            } else if (
                annoIntroducido > annoActual ||
                ((annoIntroducido === annoActual) && (mesIntroducido > mesActual) ||
                    ((annoIntroducido === annoActual) && (mesIntroducido === mesActual) && (diaIntroducido > diaActual)))
            ) {
                elementoMsg.textContent = "La fecha nacimiento no puede ser superior a la fecha actual";
                collectionNoValidos.set(mapKey, campo);
            } else {
                elementoMsg.textContent = "";
                spanError.textContent = "";
                if (collectionNoValidos.has(mapKey)) {
                    collectionNoValidos.delete(mapKey);
                }
            }
            console.log(collectionNoValidos);
        }
    };

    let validarNombre = function () {
        tester.test(patrones.nombre, nombre, lbNombre, "inputNombre");
    };

    /**
     * Validará un dni,
     * acepta los siguientes formatos (12345678A, 12345678a, 12345678 A, 12345678 a, 12345678-a, 12345678-A).
     */
    let validarDni = function () {
        tester.test(patrones.dni, dni, lbDni, "inputDni");
    };

    /**
     * Validará una dirección de correo electrónico.
     */
    let validarCorreo = function () {
        tester.test(patrones.correo, correo, lbCorreo, "inputCorreo");
    };


    /**
     * Validará una fecha de nacimiento.
     */
    let validarFechaNacimiento = function () {
        tester.testFecha(fechaNacimiento, lbFecha, "inputFecha");
    };

    /**
     * Validará un número telefónico.
     */
    let validarTelefono = function () {
        tester.test(patrones.telefono, telefono, lbTelefono, "inputTelefono");
    };

    /**
     * Validará una cuenta corriente, solo el número de cuenta sin IBAN,
     * por tanto validaría los 20 dígitos de la cuenta.
     */
    let validarCuenta = function () {
        tester.test(patrones.cuentaCorriente, cuentaCorriente, lbCuenta, "inputCuenta");
    };

    /**
     * Validará una dirección web.
     */
    let validarUrl = function () {
        tester.test(patrones.direccionWeb, direccionWeb, lbUrl, "inputUrl");
    };

    /**
     * Realizará la validación de todos los campos y apuntará el foco sobre el primer
     * campo que contenga errores.
     */
    let validar = function () {
        try {
            tester.testRadio();
            tester.testCheckbox();
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
                    alert('Se enviaría el formulario');
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