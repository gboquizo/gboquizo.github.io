/**
 * Indica las distintas formas de crear expresiones regulares.
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
        h2.innerHTML = 'Listado regex en JS.<br/>Ejercicio 1 ';

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
                <h4>Indica las distintas formas de crear expresiones regulares.</h4>
                <p class="info">Las expresiones regulares pueden crearse:
                <ol class="info">
                    <li> Utilizando una representación literal de la expresión regular,
                    ` + newline + `consistente en un patrón encerrado entre diagonales.
                    </li>
                        <p class = "info4">let miPrimeraRegex = /\d+/g;</p>
                    <li>Llamando a la función constructora del objeto RegExp.
                    </li>
                    <p class = "info4">let miSegundaRegex = new RegExp("/d+/", "g");</p>
                </ol>
        `;

        fragment.appendChild(firstParagraph);
        createExercise(fragment);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let paragraph1 = document.createElement('p');
        paragraph1.className = 'info2';

        let miPrimeraRegex = /\d+/g;
        let resultado1 = miPrimeraRegex.toString();
        let miSegundaRegex = new RegExp("/d+/", "g");

        let resultado2 = miSegundaRegex.toString()

        paragraph1.innerHTML = "Regex creada directamente: " + resultado1 + newline + "Regex creada con el constructor: " + resultado2;
        fragment.appendChild(h2);
        fragment.appendChild(paragraph1);
    };
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}