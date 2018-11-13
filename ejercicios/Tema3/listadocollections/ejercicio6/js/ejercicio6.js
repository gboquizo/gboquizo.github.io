/**
 * 4. Entrega un código (debidamente comentado) donde demuestres 
 * los apartados del ejercicio anterior sobre la collection Set. 
 * Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.
 * 
 * @author Guillermo Boquizo Sánchez
 */
{
    let newline = "<br/>";
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
        h2.innerHTML = 'Listado collections en JS.<br/>Ejercicio 6 ';

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

        //Se añade el header al body.
        document.body.appendChild(header);

        //Se añade el main al body.
        document.body.appendChild(main);

        //Se añade el footer al body
        document.body.appendChild(footer);
    };

    let createDefinans = function (fragment) {
        let firstParagraph = document.createElement('article');
        firstParagraph.className = 'definans';
        firstParagraph.innerHTML =
            `
                <h4>4.Entrega un código (debidamente comentado) donde demuestres los apartados del 
                ejercicio anterior sobre la collection Map.<br> 
                <br>Para ello utiliza como elementos los nombres y apellidos de cinco compañeros de clase.</h4>
        `;

        fragment.appendChild(firstParagraph);
        createExercise(fragment);
    };

    let createExercise = function (fragment) {

        let h2 = document.createElement('h2');
        h2.innerHTML = 'Resultado del ejercicio';

        let list = document.createElement('ol');
        list.className = 'info2';

        let addElement = function (element) {
            let node = document.createElement('li');
            node.appendChild(document.createTextNode(element));
            node.innerHTML = element + newline + newline;
            list.appendChild(node);
        };

        /**
         * Constructor del set, admite como parámetros el array: 
         */
        let array = [
            [
                ["nombre", "apellido1", "apellido2"],
                ["Guillermo", "Boquizo", "Sánchez"]
            ],
            [
                ["nombre", "apellido1", "apellido2"],
                ["Jesús", "Mejías", "Leiva"]
            ],
            [
                ["nombre", "apellido1", "apellido2"],
                ["Francisco", "Ramírez", "Ruiz"]
            ],
            [
                ["nombre", "apellido1", "apellido2"],
                ["Marcos", "Gallardo", "Pérez"]
            ],
            [
                ["nombre", "apellido1", "apellido2"],
                ["Mario", "Navarro", "Madrid"]
            ]
        ];

        /**
         * Constructor del set, admite como parámetros el array: 
         */
        let constructor = new Set(array);
        console.log(constructor);

        /**
         * Function que permite mostrar el Set.
         */
        let showSet = function (value, key) {
            addElement(
                'Set [' + key + '] : ' + value + ';'
            );
        };

        /**
         * Function que permite mostrar el map de set.add.
         */
        let showSetAdd = function (value, key) {
            addElement(
                'Añadiendo al Set [' + key + '] : ' + value + ';'
            );
        };

        /**
         * Function que permite mostrar el set de set.delete.
         */
        let showSetDelete = function (value, key) {
            addElement(
                'Borrando del Set [' + key + '] : ' + value + ';'
            );
        };

        /**
         * Function que permite mostrar el set de set.get.
         */
        let showHas = function (value, key) {
            addElement(
                'Buscando en el Set por ' + key + ':' + value + ';'
            );
        };

        /**
         * Function que permite mostrar el set de set.size.
         */
        let showSize = function (value, key, set) {
            addElement(
                'Mostrando el size del Set: ' +
                '<br><br>[' + key + ',' + value + ']' + "=>" + set.size
            );
        };

        /**
         * Function que permite mostrar el set de set.forEach.
         */
        let showForEach = function (value, key) {
            addElement(
                'Mostrando el uso de Set.forEach:<br><br> ' + key + ':' + value + ';'
            );
        };

        /**
         * Recorrido del primer Set.
         */
        constructor.forEach(showSet);

        let resultado;
        /**
         * Usando set para añadir un elemento.
         */
        let setAdd = new Set();
        setAdd.add(["nombre", "apellido1"], ["Angelo", "Barbara"]);
        setAdd.forEach(showSetAdd);
        console.log("Set add() -> " + setAdd);

        /**
         * Usando delete para eliminar un elemento.
         */
        let setDelete = new Set();
        setDelete.add("Nombre1", "Angelo Barbara");
        console.log(setDelete.has('Nombre1'));
        setDelete.forEach(showSetDelete);
        resultado = setDelete.delete('Nombre1');
        console.log("Set delete() -> " + resultado);
        setDelete.forEach(showSetDelete);

        /**
         * Usando has para buscar un elemento.
         */
        let setHas = new Set();
        setHas.add("nombre", "Benito");
        resultado = setHas.has("nombre");
        setHas.forEach(showHas);
        console.log("Set has() -> " + resultado);

        /**
         * Usando size para ver el número de elementos.
         */
        let setSize = new Set();
        setSize.add("apellido", "Lopera");
        resultado = setSize.size;
        setSize.forEach(showSize);
        console.log("Set size() -> " + resultado);

        /**
         * Usando forEach recorrer el map.
         */
        let setForEach = new Set([
            ['Nombre1', 'Guillermo Boquizo Sánchez'],
            ['Nombre2', 'Marcos Gallardo Pérez'],
            ['Nombre3', 'Mario Navarro Madrid'],
            ['Nombre4', 'Jesús Mejías Leiva'],
            ['Nombre4', 'Jesús Mejías Leiva'],
            ['Nombre5', 'Francisco Ramírez Ruiz']

        ]);

        setForEach.forEach((element, key) => {
            console.log("Set forEach() -> " + key + ":", element);
        });

        setForEach.forEach(showForEach);
        fragment.appendChild(h2);
        fragment.appendChild(list);
    };
    //Se añade el evento para la carga de elementos DOM y de la función init.
    document.addEventListener('DOMContentLoaded', init);
}