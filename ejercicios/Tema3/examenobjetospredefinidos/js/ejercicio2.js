/**
 *@author Guillermo Boquizo Sánchez.
 *
 */
{
    function init() {
        generarInformacion();
        volver();
    }

    let generarInformacion = function () {
        let info = document.getElementById('info');
        info.innerHTML = `<h4>El camino que lleva a Belén...</h4>
        <p>${fechaDeHoy()}</p>
        <p>${fechaDeNavidad()}</p>
        `;
    };

    let fechaDeHoy = function () {
        let fechaDeHoy = new Date();
        let opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return "Hoy es " + fechaDeHoy.toLocaleDateString("es-ES", opciones);
    }

    let fechaDeNavidad = function () {
        let fechaDeHoy = Date.now();
        let fechaNavidad = Date.parse("25 Dec " + new Date().getFullYear());
        let fechaRestante = fechaNavidad - fechaDeHoy;
        return "Para Navidad falta " + Math.trunc(fechaRestante / 1000 / 60 / 60 / 24) + " días, " + tiempoRestante(fechaRestante);
    }

    let tiempoRestante = function (duracion) {
        let minutos = parseInt((duracion / (1000 * 60)) % 60),
            horas = parseInt((duracion / (1000 * 60 * 60)) % 24);
        horas = (horas < 10) ? "0" + horas : horas;
        minutos = (minutos < 10) ? "0" + minutos : minutos;
        return horas + " horas y " + minutos + " minutos.";
    }

    let volver = function () {
        let back = document.getElementById('back');
        back.addEventListener('click', (ev) => {
            ev.preventDefault;
            history.back();
        });
    };

    document.addEventListener('DOMContentLoaded', init);
}