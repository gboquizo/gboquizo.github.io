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
		filas: 8,
		columnas: 8,
		minas: 10,

		/**
		 * Realiza la carga inicial de la funcionalidad del buscaminas.
		 */
		init() {
			buscaminas.seleccionarNivel();
			buscaminas.generarTableros();
			buscaminas.mostrar();
			buscaminas.generarMinas();
			buscaminas.cargarNumeros();
		},

		seleccionarNivel() {
			let nivel = "";
			do {
				nivel = prompt("Selecciona el nivel: (fácil, difícil, experto)");
			}
			while (nivel.toLowerCase() === "fácil" && nivel.toLowerCase() === "difícil" && nivel.toLowerCase() === "experto");
			switch (nivel.toLowerCase()) {
				case "fácil":
					buscaminas.filas = 8;
					buscaminas.columnas = 8;
					buscaminas.minas = 10;
					break;
				case "difícil":
					buscaminas.filas = 16;
					buscaminas.columnas = 16;
					buscaminas.minas = 40;
					break;
				case "experto":
					buscaminas.filas = 16;
					buscaminas.columnas = 30;
					buscaminas.minas = 99;
					break;
				default:
					break;
			}
		},

		/**
		 * Muestra los tableros al cargar.
		 */
		mostrar() {
			console.log('Tablero de lógica:\n');
			console.table(buscaminas.tableroLogica);
			console.log('Tablero visible:\n');
			console.table(buscaminas.tableroVisible);
		},

		/**
		 * Genera los tableros y los inicializa con valores por defecto.
		 */
		generarTableros() {
			for (let i = 0; i < buscaminas.filas; i++) {
				buscaminas.tableroLogica[i] = [];
				buscaminas.tableroVisible[i] = [];
				buscaminas.tableroCopia[i] = [];
				buscaminas.tableroPulsadas[i] = [];
				for (let j = 0; j < buscaminas.columnas; j++) {
					buscaminas.tableroLogica[i][j] = 0;
					buscaminas.tableroVisible[i][j] = 'X';
					buscaminas.tableroCopia[i][j] = 0;
					buscaminas.tableroPulsadas[i][j] = 'NP';
				}
			}
		},

		/**
		 * Genera y coloca las minas.
		 */
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

		/**
		 * Carga los números en función de las minas cercanas.
		 */
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

		/**
		 * Cuenta y coloca el número de minas.
		 * @param inicioFila - Inicio de la fila.
		 * @param inicioColumna - Inicio de la columna.
		 * @param finFila - Fin de la fila.
		 * @param finColumna - Fin de la columna.
		 */
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

		/**
		 * Pica una casilla.
		 * @param  i coordenada para la fila.
		 * @param  j coordenada para la columna.
		 */
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
					console.log('Tablero de lógica:\n');
					console.table(buscaminas.tableroLogica);
					console.log('Tablero visible:\n');
					console.table(buscaminas.tableroVisible);
					console.log('Tablero de pulsadas:\n');
					console.table(buscaminas.tableroPulsadas);
					buscaminas.comprobarGanador();
				}
			} catch (e) {
				if (e.message === 'Pulsaste una mina') {
					console.error(e.message);
					buscaminas.init();
				} else {
					console.log(e.message);
				}
			}
		},

		/**
		 * Descubre las casillas, mediante recursividad.
		 * @param  x coordenada para la fila.
		 * @param  y coordenada para la columna.
		 */
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

		/**
		 * Carga las casillas pulsadas en su correspondiente matriz.
		 * @param x coordenada para la fila.
		 * @param  y coordenada para la columna.
		 */
		cargarPulsacion(x, y) {
			buscaminas.tableroPulsadas[x][y] = '#';
		},

		/**
		 * Actualiza los cambios en el tablero visible.
		 */
		actualizaCambios() {
			for (let i = 0; i < buscaminas.filas; i++) {
				for (let j = 0; j < buscaminas.columnas; j++) {
					if (buscaminas.tableroPulsadas[i][j] === '#') {
						buscaminas.tableroVisible[i][j] = buscaminas.tableroLogica[i][j];
					}
				}
			}
		},

		/**
		 * Devuelve el número de casillas pulsadas en el tablero.
		 */
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

		/**
		 * Devuelve el número de casillas que deben quedar pendientes para ganar del tablero.
		 */
		obtenerPendientesParaGanar() {
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

		/**
		 * Comprueba si se gana de manera convencional.
		 */
		comprobarGanador() {
			try {
				if (buscaminas.obtenerPulsadas() === buscaminas.obtenerPendientesParaGanar()) {
					throw new Error('¡¡¡ Enhorabuena, has ganado !!!');
				}
			} catch (e) {
				console.log(e.message);
				buscaminas.init();
			}
		},

		/**
		 * Marca y desmarca una casilla con una bandera.
		 * 
		 * @param x coordenada para la fila.
		 * @param y coordenada para la columna.
		 */
		marcar(x, y) {
			try {
				if (buscaminas.tableroPulsadas[x][y] !== '#' && buscaminas.tableroVisible[x][y] !== '!') {
					buscaminas.tableroVisible[x][y] = '!';
					console.table(buscaminas.tableroVisible);
				} else if (buscaminas.tableroPulsadas[x][y] === '#') {
					throw new Error('No puedes colocar una bandera en una casilla descubierta');
				} else if (buscaminas.tableroPulsadas[x][y] !== '#' && buscaminas.tableroVisible[x][y] === '!') {
					buscaminas.tableroVisible[x][y] = 'X';
					console.table(buscaminas.tableroVisible);
				}
				buscaminas.comprobarGanadorConBanderas();
			} catch (e) {
				console.log(e.message);
			}
		},

		/**
		 * Comprueba si se ha ganado mediante el uso de banderas.
		 */
		comprobarGanadorConBanderas() {
			let contadorBanderas = 0;
			for (let i = 0; i < buscaminas.filas; i++) {
				for (let j = 0; j < buscaminas.columnas; j++) {
					if (buscaminas.tableroVisible[i][j] === '!' && buscaminas.tableroLogica[i][j] === '*') {
						contadorBanderas++;
					}
				}
			}
			if (contadorBanderas === buscaminas.minas) {
				throw new Error('Has ganado la partida');
			}
		}
	};

	/**
	 * Funciones públicas accesibles desde el exterior.
	 */
	realizar = (function () {
		return {
			init: () => buscaminas.init(),
			picar: (x, y) => buscaminas.picar(x, y),
			marcar: (x, y) => buscaminas.marcar(x, y)
		};
	})();

	/**
	 * Función de carga inicial.
	 */
	function init() {
		realizar.init();
	}

	document.addEventListener('DOMContentLoaded', init);
}