/**
 * Indica la diferencia entre los siguientes métodos, y demuestra su uso
 * con algunos arrays: Array.prototype.forEach(), Array.prototype.every(),
 * Array.prototype.some() y Array.prototype.filter().
 * 
 * @author Guillermo Boquizo Sánchez
 *
 */
{
    let newline = "<br/>";
    let sp = "&nbsp";
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
        h2.innerHTML = 'Listado arrays en JS.<br />Ejercicio 8 ';

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
        h4.innerHTML = '8. Indica la diferencia entre los siguientes métodos,' + newline + 'y demuestra su uso con algunos arrays:' + newline + newline +
            'Array.prototype.forEach(),' + newline +
            'Array.prototype.every(),' + newline +
            'Array.prototype.some()' + newline +
            'y Array.prototype.filter().';

        let firstParagraph = document.createElement('p');
        firstParagraph.className = 'info4';
        firstParagraph.innerHTML =

            '<p class="info5">Array.prototype.forEach():<p>' +
            '<p class="info3">Recorre el array elemento a elemento y los trata individualmente.' +
            newline +
            'Se utiliza del siguiente modo:</p>' +
            '<p class="info3">Para un array dado, array = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];</p>' +
            '<p class="info3">array.forEach(valor, indice, array) {</p>' +
            '<p class="info3">' + sp + sp + sp + sp + '("Array[" + indice + "] = " + valor);</p>' +
            '<p class="info3">}</p>' +

            '<p class="info5">Array.prototype.every():<p>' +
            '<p class="info3">Comprueba que todos los elementos validen una función prueba,' + newline + 'devolviendo true o false.' +
            newline + newline + 'Se utiliza del siguiente modo:</p>' +
            '<p class="info3">Para un array dado, array = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];</p>' +
            '<p class="info3">array.every(function(numero){return !isNaN(numero);}));</p>' +
            '<p class="info3">Nos devolvería false, porque los elementos de la "A" a la "F" son string.' +
            newline +


            '<p class="info5">Array.prototype.some():<p>' +
            '<p class="info3">Comprueba que algún elemento valide una función prueba,' + newline + 'devolviendo true o false.' +
            newline + newline +
            'Se utiliza del siguiente modo:</p>' +
            '<p class="info3">Para un array dado, array = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];</p>' +
            '<p class="info3">array.some(function(numero){return !isNaN(numero);}));</p>' +
            '<p class="info3">Nos devolvería true, porque cualquier elemento de la "A" a la "F" son string.' +
            newline +

            '<p class="info5">Array.prototype.filter():<p>' +
            '<p class="info3">Filtra elementos de un array según el filtro pasado y devuelve un nuevo array con los' +
            newline + 'elementos que lo satisfagan.' +
            newline + newline +

            'Se utiliza del siguiente modo:</p>' +
            '<p class="info3">Para un array dado, array = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];</p>' +
            '<p class="info3">array.filter(function(numero){return !isNaN(numero);});</p>' +
            '<p class="info3">Nos devolvería un nuevo array con los elementos numéricos del array.';

        fragment.appendChild(h4);
        fragment.appendChild(firstParagraph);
    };

    let createExercise = function (fragment) {
        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let paragraph = document.createElement('p');
        paragraph.className = 'info2';

        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        let mensaje = "";

        mensaje += "<h3>forEach:</h3>";
        mensaje += "[";
        array.forEach(function (numero) {
            mensaje += numero;

            if (numero !== array[array.length - 1]) {
                mensaje += ", ";
            }
        });
        mensaje += "];";

        mensaje += "<h3>every:</h3>";
        mensaje += "¿Son todos los elementos un número?: ";
        mensaje += array.every(function (numero) {
            return !isNaN(numero);
        });

        mensaje += "<h3>some:</h3>";
        mensaje += "¿Hay algún elemento de tipo string?: ";
        mensaje += array.some(function (numero) {
            return isNaN(numero);
        });

        mensaje += "<h3>filter:</h3>";
        mensaje += "Elementos que no son números: ";
        mensaje += "[";
        mensaje += array.filter(function (numero) {
            return isNaN(numero);
        });
        mensaje += "];";


        paragraph.innerHTML = mensaje;

        fragment.appendChild(h2);

        fragment.appendChild(paragraph);

    };

    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}