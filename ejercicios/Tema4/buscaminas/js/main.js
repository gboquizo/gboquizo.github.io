/**
 * 
 * Entrega el juego del buscaminas en JavaScript.
 *
 * Habrá tres niveles de juego:
 *  principiante(8 x8, 10 minas),
 *  intermedio(16 x16, 40 minas) y
 *  experto(16 x30, 99 minas)
 *  Separarás la capa de presentación de la capa de negocio
 * Para facilitar la corrección, dejarás público el método mostrarCampoMinas que mostrará la estructura por consola
 * Define el objeto buscaminas que sólo tenga públicos los métodos necesarios.Los invocarás desde el DOM.
 * Define correctamente el estado del buscaminas: campo de minas, dimensiones, número de minas
 * Mostrarás en el marcador el tiempo y el número de minas que quedan por marcar
 * Los eventos del ratón serán tres:
 *    click(picar en el campo)
 *    click derecho(marcar bandera en el campo o despejar)
 *    click con ambos botones(dar pistas con los alrededores)
 *
 * Diseña de menos a más: primero sin banderas ni pistas, comprobando que detecta cuando se pierde y cuando se gana.
 *
 * Referencias:
 *
 *     https: //es.wikipedia.org/wiki/Buscaminas
 *     https: //www.google.com/search?q=buscaminas&ie=utf-8&oe=utf-8&client=firefox-b-ab
 * 
 * @author Guillermo Boquizo Sánchez
 *
 */
{
    let tablero;
    let spanError;
    let reloj;

    function init() {
        tablero = document.getElementById("tablero");
        spanError = document.getElementById("spanError");
        reloj = document.getElementById("reloj");
        buscaminas.pintarTablero(10);
        buscaminas.colocarMina(10);
        buscaminas.compruebaBombas();
        buscaminas.cargarBombas();
    }

    let buscaminas = {
        nivel: "básico",
        gameover: false,
        winner: false,
        bombas: null,
        numCasillas: null,
        pintarTablero(numCasillas) {
            tablero.style.display = "grid";
            tablero.style.gridTemplateColumns = "repeat(" + numCasillas + ", 1fr)";
            for (let fila = 0; fila < numCasillas; fila++) {
                for (let columna = 0; columna < numCasillas; columna++) {
                    let casilla = document.createElement("input");
                    casilla.id = fila + "" + columna;
                    casilla.value = "0";
                    casilla.readOnly = true;
                    casilla.addEventListener("click", buscaminas.clickarCasilla);
                    casilla.style.background = "#00D0FF";
                    casilla.style.color = "#00D0FF";
                    tablero.appendChild(casilla);
                }
            }
            for (let i = 1; i <= numCasillas; i++) {
                for (let j = 1; j <= numCasillas; j++) {
                    if (i % 2 === 0 && j % 2 === 0) {
                        buscaminas.obtenerValorCasilla(i - 1, j - 1).style.background = "#9CCC65";
                        buscaminas.obtenerValorCasilla(i - 1, j - 1).style.color = "#9CCC65";
                    } else if (i % 2 !== 0 && j % 2 !== 0) {
                        buscaminas.obtenerValorCasilla(i - 1, j - 1).style.background = "#9CCC65";
                        buscaminas.obtenerValorCasilla(i - 1, j - 1).style.color = "#9CCC65";
                    }
                }
            }
        },
        obtenerValorCasilla(i, j) {
            return document.getElementById(i + "" + j);
        },
        clickarCasilla() {
            let coordenada = this.getAttribute("id");
            if (this.value === "*" && !buscaminas.winner) {
                if (buscaminas.nivel === "básico") {
                    buscaminas.mostrarAlPerderOGanar(10);
                } else if (buscaminas.nivel === "intermedio") {
                    buscaminas.mostrarAlPerderOGanar(16);
                }
                spanError.textContent = "Has perdido";
                buscaminas.gameover = true;
                this.style.background = "#AF2AF1";
                buscaminas.deshabilitarAlPerderOGanar()();
            } else {
                if (coordenada.length === 2) {
                    buscaminas.pulsarCasillas(10, parseInt(coordenada[0]), parseInt(coordenada[1]));
                    buscaminas.ganar(10);
                } else if (coordenadas.length === 4) {
                    buscaminas.ganar(16);
                    buscaminas.pulsarCasillas(16, parseInt(coordenada[0] + "" + coordenada[1]), parseInt(coordenada[2] + "" + coordenada[3]));
                }

                let comprobarClick = true;

                if ((!buscaminas.winner && comprobarClick) || comprobarClick) {
                    this.style.background = "#FFFFFF";
                }
                if (buscaminas.winner) {
                    spanError.textContent = "Has ganado";
                    buscaminas.deshabilitarAlPerderOGanar();
                    buscaminas.mostrarAlPerderOGanar(10);
                }
            }
        },
        colocarMina(numCasillas) {
            for (let i = 0; i < 10; i++) {
                let fila = Math.floor(Math.random() * (numCasillas - 1 - 0)) + 0;
                let columna = Math.floor(Math.random() * (numCasillas - 1 - 0)) + 0;
                while (buscaminas.obtenerValorCasilla(fila, columna).value === "*") {
                    fila = Math.floor(Math.random() * (numCasillas - 1 - 0)) + 0;
                    columna = Math.floor(Math.random() * (numCasillas - 1 - 0)) + 0;
                }
                buscaminas.obtenerValorCasilla(fila, columna).value = "*"
            }
        },
        compruebaBombas() {
            if (buscaminas.nivel === "básico") {
                buscaminas.generarProximidadMina(10);
            } else if (buscaminas.nivel === "intermedio") {
                buscaminas.generarProximidadMina(16);
            }
        },
        cargarBombas() {
            if (buscaminas.nivel === "básico") {
                buscaminas.bombas = 10;
            } else if (buscaminas.nivel === "intermedio") {
                buscaminas.bombas = 16;
            }
        },
        generarProximidadMina(numCasillas) {
            for (let i = 0; i < numCasillas; i++) {
                for (let j = 0; j < numCasillas; j++) {
                    if (buscaminas.obtenerValorCasilla(i, j).value === "*") {
                        if (i == 0 && j == 0) {
                            buscaminas.colocarNumeros(i, j, i + 1, j + 1);
                        } else if (i == 0 && (j > 0 && j < numCasillas - 1)) {
                            buscaminas.colocarNumeros(i, j - 1, i + 1, j + 1);
                        } else if (i == 0 && j == numCasillas - 1) {
                            buscaminas.colocarNumeros(i, j - 1, i + 1, j);
                        } else if (j == numCasillas - 1 && (i > 0 && i < numCasillas - 1)) {
                            buscaminas.colocarNumeros(i - 1, j - 1, i + 1, j);
                        } else if (i == numCasillas - 1 && j == numCasillas - 1) {
                            buscaminas.colocarNumeros(i - 1, j - 1, i, j);
                        } else if (i == numCasillas - 1 && (j > 0 && j < numCasillas - 1)) {
                            buscaminas.colocarNumeros(i - 1, j - 1, i, j + 1);
                        } else if (i == numCasillas - 1 && j == 0) {
                            buscaminas.colocarNumeros(i - 1, j, i, j + 1);
                        } else if (j == 0 && (i > 0 && i < numCasillas - 1)) {
                            buscaminas.colocarNumeros(i - 1, j, i + 1, j + 1);
                        } else {
                            buscaminas.colocarNumeros(i - 1, j - 1, i + 1, j + 1);
                        }
                    }
                }
            }
        },
        colocarNumeros(ii, ij, fi, fj) {
            for (let i = ii; i <= fi; i++) {
                for (let j = ij; j <= fj; j++) {
                    if (buscaminas.obtenerValorCasilla(i, j).value !== "*") {
                        if (buscaminas.obtenerValorCasilla(i, j).value === "0") {
                            buscaminas.obtenerValorCasilla(i, j).value = 0 + 1;
                        } else {
                            buscaminas.obtenerValorCasilla(i, j).value = parseInt(buscaminas.obtenerValorCasilla(i, j).value) + 1;
                        }
                    }
                }
            }
        },
        mostrarAlPerderOGanar(numCasillas) {
            for (let i = 0; i < numCasillas; i++) {
                for (let j = 0; j < numCasillas; j++) {
                    if (buscaminas.obtenerValorCasilla(i, j).value === "*") {
                        buscaminas.obtenerValorCasilla(i, j).style.background = "#AF2AF1";
                    } else {
                        if (buscaminas.obtenerValorCasilla(i, j).value === "0") {
                            buscaminas.obtenerValorCasilla(i, j).value = "";
                        }
                        buscaminas.obtenerValorCasilla(i, j).style.background = "#FFFFFF";
                    }
                }
            }
        },
        deshabilitarAlPerderOGanar() {
            let entradas = document.getElementsByTagName("input");
            if (buscaminas.gameover || buscaminas.winner) {
                Array.from(entradas).forEach(element => {
                    element.removeEventListener("click", buscaminas.clickarCasilla);
                });
            }
        },
        ganar(numCasillas) {
            let numCasillasSinDescubrir = 0;
            for (let k = 0; k < numCasillas; k++) {
                for (let f = 0; f < numCasillas; f++) {
                    //console.log(buscaminas.obtenerValorCasilla(k, f).style.background);
                    if (buscaminas.obtenerValorCasilla(k, f).style.background === "rgb(0, 208, 255)" ||
                        buscaminas.obtenerValorCasilla(k, f).style.background === "rgb(156, 204, 101)") {
                        numCasillasSinDescubrir++;
                    }
                }
            }
            //console.log(numCasillasSinDescubrir);
            //console.log("Número de bombas " + buscaminas.bombas);
            if (numCasillasSinDescubrir - 1 === buscaminas.bombas) {
                buscaminas.winner = true;
            }
        },
        pulsarCasillas(numCasillas, x, y) {
            if (buscaminas.obtenerValorCasilla(x, y).value === "0") {
                buscaminas.obtenerValorCasilla(x, y).value = "";
                for (let j = Math.max(x - 1, 0); j <= Math.min(x + 1, numCasillas - 1); j++) {
                    for (let k = Math.max(y - 1, 0); k <= Math.min(y + 1, numCasillas - 1); k++) {
                        document.getElementById(j + "" + k).style.background = "#FFFFFF";
                        buscaminas.pulsarCasillas(10, j, k);
                    }
                }
            }
        }
    }
    document.addEventListener('DOMContentLoaded', init);
}