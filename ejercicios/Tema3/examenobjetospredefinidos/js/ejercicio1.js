/**
 *@author Guillermo Boquizo Sánchez.
 *
 */
{
    let entrada;
    let cajaEjercicio;
    let spanError;

    /**
     * Función encargada de la carga predeterminada del script ejercicio1.js
     */
    function init() {
        entrada = document.getElementById('entrada');
        cajaEjercicio = document.getElementById('cajaEjercicio');
        cajaEjercicio.style.background = "#BDB7BD";
        spanError = document.getElementById('spanError');
        entrada.addEventListener("blur", validarColor);
        volver();
    }

    /**
     * Función encargada de la validación del color cargado en la entrada de texto, en función de los elementos predefinidos en un objeto Map.
     */
    let validarColor = function () {
        let powerRangers = new Map();
        powerRangers.set("rojo", "#FF0000");
        powerRangers.set("amarillo", "#FBFF00");
        powerRangers.set("azul", "#0800FF");
        powerRangers.set("negro", "#000000");
        powerRangers.set("rosa", "#FF0095");
        powerRangers.set("verde", "#00A316");
        powerRangers.set("blanco", "#FFFFFF");
        try {
            if (powerRangers.has((entrada.value.toLowerCase()).trim())) {
                spanError.textContent = "";
                switch (entrada.value.toLowerCase().trim()) {

                    case "rojo":
                        cajaEjercicio.style.background = powerRangers.get("rojo");
                        break;
                    case "amarillo":
                        cajaEjercicio.style.background = powerRangers.get("amarillo");
                        break;
                    case "azul":
                        cajaEjercicio.style.background = powerRangers.get("azul");
                        break;
                    case "negro":
                        cajaEjercicio.style.background = powerRangers.get("negro");
                        break;
                    case "rosa":
                        cajaEjercicio.style.background = powerRangers.get("rosa");
                        break;
                    case "verde":
                        cajaEjercicio.style.background = powerRangers.get("verde");
                        break;
                    case "blanco":
                        cajaEjercicio.style.background = powerRangers.get("blanco");
                        break;
                    default:
                        cajaEjercicio.style.background = "#BDB7BD";
                        break;
                }
            } else {
                if (entrada.value === "")
                    throw new Error("¡Aaaay aaay aay ay ay!.No tenemos Power Rangers por aquí :-(");
                throw new Error("Esto no es un Power Ranger válido, avisa a Zordon :-(");
            }

        } catch (e) {
            cajaEjercicio.style.background = "#BDB7BD";
            spanError.textContent = e.message;
        }
    };

    /**
     * Función encargada de gestionar el comportamiento del enlace "atrás". 
     * Usa el objeto predeterminado Window con la propiedad  de solo lectura history para simular el retroceso de página.
     *
     */
    let volver = function () {
        let back = document.getElementById('back');
        back.addEventListener('click', (ev) => {
            ev.preventDefault;
            history.back();
        });
    };

    // Manejador del evento de document encargado de la carga inicial.
    document.addEventListener('DOMContentLoaded', init);
}