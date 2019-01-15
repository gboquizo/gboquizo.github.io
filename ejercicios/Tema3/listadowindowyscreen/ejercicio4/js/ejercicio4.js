/**
 * 
 * Mi URL.Crea una página que te muestre debidamente desglosada la url.(servidor, protocolo, ruta...)
 * @author Guillermo Boquizo Sánchez
 */
{
    /**
     * Función que se encarga de la carga inicial.
     */
    function init() {
        createPage();
        showInfo();
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
        h2.textContent = 'Ejercicio 4 ';

        //Crea la sección main y se le asigna una clase.
        let main = document.createElement('main');
        main.className = 'main';

        //Crea un contenedor para la calculadora y se le asigna una clase.
        let container = document.createElement('container');
        container.className = 'container';

        //Crea un contenedor para el div y se le asigna una clase
        let ejercicio = document.createElement("ejercicio");
        ejercicio.className = "ejercicio";

        //Crea un fragment donde insertar la información del ejercicio.
        let fragmento = document.createDocumentFragment()

        //Llamada a la function que crea la info. Se le pasa el fragment por argumento.
        createInfo(fragmento);

        //Se añade el fragment al div del ejercicio.
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

    //Función encargada de crear los p para mostrar la diferente información.
    let createInfo = function (fragmento) {

        let p1 = document.createElement("p");
        p1.className = "p";
        p1.id = "server";

        let p2 = document.createElement("p");
        p2.className = "p";
        p2.id = "protocol";

        let p3 = document.createElement("p");
        p3.className = "p";
        p3.id = "route";

        //appendChild de los distintos p.
        fragmento.appendChild(p1);
        fragmento.appendChild(p2);
        fragmento.appendChild(p3);
    }

    //Función encargada de mostrar la información.
    let showInfo = function () {

        let location = document.location;
        let server = document.getElementById("server");
        let protocol = document.getElementById("protocol");
        let route = document.getElementById("route");

        server.innerHTML = " Servidor: " + "<span class=resultado>" + location.host + "</span>";
        protocol.innerHTML = "Protocolo: " + "<span class=resultado>" + location.protocol + "</span>";
        route.innerHTML = "Ruta: " + "<span class=resultado>" + location.href + "</span>";

    }
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}