/**
Modificar el ejercicio anterior del objeto Factura para crear una
pseudoclase llamada Factura y que permita crear objetos de ese tipo. Se
deben utilizar las funciones constructoras y la propiedad prototype.
Para instanciar la clase, se debe utilizar la instrucción
Factura(cliente, elementos), donde cliente también es una pseudoclase
que guarda los datos del cliente y elementos es un array simple que
contiene las pseudoclases de todos los elementos que forman la factura.
@author Guillermo Boquizo Sánchez
*/
{
    function init() {
        function Elemento(descripcion, cantidad, precio) {
            this.descripcion = descripcion;
            this.cantidad = cantidad;
            this.precio = precio;
        }

        // Definición de la pseudoclase Cliente
        function Cliente(nombre, direccion, telefono, dni) {
            this.nombre = nombre;
            this.direccion = direccion;
            this.telefono = telefono;
            this.dni = dni;
        }

        // Definición de la pseudoclase Factura
        function Factura(datosCliente, elementos) {
            this.datosCliente = datosCliente;
            this.elementos = elementos;
            this.informacion = {
                baseImponible: 0,
                iva: 21,
                total: 0,
                formaPago: "contado"
            };
            this.incrementaIdFactura();
        }

        Factura.prototype.idFactura = 0;

        Factura.prototype.muestraIdFactura = function () {
            console.log("***Nº de factura***\n");

            console.log(this.idFactura);
        };

        Factura.prototype.incrementaIdFactura = function () {
            this.idFactura++;
        };

        Factura.prototype.calculaTotal = function () {
            for (let i = 0; i < this.elementos.length; i++) {
                this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
            }
            this.informacion.total = this.informacion.baseImponible * this.informacion.iva;
        }

        Factura.prototype.muestraTotal = function () {
            this.calculaTotal();
            console.log("TOTAL = " + this.informacion.total + " euros");
        }

        Factura.prototype.obtenerDatosCliente = function () {
            console.log("***Datos cliente***\n");
            console.log(this.datosCliente.nombre);
            console.log(this.datosCliente.direccion);
            console.log(this.datosCliente.telefono);
            console.log(this.datosCliente.dni);
        };

        Factura.prototype.obtenerElementos = function () {
            console.log("***Elementos***\n");
            elementos.forEach(elemento => {
                console.log(
                    elemento.descripcion +
                    ", " +
                    elemento.cantidad +
                    "x, " +
                    elemento.precio +
                    "€"
                );
            });
        };

        let cliente = new Cliente("Guillermo Boquizo Sánchez", "C/Espino. 37", "777777777", "77777777Z");

        let elementos = [new Elemento("Teclado inalámbrico", "2", "10"),
            new Elemento("Altavoces", "2", "10"),
            new Elemento("Ratón", "3", "10")
        ];

        let factura = new Factura(cliente, elementos);

        factura.muestraIdFactura();
        factura.obtenerElementos();
        factura.obtenerDatosCliente();
        factura.muestraTotal();
    }

    document.addEventListener("DOMContentLoaded", init);
}