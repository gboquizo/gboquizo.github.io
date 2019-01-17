/**
 *@author Guillermo Boquizo Sánchez.
 *
 */
{
    /**
     * Función encargada de la carga predeterminada del script ejercicio2.js
     */
    function init() {
        generarInformacion();
        volver();
    }

    /**
     * Función encargada de generar la información del ejercicio. Muestra la fecha de hoy y el tiempo restante para Navidad.
     */
    let generarInformacion = function () {
        let info = document.getElementById('info');
        info.innerHTML = `<h4>El camino que lleva a Belén...</h4>
        <p>${mostrarFechaActual()}</p>
        <p>${mostrarTiempoHastaNavidad()}</p>
        `;
    };

    /**
     * Función encargada de mostrar la fecha actual.
     * @return la fecha actual, pasada a toLocaleDateString
     */
    let mostrarFechaActual = function () {
        let fechaActual = new Date();
        let opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return "Hoy es " + fechaActual.toLocaleDateString("es-ES", opciones) + ".";
    }

    /**
     * Función encargada de mostrar el tiempo restante hasta Navidad.
     * @return el tiempo restante hasta Navidad, mostrando días, horas y minutos.
     */
    let mostrarTiempoHastaNavidad = function () {
        let fechaActualEnMs = Date.now();
        let fechaNavidad = Date.parse("25 Dec " + new Date().getFullYear());
        let fechaRestante = fechaNavidad - fechaActualEnMs;
        return "Para Navidad faltan " + Math.trunc(fechaRestante / 1000 / 60 / 60 / 24) + " días, " + tiempoRestante(fechaRestante);
    }

    /**
     * Función encargada obtener el tiempo restante a partir de una duración determinada.
     * @param duracion la duracion a partir de la cual se va obtener el resto de tiempo restante.
     * @return las horas y minutos restantes a partir del resto de una duración dada.
     */
    let tiempoRestante = function (duracion) {
        let minutos = parseInt((duracion / (1000 * 60)) % 60),
            horas = parseInt((duracion / (1000 * 60 * 60)) % 24);
        horas = (horas < 10) ? "0" + horas : horas;
        minutos = (minutos < 10) ? "0" + minutos : minutos;
        return horas + " horas y " + minutos + " minutos.";
    }

    /**
     * Función encargada de gestionar el comportamiento del enlace "atrás". 
     * Usa el objeto predeterminado Window con la propiedad  de solo lectura history para simular el retroceso de página.
     *
     */
    let volver = function () {
        document.getElementById('back');
        back.addEventListener('click', (ev) => {
            ev.preventDefault;
            history.back();
        });
    };

    // Manejador del evento de document encargado de la carga inicial.
    document.addEventListener('DOMContentLoaded', init);
}