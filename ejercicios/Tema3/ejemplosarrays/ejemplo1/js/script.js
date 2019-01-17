/**
 *Ejemplo 1: arrays indexados y arrays asociativos.
 *
 * @author Guillermo Boquizo Sánchez
 */

{
	//Declara una lista.
	let list;

	//Declara un botón de añadir.
	let btnAdd;

	//Crea un array indexado con notación corta.
	let arrayIndexado = [ 1, 2 ];

	//Crea un array asociativo mediante el constructor del objeto Array y la palabra reservada new.
	let arrayAsociativo = new Array();

	//Crea un array con un mensaje, con índices no consecutivos.
	let msgArray = [];

	/**
	 * Inicializa y prepara ser mostrados los arrays previamente declarados.
	 */
	function arrayInit() {
		arrayIndexado[0];
		arrayIndexado[1];

		arrayAsociativo['Primer elemento'] = 'Primer elemento del asociativo';
		arrayAsociativo['Segundo elemento'] = 'Segundo elemento del asociativo';

		msgArray[0] = 'Hola';
		msgArray[2] = 'Mundo';

		console.log(arrayIndexado[0]);
		console.log(arrayIndexado[1]);

		console.log(arrayAsociativo['Primer elemento']);
		console.log(arrayAsociativo['Segundo elemento']);

		console.log(msgArray[0]);
		console.log(msgArray[2]);

		list = document.getElementById('list');

		btnAdd = document.getElementById('add');

		btnAdd.addEventListener('click', addElements);
	}
	/**
	 * Añade los elementos indicados a la lista.
	 */
	function addElements() {
		let element0 = document.createElement('li');
		let element1 = document.createElement('li');
		let element2 = document.createElement('li');
		let element3 = document.createElement('li');
		let element4 = document.createElement('li');

		element0.textContent = arrayIndexado[0];
		list.appendChild(element0);
		element1.textContent = arrayIndexado[1];
		list.appendChild(element1);
		element2.textContent = arrayAsociativo['Primer elemento'];
		list.appendChild(element2);
		element3.textContent = arrayAsociativo['Segundo elemento'];
		list.appendChild(element3);
		element4.innerHTML = msgArray[0] + ' ' + msgArray[2];
		list.appendChild(element4);
	}

	document.addEventListener('DOMContentLoaded', arrayInit);
}
