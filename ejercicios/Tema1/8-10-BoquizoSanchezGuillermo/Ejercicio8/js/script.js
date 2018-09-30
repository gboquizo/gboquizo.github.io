/**
Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función. 
Autor: Guillermo Boquizo Sánchez
*/
{
	let testById = document.getElementById("testByID");

	function init() {
		let isPairImpair = function(number) {
			if (number % 2 !== 0) {
				testById.textContent = "Es un número impar";
			} else {
				testestById.textContent = "Es un número par";
			}
		}
		isPairImpair(21);
    }
    window.onload = init;
}