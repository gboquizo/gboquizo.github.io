/**
 * Ejemplo 5: Métodos de iteración.
 *
 * @author Guillermo Boquizo Sánchez.
 */

{
	let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	/**
	 * Inicializa y prepara ser mostrados los arrays previamente declarados.
	 */
	function arrayInit() {

		//Muestra el array con los elementos [1, 2, 3, 4, 5].
		let info = "array = [" + array + "];";
		document.getElementById('info').textContent = info;

		//Muestra la iteración sobre array con uso de array.filter().
		let info2 = "array.filter((value) => {return value > 3} = [" + array.filter((value) => {
			return value > 3;
		}) + "]" + "\;";
		document.getElementById('info2').textContent = info2;

		//Muestra la iteración sobre array con uso de array.forEach().
		let info3 = "";
		let info4 = "Valor de retorno de array.forEach(value) = " + array.forEach((value) => {
			info3 = info3 + value + "<br>";
		});
		document.getElementById('info3').innerHTML = info3;
		document.getElementById('info4').innerHTML = info4;

		//Devuelve verdadero si cada elemento en el array satisface la función de pruebas 
		//provista.
		let info5 = "array.every(value) => {return value <= 10} = " + array.every((value) => {
			return value <= 10;
		});
		document.getElementById('info5').textContent = info5;

		//Crea un nuevo array con los resultados de la invocación de una 
		//función provista sobre cada elemento en dicho array.
		let numbers = [3, 6, 9, 12, 15, 18];
		let doubles = numbers.map(function (x) {
			return x * 3;
		});

		let info6 = "Array original para la prueba de aray.map: " + "[" + numbers + "]" + "\;";
		let info7 = "Ejemplo de uso de array.map: " + "[" + doubles + "]" + "\;";
		document.getElementById('info6').textContent = info6;
		document.getElementById('info7').textContent = info7;

		//Retorna un valor booleano, true si algún elemento del array cumple con la condición implementada
		//por la función brindada, y false en caso de que ningún elemento cumpla con dicha condición.
		let info8 = "array.some(value) => {return value > 10} = " + array.some((value) => {
			return value > 10;
		});
		document.getElementById('info8').textContent = info8;

	}

	document.addEventListener('DOMContentLoaded', arrayInit);
}