//Importando un solo elemento.
import {
    pi
} from './custom.js'

//Importando varios elementos
import {
    sumar,
    restar,
}
from './custom.js';

console.log("\nEl valor importado de pi es " + pi);
console.log("El resultado de sumar 3 a pi es " +
    sumar(pi, 3));
console.log("El resultado de restar 3 a pi es " + restar(pi, 3).toFixed(5));



//No es accesible, provocará un ReferenceError
//console.log(multiplicar(5, 10));

//Sobrescribiría a la referencia fallida no importada.
/*
function multiplicar(x, y) {
    return x / y;
}*/


//Empleando alias
import * as risas from './custom.js';

console.log("\nEmpleando alias:")
risas.reir();
risas.reirFuerte();
risas.reirSuave();

import {
    tags
} from './custom.js';

console.log("\n")
console.log(tags.titular('¡Hola!'));
console.log(tags.parrafo('Esto es un test de los módulos ES2015'));