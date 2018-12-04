/**
 * 
 * Crea una página donde demuestres tu buen hacer con los eventos de ratón.
 * Para ello crea un canvas para cada evento.Deben reaccionar cambiando de color.Identifícalo con un texto.En todo momento muestra las coordenadas(x, y), button y buttons.Recuerda comprobarlo al menos en los tres navegadores principales.
 *
 * Eventos de ratón según la W3C UI Events:
 *
 * auxclick
 * click
 * dblclick
 * mousedown
 * mouseenter
 * mouseleave
 * mousemove
 * mouseout
 * mouseover
 * mouseup
 *
 * Responde a las siguientes preguntas:
 *
 * Explica los atributos(y sus valores) que tiene el objeto evento para identificar las coordenadas del evento(x, y)
 * Explica los atributos(y sus valores) que tiene el objeto evento para identificar los botones del ratón que intervienen en el evento.
 *
 * Referencias:
 *
 *    W3C UI Events
 * Introducción a JavaScript
 * Introduccción a Ajax
 * @author Guillermo Boquizo Sánchez
 *
 */
{
    let canvas;
    let arrayColores = [
        "rgb(255, 118, 164)", "rgb(36, 167, 54)", "rgb(216, 140, 27)", "rgb(245, 47, 40)",
        "rgb(104, 80, 72)", "rgb(140, 97, 212)", "rgb(151, 146, 146)", "rgb(68, 163, 207)",
        "rgb(87, 121, 231)", "rgb(21, 226, 158)", "rgb(248, 7, 208)", "rgb(6, 32, 119)"
    ];

    function init() {

        mipagina = new CrearPagina();
        fragment = mipagina.getFragment();
        CrearPagina.prototype.createExercise = () => createExercise();
        mipagina.createPage();
        canvas = Array.from(document.getElementsByTagName("canvas"));

        canvas.forEach(element => {
            element.addEventListener(element.getAttribute("id"), (ev) => {
                let aleatorio = Math.floor(Math.random() * (arrayColores.length - 0)) + 0;
                pintarCanvas(element, aleatorio, ev.screenX, ev.screenY, ev.button, ev.buttons);
            });
            pintarCanvas(element);
        });
    }

    let pintarCanvas = function (canvas, aleatorio, x, y, button, buttons) {
        if (canvas.getContext) {
            let ctx = canvas.getContext('2d');
            if (arguments.length === 1) {
                ctx.fillStyle = "#FC353F";
            } else {
                ctx.fillStyle = arrayColores[aleatorio];
            }
            ctx.fillStyle = arrayColores[aleatorio];
            ctx.fillRect(0, 0, 500, 500);
            ctx.font = "bold 2rem sans-serif";
            ctx.fillStyle = '#FFF';

            ctx.fillText(canvas.getAttribute("id"), 50, 40);
            if (arguments.length > 1) {
                ctx.font = "1.2rem sans-serif";
                ctx.fillText("x:" + x, 100, 80);
                ctx.fillText("y:" + y, 100, 100);
                ctx.fillText("button:" + button, 100, 120);
                ctx.fillText("buttons:" + buttons, 100, 140);
            }
        }
    }

    let createExercise = function () {
        let h2 = document.createElement('h2');
        h2.textContent = "Eventos de ratón en js.";
        let descripcion = document.createElement('article');
        descripcion.innerHTML = `
            <canvas id="auxclick"></canvas>
            <canvas id="click"></canvas>
            <canvas id="dblclick"></canvas>
            <canvas id="mousedown"></canvas>
            <canvas id="mouseenter"></canvas>
            <canvas id="mouseleave"></canvas>
            <canvas id="mousemove"></canvas>
            <canvas id="mouseout"></canvas>
            <canvas id="mouseover"></canvas>
            <canvas id="mouseup"></canvas>
        `;
        fragment.appendChild(h2);
        fragment.appendChild(descripcion);
    };

    document.addEventListener('DOMContentLoaded', init);
}