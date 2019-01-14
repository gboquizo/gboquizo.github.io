/**
 * 
 * Reloj.Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h"(usa timing events del objeto window)
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
        h2.textContent = 'Ejercicio 5 ';

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

        //Se añade el fragment al ejercicio.
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

    /*Función encargada de crear los p necesarios para el ejercicio. 
     *Se le pasa el fragment por argumento.
     */
    let createInfo = function (fragmento) {

        let p = document.createElement("p");
        p.className = "p";
        p.id = "time";

        //appendChild del elemento p al fragment.
        fragmento.appendChild(p);
    }

    /**
     *
     * Función encargada de mostrar la información del ejercicio. 
     *
     */
    let showInfo = function () {

        //Se define un intervalo de tiempo en horas, minutos y segundos.
        setInterval(() => {

                //Definimos la fecha.
                let fecha = new Date();

                //Definimos la hora.
                let horas = addZero(fecha.getHours());

                //Definimos los minutos.
                let minutos = addZero(fecha.getMinutes());

                //Definimos los segundos.
                let segundos = addZero(fecha.getSeconds());

                //Agregamos la información al contexto del elemento con id=time.
                time.textContent = horas + ":" + minutos + ":" + segundos;


            },
            1000 // Intervalo en milisegundos en el que se ejecuta el código.
        );
    }

    //Añade el 0 si el elemento parametrizado es menor a 10
    let addZero = function (elemento) {
        if (elemento < 10) {
            elemento = "0" + elemento;
        }
        return elemento;
    }
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}