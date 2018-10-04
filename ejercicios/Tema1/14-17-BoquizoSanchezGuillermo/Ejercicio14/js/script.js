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
    let content_1, content_2, content_3, link_1, link_2, link_3;
    document.addEventListener('DOMContentLoaded', init);

	let showHide = function(textContent, links) {
		if (textContent.style.display === 'block' || textContent.style.display === '') {
			textContent.style.display = 'none';
			links.innerHTML = 'Mostrar más';
		} else {
			textContent.style.display = 'block';
			links.innerHTML = 'Ocultar';
		}
    };
    
    function init() {
        
		content_1 = document.getElementById('contenido_1');
		content_2 = document.getElementById('contenido_2');
		content_3 = document.getElementById('contenido_3');

		link_1 = document.getElementById('enlace_1');
		link_2 = document.getElementById('enlace_2');
		link_3 = document.getElementById('enlace_3');

		content_1.style.display = "block";
		content_2.style.display = "block";
		content_3.style.display = "block";

		link_1.addEventListener('click', function(ev) {
			ev.preventDefault;
			showHide(content_1, this);
		});

		link_2.addEventListener('click', function(ev) {
			ev.preventDefault;
			showHide(content_2, this);
		});

		link_3.addEventListener('click', function(ev) {
			ev.preventDefault;
			showHide(content_3, this);
		});
	}
}
