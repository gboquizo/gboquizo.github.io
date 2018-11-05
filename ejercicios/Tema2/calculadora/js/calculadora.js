/**
 * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora mediante los métodos
 * del objeto predefinido document.
 * Utiliza los botones básicos, como en esta calculadora.
 * 
 * @author Guillermo Boquizo Sánchez
 */
{
    //Crea un fragment donde insertar la información del ejercicio.
    let fragmento = document.createDocumentFragment();
    /**
     * Función que se encarga de la carga inicial.
     */
    function init() {
        createPage();
        calculadora.dibujarCalculadora(fragmento);
    }

    /**
     * Función que crea el layout de la página desde js.
     */
    let createPage = function () {

        /**
         * Sección header
         */

        //Crea el header y se le asigna una clase.
        let header = document.createElement('header');
        header.className = 'header';

        //Crea el título y se le asigna un texto.
        let h1 = document.createElement('h1');
        h1.textContent = 'Desarrollo Web en Entorno Cliente';

        //Crea el subtítulo y se le asigna un texto.
        let h2 = document.createElement('h2');
        h2.textContent = 'Calculadora js';

        //Se añade el elemento h1 al header.
        header.appendChild(h1);

        //Se añade el elemento h2 al header.
        header.appendChild(h2);

        /**
         * Sección main
         */

        //Crea la sección main y se le asigna una clase.
        let main = document.createElement('main');
        main.className = 'main';

        //Crea un contenedor para la calculadora y se le asigna una clase.
        let container = document.createElement('container');
        container.className = 'calculadora';

        //Llamada a la function que pinta la calculadora. Se le pasa el fragment por argumento.
        calculadora.dibujarCalculadora(fragmento);

        //Se añade el contenedor del botón al container principal.
        container.appendChild(fragmento);

        //Se añade el elemento container al main.
        main.appendChild(container);

        /**
         * Sección footer
         */

        //Crea un footer y se le asigna una clase.
        let footer = document.createElement('footer');
        footer.className = 'footer';

        //Crea un elemento p para el copyright y se le asigna un texto.
        let p = document.createElement('p');
        p.className = 'footer-copyright';
        p.textContent = 'Guillermo Boquizo Sánchez - DWECL 2 º DAW IES Gran Capitán';

        //Se añade el elemento p al footer.
        footer.appendChild(p);

        /**
         * Sección document
         */

        //Se añade el header al body.
        document.body.appendChild(header);

        //Se añade el main al body.
        document.body.appendChild(main);

        //Se añade el footer al body
        document.body.appendChild(footer);
    };

    let calculadora = {

        acumulado: 0,

        entrada: 0,

        operacion: "",

        arrayIds: [
            'btnCE', 'btnBack', 'btnPercentage', 'btnAdd',
            '7', '8', '9', 'btnMinus',
            '4', '5', '6', 'btnMultiplication',
            '1', '2', '3', 'btnDivision',
            '0', 'btnChangeSign', 'btnComma', 'btnEquals'
        ],

        /*Función encargada de crear el layout de la calculadora. 
         *Se le pasa el fragment por argumento.
         */
        dibujarCalculadora: function (fragmento) {
            //Se define un array para el texto de los botones
            let textButtons = ['CE', '⬅', '%', '+', '7', '8', '9', '-', '4', '5', '6', 'x', '1', '2', '3', '/', '0', '+/-', ',', '='];

            //Se define un contador para el recorrido que rellena los botones de elementos del array.
            let counter = 0;

            //Crea un contenedor para el input numérico y se le asigna una clase.
            let containerInput = document.createElement('div');
            containerInput.className = 'containerInput';

            //Crea el input numérico, se le asigna una clase, un tipo y un value.
            let input = document.createElement('input');
            input.className = 'entrada';
            input.type = 'text';
            input.setAttribute('disabled', '');
            input.id = 'entrada';
            input.value = 0;

            //Se añade el elemento input a su contenedor.
            containerInput.appendChild(input);

            //appendChild del elemento containerInput al fragment.
            fragmento.appendChild(containerInput);

            calculadora.entrada = document.getElementById("entrada");

            //Recorrido para generar los contenedores de los botones, los botones y añadirles texto.
            for (let i = 0; i < 5; i++) {
                let containerButton = document.createElement('div');
                containerButton.className = 'containerButton';

                for (let j = 0; j < 4; j++) {
                    let button = document.createElement('button');
                    button.type = 'button';
                    button.textContent = textButtons[counter];
                    button.value = textButtons[counter];
                    button.id = this.arrayIds[counter];
                    button.className = 'button';
                    button.addEventListener('click', calculadora.funcionalidad);
                    containerButton.appendChild(button);
                    counter++;
                }
                fragmento.appendChild(containerButton);
            }
        },

        calcularAcumulado: function () {
            switch (calculadora.operacion) {
                case "btnAdd":
                    return parseFloat(calculadora.acumulado) + parseFloat(calculadora.entrada.value);
                case "btnMinus":
                    return parseFloat(calculadora.acumulado) - parseFloat(calculadora.entrada.value);
                case "btnMultiplication":
                    return parseFloat(calculadora.acumulado) * parseFloat(calculadora.entrada.value);
                case "btnDivision":
                    return parseFloat(calculadora.acumulado) / parseFloat(calculadora.entrada.value);
            }
        },

        funcionalidad: function () {
            let valor = this.getAttribute("id");
            console.log(valor);
            switch (valor) {
                case "btnCE":
                    calculadora.entrada.value = "0";
                    calculadora.operacion = "";
                    calculadora.acumulado = 0;
                    break;
                case "btnBack":
                    let cadenaRecortada = calculadora.entrada.value.substring(0, calculadora.entrada.value.length - 1);
                    if (cadenaRecortada == 0 || (calculadora.entrada.value.includes("-") && calculadora.entrada.value.length === 2)) {
                        calculadora.entrada.value = 0;
                    } else {
                        calculadora.entrada.value = cadenaRecortada;
                    }
                    break;
                case "btnPercentage":
                    if (calculadora.entrada.value !== "") {
                        calculadora.entrada.value = parseFloat(calculadora.entrada.value) / 100;
                    }
                    break;
                case "btnAdd":
                case "btnMinus":
                case "btnMultiplication":
                case "btnDivision":
                    if (calculadora.entrada.value !== "") {
                        if (calculadora.operacion !== "") {
                            calculadora.acumulado = calculadora.calcularAcumulado();
                            calculadora.operacion = valor;
                            calculadora.esAcumuladoFinito();
                        } else {
                            calculadora.acumulado = parseFloat(calculadora.entrada.value);
                            calculadora.operacion = valor;
                            calculadora.esAcumuladoFinito();
                        }
                    }

                    break;
                case "btnChangeSign":
                    if (calculadora.entrada.value != "" && calculadora.entrada.value != "0") {
                        let primerCaracter = calculadora.entrada.value.slice(0, 1);
                        if (primerCaracter == "-") {
                            calculadora.entrada.value = calculadora.entrada.value.replace("-", "");
                        } else {
                            calculadora.entrada.value = "-" + calculadora.entrada.value;
                        }
                    }
                    break;
                case "btnComma":
                    if (calculadora.entrada.value != "" && !calculadora.entrada.value.includes(".")) {
                        calculadora.entrada.value += ".";
                    }
                    break;
                case "btnEquals":
                    if (calculadora.operacion != "" && calculadora.entrada.value.length > 0) {
                        calculadora.acumulado = calculadora.calcularAcumulado();
                        calculadora.esAcumuladoFinito();
                        calculadora.operacion = "";
                    } else {
                        calculadora.operacion = "";
                        calculadora.esAcumuladoFinito();
                    }
                    break;
                default:
                    let regexDecimal = /-?\d+(\.\d+)/;

                    if (regexDecimal.test(calculadora.entrada.value) && calculadora.operacion !== "") {
                        calculadora.entrada.value = valor;
                    }
                    if (((calculadora.entrada.value === "0" || calculadora.operacion != "") && !calculadora.entrada.value.includes("."))) {
                        calculadora.entrada.value = valor;
                    } else {
                        calculadora.entrada.value += valor;
                    }
                    break;
            }
        },
        esAcumuladoFinito: function () {

            if (isFinite(calculadora.acumulado)) {
                calculadora.entrada.value = calculadora.acumulado;
            } else {
                calculadora.entrada.value = "0";
            }
        }
    };
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}