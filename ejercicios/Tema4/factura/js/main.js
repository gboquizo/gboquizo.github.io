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
    let fragment;
    let fecha;
    let moneda;
    let emisor;
    let cifEmisor;
    let direccionEmisor;
    let emailEmisor;
    let telefonoEmisor;
    let logo;
    let cliente;
    let cifCliente;
    let direccionCliente;
    let emailCliente;
    let telefonoCliente;
    let btnGuardarEmisor;
    let btnGuardarCliente;
    let btnLimpiarEmisor;
    let btnLimpiarCliente;
    let arrayLineas;
    let nuevaLinea;
    let btnCrearFactura;
    let spanDatosCliente;
    let spanDatosEmisor;
    let spanLinea;
    let contLineas;
    let area;
    let irpf;
    let re;
    let total;

    function init() {
        mipagina = new CrearPagina();
        fragment = mipagina.getFragment();
        CrearPagina.prototype.createExercise = () => createExercise();
        mipagina.createPage();
        fecha = document.getElementById("fecha");
        moneda = document.getElementById("moneda");
        emisor = document.getElementById("emisor");
        cifEmisor = document.getElementById("cifEmisor");
        direccionEmisor = document.getElementById("direccionEmisor");
        emailEmisor = document.getElementById("emailEmisor");
        telefonoEmisor = document.getElementById("telefonoEmisor");
        logo = document.getElementById("logo");
        cliente = document.getElementById("cliente");
        cifCliente = document.getElementById("cifCliente");
        direccionCliente = document.getElementById("direccionCliente");
        emailCliente = document.getElementById("emailCliente");
        telefonoCliente = document.getElementById("telefonoCliente");
        btnGuardarEmisor = document.getElementById("guardarEmisor");
        btnGuardarCliente = document.getElementById("guardarCliente");
        btnLimpiarEmisor = document.getElementById("limpiarEmisor");
        btnLimpiarCliente = document.getElementById("limpiarCliente");
        spanDatosCliente = document.getElementById("errorDatosCliente");
        spanDatosEmisor = document.getElementById("errorDatosEmisor");
        spanLinea = document.getElementById("errorLinea");
        arrayLineas = [];
        nuevaLinea = document.getElementById("nuevaLinea");
        contLineas = document.getElementById("contLineas");
        area = document.getElementById("area");
        irpf = document.getElementById("irpf");
        re = document.getElementById("re");
        total = document.getElementById("total");
        btnCrearFactura = document.getElementById("crearFactura");
        console.log(btnGuardarEmisor);
        btnGuardarEmisor.addEventListener("click", crearEmisor);
        btnGuardarCliente.addEventListener("click", crearCliente);
        btnLimpiarEmisor.addEventListener("click", limpiarInputsEmisor);
        btnLimpiarCliente.addEventListener("click", limpiarInputsCliente);
    }

    let crearEmisor = function () {
        if (emisor.value !== "" && cifEmisor.value !== "" && direccionEmisor.value !== "" && emailEmisor.value !== "" && telefonoEmisor.value !== "" && logo.value !== "") {
            spanDatosEmisor.textContent = "";
            //return new Emisor(emisor.value, cifEmisor.value, direccionEmisor.value, emailEmisor.value, telefonoEmisor.value, logo.value)
            console.log(new Emisor(emisor.value, cifEmisor.value, direccionEmisor.value, emailEmisor.value, telefonoEmisor.value, logo.value));
        } else {
            spanDatosEmisor.textContent = "Error, rellena todos los campos.";
        }
    }

    let crearCliente = function () {
        if (cliente.value !== "" && cifCliente.value !== "" && direccionCliente.value !== "" && emailCliente.value !== "" && telefonoCliente.value !== "") {
            spanDatosCliente.textContent = "";
            //return new Cliente(cliente.value, cifCliente.value, direccionCliente.value, emailCliente.value, telefonoCliente.value);
            console.log(new Cliente(cliente.value, cifCliente.value, direccionCliente.value, emailCliente.value, telefonoCliente.value));
        } else {
            spanDatosCliente.textContent = "Error, rellena todos los campos.";
        }
    }

    let limpiarInputsEmisor = function () {
        let inputsEmisor = Array.from(
            document.querySelectorAll("#entradaEmisor input")
        );
        inputsEmisor.forEach(input => input.value = "");
    };

    let limpiarInputsCliente = function () {
        let inputsCliente = Array.from(
            document.querySelectorAll("#entradaCliente input")
        );

        inputsCliente.forEach(input => input.value = "");
    };

    let createExercise = function () {
        let h2 = document.createElement('h2');
        h2.textContent = "Factura en js.";
        boton = document.createElement('button');
        boton.id = "crearFactura";
        boton.className = 'btn';
        boton.innerHTML = "Crear factura";
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
        <div class="entrada" id="entradaEmisor">
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
                    <input type="text" name="cifEmisor" id="cifEmisor" value="21555354" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="direccion">Dirección:</label>
                <div class="field">
                    <input type="text" name="direccionEmisor" id="direccionEmisor" value="C\\Vaguada, nº 37" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="email">Email:</label>
                <div class="field">
                    <input type="text" name="emailEmisor" id="emailEmisor" value="info@gmail.com" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="telefono">Teléfono:</label>
                <div class="field">
                    <input type="text" name="telefonoEmisor" id="telefonoEmisor" value="666666666" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="logo">Logo:</label>
                <div class="field">
                    <input type="text" name="logo" id="logo" value="url" required/>
                </div>
            </div>
            <div class="field-group">
                <button class="btn" id="guardarEmisor">Guardar</button>
                <button class="btn" id="limpiarEmisor">Limpiar datos</button> 
                <span id="errorDatosEmisor" class="aviso"></span>  
            </div>
        </div>
        <div class="entrada" id="entradaCliente">
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
                    <input type="text" name="cifCliente" id="cifCliente" value="27555354" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="direccion">Dirección:</label>
                <div class="field">
                    <input type="text" name="direccionCliente" id="direccionCliente" value="C\\Vaguada, nº 37" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="email">Email:</label>
                <div class="field">
                    <input type="text" name="emailCliente" id="emailCliente" value="info2@gmail.com" required/>
                </div>
            </div>
            <div class="field-group">
                <label class="label" for="telefono">Teléfono:</label>
                <div class="field">
                    <input type="text" name="telefonoCliente" id="telefonoCliente" value="777777777" required/>
                </div>
            </div>
            <div class="field-group">
                <button class="btn" id="guardarCliente">Guardar</button>
                <button class="btn" id="limpiarCliente">Limpiar datos</button>
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
        </div>`;
        fragment.appendChild(h2);
        fragment.appendChild(descripcion);
        fragment.appendChild(boton);
    };

    document.addEventListener('DOMContentLoaded', init);
}