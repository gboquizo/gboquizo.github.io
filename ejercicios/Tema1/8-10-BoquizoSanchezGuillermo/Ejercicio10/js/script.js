/**
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
es decir, si se lee de la misma forma desde la izquierda y desde la derecha,
Ejemplo de palíndromo complejo:"La ruta nos aporto otro paso natural"
Autor: Guillermo Boquizo Sánchez
*/
{
    let testByID;
    function init() { 
        let isPalindromo = function (string) {
            testByID = document.getElementById("testByID");
            testByID = document.getElementById("testByID");
            let stringWithoutSpaces = string.replace(/ /g, "")
            let reverseStringWithoutSpaces = "";
            for (let i = stringWithoutSpaces.length - 1; i >= 0; i--) {
                reverseStringWithoutSpaces += stringWithoutSpaces[i];
            }
            stringWithoutSpaces = stringWithoutSpaces.toLowerCase();
            reverseStringWithoutSpaces = reverseStringWithoutSpaces.toLowerCase();
            if (stringWithoutSpaces === reverseStringWithoutSpaces) {
                testByID.textContent =  "La cadena \"" + string + "\" es un palindromo";
            } else {
                testByID.textContent = "La cadena \"" + string + "\" no es un palindromo";
            }
        }
        isPalindromo("La turba brutal");
    }
    window.onload = init;
}