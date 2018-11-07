/**
 * 9. Implementa el método calcularEdad() que devuelva la edad indicando la fecha de nacimiento.
 * En caso de tener menos de un año, indicar días y meses transcurridos.Indicar errores.
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
        h2.innerHTML = 'Listado date en JS.<br/>Ejercicio 9 ';

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
                <h4>9. Implementa el método calcularEdad() que devuelva la edad indicando la fecha de nacimiento.
                En caso de tener menos de un año, indicar días y meses transcurridos.Indicar errores.</h4>
        `;

        fragment.appendChild(firstParagraph);
        createExercise(fragment);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let paragraph = document.createElement('p');
        paragraph.className = 'info2';
        paragraph.id = "paragraph";

        let fecha = new Date("Feb 21, 1986");

        let calcularEdad = function (fecha) {
            if (!esFecha(fecha))
                throw new FechaException("No es una fecha válida.");
            let fechaActual = new Date();
            if (fecha.getFullYear() === fechaActual.getFullYear()) {
                let dia = fechaActual.getDate() - fecha.getDate();
                let mes = fechaActual.getMonth() - fecha.getMonth();
                return "Han transcurrido: " + dia + " dias y " + mes + " meses desde el nacimiento."
            } else {
                if (fechaActual.getMonth() < fecha.getMonth())
                    return "Edad: " + ((fechaActual.getFullYear() - fecha.getFullYear()));
                else if (fechaActual.getMonth() === fechaActual.getMonth() && fechaActual.getDay() < fecha.getDay())
                    return "Edad: " + ((fechaActual.getFullYear() - fecha.getFullYear()));
                else
                    return "Edad: " + (fechaActual.getFullYear() - fecha.getFullYear());
            }

        }
        let esFecha = function (fecha) {
            return !isNaN(Date.parse(fecha));
        }

        //Creación de excepción personalizada
        let FechaException = function (mensaje) {
            this.mensaje = mensaje;
            this.nombre = "FechaException";
        }

        try {
            paragraph.innerHTML = "Actualmente tengo " + calcularEdad(fecha) + " años.";
        } catch (fechaException) {
            paragraph.innerHTML = fechaException.mensaje;
        }

        fragment.appendChild(h2);
        fragment.appendChild(paragraph);
    };
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}