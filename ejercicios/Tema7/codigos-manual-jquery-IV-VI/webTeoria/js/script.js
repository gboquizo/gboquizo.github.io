/**
 * Entrega un sitio web donde demuestres el uso de:
 * 1.-Distintas formas de acceder al atributo checked. Compruébalo en las distintas plataformas, tanto con input como con radio buttons
 * :selected Selector
 * .prop()
 * .attr()
 * :checked Selector
 * .val()
 * 2.- De tres 'input type="checkbox"' que te deshabilite 2 al seleccionar una de ellas
 * 3.- Asociar distintos eventos mediante .on().
 * 4.- Indica los eventos estándares en el DOM
 * 5.- Los atributos pageX, pageY, currentTarget, timeStamp... ¿A qué objeto pertenecen? Demuestra su uso
 * 6.- Diferencia entre .on(), .live(). bind() y .delegate()
 * 
 * @author Guillermo Boquizo Sánchez
 */

{
	function init() {
		ejercicio1();
		ejercicio2();
		ejercicio3();
		ejercicio5();
	}

	//Distintas formas de acceder al atributo checked.
	//Compruébalo en las distintas plataformas, tanto con input como con radio buttons
	function ejercicio1() {
		$('input')
			.change(function() {
				let $input = $(this);
				$('#ejercicio1').html(`<h3>Resultados</h3>
                .selected: <b> ${$input.selected} </b><br>
                .prop("checked"): <b>${$input.prop('checked')} </b><br>
                .attr("checked"): <b> ${$input.attr('checked')} </b><br>
                .checked(): <b> ${$input.checked} </b><br>
                .val(): <b> ${$input.val()} </b>
                `);
			})
			.change();
	}

	//De tres 'input type="checkbox"' que te deshabilite 2 al seleccionar una de ellas
	function ejercicio2() {
		$('.ejercicio2').click(function() {
			if (!this.checked) $('.ejercicio2').removeAttr('disabled');
			else $('.ejercicio2').attr('disabled', true);
		});

		$('#boton').click(function() {
			$('.ejercicio2').prop('checked', false);
			$('.ejercicio2').removeAttr('disabled');
		});
	}

	//Asociar distintos eventos mediante .on().
	function ejercicio3() {
		cargarCheck();
		cargarRadio();
    }
    
	let cargarCheck = function() {
		$(':checkbox').on({
			click: function() {
				$('#mensaje1')
					.text('Hola, soy el checkbox con id: ' + $(this).prop('id'))
					.css('background-color', 'orange');
			},

			mouseleave: function() {
				$('#mensaje1').text('Encantado por tu visita, hasta otra').css('background-color', 'green');
			},

			mouseover: function(ev) {
				$('#mensaje1')
					.text('Hola, soy un checkbox y estoy en la posición: ' + 'X:' + ev.pageX + ', Y:' + ev.pageY)
					.css('background-color', 'blue');
			},

			contextmenu: function(ev) {
				ev.preventDefault();
				$('#mensaje1').html('Click derecho está deshabilitado').css('background-color', '#1cdbc4');
			}
		});
	};
	let cargarRadio = function() {
		$(':radio').on({
			click: function() {
				$('#mensaje1')
					.text('Hola, soy el radio seleccionado con value: ' + $(this).prop('value'))
					.css('background-color', 'orange');
			},

			mouseleave: function() {
				$('#mensaje1').text('Encantado por tu visita, hasta otra').css('background-color', 'green');
			},

			mouseover: function(ev) {
				$('#mensaje1')
					.text('Hola, soy un radiobutton y estoy en la posición: ' + 'X:' + ev.pageX + ', Y:' + ev.pageY)
					.css('background-color', 'blue');
			},

			contextmenu: function(ev) {
				ev.preventDefault();
				$('#mensaje1').html('Click derecho está deshabilitado').css('background-color', '#1cdbc4');
			}
		});
	};

	//Demostración de uso de pageX, pageY, currentTarget, timeStamp.
	function ejercicio5() {
		$('.ejercicio5').mouseover(function(ev) {
			$('#ejercicio5').html(`
                Estos atributos pertenecen al objeto event <br>
                Coordenada X: ${ev.pageX} <br>
                Coordenada Y: ${ev.pageY} <br>
                CurrentTarget: ${ev.currentTarget} <br>
                TimeStamp: ${ev.timeStamp}
                `);
		});
	}
	$(init);
}