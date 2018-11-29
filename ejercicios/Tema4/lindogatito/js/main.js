{
    /**
     * 
     * 
     * @author Guillermo Boquizo Sánchez
     */
    let boton;

    function init() {
        createPage();
        boton = document.getElementById("crearGato");
        boton.addEventListener("click", crearVentana);
    }
    /**
     * Función que crea el layout de la página desde js.
     */
    let createPage = function () {

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
        createExercise(fragment);
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
        //Se añade el main al body.
        document.body.appendChild(main);
        document.body.appendChild(footer);


    };


    let createExercise = function (fragment) {
        let h2 = document.createElement('h2');
        h2.textContent = "Creación de un lindo gatito."
        let img = document.createElement('img');
        img.src = "/ejercicios/Tema4/lindogatito/images/lindo.png"
        boton = document.createElement('button');
        boton.id = "crearGato";
        boton.className = "btn";
        boton.innerHTML = 'Crear Gato';
        let descripcion = document.createElement("article");
        descripcion.innerHTML = `
        <h4 class="condiciones">Condiciones de creación</h4>
        <ol>
            <li class="descripcion">Un gato no puede pesar menos de 1 kg</li>
            <li class="descripcion">Un gato no puede pesar más de 15 kg</li>
            <li class="descripcion">Comer aumenta el peso del gato en 1 kg</li>
            <li class="descripcion">Jugar disminuye el peso del gato en 1 kg</li>
            <li class="descripcion">Si el gato no cumple su peso, muere</li>
        </ol>
        `;
        fragment.appendChild(h2);
        fragment.appendChild(img);
        fragment.appendChild(descripcion);
        fragment.appendChild(boton);
    };


    /*  let crearGato = () => {
         let auryn = new Gato('Auryn', '01/01/2004', 'Siamesa', '4');
     } */

    let crearVentana = function (object) {
        let ventana;
        let html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta name="author" content="Guillermo Boquizo Sánchez">
            <meta name="description" content="Crea un gato auryn en js">
            <meta name="keywords" content="HTML,CSS,JavaScript">
            <title>Nuevo gato</title>
            <link rel="stylesheet" href="css/estilos.css">
            <script type="text/javascript" src="js/gato.js"></script>
        </head>
        <body>
            <noscript>
                <p>Por favor, compruebe que su navegador sea compatible con javascript,
                    o bien compruebe si lo tiene activado.</p>
            </noscript>
            <header class="header">
                <h1>Desarrollo Web en Entorno Cliente</h1>
            </header>
            <main class="main">
            <container class="container">
            <ejercicio class="ejercicio">
                <h2>Nuevo gatito js</h2>
                <p>Prueba</p>
            </ejercicio>
            </container>
            </main>
            <footer class="footer">
                <p class="footer-copyright">Guillermo Boquizo Sánchez - DWECL 2 º DAW IES Gran Capitán</p>
            </footer>
        </body>
        </html>    
        `;
        ventana = window.open('', '_self');
        ventana.document.open();
        ventana.document.gato = object;
        ventana.document.write(html);
        ventana.document.close();
    }
    document.addEventListener('DOMContentLoaded', init);
}