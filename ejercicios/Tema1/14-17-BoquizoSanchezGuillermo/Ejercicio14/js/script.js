/**
 * A partir de la página web proporcionada, completar el código JavaScript para que:
 * 1. Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 * 2. Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de
 * contenidos
 * 3. Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del
 * primer enlace
 * 4. Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista:
 * propiedad innerHTML)
 * 
 * @author Guillermo Boquizo Sánchez
 */

{
	let init = function() {
		let links = document.getElementsByTagName('a');
		for (i = 0; i < links.length; i++) {
			links[i].addEventListener('click', showHide);
		}
	};
	let showHide = function() {
		let paragraphContent = document.getElementById('contenidos_' + this.id);
		switch (paragraphContent.style.display) {
			case 'none':
				paragraphContent.style.display = 'block';
				this.textContent = 'Ocultar contenidos';
				break;
			case 'block':
				paragraphContent.style.display = 'none';
				this.textContent = 'Mostrar contenidos';
				break;
			case '':
				paragraphContent.style.display = 'none';
				this.textContent = 'Mostrar contenidos';
				break;
		}
	};
	document.addEventListener('DOMContentLoaded', init);
}
