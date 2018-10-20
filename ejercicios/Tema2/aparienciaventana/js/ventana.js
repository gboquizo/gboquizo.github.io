/**
 *Crea la siguiente página Web(lo más dinámica posible) donde el botón crea una nueva ventana 
 *ubicada en la esquina superior izquierda de la pantalla(top = 0, left = 0) y con los tamaños indicados.
 *Métodos a utilizar:
 *
 *window.open()
 *document.write()
 *Añade el esqueleto básico: html, head, title, body, ul...
 * @author Guillermo Boquizo Sánchez
 */
{
    /**
     * Función que se encarga de la carga inicial.
     */
    function init() {
        createPage();
        let openWindow = document.getElementById("btnOpen");
        openWindow.addEventListener("click", createWindow);
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
        h2.textContent = "Ejemplo de apariencia de una Ventana ";

        //Crea la sección main y se le asigna una clase.
        let main = document.createElement("main");
        main.className = "main";

        //Crea un contenedor para la calculadora y se le asigna una clase.
        let container = document.createElement("container");
        container.className = "ventana";

        //Crea un contenedor para el botón y se le asigna una clase
        let containerButton = document.createElement("div");
        containerButton.className = "containerButton";

        //Crea ek botón que abrirá la nueva ventana.
        let button = document.createElement("button");
        button.className = "button";
        button.id = "btnOpen";
        button.type = "button";
        button.textContent = "Abre una ventana";

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

    //Función que se encarga de abrir y escribir la nueva ventana.
    let createWindow = function () {
        let windowOpened = window.open("", "Apariencia ventana", "top=0,left=0,height=200,width=300");
        let html = `
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Ventana de prueba</title>
                <link rel="stylesheet" href="css/estilos.css">
                <script type ="text/javascript" src ="js/close.js"> </script>
            </head>
            <body>
                <noscript>
                    Por favor, comprueba que tu navegador es compatible con javascript, o bien
                    comprueba si lo tienes activado
                </noscript>
                <p class="bold">Se han utilizado las propiedades:</p>
                <ul class="bold">
                    <li>height=200</li>
                    <li>width=300</li>
                </ul>
                <button class="button2" id ="windowClose"> Cerrar ventana </button>
            </body>
        </html>`;

        windowOpened.document.open();
        windowOpened.document.write(html);
        windowOpened.document.close();
    }
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener("DOMContentLoaded", init);
}