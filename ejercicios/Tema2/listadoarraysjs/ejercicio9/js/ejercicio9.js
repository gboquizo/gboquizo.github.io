/**
 * Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
 * Introduce 10 elementos en un array mediante push(), unshift(), directamente, fijando tamaño en new Array...
 * Eliminar 10 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
 * 
 * @author Guillermo Boquizo Sánchez
 *
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
        h2.innerHTML = 'Listado arrays en JS.<br />Ejercicio 9 ';

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

        //Llamada a la function que crea ejercicio. Se le pasa el fragment por argumento.
        createExercise(fragment);

        //Se añade el fragment al div del ejercicio.
        exercise.appendChild(fragment);

        //Se añade el contenedor del ejercicio al container principal.
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

        let h4 = document.createElement('h4');

        h4.innerHTML = '9. Averigua qué método es el más eficiente para manejarse con arrays.' + newline +
            'Compruébalo mediante performance.now() o similares.' +
            '<ol class="info">' +
            '<li class="info" >Introduce 10 elementos en un array mediante push(), unshift(), ' +
            'directamente, fijando tamaño en new Array...</li>' + newline +
            '<li class="info" >Elimina 10 elementos en un array mediante pop(), shift(),' +
            'directamente, fijando tamaño...</li></ol>';

        let firstParagraph = document.createElement('p');
        firstParagraph.className = 'info';
        firstParagraph.textContent = '';

        fragment.appendChild(h4);
        fragment.appendChild(firstParagraph);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let paragraph = document.createElement('p');
        paragraph.className = 'info2';

        let mensaje = "";

        let array = [];

        /*Variables para controlar los tiempos de eficiencia*/
        let initialTime;
        let finalTime;
        let pushTime;
        let unshiftTime;
        let popTime;
        let shiftTime;

        /*-----push()-----*/
        initialTime = performance.now();
        for (let i = 0; i < 10; i++) {
            array.push(i);
        }
        finalTime = performance.now();

        pushTime = finalTime - initialTime;
        mensaje += "<h4>Eficiencia del push(): </h4>" + pushTime;

        /*-----unshift()-----*/
        array = []
        initialTime = performance.now();
        for (let i = 0; i < 10; i++) {
            array.unshift(i);
        }
        finalTime = performance.now();

        unshiftTime = finalTime - initialTime;
        mensaje += "<h4>Eficiencia del unshift(): </h4>" + unshiftTime;

        if (pushTime < unshiftTime) {
            mensaje += "<h3>push() es más eficiente que unshift()</h3>";
        } else if (pushTime > unshiftTime) {
            mensaje += "<h3>unshift() es más eficiente que push()</h3>";
        } else {
            mensaje += "<h3>Ambos son iguales de eficientes</h3>";
        }

        /*-----shift()-----*/
        array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        initialTime = performance.now();
        for (let i = 0; i < 10; i++) {
            array.shift();
        }
        finalTime = performance.now();

        shiftTime = finalTime - initialTime;
        mensaje += "<h4>Eficiencia del shift(): </h4>" + shiftTime;

        if (popTime < shiftTime) {
            mensaje += "<h3>pop() es más eficiente que shift()</h3>";
        } else if (popTime > shiftTime) {
            mensaje += "<h3>shift() es más eficiente que pop()</h3>";
        } else {
            mensaje += "<h3>Ambos son iguales de eficientes</h3>";
        }

        /*-----pop()-----*/
        array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        initialTime = performance.now();
        for (let i = 0; i < 10; i++) {
            array.pop();
        }
        finalTime = performance.now();

        popTime = finalTime - initialTime;
        mensaje += "<h4>Eficiencia del pop(): </h4>" + popTime;

        /*------El más eficiente de todos------*/
        if (pushTime < shiftTime && pushTime < unshiftTime && pushTime < popTime)
            mensaje += "<h3>push() es el más eficiente de todos</h3>";
        else if (shiftTime < pushTime && shiftTime < unshiftTime && shiftTime < popTime)
            mensaje += "<h3>shift() es el más eficiente de todos</h3>";
        else if (popTime < pushTime && popTime < unshiftTime && popTime < shiftTime)
            mensaje += "<h3>pop() es el más eficiente de todos</h3>";
        else
            mensaje += "<h3>unshift() es el más eficiente de todos</h3>";

        paragraph.innerHTML = mensaje;

        fragment.appendChild(h2);

        fragment.appendChild(paragraph);
    };

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}