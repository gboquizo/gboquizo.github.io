/**
 * En una expresión regular, indica la utilidad del campo.global.
 * Indica otros métodos relacionados.
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
        h2.innerHTML = 'Listado regex en JS.' + newline + 'Ejercicio 2';

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
            `<h4>En una expresión regular, indica la utilidad del campo.global.` +
            newline + `Indica otros métodos relacionados.</h4>
            <p class="info">La propiedad global indica si se está o no empleando la flag "g".` +
            newline + `"g" es un booleano que determina que la regex debe testearse para todas las posibles ` + newline + ` coincidencias en un string.</p>
            <ol class="info">
                <li>Podemos usar global como se ha indicado previamente:
                </li>
                    <p class = "info4">let miPrimeraRegex = /\d+;</p>
                    <p class = "info4">console.log(miPrimeraRegex.global);</p>
                <li>Podemos emplear ignoreCase para indicar si se usa el indicador insensitive o "i":
                </li>
                <p class = "info4">let miSegundaRegex = new RegExp("/d+/", "gi");</p>
                <p class = "info4">console.log(miSegundaRegex.ignoreCase);</p>
                <li>Podemos usar emplear multiline parar determinar si se usa el indicador "m" o multilínea:
                </li>
                    <p class = "info4">let miPrimeraRegex = /\d+;</p>
                    <p class = "info4">console.log(miPrimeraRegex.multiline);</p>
            </ol>
        
        `;

        fragment.appendChild(firstParagraph);
        createExercise(fragment);
    };

    let createExercise = function (fragment) {
        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let paragraph = document.createElement('p');
        paragraph.className = 'info2';

        let miPrimeraRegex = /\d+/g;

        console.log(miPrimeraRegex.global);

        let resultado1 = miPrimeraRegex.toString() + ":" + newline + "Resultado del uso de global:" + miPrimeraRegex.global + newline;
        
        let miSegundaRegex = new RegExp("/d+/", "gi");

        console.log(miSegundaRegex.ignoreCase);

        let resultado2 = miSegundaRegex.toString() + ":" + newline + "Resultado del uso de ignoreCase:" + miSegundaRegex.ignoreCase + newline;

        let resultado3 = miPrimeraRegex.toString() + ":" + newline + "Resultado del uso de multiline:" + miPrimeraRegex.multiline + newline;

        paragraph.innerHTML = "Testeando global en  " + resultado1 + newline + "Testeando ignoreCase: " + resultado2 + newline + "Testeando multiline en  " + resultado3 + newline;
        fragment.appendChild(h2);
        fragment.appendChild(paragraph);
    };

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}