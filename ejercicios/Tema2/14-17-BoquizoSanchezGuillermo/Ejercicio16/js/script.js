/**
 * Crear un script que informe al usuario en que zona de la pantalla ha pulsado el ratón. 
 * Las zonas definidas son las siguientes: izquierda arriba, izquierda abajo, derecha arriba y derecha abajo. 
 * Para determinar el tamaño de la ventana del navegador, utilizar la función tamanoVentanaNavegador() proporcionada.
 * 
 * @author Guillermo Boquizo Sánchez
 */

{
	let width;
	let heigth;
	let generateMessages;
	let upperLeft;
	let upperRight;
	let lowerLeft;
	let lowerRight;

	function init() {
		width = window.innerWidth;
		heigth = window.innerHeight;
		upperLeft = document.getElementById('upperLeft');
		upperRight = document.getElementById('upperRight');
		lowerLeft = document.getElementById('lowerLeft');
		lowerRight = document.getElementById('lowerRight');
		document.addEventListener('click', generateMessages);
	}

	generateMessages = function (ev) {
		let xPosition = ev.clientX;
		let yPosition = ev.clientY;

		if (xPosition < width / 2 && yPosition <= heigth / 2) {
			upperRight.className = '';
			lowerLeft.className = '';
			lowerRight.className = '';
			upperLeft.className = 'mouseClick';
		} else if (xPosition > width / 2 && yPosition <= heigth / 2) {
			upperLeft.className = '';
			lowerLeft.className = '';
			lowerRight.className = '';
			upperRight.className = 'mouseClick';
		} else if (xPosition < width / 2 && yPosition > heigth / 2) {
			upperLeft.className = '';
			upperRight.className = '';
			lowerRight.className = '';
			lowerLeft.className = 'mouseClick';
		} else if (xPosition > width / 2 && yPosition > heigth / 2) {
			upperLeft.className = '';
			upperRight.className = '';
			lowerLeft.className = '';
			lowerRight.className = 'mouseClick';
		}
	};
	document.addEventListener('DOMContentLoaded', init);
}