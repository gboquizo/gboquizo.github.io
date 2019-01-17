/**
 * Ejemplo 4: Métodos de consulta.
 *
 * @author Guillermo Boquizo Sánchez.
 */

{
	let array = [1, 2, 3, 4, 5];
	let array2 = [6, 7, 8, 9, 10];

	/**
	 * Inicializa y prepara ser mostrados los arrays previamente declarados.
	 */
	function arrayInit() {

		//Muestra el array con los elementos [1, 2, 3, 4, 5].
		let info = "array = [" + array + "];";
		document.getElementById('info').textContent = info;

		//Muestra el array con los elementos [6, 7, 8, 9, 10].
		let info2 = "array2 = [" + array2 + "];";
		document.getElementById('info2').textContent = info2;

		//Muestra la concatenación de ambos arrays.
		let info3 = "array.concat(array2) = [" + array.concat(array2) + "];";
		document.getElementById('info3').textContent = info3;

		//Determina si un array contiene cierto elemento, devolviendo true o false apropiadamente.
		let info4 = "El resultado para la consulta sobre el valor 2, presente en array, es " + array.includes(2);
		document.getElementById('info4').textContent = info4;

		let info5 = "El resultado para la consulta sobre el valor 6, no presente en array, es " + array.includes(6);
		document.getElementById('info5').textContent = info5;

		// Devuelve el primer (menor) índice de un elemento 
		//dentro del array que sea igual al valor especificado, o -1 si no contiene dicho valor.
		let info6 = "Aplicando array.indexOf() al elemento 3: " + array.indexOf(3);
		document.getElementById('info6').textContent = info6;

		let info7 = "Aplicando array.indexOf() a 6, no incluido: " + array.indexOf(6);
		document.getElementById('info7').textContent = info7;

		//Une todos los elementos de un array en una cadena de texto.
		//Si se añade una cadena por parámetro, se emplea como separador.
		let info8 = "Consulta con array.join(): " + array.join(', ');
		document.getElementById('info8').textContent = info8;

		//Devuelve el último (mayor) índice de un elemento 
		//dentro del array que sea igual al valor especificado, o -1 si no contiene dicho valor.
		let info9 = "Aplicando array.lastIndexOf() al elemento 5: " + array.lastIndexOf(5);
		document.getElementById('info9').textContent = info9;

		let info10 = "Aplicando array.lastIndexOf() a 6, no incluido: " + array.lastIndexOf(6);
		document.getElementById('info10').textContent = info10;

		//Extrae una sección de un array y devuelve un nuevo array.
		let info11 = "Aplicando array.slice(): " + "[" + array.slice(0, 2) + "]";
		document.getElementById('info11').textContent = info11;
		document.getElementById('info12').textContent = "Array tras array.slice(): " + "[" + array + "]";

		//Devuelve una cadena representando el array y sus elementos.
		let info13 = "Aplicando array.toString: " + "\"" + array.toString() + "\"";
		document.getElementById('info13').textContent = info13;

	}

	document.addEventListener('DOMContentLoaded', arrayInit);
}