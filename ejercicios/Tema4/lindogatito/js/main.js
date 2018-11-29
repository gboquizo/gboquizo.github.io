{

    let boton;

    function init() {
        boton = document.getElementById("crearGato");
        boton.addEventListener("click", crearGato);

    }

    let crearGato = () => {
        let auryn = new Gato('Auryn', '01/01/2004', 'Siamesa', '4');
        let ventana = window.open("", "", "");
        document.open(ventana);
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
        document.write();
        document.close();
    }
    document.addEventListener('DOMContentLoaded', init);
}