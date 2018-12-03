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
    function init() {
        createPage();
    }
    /**
     * Función que crea el layout de la página desde js.
     */
    let createPage = function () {
        /**
         * Sección main
         */
        //Crea la sección main y se le asigna una clase.
        let main = document.createElement('main');
        main.className = 'main';

        //Crea un contenedor para el ejercicio y se le asigna una clase.
        let container = document.createElement('container');
        container.className = 'container';

        //Crea un contenedor para el div y se le asigna una clase
        let exercise = document.createElement('ejercicio');
        exercise.className = 'ejercicio';

        //Crea un fragment donde insertar la información del ejercicio.
        let fragment = document.createDocumentFragment();
        createExercise(fragment);
        //Se añade el fragment al div del ejercicio.
        exercise.appendChild(fragment);

        //Se añade el contenedor del botón al container principal.
        container.appendChild(exercise);

        //Se añade el elemento container al main.
        main.appendChild(container);

        /**
         * Sección footer
         */

        //Crea un footer y se le asigna una clase.
        let footer = document.createElement('footer');
        footer.className = 'footer';

        //Crea un elemento p para el copyright y se le asigna un texto.
        let p = document.createElement('p');
        p.className = 'footer-copyright';
        p.textContent = 'Guillermo Boquizo Sánchez - DWECL 2 º DAW IES Gran Capitán';

        //Se añade el elemento p al footer.
        footer.appendChild(p);

        /**
         * Sección document
         */
        //Se añade el main al body.
        document.body.appendChild(main);
        document.body.appendChild(footer);
    };

    let createExercise = function (fragment) {
        let h2 = document.createElement('h2');
        h2.textContent = 'Factura en js.';
        boton = document.createElement('button');
        boton.id = 'crearGato';
        boton.className = 'btn';
        boton.innerHTML = 'Crear factura';
        let descripcion = document.createElement('article');
        descripcion.innerHTML = `
        <div class="entrada" id="entrada">
            <div class="field-group">
                <label class="label" for="fecha">Fecha:</label>
                <div class="field">
                    <input type="date" name="fecha" id="fecha" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="moneda">Moneda:</label>
                <div class="field">
                    <input type="text" name="moneda" id="moneda" value="Euros" required/>
                </div>
            </div>
        </div>
        <div class="entrada" id="entrada">
        <h3>Empresa</h3>
            <div class="field-group">
                <label class="label" for="nombre">Nombre:</label>
                <div class="field">
                    <input type="text" name="emisor" id="emisor" value="Nombre del emisor" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="CIF">CIF:</label>
                <div class="field">
                    <input type="text" name="cif" id="cif" value="21555354" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="direccion">Dirección:</label>
                <div class="field">
                    <input type="text" name="direccion" id="direccion" value="C\\Vaguada, nº 37" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="email">Email:</label>
                <div class="field">
                    <input type="text" name="email" id="email" value="info@gmail.com" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="telefono">Teléfono:</label>
                <div class="field">
                    <input type="text" name="telefono" id="telefono" value="666666666" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="logo">Logo:</label>
                <div class="field">
                    <input type="text" name="logo" id="logo" value="url" required/>
                </div>
            </div>
            <div class="field-group">
                <button class="btn" id"btnGuardarEmisor">Guardar</button>
                <button class="btn" id"btnLimpiarEmisor">Limpiar datos</button> 
                <span id="errorDatosEmisor" class="aviso"></span>  
            </div>


            <h3>Cliente</h3>
            <div class="field-group">
                <label class="label" for="nombre">Nombre:</label>
                <div class="field">
                    <input type="text" name="cliente" id="cliente" value="Nombre del cliente" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="CIF">CIF:</label>
                <div class="field">
                    <input type="text" name="cif" id="cif" value="27555354" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="direccion">Dirección:</label>
                <div class="field">
                    <input type="text" name="direccion" id="direccion" value="C\\Vaguada, nº 37" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="email">Email:</label>
                <div class="field">
                    <input type="text" name="email" id="email" value="info2@gmail.com" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="telefono">Teléfono:</label>
                <div class="field">
                    <input type="text" name="telefono" id="telefono" value="777777777" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="logo">Logo:</label>
                <div class="field">
                    <input type="text" name="logo" id="logo" value="url" required/>
                </div>
            </div>
            <div class="field-group">
                <button class="btn" id"btnGuardarCliente">Guardar</button>
                <button class="btn" id"btnLimpiarCliente">Limpiar datos</button>
                <span id="errorDatosCliente" class="aviso"></span>  
            </div>
        </div>
        
        <div class="entrada" id="entrada">
            <h3>Crear línea</h3>
            <div class="linea">
                <div class="center">
                    <label class="label" for="producto">Producto:</label>
                    <input type="text" name="producto" class="field" id="producto" required/>
                </div>
                <div class="center">
                    <label class="label" for="producto">Uds:</label>
                    <input type="number" name="unidades" id="unidades" class="field" required/>
                </div>
                <div class="center">
                    <label class="label" for="descuento">Descuento:</label>
                    <input type="text" name="descuento" id="descuento" class="field" required/>
                </div>
            </div
            <div>
                <div class="linea">
                    <div class="center">
                        <label class="label" for="precio">Precio:</label>
                        <input type="text" name="precio" id="precio" class="field" required/>
                    </div>
                    <div class="center">
                        <label class="label" for="iva">I.V.A:</label>
                        <input type="text" name="iva" id="iva" class="field" required/>
                    </div>
                    <div class="center">
                        <label class="label" for="importe">Importe:</label>
                        <input type="text" name="importe" id="importe" class="field" required readonly/>
                    </div>
                </div  
            </div>
            <span id="errorLinea" class="aviso"></span> 
        </div>
        <button id="nuevaLinea" class="btn">Guardar / nueva linea</button>
        <div class="entrada">
            <h4>Líneas</h4>
            <div id="contLineas">
            </div>
        </div>
        <div class="entrada" id="otrosDatos">
            <div class="observaciones">
                <h4>Observaciones:</h4>
                <textarea name="area" id="area" cols="50" rows="20"></textarea>
            </div>
            <div class="retenciones">
                <h4>Retenciones:</h4>
                <label class="label" for="irpf">I.R.P.F</label>
                <input class= "field" id="irpf" type="text" required value="1" />
                <label class="label" for="re">R.E</label>
                <input class="field" id="re" type="text" required value="2" />
                <p class="total" id="total">Total (EUROS)</p>
            </div>
        </div>
        `;
        fragment.appendChild(h2);
        fragment.appendChild(descripcion);
        fragment.appendChild(boton);
    };

    document.addEventListener('DOMContentLoaded', init);
}