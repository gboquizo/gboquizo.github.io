/**
 * 
 * Indica la utilidad del operador in con los arrays.Demuestra su uso mediante un ejemplo.
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
        h2.innerHTML = 'Listado arrays en JS.<br />Ejercicio 2 ';

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

        let videoconsolas = ["Nintendo", "Sony", "Microsoft", "Sega"];
        let videoconsola = {
            plataforma: "Nintendo",
            sistema: "SNES"
        };

        let h4 = document.createElement('h4');

        h4.innerHTML = '2. Indica la utilidad del operador in con los arrays.' + newline + 'Demuestra su uso mediante un ejemplo.';

        let firstParagraph = document.createElement('p');
        firstParagraph.className = 'info4';
        firstParagraph.innerHTML = 'El operador in devuelve true o false si la propiedad que queremos comprobar está o no en el array.' +
            newline + newline +
            'En el caso de los índices, podemos comprobar si un índice está en el array o no.' +
            newline + newline + 'En el caso de arrays con propiedades, podemos comprobar si un array determinado posee' +
            ' una propiedad concreta.';

        let secondParagraph = document.createElement('p');
        secondParagraph.className = 'info';
        secondParagraph.innerHTML = 'Ejemplo';



        let secondList = document.createElement('ol');
        secondList.className = 'info';

        let definans2 = [
            'let videoconsolas = ' + JSON.stringify(videoconsolas) + ';',
            '0 in videoconsolas //' + (0 in videoconsolas),
            '2 in videoconsolas //' + (2 in videoconsolas),
            '5 in videoconsolas //' + (5 in videoconsolas),
            'length in videoconsolas //' + (length in videoconsolas) + ' (los arrays tienen longitud.)',
            'plataforma" in videoconsola //' + ("plataforma" in videoconsola),
            '"sistema" in videoconsola //' + ("sistema" in videoconsola),
            '"procesador" in videoconsola //' + ("procesador" in videoconsola),
        ];

        for (let i = 0; i < definans2.length; i++) {
            let li = document.createElement('li');
            li.className = 'info4';
            li.innerHTML = '<p class="info4">' + definans2[i] + '</p>' + newline;
            fragment.appendChild(li);
        }
        secondList.appendChild(fragment);

        fragment.appendChild(h4);
        fragment.appendChild(firstParagraph);
        fragment.appendChild(secondParagraph);
        fragment.appendChild(secondList);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let paragraph = document.createElement('p');
        paragraph.className = 'info2';

        let videoconsolas = ["Nintendo ", "Sony ", "Microsoft ", "Sega "];
        let videoconsola = {
            plataforma: "Nintendo",
            sistema: "SNES"
        };

        paragraph.innerHTML = "0 in videoconsolas = " + (0 in videoconsolas) +
            newline + "2 in videconsolas = " + (2 in videoconsolas) +
            newline + "5 in videoconsolas = " + (5 in videoconsolas) +
            newline + "length in videoconsolas = " + (length in videoconsolas) +
            newline + newline + "plataforma in videoconsola = " + ("plataforma" in videoconsola) +
            newline + "sistema in videoconsola = " + ("sistema" in videoconsola) +
            newline + "procesador in videoconsola = " + ("procesador" in videoconsola);

        fragment.appendChild(h2);
        fragment.appendChild(paragraph);
    };

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}