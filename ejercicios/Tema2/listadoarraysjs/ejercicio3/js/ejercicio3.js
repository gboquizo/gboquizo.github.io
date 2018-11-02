/**
 * 
 * Indica la función que comprueba si un objeto es o no un Array.
 * Demuestra su uso mediante un ejemplo.
 * 
 * @author Guillermo Boquizo Sánchez
 *
 */
{
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
        h2.innerHTML = 'Listado arrays en JS.<br />Ejercicio 3 ';

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

        h4.innerHTML = '3. Indica la función que comprueba si un objeto es o no un Array.<br>Demuestra su uso mediante un ejemplo.';

        let firstParagraph = document.createElement('p');
        firstParagraph.className = 'info';
        firstParagraph.textContent = '';

        let secondParagraph = document.createElement('p');
        secondParagraph.className = 'info';
        secondParagraph.textContent = '';

        let definans = ['', '', ''];

        let firstList = document.createElement('ol');
        firstList.className = 'info';

        let addElement = function (element) {
            let node = document.createElement('li');
            node.appendChild(document.createTextNode(element));
            firstList.appendChild(node);
        };

        let showFirstDefinans = function (element) {
            addElement(element);
        };

        let secondList = document.createElement('ol');
        secondList.className = 'info';

        let definans2 = [
            "",
            '',
            '',
            '' +
            '',
            ''
        ];

        for (let i = 0; i < definans2.length; i++) {
            let li = document.createElement('li');
            li.className = 'info4';
            li.innerHTML = '<p class="info4">' + definans2[i] + '</p>' + '<br>';
            fragment.appendChild(li);
        }
        secondList.appendChild(fragment);

        definans.forEach(showFirstDefinans);
        fragment.appendChild(h4);
        fragment.appendChild(firstParagraph);
        fragment.appendChild(firstList);
        fragment.appendChild(secondParagraph);
        fragment.appendChild(secondList);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let paragraph = document.createElement('p');
        paragraph.className = 'info2';

        let list = document.createElement('ol');
        list.className = 'info2';
        let array = [];

        let addElement = function (element) {
            let node = document.createElement('li');
            node.appendChild(document.createTextNode(element));
            list.appendChild(node);
        };

        let showArray = function (element, index, array) {
            addElement('Array[' + index + '] = ' + '"' + element + '"' + ',' + ' array =' + JSON.stringify(array) + ';');
        };

        array.forEach(showArray);

        fragment.appendChild(h2);
        paragraph.append();
        fragment.appendChild(paragraph);
        fragment.appendChild(list);
    };

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}