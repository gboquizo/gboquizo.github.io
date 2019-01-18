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
    /**
     * Objeto buscaminas con la funcionalidad por consola.
     */
    let buscaminas = {
        tableroLogica: [],
        tableroCopia: [],
        tableroVisible: [],
        tableroPulsadas: [],
        filas: 0,
        columnas: 0,
        minas: 0,
        banderas: 0,

        /**
         * Realiza la carga inicial de la funcionalidad del buscaminas.
         */
        init() {
            buscaminas.seleccionarNivel();
            buscaminas.instrucciones();
            buscaminas.generarTableros();
            buscaminas.generarMinas();
            buscaminas.cargarNumeros();
            buscaminas.mostrar();
        },

        /**
         * Permite seleccionar el nivel de juego.
         */
        seleccionarNivel() {
            let nivel = '';
            do {
                nivel = prompt('Selecciona el nivel: (fácil, difícil, experto)');
            } while (
                nivel.toLowerCase() === 'fácil' &&
                nivel.toLowerCase() === 'difícil' &&
                nivel.toLowerCase() === 'experto'
            );
            switch (nivel.toLowerCase()) {
                case 'fácil':
                    buscaminas.filas = 8;
                    buscaminas.columnas = 8;
                    buscaminas.minas = 10;
                    buscaminas.banderas = 10;
                    break;
                case 'difícil':
                    buscaminas.filas = 16;
                    buscaminas.columnas = 16;
                    buscaminas.minas = 40;
                    buscaminas.banderas = 40;
                    break;
                case 'experto':
                    buscaminas.filas = 16;
                    buscaminas.columnas = 20;
                    buscaminas.minas = 99;
                    buscaminas.banderas = 99;
                    break;
                default:
                    break;
            }
        },

        /**
         * Muestra las instrucciones de juego del buscaminas. 
         */
        instrucciones() {
            let newline = '\n';
            console.log(
                'Bienvenido al buscaminas.' +
                newline +
                'Para jugar debes hacer uso de jugar.método():' +
                newline +
                'Para picar usa realizar.picar(x,y) donde x e y son las coordenadas de la casilla,' +
                newline +
                'Para poner una bandera usa jugar.marcar(x,y).' +
                newline +
                'Para despejar una casilla usa jugar.despejar(x,y),' +
                'lo que despejará una casilla con banderas en sus proximidades.'
            );
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
                    buscaminas.tableroVisible[i][j] = '■';
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

                while (buscaminas.tableroLogica[fila][columna] === '💣') {
                    fila = Math.floor(Math.random() * (buscaminas.filas - 1 - 0) + 0);
                    columna = Math.floor(Math.random() * (buscaminas.columnas - 1 - 0) + 0);
                }
                buscaminas.tableroLogica[fila][columna] = '💣';
                buscaminas.tableroCopia[fila][columna] = '💣';
            }
        },

        /**
         * Carga los números en función de las minas cercanas.
         */
        cargarNumeros() {
            for (let i = 0; i < buscaminas.filas; i++) {
                for (let j = 0; j < buscaminas.columnas; j++) {
                    if (buscaminas.tableroLogica[i][j] === '💣') {
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
                    if (buscaminas.tableroLogica[i][j] !== '💣') {
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
                if (buscaminas.tableroLogica[i][j] === '💣') {
                    throw new Error('Pulsaste una mina');
                } else if (buscaminas.tableroPulsadas[i][j] === '🞫') {
                    throw new Error('Esta casilla ya fue pulsada');
                } else {
                    buscaminas.abrirCeros(i, j);
                    buscaminas.cargarPulsacion(i, j);
                    buscaminas.actualizaCambios();
                    console.clear();
                    console.log('Tablero de lógica:\n');
                    console.table(buscaminas.tableroLogica);
                    console.log('Tablero visible:\n');
                    console.table(buscaminas.tableroVisible);
                    console.log('Tablero pulsadas:\n');
                    console.table(buscaminas.tableroPulsadas);
                    buscaminas.comprobarGanador();
                }
            } catch (e) {
                if (e.message === 'Pulsaste una mina') {
                    buscaminas.deseaContinuar(e.message);
                } else {
                    console.log(e.message);
                }
            }
        },

        /**
         * Descubre las casillas, mediante recursividad.
         * @param x coordenada para la fila.
         * @param y coordenada para la columna.
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
            buscaminas.tableroPulsadas[x][y] = '🞫';
        },

        /**
         * Actualiza los cambios en el tablero visible.
         */
        actualizaCambios() {
            for (let i = 0; i < buscaminas.filas; i++) {
                for (let j = 0; j < buscaminas.columnas; j++) {
                    if (buscaminas.tableroPulsadas[i][j] === '🞫') {
                        buscaminas.tableroVisible[i][j] = buscaminas.tableroLogica[i][j];
                    }
                }
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
                if (buscaminas.tableroPulsadas[x][y] !== '🞫' && buscaminas.tableroVisible[x][y] !== '🏴') {
                    if (buscaminas.obtenerBanderasDelTablero() < buscaminas.minas) {
                        buscaminas.tableroVisible[x][y] = "🏴";
                        buscaminas.banderas = buscaminas.banderas - buscaminas.obtenerBanderasDelTablero();
                        console.clear();
                        console.log('Tablero de lógica:\n');
                        console.table(buscaminas.tableroLogica);
                        console.log('Tablero visible:\n');
                        console.table(buscaminas.tableroVisible);
                        console.log('Tablero pulsadas:\n');
                        console.table(buscaminas.tableroPulsadas);
                    } else {
                        throw new Error("No puedes colocar más banderas que minas");
                    }
                } else if (buscaminas.tableroPulsadas[x][y] === '🞫') {
                    throw new Error('No puedes colocar una bandera en una casilla descubierta');
                } else if (buscaminas.tableroPulsadas[x][y] !== '🞫' && buscaminas.tableroVisible[x][y] === '🏴') {
                    buscaminas.tableroVisible[x][y] = '■';
                    buscaminas.banderas++;
                    console.clear();
                    console.log('Tablero de lógica:\n');
                    console.table(buscaminas.tableroLogica);
                    console.log('Tablero visible:\n');
                    console.table(buscaminas.tableroVisible);
                    console.log('Tablero pulsadas:\n');
                    console.table(buscaminas.tableroPulsadas);
                }
                buscaminas.comprobarGanadorConBanderas();
            } catch (e) {
                console.log(e.message);
            }
        },

        /**
         * Intenta destapar las casillas colindantes, sólo si el número de banderas
         * se corresponden con las que indica la casilla. Entonces muestra el campo
         * de minas actualizado.
         * En caso de estar las banderas equivocadas se indica que se ha perdido el
         * juego.
         * @param x coordenada para la fila.
         * @param y coordenada para la columna.
         */
        despejar(x, y) {
            if (x > buscaminas.filas || y > buscaminas.columnas) {
                throw new Error('Coordenadas inválidas.');
            }

            if (buscaminas.obtenerBanderasAlrededor(x, y) === buscaminas.tableroLogica[x][y]) {
                if (x > 0 && y > 0) {
                    if (
                        buscaminas.tableroVisible[x - 1][y - 1] !== '🏴' &&
                        buscaminas.tableroPulsadas[x - 1][y - 1] !== '🞫'
                    ) {
                        buscaminas.picar(x - 1, y - 1);
                    }
                }

                if (y > 0) {
                    if (buscaminas.tableroVisible[x][y - 1] !== '🏴' && buscaminas.tableroPulsadas[x][y - 1] !== '🞫') {
                        buscaminas.picar(x, y - 1);
                    }
                }

                if (y > 0 && x < buscaminas.filas - 1) {
                    if (
                        buscaminas.tableroVisible[x + 1][y - 1] !== '🏴' &&
                        buscaminas.tableroPulsadas[x + 1][y - 1] !== '🞫'
                    ) {
                        buscaminas.picar(x + 1, y - 1);
                    }
                }

                if (x > 0) {
                    if (buscaminas.tableroVisible[x - 1][y] !== '🏴' && buscaminas.tableroPulsadas[x - 1][y] !== '🞫') {
                        buscaminas.picar(x - 1, y);
                    }
                }

                if (x < buscaminas.filas - 1) {
                    if (buscaminas.tableroVisible[x + 1][y] !== '🏴' && buscaminas.tableroPulsadas[x + 1][y] !== '🞫') {
                        buscaminas.picar(x + 1, y);
                    }
                }

                if (y < buscaminas.columnas - 1) {
                    if (buscaminas.tableroVisible[x][y + 1] !== '🏴' && buscaminas.tableroPulsadas[x][y + 1] !== '🞫') {
                        buscaminas.picar(x, y + 1);
                    }
                }

                if (x < buscaminas.filas - 1 && y < buscaminas.columnas - 1) {
                    if (
                        buscaminas.tableroVisible[x + 1][y + 1] !== '🏴' &&
                        buscaminas.tableroPulsadas[x + 1][y + 1] !== '🞫'
                    ) {
                        buscaminas.picar(x + 1, y + 1);
                    }
                }

                if (x > 0 && y < buscaminas.columnas - 1) {
                    if (
                        buscaminas.tableroVisible[x - 1][y + 1] !== '🏴' &&
                        buscaminas.tableroPulsadas[x - 1][y + 1] !== '🞫'
                    ) {
                        buscaminas.picar(x - 1, y + 1);
                    }
                }
            }
        },

        /**
         * Obtiene el numero de banderas de las casillas de alrededor de la casilla pasada por parámetro
         * @param x coordenada de la fila
         * @param y coordenada de la columna
         */
        obtenerBanderasAlrededor(x, y) {
            let banderas = 0;
            if (buscaminas.tableroPulsadas[x][y] === "🞫") {
                if (x > 0 && y > 0) {
                    if (buscaminas.tableroVisible[x - 1][y - 1] === "🏴") {
                        banderas++;
                    }
                }

                if (y > 0) {
                    if (buscaminas.tableroVisible[x][y - 1] === "🏴") {
                        banderas++;
                    }
                }

                if (y > 0 && x < buscaminas.filas - 1) {
                    if (buscaminas.tableroVisible[x + 1][y + 1] === "🏴") {
                        banderas++;
                    }
                }

                if (x > 0) {
                    if (buscaminas.tableroVisible[x - 1][y] === "🏴") {
                        banderas++;
                    }
                }

                if (x < buscaminas.filas - 1) {
                    if (buscaminas.tableroVisible[x + 1][y] === "🏴") {
                        banderas++;
                    }
                }

                if (y < buscaminas.columnas - 1) {
                    if (buscaminas.tableroVisible[x][y + 1] === "🏴") {
                        banderas++;
                    }
                }

                if (x < buscaminas.filas - 1 && y < buscaminas.columnas - 1) {
                    if (buscaminas.tableroVisible[x + 1][y + 1] === "🏴") {
                        banderas++;
                    }
                }

                if (x > 0 && buscaminas.columnas - 1) {
                    if (buscaminas.tableroVisible[x - 1][y + 1] === "🏴") {
                        banderas++;
                    }
                }
            }
            return banderas;
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
                buscaminas.deseaContinuar(e.message);
            }
        },

        /**
         * Devuelve el número de casillas pulsadas en el tablero.
         */
        obtenerPulsadas() {
            let contador = 0;
            for (let i = 0; i < buscaminas.filas; i++) {
                for (let j = 0; j < buscaminas.columnas; j++) {
                    if (buscaminas.tableroPulsadas[i][j] === '🞫') {
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
                    if (buscaminas.tableroLogica[i][j] !== '💣') {
                        contador++;
                    }
                }
            }
            return contador;
        },

        /**
         * Devuelve el número de banderas del tablero.
         */
        obtenerBanderasDelTablero() {
            let banderas = 0;
            for (let i = 0; i < buscaminas.filas; i++) {
                for (let j = 0; j < buscaminas.columnas; j++) {
                    if (buscaminas.tableroVisible[i][j] === "🏴") {
                        banderas++;
                    }
                }
            }
            return banderas;
        },

        /**
         * Comprueba si se ha ganado mediante el uso de banderas.
         */
        comprobarGanadorConBanderas() {
            let casillasNoPulsadas = 0;
            let casillasYaPulsadas = 0;
            let casillasParaGanar = 0;
            for (let i = 0; i < buscaminas.filas; i++) {
                for (let j = 0; j < buscaminas.columnas; j++) {
                    if (buscaminas.tableroPulsadas[i][j] === "🞫") {
                        casillasYaPulsadas++;
                    }
                    if (buscaminas.tableroPulsadas[i][j] !== "🞫") {
                        casillasNoPulsadas++;
                        if (
                            (casillasNoPulsadas === buscaminas.minas) &&
                            (buscaminas.tableroLogica[i][j] === "💣" && buscaminas.tableroVisible[i][j] === "🏴")
                        ) {
                            casillasParaGanar++
                        }
                    }
                }
            }
            try {
                if (casillasYaPulsadas > 1 && (casillasParaGanar === buscaminas.minas)) {
                    throw new Error('Has ganado la partida');
                }
            } catch (e) {
                buscaminas.deseaContinuar(e.message);
            }
        },

        /**
         * Pregunta si deseas volver a jugar, en caso afirmativo inicializa el juego.
         * @param mensaje mensaje para mostrar al usuario
         */
        deseaContinuar(mensaje) {
            let deseaContinuar = '';
            do {
                deseaContinuar = prompt(mensaje + ', ¿Deseas continuar jugando? (s/n)');
            } while (deseaContinuar.toLowerCase() === 's' && deseaContinuar.toLowerCase() === 'n');
            if (deseaContinuar.toLowerCase() === 's') {
                console.clear();
                buscaminas.init();
            } else {
                return;
            }
        }
    };

    /**
     * Funciones públicas accesibles desde el exterior.
     */
    jugar = (function () {
        return {
            init: () => buscaminas.init(),
            picar: (x, y) => buscaminas.picar(x, y),
            marcar: (x, y) => buscaminas.marcar(x, y),
            despejar: (x, y) => buscaminas.despejar(x, y)
        };
    })();

    /**
     * Función de carga inicial.
     */
    function init() {
        jugar.init();
    }

    /**
     * Carga inicial en el DOM del documento.
     */
    document.addEventListener('DOMContentLoaded', init);
}