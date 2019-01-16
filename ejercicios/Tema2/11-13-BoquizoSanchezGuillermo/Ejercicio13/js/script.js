/**
 * Completar el código JavaScript proporcionado para que se añadan nuevos elementos 
 * a la lista cada vez que se pulsa sobre el botón.
 * @author Guillermo Boquizo Sánchez
 */
{
	let list;
	let btnAdd;

	function addElement() {
		let element = document.createElement('li');

		element.textContent = 'Nuevo elemento cargado por JS';

		list.appendChild(element);
	}

	function init() {
		list = document.getElementById('list');

		btnAdd = document.getElementById('add');

		btnAdd.addEventListener('click', addElement);
	}

	document.addEventListener('DOMContentLoaded', init);
}