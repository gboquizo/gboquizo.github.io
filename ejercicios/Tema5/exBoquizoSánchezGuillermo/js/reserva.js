{
    /**
     * Constructor del objeto Reserva.
     * @param {Nombre completo del cliente.} nombre
     * @param {Correo del cliente.} correo
     * @param {Fecha de llegada.} fechaLlegada
     * @param {Hora de llegada.} horaLlegada
     * @param {Número de noches reservadas.} numNoches
     * @param {Número de personas.} numPersonas
     * @param {Servicios de restauración contratados.} restaurante
     * @param {Edad del cliente.} edad
     */
    function Reserva(
        nombre, correo, fechaLlegada, horaLlegada, numNoches, numPersonas, restaurante, edad) {
        this.id = this.generarID();
        this.nombre = nombre;
        this.correo = correo;
        this.fechaLlegada = this.setFecha(fechaLlegada);
        this.horaLlegada = horaLlegada;
        this.numNoches = numNoches;
        this.numPersonas = numPersonas;
        this.restaurante = this.setCheckRestaurante(restaurante);
        this.edad = edad;
    }

    /**
     * Función que muestra la reserva.
     */
    Reserva.prototype.mostrar = function () {
        let html = `
        <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="author" content="Guillermo Boquizo Sánchez">
                <meta name="description" content="Reserva del usuario">
                <meta name="keywords" content="HTML,CSS,JavaScript">
                <title>Reserva del usuario</title>
                <link rel="stylesheet" type="text/css" media="screen" href="css/estilos.css">
                <script type="text/javascript" src="js/main.js" charset="UTF-8"></script>
            </head>
            <body>
                <noscript>
                    <p>Por favor, comprueba que tu navegador es compatible con javascript, o bien
                    comprueba si lo tienes activado</p>
                </noscript>
            </body>
            <p>Id de la reserva: ${this.id}</p>
            <p>Nombre: ${this.nombre}</p>
            <p>Correo electrónico: ${this.correo}</p>
            <p>Fecha de llegada: ${this.formatearFecha()}</p>
            <p>Hora de llegada: ${this.horaLlegada}</p>
            <p>Número de noches: ${this.numNoches}</p>
            <p>Número de personas: ${this.numPersonas}</p>
            <p>Servicios de restaurante contratados:<br>${this.restaurante}</p>
            <p>Edad del cliente:${this.edad} años.</p>
            <p>Días para la reserva:${this.calcularDiasHastaEntrada()} dia/s.</p>
            </html>
        `
        let ventanaNueva = window.open("", "", "width=300px,height=200px");
        ventanaNueva.document.open();
        ventanaNueva.document.write(html);
        ventanaNueva.document.close();
    }

    /**
     * Generador del id de reserva.
     * @param {Una closure que genera el id} function()
     */
    Reserva.prototype.generarID = (function () {
        let id = 1;
        return function () {
            return id++;
        };
    })();

    Reserva.prototype.formatearFecha = function () {
        let opciones = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return this.fechaLlegada.toLocaleDateString("es-ES", opciones) + ".";
    };

    Reserva.prototype.setFecha = function (fechaLlegada) {
        if (!(fechaLlegada instanceof Date)) {
            throw new Error("Fecha no válida");
        }
        return fechaLlegada;
    };

    Reserva.prototype.calcularDiasHastaEntrada = function () {
        let fechaActualEnMs = Date.now();
        let fechaLlegada = Date.parse(this.fechaLlegada);
        let fechaRestante = fechaLlegada - fechaActualEnMs;
        let diasRestantes = fechaRestante / 1000 / 60 / 60 / 24;
        let dias = Math.trunc(fechaRestante / 1000 / 60 / 60 / 24);

        if (dias < 0) {
            throw new Error("Error, la fecha de entrada es anterior a la fecha actual");
        }
        if (diasRestantes > 0 && diasRestantes < 1) {
            return 1;
        }
        return dias;
    }

    Reserva.prototype.setCheckRestaurante = function (restaurante) {
        if (restaurante.length > 1) {
            let cadena = "";
            restaurante.forEach((element, index) => {
                index == restaurante.length - 1 ? cadena += element.value + "." : cadena += element.value + ", ";
            });
            return cadena;
        } else if (restaurante.length === 1) {
            return restaurante[0].value;
        } else {
            return "No hay servicios";
        }
    };
}
