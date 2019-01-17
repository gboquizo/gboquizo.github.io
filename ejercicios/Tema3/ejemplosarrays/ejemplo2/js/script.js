/**
 *Ejemplo 2: arrays indexados y arrays asociativos.
 *
 * @author Guillermo Boquizo Sánchez.
 */

{
	//Declara una lista.
	let list;

	/**
	 * Inicializa y prepara ser mostrados los arrays previamente declarados.
	 */
	function arrayInit() {
		list = document.getElementById('list');

		//Declara un botón de añadir.
		let btnAdd = document.getElementById('add');

		//Añadiendo el evento al botón.
		btnAdd.addEventListener('click', addElements);
	}

	/**
	 * Añade los elementos indicados a la lista.
	 */
	function addElements() {
		//Crea un array indexado con notación corta con lenght = 8.
		let arrayIndexado = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

		let length = arrayIndexado.length;

		console.log('El array inicial tiene una extensión de ' + length + ': ' + arrayIndexado);
		console.log('Vamos a acortar el array y a multiplicar sus valores por 3:');

		//Acortamos la longitud del array a 6
		if (length > 5) {
			length = 6;
		}
		console.log('El array final tiene una extensión de ' + length);

		for (let i = 0; i < length; i++) {
			let elementos = document.createElement('li');

			console.log((arrayIndexado[i] *= 3));
			//Se espera un array con los siguientes valores: [3, 6, 9, 12, 15, 18].

			elementos.textContent = arrayIndexado[i];

			//Añadimos elementos a la lista.
			list.appendChild(elementos);
		}
	}
	document.addEventListener('DOMContentLoaded', arrayInit);
}
