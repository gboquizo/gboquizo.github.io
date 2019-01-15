/**
 * Extender la clase String para que permita truncar una cadena de texto a un tamaño indicado como parámetro:
 * var cadena = "hola mundo";
 * cadena2 = cadena.truncar(6); // cadena2 = "hola m"
 * Modificar la función anterior para que permita definir el texto que indica que la cadena se ha truncado:
 * var cadena = "hola mundo";
 * cadena2 = cadena.truncar(6, '...'); // cadena2 = "hol..."
 * @author Guillermo Boquizo Sánchez
 */
{
    function init() {
        String.prototype.truncar = function (size) {
            let cadena = "";
            for (let i = 0; i < size; i++) {
                cadena += this.charAt(i);
            }
            let points = this.length - size;
            for (let j = 0; j < points; j++) {
                cadena += ".";
            }
            return cadena;
        };
        let nombre = "Guillermo Boquizo";
        console.log(nombre.truncar(6));
    }

    document.addEventListener("DOMContentLoaded", init);
}