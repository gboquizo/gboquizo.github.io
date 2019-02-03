(function ($) {
	$.fn.validar = function (options, customClass, infAjax) {

		// Patrones por defecto.
		let defaultPatterns = {
			nombre: [/([a-zA-Z]{1,}\s?){1,3}/, 'Mínimo un nombre.'],
			apellidos: [/([a-zA-Z]{1,}\s?){1,3}/, 'Mínimo un apellido.'],
			correo: [
				/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
				'Formato correo no válido.'
			],
			textarea: [/(\w\s?.?\s?){10,}/, 'Mínimo 10 caractéres.']
		};

		// Configuración por defecto.
		let config = $.extend({
				css: {
					color: '#ff0000',
					backgroundcolor: '#ffDEDE',
					border: '2px solid #ffD3D7'
				},

				objPatterns: defaultPatterns
			},
			options
		);

		let ajax = function (data) {
			return new Promise(function (resolve, reject) {
				$.ajax({
						type: infAjax.type,
						url: infAjax.url,
						data: data
					})
					.done(resolve)
					.fail(reject);
			});
		};

		// Valida los inputs que no son submit, si se dan.
		let $fields = $(":input:not([type='submit'])", $(this));
		let $errorInputsMap = new Map();

		if ($fields.length > 0) {

			// Al hacer submit
			$(this).submit(function (ev) {
				ev.preventDefault();
				$fields.trigger('blur');

				// Si no hay errores se realiza la petición AJAX.
				if ($errorInputsMap.size === 0) {
					let data = $(this).serializeArray();
					ajax(data).then(
						function resolve(d) {
							infAjax.element.html(d);
						},
						function reject(d) {
							console.error(d);
						}
					);
				}
			});

			// Al hacer blur.
			$fields.blur(function () {
				let $input = $(this);
				let indexRegex = $(this).attr('tipo');
				if (!config.objPatterns[indexRegex][0].test($(this).val())) {
					$(this).css({
						color: config.css.color,
						background: config.css.backgroundcolor,
						border: config.css.border
					});
					if (toastr) {
						toastr.info(config.objPatterns[indexRegex][1], 'Formato ' + indexRegex + ' no válido .');
					}

					$errorInputsMap.set(indexRegex, $input);
				} else {
					$(this).css({
						color: '',
						background: '',
						border: '0px'
					});
					$(this).addClass(customClass);
					$errorInputsMap.delete(indexRegex);
				}
			});

			// Al hacer foco.
			$fields.focus(function () {
				$(this).css({
					color: '',
					background: '',
					border: '0px'
				});
				$(this).addClass(customClass);
			});
		}
	};
})(jQuery);