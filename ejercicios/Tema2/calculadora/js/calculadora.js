/**
 * Partiendo de un documento html vacío, crea los elementos HTML de una calculadora mediante los métodos
 * del objeto predefinido document.
 * Utiliza los botones básicos, como en esta calculadora.
 * 
 * @author Guillermo Boquizo Sánchez
 */
{
    //Se define un array para el texto de los botones
    let textButtons = ["CE", "<=", "%", "+", "7", "8", "9", "-", "4", "5", "6", "x", "1", "2", "3", "/", "0", "+/-", ",", "="];

    //Se define un contador para el recorrido que rellena los botones de elementos del array.
    let counter = 0;

    /**
     * Función que se encarga de la carga inicial.
     */
    function init() {
        crearCalculadora();
    }

    /**
     * Función que crea el layout de la página y de la propia calculadora desde js.
     */
    let crearCalculadora = function () {

        //Crea el header y se le asigna una clase.
        let header = document.createElement("header");
        header.className = "header";

        //Crea el título y se le asigna un texto.
        let h1 = document.createElement("h1");
        h1.textContent = "Desarrollo Web en Entorno Cliente";

        //Crea el subtítulo y se le asigna un texto.
        let h2 = document.createElement("h2");
        h2.textContent = "Calculadora js";

        //Crea la sección main y se le asigna una clase.
        let main = document.createElement("main");
        main.className = "main";

        //Crea un contenedor para la calculadora y se le asigna una clase.
        let container = document.createElement("container");
        container.className = "calculadora";

        //Crea un contenedor para el input numérico y se le asigna una clase.
        let containerInput = document.createElement("div");
        containerInput.className = "containerInput";

        //Crea el input numérico, se le asigna una clase, un tipo y un value.
        let input = document.createElement("input");
        input.className = "entrada";
        input.type = "text";
        input.value = 0;

        //Se añade el elemento h1 al header.
        header.appendChild(h1);

        //Se añade el elemento h2 al header.
        header.appendChild(h2);

        //Se añade el elemento container al main.
        main.appendChild(container);

        //Se añade el elemento contenedor del input al container general.
        container.appendChild(containerInput);

        //Se añade el elemento input a su contenedor.
        containerInput.appendChild(input);

        //Recorrido para generar los contenedores de los botones, los botones y añadirles texto.
        for (let i = 0; i < 5; i++) {
            let containerButton = document.createElement("div");
            containerButton.className = "containerButton";

            for (let j = 0; j < 4; j++) {

                let button = document.createElement("button");
                button.type = "button";
                button.textContent = textButtons[counter++];
                button.className = "button";

                containerButton.appendChild(button);
            }
            container.appendChild(containerButton);
        }

        //Crea un footer y se le asigna una clase.
        let footer = document.createElement("footer");
        footer.className = "footer";

        //Crea un elemento p para el copyright y se le asigna un texto.
        let p = document.createElement("p");
        p.className = "footer-copyright";
        p.textContent = "Guillermo Boquizo Sánchez - DWECL 2 º DAW IES Gran Capitán";

        //Se añade el elemento p al footer.
        footer.appendChild(p);

        //Se añade el header al body.
        document.body.appendChild(header);

        //Se añade el main al body.
        document.body.appendChild(main);

        //Se añade el footer al body
        document.body.appendChild(footer);
    }

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener("DOMContentLoaded", init);
}