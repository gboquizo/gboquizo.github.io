/**
 *@author Guillermo Boquizo Sánchez.
 *
 */
{
    let entrada;
    let cajaEjercicio;
    let spanError;

    function init() {
        entrada = document.getElementById('entrada');
        cajaEjercicio = document.getElementById('cajaEjercicio');
        spanError = document.getElementById('spanError');
        entrada.addEventListener("blur", validarColor);
        volver();
    }

    let validarColor = function () {
        let powerRangers = new Map();
        powerRangers.set("rojo", "#FF0000");
        powerRangers.set("amarillo", "#FBFF00");
        powerRangers.set("azul", "#0800FF");
        powerRangers.set("negro", "#000000");
        powerRangers.set("rosa", "#FF0095");
        powerRangers.set("verde", "#00A316");
        try {
            if (powerRangers.has(entrada.value)) {
                spanError.textContent = "";
                switch (entrada.value.toLowerCase()) {

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
                    default:
                        cajaEjercicio.style.background = "#FFFFFF";
                        break;
                }
            } else {
                if (entrada.value === "")
                    throw new Error("¡Aaaay aaay aay ay ay!.No tenemos Power Rangers por aquí :-(", "Error");
                throw new Error("Esto no es un Power Ranger válido, avisa a Zordon :-(", "Error");
            }
            
        } catch (e) {
            cajaEjercicio.style.background = "#FFFFFF";
            spanError.textContent = e.message;
        }
    };


    let volver = function () {
        let back = document.getElementById('back');
        back.addEventListener('click', (ev) => {
            ev.preventDefault;
            history.back();
        });
    };

    document.addEventListener('DOMContentLoaded', init);
}