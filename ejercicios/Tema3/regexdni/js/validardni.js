/**
 * 
 * Realiza la comprobación del dni.
 *
 * Para ello, crea un formulario con tres campos: nombre, dni y fecha de nacimiento.
 *
 * Al perder el foco de la caja de texto del DNI se realizará la comprobación.
 * Aparecerá un mensaje(Derecha o abajo) en rojo, indicando:
 *
 * formato incorrecto
 * letra incorrecta
 * introduce dni(si está vacío)
 *
 * Utiliza los grupos para capturar el número y la letra.
 * La letra puede estar en mayúscula o minúscula, separado o no por espacio / guión.
 * 
 * @author Guillermo Boquizo Sánchez
 *
 */
{
    let newline = "<br/>";

    let entradaDNI;
    let errorDNI;
    const letrasValidas = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

    /**
     * Función que se encarga de la carga inicial.
     */
    function init() {
        createPage();
        cargarDNI();

        function cargarDNI() {
            entradaDNI = document.getElementById("entradaDNI");
            errorDNI = document.getElementById("errorDNI");
            entradaDNI.addEventListener("blur", validarDNI);
            entradaDNI.addEventListener("focus", () => {
                errorDNI.innerHTML = "";
                errorDNI.classList.remove("error");
                errorDNI.classList.remove("success");
            });
        }
    }

    /**
     * Función que crea el layout de la página desde js.
     */
    let createPage = function () {
        /**
         * Sección header
         */

        //Crea el header y se le asigna una clase.
        let header = document.createElement('header');
        header.className = 'header';

        //Crea el título y se le asigna un texto.
        let h1 = document.createElement('h1');
        h1.textContent = 'Desarrollo Web en Entorno Cliente';

        //Crea el subtítulo y se le asigna un texto.
        let h2 = document.createElement('h2');
        h2.innerHTML = 'Validar DNI en JS.' + newline + "";

        //Se añade el elemento h1 al header.
        header.appendChild(h1);

        //Se añade el elemento h2 al header.
        header.appendChild(h2);

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

        //Llamada a la function que crea el enunciado. Se le pasa el fragment por argumento.
        createDefinans(fragment);

        //Llamada a la function que crea ejercicio. Se le pasa el fragment por argumento.
        createExercise(fragment);

        //Se añade el fragment al div del ejercicio.
        exercise.appendChild(fragment);

        //Se añade el contenedor del ejercicio al container principal.
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

        //Se añade el footer al body
        document.body.appendChild(footer);
    };

    let createDefinans = function (fragment) {

        let h4 = document.createElement('h4');

        h4.innerHTML = 'Realiza la comprobación del dni.' +
            newline + "Para ello, crea un formulario con tres campos:" +
            newline + newline + "Nombre, dni y fecha de nacimiento." +
            newline + newline + "Al perder el foco de la caja de texto del DNI se realizará la comprobación" +
            newline + newline + "Aparecerá un mensaje (Derecha o abajo) en rojo, indicando:" + newline + newline +
            '<ul class"info">' +
            '<li class=info3>formato incorrecto</li>' + newline +
            '<li class=info3>letra incorrecta</li>' + newline +
            '<li class=info3>introduce dni(si está vacío)</li>' +
            "</ul>" +
            newline + newline +
            "Utiliza los grupos para capturar el número y la letra." +
            newline + newline +
            "La letra puede estar en mayúscula o minúscula," +
            newline + "separado o no por espacio / guión";
        fragment.appendChild(h4);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let form = document.createElement('form');
        form.className = 'formulario';
        form.action = "";
        form.method = "";

        let containerNombre = document.createElement("div");
        containerNombre.className = "field-group";
        let containerNombreInput = document.createElement("div");
        containerNombreInput.className = "field";

        let label1 = document.createElement('label');
        label1.htmlFor = 'entradaNombre';
        label1.innerHTML = 'Nombre';
        label1.className = 'label';

        let input1 = document.createElement('input');
        input1.type = 'text';
        input1.name = "entradaNombre";
        input1.id = 'entradaNombre';
        input1.placeholder = "Nombre y apellidos";
        input1.style.color = "blue"

        let span1 = document.createElement('span');
        span1.id = 'errorNombre';

        containerNombre.appendChild(label1);
        containerNombreInput.appendChild(input1);
        containerNombreInput.appendChild(span1);
        containerNombre.appendChild(containerNombreInput);

        let containerDNI = document.createElement("div");
        containerDNI.className = "field-group";

        let containerDNIInput = document.createElement("div");
        containerDNIInput.className = "field";

        let label2 = document.createElement('label');
        label2.htmlFor = 'entradaDNI';
        label2.innerHTML = 'DNI';
        label2.className = 'label';

        let input2 = document.createElement('input');
        input2.type = 'text';
        input2.name = "entradaDNI";
        input2.id = 'entradaDNI';
        input2.placeholder = "DNI";
        input2.style.color = "blue"

        let span2 = document.createElement('span');
        span2.id = 'errorDNI';

        containerDNI.appendChild(label2);
        containerDNIInput.appendChild(input2);
        containerDNIInput.appendChild(span2);
        containerDNI.appendChild(containerDNIInput);

        let label3 = document.createElement('label');
        label3.htmlFor = 'entradaFecha';
        label3.innerHTML = 'Fecha';
        label3.className = 'label';

        let containerFecha = document.createElement('div');
        containerFecha.className = "field-group";
        let containerFechaInput = document.createElement("div");
        containerFechaInput.className = "field";

        let input3 = document.createElement('input');
        input3.type = 'text';
        input3.name = "entradaFecha";
        input3.id = 'entradaFecha';
        input3.placeholder = "Fecha";
        input3.style.color = "blue"

        let span3 = document.createElement('span');
        span3.id = 'errorFecha';

        containerFecha.appendChild(label3);
        containerFechaInput.appendChild(input3);
        containerFechaInput.appendChild(span3);
        containerFecha.appendChild(containerFechaInput);

        fragment.appendChild(h2);
        form.appendChild(containerNombre);
        form.appendChild(containerDNI);
        form.appendChild(containerFecha);
        fragment.appendChild(form);
    };

    let validarDNI = function (dni) {
        let pattern = /^(\d{8})[ -]?([TRWAGMYFPDXBNJZSQVHLCKET])$/i;
        if (entradaDNI.value === "") {
            mostrarError("Introduce un DNI");
        } else {
            if (!pattern.test(entradaDNI.value)) {
                mostrarError("Formato incorrecto");
            } else {
                mostrarCorrecto("DNI válido");
                let numeros = dni.match(pattern)[1];
                let letras = dni.match(pattern)[2].toUpperCase();
                let letraValida = letrasValidas[parseInt(numeros) % 23].toUpperCase();
                if (letras !== letraValida) {
                    mostrarError("Letra incorrecta");
                }
            }
        }
    };

    let mostrarError = function (mensaje) {
        errorDNI.innerHTML = mensaje;
        entradaDNI.placeholder = mensaje;
        errorDNI.style.color = "red"
        entradaDNI.style.color = "red"
        errorDNI.classList.remove("exito");
        errorDNI.classList.add("error");
    };

    let mostrarCorrecto = function (mensaje) {
        errorDNI.innerHTML = mensaje;
        errorDNI.style.color = "green"
        entradaDNI.style.color = "green"
        errorDNI.classList.remove("error");
        errorDNI.classList.add("exito");
    };

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}