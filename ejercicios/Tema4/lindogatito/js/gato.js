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
    function Gato(nombre, raza, fechaNacimiento) {
        this.nombre = nombre;
        this.raza = raza;
        this.fechaNacimiento = fechaNacimiento;
        this.peso = obtenerPeso(this.raza);
        this.edad = obtenerEdad(this.fechaNacimiento);
    }

    Gato.prototype.estado = 'Jugando';

    Gato.prototype.jugar = function () {
        this.peso -= 1;
        this.estado = 'Jugando';
        this.comprobarPesoValido();
    };

    Gato.prototype.comer = function () {
        this.peso += 1;
        this.estado = 'Comiendo';
        this.comprobarPesoValido();
    };

    Gato.prototype.dormir = function () {
        this.estado = 'Durmiendo';
    };
    Gato.prototype.comprobarPesoValido = function () {
        if (this.peso < 1 || this.peso > 15) {
            this.estado = 'Muerto';
        }
    };


    let obtenerEdad = function (fecha) {
        let fechaActual = new Date();

        if (!esFecha(fecha) || fecha > fechaActual)
            throw new FechaException("No es una fecha.");

        let anio = fechaActual.getFullYear() - fecha.getFullYear();
        let dia = fechaActual.getDay() - fecha.getDay();
        let mes = fechaActual.getMonth() - fecha.getMonth();

        if (anio === 0 && mes === 0) {
            return dia + " día(s)";
        } else if (anio === 0 && mes !== 0 && mes > 1) {
            return mes + " meses y " + dia + " día(s)";
        } else if (anio === 0 && mes !== 0 && mes <= 1) {
            return mes + " mes y " + dia + " día(s)";
        } else if (anio === 1 && mes !== 0 && mes > 1 && mes < 12) {
            return anio + " año, " + mes + " meses y " + dia + " día(s)";
        } else {
            return anio + " años, " + mes + " meses y " + dia + " día(s)";
        }
    }

    let esFecha = function (fecha) {
        return !isNaN(Date.parse(fecha));
    }

    let obtenerPeso = function (raza) {
        let peso = 0;
        if (raza === 'Savannah') {
            peso = 4;
        } else if (raza === 'Maine Coon') {
            peso = 6;
        } else if (raza === 'Azul Ruso') {
            peso = 7;
        } else if (raza === 'Ragdoll') {
            peso = 5;
        } else if (raza === 'Abisinio') {
            peso = 4;
        } else {
            peso = 3;
        }
        return peso;
    };
}