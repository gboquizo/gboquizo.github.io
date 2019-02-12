export const pi = 3.1416;
export function sumar(x, y) {
    return x + y;
}
export function restar(x, y) {
    return x - y;
}

//Función privada.
function multiplicar(x, y) {
    return x * y;
}

export function reir() {
    console.log('jajaja');
}

export function reirFuerte() {
    console.log('JAJAJAJAJA');
}

export function reirSuave() {
    console.log('jeje');
}

//Organizando los exports para exportarlos a la vez.
function titular(cadena) {
    return `<h1>${cadena}</h1>`;
}

function parrafo(cadena) {
    return `<p>${cadena}</p>`;
}

function salto() {
    return '<br>';
}

//Exportando un objeto.
export const tags = {
    titular,
    parrafo,
    salto
}

console.log("Mostrando el resultado de una función privada: " + multiplicar(5, 10));