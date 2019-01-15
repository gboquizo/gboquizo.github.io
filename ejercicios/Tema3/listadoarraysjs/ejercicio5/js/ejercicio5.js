/**
 * 
 * Crea una función que devuelva un array con cada uno de los argumentos.
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
        h2.innerHTML = 'Listado arrays en JS.<br />Ejercicio 5 ';

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

        h4.innerHTML = '5. Crea una función que devuelva un array con cada uno de los argumentos';

        let firstParagraph = document.createElement('p');
        firstParagraph.className = 'info4';
        firstParagraph.innerHTML = 'Para crear un array que devuelva argumentos, creamos una función que añada con array.push() el conjunto de los mismos.' +
            newline + newline +
            'Esta función recorrerá con un for hasta el tamaño indicado, rellenando el array vacío definido previamente.';

        let secondParagraph = document.createElement('p');
        secondParagraph.className = 'info';
        secondParagraph.innerHTML = 'Ejemplo:';

        let list = document.createElement('ol');
        list.className = 'info';

        let definans = [
            'let createWithArgsArray = function () {',
            '&nbsp&nbsplet arrayWithArgs = [];',
            '&nbsp&nbspfor (let i = 0; i < arguments.length; i++) {',
            '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsparrayWithArgs.push(arguments[i]);',
            '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp}',
            '&nbsp&nbspreturn arrayWithArgs;',
            '}',
            '',
            'paragraph.innerHTML = createWithArgsArray("argumento1", "argumento2", "argumento3");'
        ];

        for (let i = 0; i < definans.length; i++) {
            let li = document.createElement('li');
            li.className = 'info4';
            li.innerHTML = '<p class="info4">' + definans[i] + '</p>';
            fragment.appendChild(li);
        }
        list.appendChild(fragment);

        fragment.appendChild(h4);
        fragment.appendChild(firstParagraph);
        fragment.appendChild(secondParagraph);
        fragment.appendChild(list);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let paragraph = document.createElement('p');
        paragraph.className = 'info2';

        let createWithArgsArray = function () {
            let arrayWithArgs = [];
            for (let i = 0; i < arguments.length; i++) {
                arrayWithArgs.push(arguments[i]);
            }
            return arrayWithArgs;
        }

        paragraph.innerHTML = createWithArgsArray("argumento1", "argumento2", "argumento3");

        fragment.appendChild(h2);
        fragment.appendChild(paragraph);
    };
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}