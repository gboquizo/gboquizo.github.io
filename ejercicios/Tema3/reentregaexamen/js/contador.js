/*
 *@Author: Guillermo Boquizo Sánchez.
 *
 */
{
	let info;
	let reset;

	function init() {
		info = document.getElementById('info');
		reset = document.getElementById('btnReset');
		funcionalidad();
		reset.addEventListener('click', resetear);
		volver();
	}

	let generaMensaje = function(contador) {
		if (contador !== null) {
			if (contador === '0') {
				info.textContent = `Bienvenido a mi humilde morada.Esta es la primera vez que entras, espero que vuelvas`;
			} else if (contador === '1') {
				info.textContent = 'Hola de nuevo.Ya estás aquí por segunda vez.¿Volveremos a vernos?';
			} else {
				info.textContent = `Ya empiezas a ser pesado.Ésta es la vez número ${parseInt(contador) +
					1} que entras. Sigue con tus cosas.`;
			}
			info.addEventListener('load', generaMensaje);
		}
	};

	let funcionalidad = function() {
		if (localStorage.getItem('contador') === null) {
			localStorage.setItem('contador', 0);
			generaMensaje(localStorage.getItem('contador'));
		} else {
			localStorage.setItem('contador', parseInt(localStorage.getItem('contador')) + 1);
			generaMensaje(localStorage.getItem('contador'));
		}
		console.log(localStorage.getItem('contador'));
	};

	let resetear = function() {
		reset = document.getElementById('btnReset');
		if (localStorage.getItem('contador') !== null) {
			localStorage.setItem('contador', 0);
			info.textContent = 'RESETEADO';
		}
	};

	let volver = function() {
		let back = document.getElementById('back');
		back.addEventListener('click', (ev) => {
			ev.preventDefault;
			history.go(-1);
		});
	};

	document.addEventListener('DOMContentLoaded', init);
}
