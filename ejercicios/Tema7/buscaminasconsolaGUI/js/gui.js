/**
 * Interfaz gráfica del buscaminas en jQuery
 * @author Guillermo Boquizo Sánchez.
 */

import {
    buscaminas
} from './main.js';

let $containerMenu;
let $containerLevelSelector;
let $board;
let $clock;
let $time;

let init = function () {
    $('#seleccionNivel').change(buscaminasGUI.start);
    $board = $('#board');
};

let buscaminasGUI = {
    start() {
        buscaminas.nivel = $(this).val();
        buscaminas.init();
        $(this).prop("disabled", true);
        buscaminasGUI.generateGUIBoard();
        buscaminasGUI.disableContextMenu();
    },

    generateGUIBoard() {
        $board.css({
            "display": "grid",
            "grid-template-columns": "repeat(" + buscaminas.columnas + ",1fr)"
        });
        let $fragment = $(document.createDocumentFragment());
        for (let i = 0; i < buscaminas.filas; i++) {
            for (let j = 0; j < buscaminas.columnas; j++) {
                let $tile = $(`<input type="text" id="${i}-${j}" readonly></input>`);
                buscaminasGUI.levelStyles("cover-tile", $tile);
                $tile.click(function () {
                    buscaminasGUI.picarGUI($(this));
                });
                $tile.mousedown(function (event) {
                    switch (event.buttons) {
                        case 2:
                            buscaminasGUI.marcarGUI($(this));
                            break;
                        case 3:
                            //buscaminasGUI.despejarGui($(this));
                            break;
                        default:
                    }
                });
                $fragment.append($tile)
            }
        }
        $board.append($fragment);
    },

    picarGUI(element) {
        let coordenada = buscaminasGUI.obtenerCoordenada(element);
        try {
            buscaminas.picar(coordenada.fila, coordenada.columna);
            buscaminasGUI.actualizarGui();
        } catch (e) {
            buscaminasGUI.descubrirMinas();
            $("#span").text(e.message);
        }
    },

    obtenerCoordenada(element) {
        return {
            fila: parseInt(element.prop("id").split("-")[0]),
            columna: parseInt(element.prop("id").split("-")[1])
        }
    },

    actualizarGui() {
        for (const item of buscaminas.guardarAlAbrir) {
            let fila = parseInt(item.split("-")[0]);
            let columna = parseInt(item.split("-")[1]);

            let $element = $("#" + fila + "-" + columna)

            buscaminasGUI.limpiarClasesCss($element);

            if (buscaminas.tableroVisible[fila][columna] !== "🏴" && buscaminas.tableroVisible[fila][columna] !== "■") {
                if (buscaminas.tableroVisible[fila][columna] === 0) {
                    $element.val("");
                } else {
                    $element.val(buscaminas.tableroVisible[fila][columna]);
                };
                buscaminasGUI.levelStyles(
                    "uncover-tile",
                    $element
                );
            }
        }
        buscaminas.guardarAlAbrir.clear();
    },
    marcarGUI(element) {
        let coordenada = buscaminasGUI.obtenerCoordenada(element);
        try {
            buscaminas.marcar(coordenada.fila, coordenada.columna);
            if (buscaminas.tableroVisible[coordenada.fila][coordenada.columna] === "🏴") {
                buscaminasGUI.levelStyles(
                    "cover-flag",
                    element
                )
            } else if (buscaminas.tableroPulsadas[coordenada.fila][coordenada.columna] !== "🞫") {
                buscaminasGUI.levelStyles(
                    "cover-tile",
                    element
                )
            }
        } catch (e) {
            $("#span").text(e.message);
        }
    },

    disableContextMenu() {
        if ($(document).on()) {
            $(document).contextmenu(function (e) {
                    e.preventDefault();
                },
                false);
        } else {
            $(document).attachEvent("oncontextmenu", function () {
                $(window).event.returnValue = false;
            });
        }
    },

    animationInput(input, classs, nivel) {

        if (classs === "cover-tile") {
            buscaminasGUI.limpiarClasesCss(input)
            input.addClass(nivel + ' ' + classs);
        } else {
            buscaminasGUI.limpiarClasesCss(input)
            input.addClass(nivel + ' ' + classs);
        }
    },

    levelStyles(classs, input) {
        switch (buscaminas.nivel) {
            case "fácil":
                buscaminasGUI.animationInput(input, classs, "easy-tile")
                break;

            case "difícil":
                buscaminasGUI.animationInput(input, classs, "medium-tile")
                break;

            case "experto":
                buscaminasGUI.animationInput(input, classs, "hard-tile")
                break;

            default:
                break;
        }
    },

    limpiarClasesCss(element) {
        if (element) {
            if (
                element.hasClass("cover-tile") ||
                element.hasClass("cover-flag") ||
                element.hasClass("uncover-tile")
            ) {
                element.prop("class", "");
            }
        }
    },

    descubrirMinas() {
        buscaminas.descubrirMinas();
        let colors = [
            "color1",
            "color2",
            "color3",
            "color4",
            "color5",
            "color6",
            "color7",
            "color8",
            "color9",
            "color10"
        ]
        for (let mina of buscaminas.guardarAlAbrir) {
            let $element = $("#" + mina);
            if (buscaminas.flagGanar) {
                buscaminasGUI.levelStyles(
                    "green",
                    $element
                );
            } else {
                buscaminasGUI.levelStyles(
                    colors[Math.floor(Math.random() * ((colors.length - 1) - 0)) + 0],
                    "uncover-tile",
                    $element
                );
            }
        }
    },
};

$(init);