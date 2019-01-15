/**
 * El objeto window dispone de las propiedades scrollX, scrollY y scrollbars.
 * Muéstralos reaccionando al evento scroll sobre window.
 * @author Guillermo Boquizo Sánchez
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
        //Crea el header y se le asigna una clase.
        let header = document.createElement('header');
        header.className = 'header';

        //Crea el título y se le asigna un texto.
        let h1 = document.createElement('h1');
        h1.textContent = 'Desarrollo Web en Entorno Cliente';

        //Crea el subtítulo y se le asigna un texto.
        let h2 = document.createElement('h2');
        h2.textContent = 'Ejercicio 2 ';

        //Crea la sección main y se le asigna una clase.
        let main = document.createElement('main');
        main.className = 'main';

        //Crea un contenedor para la calculadora y se le asigna una clase.
        let container = document.createElement('container');
        container.className = 'container';

        //Crea un contenedor para el div y se le asigna una clase
        let ejercicio = document.createElement("ejercicio");
        ejercicio.className = "ejercicio";

        //Evento asociado al ejercicio.
        window.addEventListener("scroll", function () {
            ejercicio.innerHTML =
                "<p class='info'>ScrollX: " + "<span class='info2'>" + this.scrollX + "px desplazados desde la izquierda</span></p>" +
                "<p class='info'><br>ScrollY: " + "<span class='info2'>" + this.scrollY + "px desplazados desde la parte superior</span></p>" +
                "<p class='info'><br>Scrollbars visibles: " + "<span class='info2'>" + this.scrollbars.visible + "</span></p>"
        });

        //Se añade el contenedor del ejercicio al container principal.
        container.appendChild(ejercicio);

        //Se añade el elemento h1 al header.
        header.appendChild(h1);

        //Se añade el elemento h2 al header.
        header.appendChild(h2);

        //Se añade el elemento container al main.
        main.appendChild(container);

        //Crea un footer y se le asigna una clase.
        let footer = document.createElement('footer');
        footer.className = 'footer';

        //Crea un elemento p para el copyright y se le asigna un texto.
        let p = document.createElement('p');
        p.className = 'footer-copyright';
        p.textContent = 'Guillermo Boquizo Sánchez - DWECL 2 º DAW IES Gran Capitán';

        //Se añade el elemento p al footer.
        footer.appendChild(p);

        //Se añade el header al body.
        document.body.appendChild(header);

        //Se añade el main al body.
        document.body.appendChild(main);

        //Se añade el footer al body
        document.body.appendChild(footer);
    };

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}