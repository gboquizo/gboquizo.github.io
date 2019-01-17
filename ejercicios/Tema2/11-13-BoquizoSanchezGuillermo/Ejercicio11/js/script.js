/**
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por 
 * pantalla la siguiente información:
 * 1.	Número de enlaces de la página.
 * 2.	Dirección a la que enlaza el penúltimo enlace.
 * 3.	Número de enlaces que enlazan a http://prueba
 * 4.	Número de enlaces del tercer párrafo.
 * @author Guillermo Boquizo Sánchez
 */
{
	let links;

	let results;

	function init() {

		links = document.getElementsByTagName('a');

		showResults();
	}

	function showResults() {

		results = document.getElementById('result');

		results.innerHTML =
			'<h2> Resultados:</h2>' +
			'<h3>Número de enlaces de la página: ' + linksNumber() + '</h3>' +
			'<h3>Dirección a la que enlaza el penúltimo enlace: ' + lastButOneLinkAddress() + '</h3>' +
			'<h3>Número de enlaces que enlazan a http://prueba : ' + linksToTestAddress() + '</h3>' +
			'<h3>Número de enlaces del tercer párrafo : ' + thirdParagraphLinks() + '</h3>';
	}

	function linksNumber() {
		return links.length;
	}

	function lastButOneLinkAddress() {
		let lastButOneLink = links[links.length - 2];
		let address = lastButOneLink.getAttribute('href');
		return address;
	}

	function thirdParagraphLinks() {
		let paragraphs = document.getElementsByTagName('p');
		let thirdParagraph = paragraphs[2];
		let linksToParagraph = thirdParagraph.getElementsByTagName('a');
		return linksToParagraph.length;
	}

	function linksToTestAddress() {
		let linksToTestAddress = [];
		for (let i = 0; i < links.length; i++) {
			if (links[i].getAttribute("href") === "http://prueba") {
				linksToTestAddress.push(links[i]);
			}
		}
		return linksToTestAddress.length;
	}

	document.addEventListener('DOMContentLoaded', init);
}