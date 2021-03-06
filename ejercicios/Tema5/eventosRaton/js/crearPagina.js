{
    function CrearPagina() {
        this.fragment = document.createDocumentFragment();
    }
    /**
     * Función que crea el layout de la página desde js.
     */
    CrearPagina.prototype.createPage = function () {

        /**
         * Sección header
         */

        //Crea el header y se le asigna una clase.
        let header = document.createElement('header');
        header.className = 'header';

        //Crea el título y se le asigna un texto.
        let h1 = document.createElement('h1');
        h1.textContent = 'Desarrollo Web en Entorno Cliente';

        //Se añade el elemento h1 al header.
        header.appendChild(h1);

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
        this.createExercise();
        //Se añade el fragment al div del ejercicio.
        exercise.appendChild(this.fragment);

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
        //Se añade el footer al body.
        document.body.appendChild(footer);
    };

    CrearPagina.prototype.getFragment = function () {
        return this.fragment;
    }
}