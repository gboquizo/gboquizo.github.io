{
    /**
     * 
     * 
     * @author Guillermo Boquizo Sánchez
     */
    let boton;
    let nombre;
    let raza;
    let fechaNac;
    let errorNombre;
    let errorFecha;

    function init() {
        createPage();
        boton = document.getElementById('crearGato');
        nombre = document.getElementById('nombre');
        raza = document.getElementById('raza');
        fechaNac = document.getElementById('fechaNac');
        errorNombre = document.getElementById('errorNombre');
        errorFecha = document.getElementById('errorFecha');
        boton.addEventListener('click', crearGato);
        nombre.addEventListener('blur', comprobarNombre);
        fechaNac.addEventListener('blur', comprobarFecha);
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
        h2.textContent = 'Creación de un lindo gatito.';
        let img = document.createElement('img');
        img.src = '/ejercicios/Tema4/lindogatito/images/lindo.jpg';
        boton = document.createElement('button');
        boton.id = 'crearGato';
        boton.className = 'btn';
        boton.innerHTML = 'Crear Gato';
        let descripcion = document.createElement('article');
        descripcion.innerHTML = `
        <h4 class="condiciones">Condiciones de creación</h4>
        <ol>
            <li class="descripcion">Un gato no puede pesar menos de 1 kg</li>
            <li class="descripcion">Un gato no puede pesar más de 15 kg</li>
            <li class="descripcion">Comer aumenta el peso del gato en 1 kg</li>
            <li class="descripcion">Jugar disminuye el peso del gato en 1 kg</li>
            <li class="descripcion">Si el gato no cumple su peso, muere</li>
        </ol>
        <div class="entrada" id="entrada">
            <div class="field-group">
                <label class="label" for="nombre">Nombre:</label>
                <div class="field">
                    <input type="text" name="nombre" id="nombre">
                    <span id="errorNombre" class="aviso"></span>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="raza">Raza:</label>
                <div class="field">
                    <select name="raza" id="raza">
                        <option value="Savannah">Savannah</option>
                        <option value="Maine Coon">Maine Coon</option>
                        <option value="Azul Ruso">Azul Ruso</option>
                        <option value="Ragdoll">Ragdoll</option>
                        <option value="Abisinio">Abisinio</option>
                    </select>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="fecha">Fecha de Nacimiento:</label>
                <div class="field">
                    <input type="date" name="fecha" id="fechaNac">
                    <span id="errorFecha" class="aviso"></span>
                </div>
            </div>
        </div>
        `;
        fragment.appendChild(h2);
        fragment.appendChild(img);
        fragment.appendChild(descripcion);
        fragment.appendChild(boton);
    };

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
            <script type="text/javascript" src="js/gatito.js"></script>
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
                <div id="principal">
                    <h3>Tu nuevo gatito</h3>
                    <div id="divImg">
                        <img id="imagenes" src="/ejercicios/Tema4/lindogatito/images/linda.jpg"></img>
                    </div>
                    <div id="botones">
                        <p id="aviso" class="aviso"></p>
                        <input type="button" value="Jugar" id="jugar" class= "btn">
                        <input type="button" value="Dar Comida" id="comer" class="btn">
                        <input type="button" value="Dormir" id="dormir" class="btn">
                    </div>
                    <div id="tabla"></div>
                </div>
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
    };

    let comprobarNombre = function () {
        let patron = /^[A-Za-záéíóúÁÉÍÓÚÑñ]{3,}/;

        if (!patron.test(nombre.value)) {
            errorNombre.innerHTML = 'El nombre no es correcto';
        } else {
            errorNombre.innerHTML = '';
        }
    };

    let comprobarFecha = function () {
        try {
            obtenerEdad(new Date(fechaNac.value));
            errorFecha.innerHTML = '';
        } catch (fechaException) {
            errorFecha.innerHTML = 'Fecha no válida';
        }
    };

    let crearGato = function () {
        let fechaNacimiento = new Date(fechaNac.value);
        comprobarNombre();
        comprobarFecha();

        if (nombre.value == '') {
            errorNombre.innerHTML = 'Introduce un nombre';
        } else {
            try {
                let gato = new Gato(nombre.value, raza.value, fechaNacimiento);
                crearVentana(gato);
            } catch (fechaException) {
                errorFecha.innerHTML = '¡La fecha no es correcta!';
            }
        }
    };
    document.addEventListener('DOMContentLoaded', init);
}