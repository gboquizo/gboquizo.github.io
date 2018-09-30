/**
Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo
por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
Autor: Guillermo Boquizo Sánchez
*/
{
    let testByID;

    function init(string) {
        testByID = document.getElementById("testByID");
        
        let sizeString = string.length;
        let upperCase = "";
        let lowerCase = "";

        for(let i = 0; i < string.length; i++) {
            if(string[i] === string[i].toUpperCase()) {
                upperCase += string[i];
            } else if (string[i] === string[i].toLowerCase()) {
                lowerCase += string[i];
            }
        }

        if (sizeString === upperCase.length) {
            testByID.textContent = "La cadena \"" + string +"\" está compuesta sólo por mayúsculas";
        } else if (sizeString === lowerCase.length) {
            testByID.textContent = "La cadena \"" + string +"\" está compuesta sólo por minúsculas";
        } else {
            testByID.textContent = "La cadena \"" + string +"\" está compuesta por mayúsculas y minúsculas";
        }
    }

    window.onload = init("Probando");
}