/**
 * Muestra en una lista la siguiente información.
 * Cada una de las etiquetas < ol > y < li > han de crearse mediante los métodos de document.
 * Explica en cada uno la diferencia con respecto a los demás.
 * @author Guillermo Boquizo Sánchez
 */
{
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
		//Crea el header y se le asigna una clase.
		let header = document.createElement('header');
		header.className = 'header';

		//Crea el título y se le asigna un texto.
		let h1 = document.createElement('h1');
		h1.textContent = 'Desarrollo Web en Entorno Cliente';

		//Crea el subtítulo y se le asigna un texto.
		let h2 = document.createElement('h2');
		h2.textContent = 'Ejercicio 1 ';

		//Crea la sección main y se le asigna una clase.
		let main = document.createElement('main');
		main.className = 'main';

		//Crea un contenedor para la calculadora y se le asigna una clase.
		let container = document.createElement('container');
		container.className = 'container';

		//Crea un contenedor para el ul y se le asigna una clase
		let ul = document.createElement('ul');
		ul.className = 'ul';

		//Guarda las propiedades que se van a mostrar.
		let propiedades = [{
				propiedad: window.outerHeight,
				sintaxis: 'window.outerHeight',
				definición: 'Obtiene la altura en pixeles de toda la ventana del navegador.<br />' +
					'Representa el alto de toda la ventana, incluyendo la barra de notificaciones (si se encuentra) y los bordes'
			},
			{
				propiedad: window.innerHeight,
				sintaxis: 'window.innerHeight',
				definición: 'Altura (en píxeles) de la ventana de visualización del navegador que incluye,</br> si está renderizada, ' +
					'la barra de desplazamiento horizontal'
			},
			{
				propiedad: window.screen.availHeight,
				sintaxis: 'window.screen.availHeight',
				definición: 'Devuelve el espacio total vertical disponible en la pantalla'
			},
			{
				propiedad: window.screen.height,
				sintaxis: 'window.screen.height',
				definición: 'Devuelve la altura en pixeles de la pantalla'
			},
			{
				propiedad: '0',
				sintaxis: 'window.document.clientHeight',
				definición: 'Devuelve el alto del área visible de un objeto, en píxeles.<br />' +
					'El valor contiene la altura con el padding, pero no incluye las barras, el borde ni el margin.<br />' +
					'La opción se encuentra obsoleta en la actualidad y se desaconseja su uso'
			}
		];

		//Fragment que contendrá las propiedades
		let fragmento = document.createDocumentFragment();

		//Crea los li del fragment.
		for (let i = 0; i < propiedades.length; i++) {
			let li = document.createElement('li');
			li.innerHTML =
				'<br />' +
				'<b>' +
				propiedades[i].sintaxis +
				'</b>: ' +
				'<span class="resultado">' +
				propiedades[i].propiedad +
				'px. </span>' +
				'<br />' +
				propiedades[i].definición +
				'.';
			fragmento.appendChild(li);
		}

		//Se añade el fragment a la lista.
		ul.appendChild(fragmento);

		//Se añade el contenedor del botón al container principal.
		container.appendChild(ul);

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
	//Se añade el evento para la carga de elementos DOM y de la función init.
	document.addEventListener('DOMContentLoaded', init);
}