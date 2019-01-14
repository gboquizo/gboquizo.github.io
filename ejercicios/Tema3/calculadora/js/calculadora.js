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

    //Objeto literal calculadora.
    let calculadora = {

        acumulado: 0,

        entrada: 0,

        operacion: "",

        controlDecimal: false,

        arrayIds: [
            'btnCE', 'btnBack', 'btnPercentage', 'btnAdd',
            '7', '8', '9', 'btnMinus',
            '4', '5', '6', 'btnMultiplication',
            '1', '2', '3', 'btnDivision',
            '0', 'btnChangeSign', 'btnComma', 'btnEquals'
        ],

        /** 
         * Función encargada de crear el layout de la calculadora. 
         * @param Se le pasa el fragment por argumento.
         */
        dibujarCalculadora(fragmento) {
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

        /** 
         * Función encargada de calcular el acumulado.
         * @return Devuelve el acumulado para cada operación dada.
         */
        calcularAcumulado() {
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

        /** 
         * Función encargada de la funcionalidad de la calculadora.
         *
         */
        funcionalidad() {
            let valor = this.getAttribute("id");
            switch (valor) {
                case "btnCE":
                    calculadora.resetear();
                    break;
                case "btnBack":
                    calculadora.esNumeroValido() ? calculadora.borrado() : null;
                    break;
                case "btnPercentage":
                    calculadora.porcentaje();
                    break;
                case "btnAdd":
                case "btnMinus":
                case "btnMultiplication":
                case "btnDivision":
                    calculadora.calcular(valor);
                    break;
                case "btnChangeSign":
                    calculadora.cambiarSigno();
                    break;
                case "btnComma":
                    calculadora.esNumeroValido() ? calculadora.crearDecimal() : null;
                    break;
                case "btnEquals":
                    calculadora.esNumeroValido() ? calculadora.igualar() : null;
                    break;
                default:
                    calculadora.esNumeroValido() ? calculadora.esUnNumero(valor) : null;
                    break;
            }
        },

        /** 
         * Función encargada de resetear la calculadora.
         *
         */
        resetear() {
            calculadora.entrada.value = "0";
            calculadora.operacion = "";
            calculadora.acumulado = 0;
        },

        /** 
         * Función encargada del borrado con retroceso de la calculadora.
         *
         */
        borrado() {
            let cadenaRecortada = calculadora.entrada.value.substring(0, calculadora.entrada.value.length - 1);
            cadenaRecortada == 0 ||
                (calculadora.entrada.value.includes("-") && calculadora.entrada.value.length === 2) ? (calculadora.entrada.value = 0) :
                (calculadora.entrada.value = cadenaRecortada);
        },

        /** 
         * Función encargada del cálculo del porcentaje de la calculadora.
         *
         */
        porcentaje() {
            calculadora.entrada.value !== "" ? (calculadora.entrada.value = parseFloat(calculadora.entrada.value) / 100) : null;
        },

        /** 
         * Función encargada de los cálculos de la calculadora.
         * @param valor el valor de la operación.
         */
        calcular(valor) {
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
            calculadora.controlDecimal = true;
        },

        /** 
         * Función encargada del control del cambio de signo.
         * 
         */
        cambiarSigno() {
            if (calculadora.entrada.value != "" && calculadora.entrada.value != "0") {
                let primerCaracter = calculadora.entrada.value.slice(0, 1);
                primerCaracter == "-" ? (calculadora.entrada.value = calculadora.entrada.value.replace("-", "")) :
                    (calculadora.entrada.value = "-" + calculadora.entrada.value);
            }
        },

        /** 
         * Función encargada del control de la introducción de la coma decimal.
         * 
         */
        crearDecimal() {
            calculadora.entrada.value != "" && !calculadora.entrada.value.includes(".") ? calculadora.entrada.value += "." : null;
        },

        /** 
         * Función encargada del control del botón igual.
         * 
         */
        igualar() {
            if (calculadora.operacion != "" && calculadora.entrada.value.length > 0) {
                calculadora.acumulado = calculadora.calcularAcumulado();
                calculadora.esAcumuladoFinito();
                calculadora.operacion = "";
            } else {
                calculadora.operacion = "";
                calculadora.esAcumuladoFinito();
            }
        },

        /** 
         * Función encargada de la gestión de los botones que son números.
         * @param valor el valor de la operación.
         */
        esUnNumero(valor) {
            if (calculadora.entrada.value === "0" || calculadora.controlDecimal) {
                calculadora.entrada.value = valor;
                calculadora.controlDecimal = false;
            } else {
                calculadora.entrada.value += valor;
            }
        },

        /** 
         * Función encargada de comprobar si un número es válido o no.
         * @return true o false en función de si es un número o no.
         */
        esNumeroValido() {
            return calculadora.entrada.value !== "No es un número" ? true : false;
        },

        /** 
         * Función encargada de comprobar si un acumulado es finito o no.
         * 
         */
        esAcumuladoFinito() {
            isFinite(calculadora.acumulado) ? (calculadora.entrada.value = calculadora.acumulado) : (calculadora.entrada.value = "No es un número");
        }
    };

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}