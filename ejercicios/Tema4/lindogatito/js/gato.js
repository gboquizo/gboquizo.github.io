/**
 * 
 *  Crea una clase Gato, y a partir de ella crea tantos gatos como quiera el usuario.
 *  Cada gato tendrá un nombre, una fecha de nacimiento, una raza y un peso(1 - 15).
 *  Cada vez que crees un objeto gato aparecerá una ventana nueva con una imagen que cambiará 
 *  en función de su estado(comiendo, durmiendo y jugando, que es su estado habitual).
 *  El usuario podrá averiguar la edad del gato partiendo de un evento.
 *  El comportamiento es el siguiente:
 *
 *  Cuando el gato juega pierde peso
 *  Cuando el gato come gana peso
 *  El gato puede morir de inanición o por sobrepeso
 *
 *  Recuerda:
 *
 *  Evita las cajas de texto
 *  No puedes usar ni alert ni prompt
 *  Hazlo lo más dinámico posible.
 *  Utiliza prototype para los métodos
 * 
 * @author Guillermo Boquizo Sánchez
 *
 */
{
    function Gato(nombre, fechaNacimiento, raza) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.raza = raza;
        this.peso = obtenerPeso(this.raza);
        this.edad = calcularEdad(this.fechaNacimiento);

    }

    Gato.prototype.estado = "jugando";

    Gato.prototype.jugar = function () {
        this.peso -= 1;
        this.estado = "jugando";
        this.comprobarPesoValido();
    }

    Gato.prototype.comer = function () {
        this.peso += 1;
        this.estado = "comiendo";
        this.comprobarPesoValido();
    }

    Gato.prototype.dormir = function () {
        this.estado = "durmiendo";
    }
    Gato.prototype.comprobarPesoValido = function () {
        if (this.peso < 1 || this.peso > 15) {
            this.estado = "muerto";
        }
    }

    let calcularEdad = function (fecha) {
        let fechaActual = Date.now;
        if (!esFecha(fecha) || fecha > fechaActual)
            throw new FechaException("No es una fecha.");

        let year = fechaActual.getFullYear - fecha.getFullYear();
        let month = fechaActual.getMonth() - fecha.getMonth();
        let day = fechaActual.getDay() - fecha.getDay();

        if (year === 0 && month === 0) {
            return day + " días";
        } else if (year === 0 && month !== 0) {
            return month + " meses y " + day + " días";
        } else {
            return year + " años, " + month + " meses y " + day + " días";
        }
    }

    let esFecha = function (fecha) {
        return !isNaN(Date.parse(fecha));
    }

    obtenerPeso = function (raza) {
        let peso = 0;
        switch (raza) {
            case "savannah":
                peso = 4;
                break;
            case "azul ruso":
                peso = 7;
                break;
            case "maine coon":
                peso = 5;
                break;
            case "ragdoll":
                peso = 4;
                break;
            case "abisinio":
                peso = 6;
                break;
            default:
                peso = 3;
                break;
        }
        return peso;
    }

    let generarVentana = function (object) {
        let html = "";

    }



}