/**
 * 2. Tanto los arrays javaScript como los Sets permiten almacenar elementos. Indica diferencias entre ambos.
 * 
 * @author Guillermo Boquizo Sánchez
 */
{
    let newline = '<br/>';
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
        h2.innerHTML = 'Listado collections en JS.<br/>Ejercicio 2 ';

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
            ` <h4>2. Tanto los arrays javaScript como los Sets permiten almacenar elementos.` +
            newline + ` Indica diferencias entre ambos.</h4>
                <p class="info">
                    Los Set permiten almacenar valores únicos de cualquier tipo, incluyendo valores 
                    primitivos o referencias a objetos.` + newline + newline + ` Los objetos Set son colecciones de valores.
                    Pueden ser iterados en orden de inserción, y a diferencia de los Array un valor en el Set es único, sólo aparece una vez.
                </p>
        `;

        fragment.appendChild(firstParagraph);
    };
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}