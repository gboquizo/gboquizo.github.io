/**
 * Crea una página web con el siguiente comportamiento:
 *
 * Un botón "bajar línea" para bajar una línea.
 * Un botón "subir línea" para subir una línea
 * Un botón "bajar" para bajar una página.
 * Un botón "subir" para subir una página.
 * Un botón "inicio" para ir al inicio del documento
 * Un botón "fin" para ir al final del documento.
 * Puedes utilizar los siguientes métodos de windows: scroll(), scrollBy(), scrollByLines(), scrollTo()
 * @author Guillermo Boquizo Sánchez
 */
{
    /**
     * Función que se encarga de la carga inicial.
     */
    function init() {
        createPage();
        createButtonEvents();
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
        h2.textContent = 'Ejercicio 3 ';

        //Crea la sección main y se le asigna una clase.
        let main = document.createElement('main');
        main.className = 'main';

        //Crea un contenedor para la calculadora y se le asigna una clase.
        let container = document.createElement('container');
        container.className = 'container';

        //Crea un contenedor para el div y se le asigna una clase
        let ejercicio = document.createElement("ejercicio");
        ejercicio.className = "ejercicio";

        //Crea un fragment donde insertar los botones del ejercicio.
        let fragmento = document.createDocumentFragment();

        //Llamada a la function que crea los botones. Se le pasa el fragment por argumento.
        createButtons(fragmento);

        // Se añade el fragment al div del ejercicio.
        ejercicio.appendChild(fragmento);

        //Se añade el contenedor del botón al container principal.
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

    //Función encargada de asociar los eventos a los botones
    let createButtonEvents = function () {

        //la función scrollByLines no es soportada por todos los navegadores
        let bajarLinea = document.getElementById("bajarLinea");
        bajarLinea.addEventListener("click", () => {
            scrollByLines(1)
        });
        //la función scrollByLines no es soportada por todos los navegadores
        let subirLinea = document.getElementById("subirLinea");
        subirLinea.addEventListener("click", () => {
            scrollByLines(-1)
        });
        let bajarPagina = document.getElementById("bajarPagina");
        bajarPagina.addEventListener("click", () => {
            window.scroll(0, window.scrollY + window.innerHeight)
        });
        let subirPagina = document.getElementById("subirPagina");
        subirPagina.addEventListener("click", () => {
            window.scroll(0, window.scrollY - window.innerHeight)
        });
        let inicio = document.getElementById("inicio");
        inicio.addEventListener("click", () => {
            window.scrollTo(0, 0)
        });
        let fin = document.getElementById("fin");
        fin.addEventListener("click", () => {
            window.scrollTo(0, document.body.clientHeight)
        });
    }

    //Función encargada de crear los botones.
    let createButtons = function (fragmento) {

        //Crea el botón para bajar línea.
        let button1 = document.createElement("bajarLinea");
        button1.className = "button";
        button1.id = "bajarLinea";
        button1.type = "button";
        button1.textContent = "Bajar línea (deprecated)";

        //Crea el botón para subir línea.
        let button2 = document.createElement("subirLinea");
        button2.className = "button";
        button2.id = "subirLinea";
        button2.type = "button";
        button2.textContent = "Subir línea (deprecated)";

        //Crea el botón para bajar página.
        let button3 = document.createElement("bajarPagina");
        button3.className = "button";
        button3.id = "bajarPagina";
        button3.type = "button";
        button3.textContent = "Bajar página";

        //Crea el botón para subir página.
        let button4 = document.createElement("subirPagina");
        button4.className = "button";
        button4.id = "subirPagina";
        button4.type = "button";
        button4.textContent = "Subir página";

        //Crea el botón para ir al inicio.
        let button5 = document.createElement("inicio");
        button5.className = "button";
        button5.id = "inicio";
        button5.type = "button";
        button5.textContent = "Ir al inicio del documento";

        //Crea el botón para ir al final.
        let button6 = document.createElement("fin");
        button6.className = "button";
        button6.id = "fin";
        button6.type = "button";
        button6.textContent = "Ir al final del documento";

        //AppenChild de los distintos botones.
        fragmento.appendChild(button1);
        fragmento.appendChild(button2);
        fragmento.appendChild(button3);
        fragmento.appendChild(button4);
        fragmento.appendChild(button5);
        fragmento.appendChild(button6);
    }

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}