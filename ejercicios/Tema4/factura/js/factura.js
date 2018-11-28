
{
    function Gato(nombre, fecha, raza, peso) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.raza = raza;
        this.peso = peso;
    }


    Gato.prototype.estado = true;

    Gato.prototype.jugar = function () {
        if (this.peso > 1)
            this.peso--;
        this.estado = false;
    }

    Gato.prototype.comer = function () {
        if (this.peso < 15)
            this.peso++;
        this.estado = false;
    }

    Gato.prototype.obtenerEdad = function () {
        let fechaActual = Date.now;
        let fechaNacimieto = Date.parse(this.fecha);
        let edad = fechaActual.getFullYear() - fechaNacimieto.getFullYear();
        return edad;
    }
}