/**
 * Juega al buscaminas y analiza en qué consiste el juego:
 *
 *  Según el nivel que elijas, tu campo de minas tiene unas dimensiones con un número de minas concreto.
 *  Al iniciar todo el campo está cubierto.Se pueden realizar las siguientes acciones:
 *      Botón izquierdo del ratón: se levanta la casilla.
 *          Si es una mina se pierde el juego.
 *          Si no lo es te indica el número de minas que hay alrededor(1, 2...8).En caso de no haber ninguna mina alrededor, el juego despeja las casillas colindantes de forma recurrente.
 *      Botón derecho: Se marca / desmarca una mina con bandera.
 *          Si la casilla no tiene bandera, entonces se marca.
 *          Si la casilla sí tiene bandera, entonces de desmarca.
 *      Botón izquierdo y derecho: Se intenta destapar aquellas casillas de alrededor a una ya destapada -
 *          Si están marcadas las minas de alrededor de forma correcta, se despejan las casillas de alrededor.
 *          Si falta alguna mina por marcar, se indican las casillas mediante un parpadeo.
 *  Al iniciarse el juego se pone en marcha el temporizador.En caso de superarse el récord, el juego te lo indica.
 *  Al iniciarse el juego aparece un contador con las minas del campo.Conforme se marca / desmarca una mina, el contador se actualiza.
 *
 *  Aprende a jugar para implementarlo mediante JavaScript.
 *
 *  Sigue los siguientes pasos:
 *
 *  1. Utilizando closures, créate un objeto Buscaminas al que puedas invocar los siguientes métodos(el resto quedará privado):
 *      1. Buscaminas.init(): genera un campo de minas nuevo y lo muestra por consola.
 *      2. Buscaminas.mostrar(): muestra el campo de minas por consola.
 *      3. Buscaminas.picar(x, y): pica en la casilla(x, y) y muestra el campo de minas actualizado.
 *          1. En caso de picar una minas se indica que se ha perdido el juego.
 *          2. En caso de no quedar casillas por levantar se indica que se ha ganado el juego.
 *      4. Buscaminas.marcar(x, y): marca con una bandera la casilla(x, y) y muestra el campo de minas actualizado.
 *      5. Buscaminas.despejar(x, y): intenta destapar las casillas colindantes, sólo si el número de banderas se corresponden con las 
 *          que indica la casilla.Entonces muestra el campo de minas actualizado.
 *          1. En caso de estar las banderas equivocadas se indica que se ha perdido el juego.
 *  2. Después se generará el entorno gráfico.Pero eso no entra en esta entrega.
 * 
 * @author Guillermo Boquizo Sánchez.
 */

