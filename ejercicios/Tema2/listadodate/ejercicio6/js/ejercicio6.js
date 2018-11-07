/**
 * 6. Crea el método incrementaDias() que incremente / decremente los días indicados.
 * Admitirá como primer argumento un entero positivo / negativo que reperesente el número de días.
 * El resto de argumentos representarán una fecha, similar a los argumentos del constructor Date().
 * 
 * @author Guillermo Boquizo Sánchez
 */
{
    let newline = "<br/>";
    /**
     * Función que se encarga de la carga inicial.
     */
    function init() {
        createPage();
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
        h2.innerHTML = 'Listado date en JS.<br/>Ejercicio 6 ';

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

        //Crea un contenedor para el ejercicio y se le asigna una clase.
        let container = document.createElement('container');
        container.className = 'container';

        //Crea un contenedor para el div y se le asigna una clase
        let exercise = document.createElement('ejercicio');
        exercise.className = 'ejercicio';

        //Crea un fragment donde insertar la información del ejercicio.
        let fragment = document.createDocumentFragment();

        //Llamada a la function que crea el enunciado. Se le pasa el fragment por argumento.
        createDefinans(fragment);

        //Se añade el fragment al div del ejercicio.
        exercise.appendChild(fragment);

        //Se añade el contenedor del botón al container principal.
        container.appendChild(exercise);

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

    let createDefinans = function (fragment) {
        let firstParagraph = document.createElement('article');
        firstParagraph.className = 'definans';
        firstParagraph.innerHTML =
            `
                <h4>6. Crea el método incrementaDias() que incremente / decremente los días indicados.` + newline + `
                Admitirá como primer argumento un entero positivo / negativo ` + newline + `que represente el número de días.
                ` + newline + `El resto de argumentos representarán una fecha,` + newline + ` similar a los argumentos del constructor Date(). 
                </h4>
                <p class = "info">Se usará el siguiente formato: incrementaDias(numero, dia, mes, año)</p>
        `;

        fragment.appendChild(firstParagraph);
        createExercise(fragment);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let h4 = document.createElement('h4');
        h4.innerHTML = 'Introduzca los datos con el siguiente formato: número, día, mes, año';

        let paragraph = document.createElement('p');
        paragraph.className = 'info2';
        paragraph.id = "paragraph";

        let input = document.createElement('input');
        input.id = "entradaDeFecha";
        input.type = "text";

        let submit = document.createElement('input');
        submit.id = "enviar";
        submit.type = "submit";

        let arrayElementosFecha;

        let incrementaDias = function (numero, dia, mes, anio) {
            if (!isNaN(Date.parse(mes / dia / anio))) {
                return;
            }
            return new Date(anio, (mes - 1), (dia + numero), 0, 0, 0, 0);
        }

        let mostrar = function () {
            arrayElementosFecha = input.value.split(",");
            paragraph.innerHTML = incrementaDias(parseInt(arrayElementosFecha[0]), parseInt(arrayElementosFecha[1]), arrayElementosFecha[2], arrayElementosFecha[3]);
        }

        submit.addEventListener("click", mostrar);
        paragraph.appendChild(submit);
        paragraph.appendChild(input);
        fragment.appendChild(h2);
        fragment.appendChild(h4);
        fragment.appendChild(paragraph);
    };
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}