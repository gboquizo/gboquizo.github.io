/**
 * 
 *  Crea una clase Factura tal y como la hemos visto en clase mediante una clase prototipada.
 *
 *  Utiliza un formulario para la creación de las facturas.
 *
 *  Identificador de factura(se generará automáticamente mediante un contador de la clase)
 *  Fecha de la factura
 *  Empresa que emite la factura(común a todas las facturas)
 *  Nombre
 *  Dirección
 *  Teléfono
 *  Nif
 *  Cliente de la factura:
 *  Nombre del cliente
 *  Dirección del cliente
 *  Teléfono del cliente
 *  Nif del cliente(Confirma que sea válido.En caso contrario no se creará.Ha de ser único)
 *  Líneas de la factura
 *  Descripción
 *  Cantidad
 *  Precio por unidad
 *  Iva
 *  Total
 *  Base imponible
 *  Iva(recuerda que hay tres ivas en España)
 *
 *  Referencia:
 *
 *  https: //www.modelofactura.es/default.aspx
 * @author Guillermo Boquizo Sánchez
 *
 */
{

    let boton;

    function init() {
        boton = document.getElementById("crearGato");
        boton.addEventListener("click", crearGato);

    }

    let crearGato = () => {
        let auryn = new Gato('Auryn', '01/01/2004', 'Siamesa', '4');
        let ventana = window.open("", "", "");
        ventana.innerHTML = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta name="author" content="Guillermo Boquizo Sánchez">
            <meta name="description" content="Crea un gato auryn en js">
            <meta name="keywords" content="HTML,CSS,JavaScript">
            <title>Gata auryn</title>
            <link rel="stylesheet" href="css/estilos.css">
            <script src="js/gato.js"></script>
            <script src="js/main.js"></script>
        </head>
        <body>
            <noscript>
                <p>Por favor, compruebe que su navegador sea compatible con javascript,
                    o bien compruebe si lo tiene activado.</p>
            </noscript>
            <main>
                <h1>Lindo gatito js</h1>
                <p>${auryn.nombre}</p>
            </main>
        </body>
        </html>    
        `;
    }
    document.addEventListener('DOMContentLoaded', init);
}