{
	let buscaminas = {
		tableroLogica: [],
		tableroCopia: [],
		tableroVisible: [],
		tableroPulsadas: [],
		tableroBanderas: [],
		filas: 8,
		columnas: 8,
		minas: 10,

		init() {
			buscaminas.generarTableros();
			buscaminas.mostrar();
			buscaminas.generarMinas();
			buscaminas.cargarNumeros();
			//buscaminas.abrirTodasParaGanar();
			buscaminas.comprobarGanador();
		},

		generarTableros() {
			for (let i = 0; i < buscaminas.filas; i++) {
				buscaminas.tableroLogica[i] = [];
				buscaminas.tableroVisible[i] = [];
				buscaminas.tableroCopia[i] = [];
				buscaminas.tableroPulsadas[i] = [];
				buscaminas.tableroBanderas[i] = [];
				for (let j = 0; j < buscaminas.columnas; j++) {
					buscaminas.tableroLogica[i][j] = 0;
					buscaminas.tableroVisible[i][j] = 'X';
					buscaminas.tableroCopia[i][j] = 0;
					buscaminas.tableroPulsadas[i][j] = 0;
					buscaminas.tableroBanderas[i][j] = 0;
				}
			}
		},

		generarMinas() {
			for (let i = 0; i < buscaminas.minas; i++) {
				let fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0) + 0);
				let columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0) + 0);

				while (buscaminas.tableroLogica[fila][columna] === '*') {
					fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0) + 0);
					columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0) + 0);
				}
				buscaminas.tableroLogica[fila][columna] = '*';
				buscaminas.tableroCopia[fila][columna] = '*';
			}
		},

		mostrar() {
			//console.clear();
			console.table(buscaminas.tableroLogica);
			console.table(buscaminas.tableroVisible);
			//console.table(buscaminas.tableroPulsadas);
			//console.table(buscaminas.tableroBanderas);
		},

		cargarNumeros() {
			for (let i = 0; i < buscaminas.filas; i++) {
				for (let j = 0; j < buscaminas.columnas; j++) {
					if (buscaminas.tableroLogica[i][j] === '*') {
						if (i == 0 && j == 0) {
							buscaminas.contarMinas(i, j, i + 1, j + 1);
						} else if (i == 0 && (j > 0 && j < buscaminas.minas - 1)) {
							buscaminas.contarMinas(i, j - 1, i + 1, j + 1);
						} else if (i == 0 && j == buscaminas.minas - 1) {
							buscaminas.contarMinas(i, j - 1, i + 1, j);
						} else if (j == buscaminas.minas - 1 && (i > 0 && i < buscaminas.minas - 1)) {
							buscaminas.contarMinas(i - 1, j - 1, i + 1, j);
						} else if (i == buscaminas.minas - 1 && j == buscaminas.minas - 1) {
							buscaminas.contarMinas(i - 1, j - 1, i, j);
						} else if (i == buscaminas.minas - 1 && (j > 0 && j < buscaminas.minas - 1)) {
							buscaminas.contarMinas(i - 1, j - 1, i, j + 1);
						} else if (i == buscaminas.minas - 1 && j == 0) {
							buscaminas.contarMinas(i - 1, j, i, j + 1);
						} else if (j == 0 && (i > 0 && i < buscaminas.minas - 1)) {
							buscaminas.contarMinas(i - 1, j, i + 1, j + 1);
						} else {
							buscaminas.contarMinas(i - 1, j - 1, i + 1, j + 1);
						}
					}
				}
			}
		},

		contarMinas(inicioFila, inicioColumna, finFila, finColumna) {
			for (let i = inicioFila; i <= finFila; i++) {
				for (let j = inicioColumna; j <= finColumna; j++) {
					if (buscaminas.tableroLogica[i][j] !== '*') {
						if (buscaminas.tableroLogica[i][j] === '0') {
							buscaminas.tableroLogica[i][j] = 0 + 1;
							buscaminas.tableroCopia[i][j] = 0 + 1;
						} else {
							buscaminas.tableroLogica[i][j] = parseInt(buscaminas.tableroLogica[i][j]) + 1;
							buscaminas.tableroCopia[i][j] = parseInt(buscaminas.tableroLogica[i][j]);
						}
					}
				}
			}
		},

		abrirCeros(x, y) {
			if (buscaminas.tableroCopia[x][y] === 0) {
				buscaminas.tableroCopia[x][y] = -1;
				if (buscaminas.tableroLogica[x][y] === 0) {
					for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, buscaminas.filas - 1); j++) {
						for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, buscaminas.columnas - 1); k++) {
							buscaminas.cargarPulsacion(j, k);
							buscaminas.abrirCeros(j, k);
						}
					}
				}
			}
		},

		cargarPulsacion(x, y) {
			buscaminas.tableroPulsadas[x][y] = '#';
		},

		picar(i, j) {
			try {
				if (buscaminas.tableroLogica[i][j] === '*') {
					throw new Error('Pulsaste una mina');
				} else if (buscaminas.tableroPulsadas[i][j] === '#') {
					throw new Error('Esta casilla ya fue pulsada');
				} else {
					buscaminas.abrirCeros(i, j);
					buscaminas.cargarPulsacion(i, j);
					buscaminas.actualizaCambios();
					console.table(buscaminas.tableroLogica);
					console.table(buscaminas.tableroVisible);
					console.table(buscaminas.tableroPulsadas);
				}
			} catch (e) {
				if (e.message === 'Pulsaste una mina') {
					console.error(e.message);
					//console.clear();
					buscaminas.init();
				} else {
					console.log(e.message);
					//console.clear();
				}
			}
		},

		actualizaCambios() {
			for (let i = 0; i < buscaminas.filas; i++) {
				for (let j = 0; j < buscaminas.columnas; j++) {
					if (buscaminas.tableroPulsadas[i][j] === '#') {
						buscaminas.tableroVisible[i][j] = buscaminas.tableroLogica[i][j];
					}
				}
			}
		},

		obtenerPulsadas() {
			let contador = 0;
			for (let i = 0; i < buscaminas.filas; i++) {
				for (let j = 0; j < buscaminas.columnas; j++) {
					if (buscaminas.tableroPulsadas[i][j] === '#') {
						contador++;
					}
				}
			}
			return contador;
		},
		obtenerParaGanar() {
			let contador = 0;
			for (let i = 0; i < buscaminas.filas; i++) {
				for (let j = 0; j < buscaminas.columnas; j++) {
					if (buscaminas.tableroLogica[i][j] !== '*') {
						contador++;
					}
				}
			}
			return contador;
		},

		comprobarGanador() {
			try {
				if (buscaminas.obtenerPulsadas() === buscaminas.obtenerParaGanar()) {
					throw new Error('¡¡¡ Enhorabuena, has ganado !!!');
				}
			} catch (e) {
				console.log(e.message);
			}
		},

		marcar(x, y) {
			try {
				if (buscaminas.tableroLogica[x][y] !== '' && buscaminas.tableroPulsadas[x][y] !== '#') {
					buscaminas.tableroBanderas[x][y] = '!';
					console.table(buscaminas.tableroBanderas);
				} else {
					throw new Error('No puedes colocar una bandera en una casilla descubierta');
				}
			} catch (e) {
				console.log(e.message);
			}
		},

		abrirTodasParaGanar() {
			for (let i = 0; i < buscaminas.filas; i++) {
				for (let j = 0; j < buscaminas.columnas; j++) {
					if (
						buscaminas.tableroLogica[i][j] !== '*' &&
						buscaminas.tableroVisible[i][j] !== '' &&
						buscaminas.tableroPulsadas[i][j] !== '#'
					)
						buscaminas.picar(i, j);
				}
			}
		}
	};

	publicar = (function() {
		return {
			init: () => buscaminas.init(),
			picar: (x, y) => buscaminas.picar(x, y),
			marcar: (x, y) => buscaminas.marcar(x, y)
		};
	})();

	function init() {
		publicar.init();
	}

	document.addEventListener('DOMContentLoaded', init);
}
