/**
 * Escribir el código de una función a la que se pasa como parámetro un número entero 
 * y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
 * Mostrar por pantalla el resultado devuelto por la función. 
 * @author Guillermo Boquizo Sánchez
 */
{
	let testById = document.getElementById("testByID");

	function isPairImpair(number) {
		if (number % 2 !== 0) {
			testById.textContent = number + " es un número impar";
		} else {
			testById.textContent = number + " es un número par";
		}
	}

	window.onload = isPairImpair(21);
}