{
	let tabla;
	let botones;
	let imagen;

	function init() {
		tabla = document.getElementById('tabla');
		botones = document.getElementsByTagName('input');
		imagen = document.getElementById('imagenes');
		raza = document.getElementById('raza');
		peso = document.getElementById('peso');
		jugar = document.getElementById('jugar').addEventListener('click', function() {
			document.gato.jugar();
			actualizarDatos();
		});
		dormir = document.getElementById('dormir').addEventListener('click', function() {
			document.gato.dormir();
			actualizarDatos();
		});
		comer = document.getElementById('comer').addEventListener('click', function() {
			document.gato.comer();
			actualizarDatos();
		});
		tabla.innerHTML += generarTabla();
	}
	let generarTabla = function() {
		return (
			'<table>' +
			'<tr><td><p>Nombre: </p></td><td><p>' +
			document.gato.nombre +
			'</p></td></tr>' +
			'<tr><td><p>Raza: </p></td><td><p>' +
			document.gato.raza +
			'</p></td></tr>' +
			'<tr><td><p>Edad: </p></td><td><p>' +
			document.gato.edad +
			'</p></td></tr>' +
			'<tr><td><p>Peso: </p></td><td><p id="p">' +
			obtenerPeso(document.gato.raza) +
			' Kg</p></td></tr>' +
			'<tr><td><p>Estado: </p></td><td><p id="estado">' +
			document.gato.estado +
			'</p></td></tr>' +
			'</table>'
		);
	};

	let getImagen = function(estado) {
		let imagen = '';

		if (estado === 'Jugando') {
			imagen = '/ejercicios/Tema4/lindogatito/images/jugando.jpg';
		} else if (estado === 'Durmiendo') {
			imagen = '/ejercicios/Tema4/lindogatito/images/durmiendo.jpg';
		} else if (estado === 'Comiendo') {
			imagen = '/ejercicios/Tema4/lindogatito/images/comiendo.jpg';
		} else {
			imagen = '/ejercicios/Tema4/lindogatito/images/muerto.jpg';
		}

		return imagen;
	};

	let obtenerPeso = function(raza) {
		let peso = 0;
		if (raza === 'Savannah') {
			peso = 4;
		} else if (raza === 'Maine Coon') {
			peso = 6;
		} else if (raza === 'Azul Ruso') {
			peso = 7;
		} else if (raza === 'Ragdoll') {
			peso = 5;
		} else if (raza === 'Abisinio') {
			peso = 4;
		} else {
			peso = 3;
		}

		return peso;
	};

	let actualizarDatos = function() {
		let peso = document.getElementById('p');
		let estado = document.getElementById('estado');
		let aviso = document.getElementById('aviso');
		peso.innerHTML = document.gato.peso + ' Kg';
		estado.innerHTML = document.gato.estado;

		if (document.gato.peso === 2 || document.gato.peso === 15) {
			aviso.innerHTML = '¡Cuidado! ¡El gatito va a morir pronto!';
		}
		aviso.innerHTML = '';
		if (document.gato.estado == 'Muerto') {
			botones[0].setAttribute('disabled', '');
			botones[1].setAttribute('disabled', '');
			botones[2].setAttribute('disabled', '');
			aviso.innerHTML = 'Tu gatito ha muerto :-(';
		}
		imagen.src = getImagen(document.gato.estado);
	};
	document.addEventListener('DOMContentLoaded', init);
}
