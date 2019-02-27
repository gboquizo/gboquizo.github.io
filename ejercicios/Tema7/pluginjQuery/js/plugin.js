(function ($) {
	$.fn.validar = function (cssStyles, patterns, ajaxInfo) {

		// Patrones por defecto.
		let defaultPatterns = {
			nombre: [/([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,}\s?){1,3}/],
			apellidos: [/([a-zA-ZÁÉÍÓÚñáéíóúÑ]{1,}\s?){1,3}/],
			correo: [
				/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
			],
			textarea: [/(\w\s?.?\s?){10,}/]
		};

		//Estilos por defecto
		let defaultCss = {
			color: '#ff0000',
			background: '#ffDEDE',
			border: '2px solid #ffD3D7'
		}

		// Configuración por defecto.
		let extendPattern = $.extend(defaultPatterns, patterns);
		let extendCss = $.extend(defaultCss, cssStyles);

		let defaultCssInput = {};

		let getObjectCss = function (element) {
			let dom = element.get(0);
			let style;
			let returns = {};

			if (window.getComputedStyle) {
				let camelize = function (a, b) {
					return b.toUpperCase();
				};
				style = window.getComputedStyle(dom, null);
				for (let i = 0, l = style.length; i < l; i++) {
					let prop = style[i];
					let camel = prop.replace(/\-([a-z])/g, camelize);
					let val = style.getPropertyValue(prop);
					returns[camel] = val;
				};
				return returns;
			};
			if (style = dom.currentStyle) {
				for (let prop in style) {
					returns[prop] = style[prop];
				};
				return returns;
			};
			return element.css();
		};

		// guarda u obtiene los estilos de un elemento en el DOM
		let saveOrSetStyles = function (action, element) {
			switch (element.prop("tagName").toUpperCase()) {
				case "INPUT":
					if (action.toLocaleLowerCase() === "save") {
						defaultCssInput = getObjectCss(element)
					} else {
						element.css(defaultCssInput);
					}
					break;
			}
		};

		let toastrOption = function () {
			if (toastr) {
				toastr.options.preventDuplicates = true;
				toastr.options.progressBar = true;
				toastr.options.showEasing = 'swing';
				toastr.options.hideEasing = 'swing';
				toastr.options.closeEasing = 'swing';
				toastr.options.showMethod = 'fadeIn';
				toastr.options.hideMethod = 'slideUp';
				toastr.options.closeMethod = 'fadeOut';
				toastr.options.newestOnTop = false;
				toastr.options.timeOut = 1800;
				toastr.options.extendedTimeOut = 3000;
			}
		}

		// guarda los estilos por defecto de los elementos del formulario
		let saveDefaultStyles = function (inputs) {
			inputs.each(function (index, element) {
				saveOrSetStyles("save", $(element))
			});
		};

		// Valida los inputs que no son submit, si se dan.
		let $fields = $("input[type='text']", $(this));
		toastrOption();

		saveDefaultStyles($fields)

		let $fieldsErrors = [];

		if ($fields.length > 0) {
			// Al hacer submit
			$(this).submit(function (ev) {
				ev.preventDefault();
				$fieldsErrors = [];
				$fields.trigger('blur');

				// Si no hay errores se realiza la petición AJAX.
				if ($fieldsErrors.length === 0) {
					if (ajaxInfo.url === undefined || ajaxInfo.url === "") {
						if (toastr) {
							toastr.error("Url enviada no válida", "Error en el envío")
						}
						return;
						//throw new Error("Url inválida");
					}

					if (ajaxInfo.element === undefined || ajaxInfo.element === "") {
						if (toastr) {
							toastr.error("Elemento seleccionado para mostrar la información no válido", "Error en el envío")
						}
						return;
						//throw new Error("Elemento inválido");
					}

					fetch(ajaxInfo.url)
						.then(function (response) {
							saveDefaultStyles($fields);
							return response.text();
						})
						.then(function (text) {
							ajaxInfo.element.val(text);
							saveDefaultStyles($fields);
						});

				} else {
					$fieldsErrors[0].focus();

				}
			});

			// Al hacer blur.
			$fields.blur(function () {

				let $input = $(this);

				if ($input.attr("tipo") === undefined) {
					return;
				}

				let indexRegex = $input.attr('tipo');

				if (!patterns[indexRegex][0].test($input.val())) {
					$(this).css(extendCss);
					if (toastr) {
						toastr.info(extendPattern[indexRegex][1], 'Formato ' + indexRegex + ' no válido .');
					}
					$('textarea').val('');
					$fieldsErrors.push($input);
				} else {
					saveOrSetStyles("set", $(this));
				}
			}).focus(function () {
				saveOrSetStyles("set", $(this));
			});
		}
		return this;
	};
})(jQuery);