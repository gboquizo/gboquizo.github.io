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
        funcionalidadCalculadora();
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

        arrayIds: [
            'btnCE', 'btnBack', 'btnPercent', 'btnAdd',
            'btn7', 'btn8', 'btn9', 'btnMinus',
            'btn4', 'btn5', 'btn6', 'btnMultiplication',
            'btn1', 'btn2', 'btn3', 'btnDivision',
            'btn0', 'btnChangeSign', 'btnComma', 'btnEquals'
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
                    containerButton.appendChild(button);

                    counter++;
                }
                fragmento.appendChild(containerButton);
            }
        }
    };

    let funcionalidadCalculadora = function () {
        let calculatorButtons = document.getElementsByTagName('button');
        let entrada = document.getElementById('entrada');
        Array.from(calculatorButtons).forEach((button) => {
            //Coloco !isNaN para que no introduzca los demás caracteres
            if (!isNaN(button.value)) {
                //evento al pulsar una tecla
                button.addEventListener('click', function () {
                    entrada.value == 0 ? (entrada.value = this.value) : (entrada.value += this.value);
                });
            }

            if (button.id === 'btnBack') {
                button.addEventListener('click', function () {
                    entrada.value = entrada.value.substring(0, entrada.value.length - 1);
                    if (entrada.value.length == 0 || entrada.value == '-') {
                        entrada.value = 0;
                    }
                });
            }

            if (button.id === 'btnCE') {
                button.addEventListener('click', function () {
                    entrada.value = 0;
                });
            }

            if (button.id === 'btnChangeSign') {
                button.addEventListener('click', function () {
                    entrada.value > 0 ? (entrada.value = -Math.abs(entrada.value)) : (entrada.value = Math.abs(entrada.value));
                });
            }
        });
    };

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}