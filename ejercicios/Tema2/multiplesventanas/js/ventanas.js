/**
 *  Crea la siguiente página Web donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 *  Métodos a utilizar:
 *      miVentana = window.open('', '', 'width=200,height=200');
 *      miVentana.document.open();
 *      miVentana.document.write()
 *
 *  Añade el esqueleto básico: html, head, title, body, ul...
 * 
 *  miVentana.document.close();
 *
 *   @author Guillermo Boquizo Sánchez
 */
{
    /**
     * Función que se encarga de la carga inicial.
     */
    function init() {
        createPage();
        let btnOpenWindow = document.getElementById("btnOpen");
        btnOpenWindow.addEventListener("click", createWindows);
    }

    //Función que se encarga de abrir y escribir las nuevas ventanas.
    let createWindows = function () {

        //Recorrido para la creación de 5 ventanas bajo el template indicado.
        for (let i = 0; i < 5; i++) {
            let windowOpened = window.open("", "", "top=0,left=0,height=200,width=200");
            let html = `
            <!DOCTYPE html>
            <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Ventana de prueba</title>
                    <link rel="stylesheet" href="css/estilos.css">
                    <script type ="text/javascript" src ="js/close.js"></script>
                </head>
                <body>
                    <noscript>
                        Por favor, comprueba que tu navegador es compatible con javascript, o bien
                        comprueba si lo tienes activado
                    </noscript>
                    <h3>Ventana ${i + 1}</h3>
                    <button class="button2" id ="windowClose"> Cerrar ventana </button>
                </body>
            </html>`;

            windowOpened.document.open();
            windowOpened.document.write(html);
            windowOpened.document.close();
        }
    }

    /**
     * Función que crea el layout de la página desde js.
     */
    let createPage = function () {

        //Crea el header y se le asigna una clase.
        let header = document.createElement("header");
        header.className = "header";

        //Crea el título y se le asigna un texto.
        let h1 = document.createElement("h1");
        h1.textContent = "Desarrollo Web en Entorno Cliente";

        //Crea el subtítulo y se le asigna un texto.
        let h2 = document.createElement("h2");
        h2.textContent = "Apertura de múltiples ventanas (5)";

        //Crea la sección main y se le asigna una clase.
        let main = document.createElement("main");
        main.className = "main";

        //Crea un contenedor para la calculadora y se le asigna una clase.
        let container = document.createElement("container");
        container.className = "ventana";

        //Crea un contenedor para el botón y se le asigna una clase
        let containerButton = document.createElement("div");
        containerButton.className = "containerButton";

        //Crea el botón que abrirá las nuevass ventanas.
        let button = document.createElement("button");
        button.className = "button";
        button.id = "btnOpen";
        button.type = "button";
        button.textContent = "Abre múltiples ventanas";

        //Crea un footer y se le asigna una clase.
        let footer = document.createElement("footer");
        footer.className = "footer";

        //Crea un elemento p para el copyright y se le asigna un texto.
        let p = document.createElement("p");
        p.className = "footer-copyright";
        p.textContent = "Guillermo Boquizo Sánchez - DWECL 2 º DAW IES Gran Capitán";

        //Se añade el botón a su contenedor.
        containerButton.appendChild(button);

        //Se añade el contenedor del botón al container principal.
        container.appendChild(containerButton);

        //Se añade el elemento h1 al header.
        header.appendChild(h1);

        //Se añade el elemento h2 al header.
        header.appendChild(h2);

        //Se añade el elemento container al main.
        main.appendChild(container);

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