/**
 * 1. Tanto los objetos javaScript como los Maps permiten almacenar pares clave/valor
 * Indica la diferencia entre ambos.
 * 
 * @author Guillermo Boquizo Sánchez
 */
{
	let newline = '<br/>';
	/**
     * Función que se encarga de la carga inicial.
     */
	function init() {
		createPage();
	}

	/**
     * Función que crea el layout de la página desde js.
     */
	let createPage = function() {
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
		h2.innerHTML = 'Listado collections en JS.<br/>Ejercicio 1 ';

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

	let createDefinans = function(fragment) {
		let firstParagraph = document.createElement('article');
		firstParagraph.className = 'definans';
		firstParagraph.innerHTML =
			` <h4>1. Tanto los objetos javaScript como los Maps permiten almacenar pares clave/valor.` +
			newline +
			`Indica la diferencia entre ambos.</h4>
                <p class="info">
                Object y Maps se asemejan en cuanto a que ambos permiten establecer claves a valores, recuperar dichos valores
                eliminar claves y detectar si existe algo almacenado en una clave determinada.<br><br>
                No obstante, hay diferencias importantes entre un Object y un Map:
                <ol class="info">
                    <li class="info">Las claves de un Object son de tipo String y Symbols, 
                    mientras que en un Map pueden ser de cualquier tipo (funciones, objetos y 
                    cualquier tipo primitivo inclusive).</li><br>
                    <li class="info">Las claves de Map están ordenadas mientras que no en un Object. 
                    Por eso, al iterar sobre él, un Map devuelve las claves en orden de inserción.</li><br>
                    <li class="info">Podemos obtener el tamaño de un Map usando la propiedad size del mismo, 
                    en un Object el número de propiedades debe ser determinado manualmente.</li><br>
                    <li class="info">Un Map es iterable, se puede iterar directamente sobre él, 
                    pero para iterar sobre Object necesitamos obtener primero sus claves.</li><br>
                    <li class="info">Un Object tiene prototipo, por lo que existen claves por defecto 
                    en el mapa que pueden colisionar con las propias si no se es cuidadoso.</li><br>
                    <li class="info">Un Map tiene mejor rendimiento en escenario que involucran la adición 
                    y eliminación frecuente de pares de claves.</li><br>
                </ol>
                </p>
        `;

		fragment.appendChild(firstParagraph);
	};
	//Se añade el evento para la carga de elementos DOM y de la función init.
	document.addEventListener('DOMContentLoaded', init);
}
