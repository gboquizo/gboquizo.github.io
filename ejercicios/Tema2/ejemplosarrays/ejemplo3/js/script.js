/**
 *Ejemplo 3: Métodos de transformación.
 *
 * @author Guillermo Boquizo Sánchez.
 */

{
	let array = [1, 2, 3, 4, 5];
	/**
	 * Inicializa y prepara ser mostrados los arrays previamente declarados.
	 */
	function arrayInit() {

		//Muestra el array con los elementos [1, 2, 3, 4, 5].
		let info = array;
		document.getElementById('info').textContent = info;


		//Coloca en la posición 0 el elemento entre la posición 3 y 4, se espera un array [4, 2, 3, 4, 5].
		let info2 = array.copyWithin(0, 3, 4);
		document.getElementById('info2').textContent = info2;


		//Coloca en la posición 1 el elemento posterior a la posición 3, se espera un array [4, 4, 5, 4, 5].
		let info3 = array.copyWithin(1, 3);
		document.getElementById('info3').textContent = info3;

		//Rellena el array completo con el número 99, pasado por parámetro.
		let info4 = array.fill(99);
		document.getElementById('info4').textContent = info4;

		//Elimina el último elemento de un array y lo devuelve.
		let info5 = array.pop();
		document.getElementById('info5').textContent = info5;

		//Añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
		let info6 = "Nueva longitud del array: " + array.push(6,7);
		document.getElementById('info6').textContent = info6;
		document.getElementById('info7').textContent = array;

		//Invierte el orden de los elementos de un array
		//el primero será el último y el último será el primero.
		document.getElementById('info8').textContent = array;
		let info9 = "Array invertido: " + array.reverse();
		document.getElementById('info9').textContent = info9;

		//Elimina el primer elemento de un array y devuelve dicho elemento.
		document.getElementById('info10').textContent = array;
		let info11 = "Primer elemento del array eliminado con shift(): " + array.shift();
		document.getElementById('info11').textContent = info11;
		document.getElementById('info12').textContent = array;

		//Ordena los elementos de un array y devuelve el array.
		document.getElementById('info13').textContent = array.reverse();
		let info14 = "Array ordenado con sort: " + array.sort();
		document.getElementById('info14').textContent = info14;
		document.getElementById('info15').textContent = array;

		//Añade o elimina elementos de un array.
		document.getElementById('info16').textContent = array;
		let info17 = "Array mutado con splice(): " + array.splice(0,1);
		document.getElementById('info17').textContent = info17;
		document.getElementById('info18').textContent = array;

		//Añade uno o más elementos al principio del array y devuelve la nueva longitud del array.
		let info19 = "Nueva longitud del array tras unshift(): " + array.unshift(6);
		document.getElementById('info19').textContent = info19;
		document.getElementById('info20').textContent = array;

	}

	document.addEventListener('DOMContentLoaded', arrayInit);
}