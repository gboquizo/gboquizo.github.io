/**
 * 1. ¿Cuántos constructores tiene el objeto predefinido Date()? Explícalos mediante ejemplos.
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
        h2.innerHTML = 'Listado date en JS.<br/>Ejercicio 1 ';

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
                <h4>1. ¿Cuántos constructores tiene el objeto predefinido Date()? ` +
            newline + `Explícalos mediante ejemplos.</h4>
                <p class="info"> El objeto predefinido Date() tiene 4 constructores:
                    <ol class="info">
                        <li>let fechaConNew = new Date(); - Muestra la fecha actual con el horario GMT +0</li>
                            <p class = "info4">let fechaConNew = new Date();</p>
                        <li>let fechaEnMs = new Date(milisegundos); - Crea una fecha según los milisegundos pasados ` +
            newline + `por parámetro. ` +
            newline +
            newline + `Esta cantidad de milisegundos se le suma a una fecha inicial (año 1970) y se calcula ` +
            newline + `la nueva fecha para mostrarnos una actual.` +
            newline +
            newline +
            `
            Date.now() devuelve el momento actual en milisegundos</li>
                    <p class = "info4">let dateEnMs = new Date(Date.now());</p>
                    <li>let fechaConString = new Date(string); 
                    - Crea una fecha según la cadena dada. En dicha cadena se especifica primero
                el mes(en inglés), seguido del día, año, horas, minutos y segundos. 
               </li>
                <p class = "info4">let fechaConString = new Date("11/7/2018");</p>
                <li>let fechaConNewParametrizado = new Date(año, mes, dia, horas, minutos, segundos, milisegundos); 
                - En este último caso, le pasamos los argumentos uno a uno para crear una fecha con dichos valores. 
                </li>
                <p class = "info4">let fechaConNewParametrizado = new Date(2018, 11 - 1, 7, 0, 0, 0, 0);</p
                </ol>
                </p>
        `;

        fragment.appendChild(firstParagraph);
        createExercise(fragment);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let paragraph = document.createElement('p');
        paragraph.className = 'info2';

        let fechaConNew = new Date();
        let fechaEnMs = new Date(Date.now());
        let fechaConString = new Date("11/7/2018");
        let fechaConNewParametrizado = new Date(2018, 11 - 1, 7, 0, 0, 0, 0);

        let list = document.createElement("ul");
        list.className = "info2";
        let element;
        let text;

        element = document.createElement("li");
        text = document.createTextNode("Con new Date(): " + fechaConNew);
        element.appendChild(text);
        list.appendChild(element);

        element = document.createElement("li");
        text = document.createTextNode("Con new Date(1509870037601): " + fechaEnMs);
        element.appendChild(text);
        list.appendChild(element);

        element = document.createElement("li");
        text = document.createTextNode("Con new Date('07/11/2018'): " + fechaConString);
        element.appendChild(text);
        list.appendChild(element);

        element = document.createElement("li");
        text = document.createTextNode("Con new Date(2018, 11, 7, 0, 0, 0, 0): " + fechaConNewParametrizado);
        element.appendChild(text);
        list.appendChild(element);

        paragraph.appendChild(list);
        fragment.appendChild(h2);
        fragment.appendChild(paragraph);
    };
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}