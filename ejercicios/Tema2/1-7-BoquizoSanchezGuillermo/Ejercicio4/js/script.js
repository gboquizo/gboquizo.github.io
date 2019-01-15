/**
 * A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola",
 * "adios", 2];
 * 1. Determinar cual de los dos elementos de texto es mayor
 * 2. Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
 * necesarios para obtener un resultado true y otro resultado false
 * 3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
 * elementos numéricos
 * @author Guillermo Boquizo Sánchez
 */

{
  let strings = [],
    booleans = [],
    numbers = [];

  let valueSort = function () {
    var valores = [true, 5, false, "hola", "adiós", 2];
    for (let i = 0; i < valores.length; i++) {
      if (typeof valores[i] === "string") {
        strings.push(valores[i]);
      } else if (typeof valores[i] === "booleans") {
        booleans.push(valores[i]);
      } else if (typeof valores[i] === "numbers") {
        numbers.push(valores[i]);
      }
    }
  };

  let checkStrings = function () {
    console.log(
      "Comprobador de cadenas " + "(" + strings[0] + "," + strings[1] + ")"
    );
    if (strings[0].length < strings[1].length) {
      console.log(
        "La cadena " + strings[0] + " es menor que la cadena " + strings[1]
      );
    } else if (string[0].length > strings[1].length) {
      console.log(
        "La cadena " + strings[0] + " es mayor que la cadena " + strings[1]
      );
    } else {
      console.log(
        "La cadena " +
        strings[0] +
        " es del mismo tamaño que la cadena " +
        strings[1]
      );
    }
  };

  let useBooleans = function () {
    let valueFalse = booleans[0] && booleans[1];
    let valueTrue = booleans[0] || booleans[1];
    console.log(
      "Usando operadores booleanos " +
      "(" +
      booleans[0] +
      "," +
      booleans[1] +
      ")"
    );
    console.log("El resultado para && es " + valueFalse);
    console.log("Usando el || obtenemos " + valueTrue);
  };

  let mathematicalOperations = function () {
    console.log(
      "Operaciones matemáticas " + "(" + numbers[0] + "," + numbers[1] + ")"
    );
    console.log(
      "El resultado de la suma de los dos valores es: " +
      (numbers[0] + numbers[1])
    );
    console.log(
      "El resultado de la resta de los dos valores es: " +
      (numbers[0] - numbers[1])
    );
    console.log(
      "El resultado de la multiplicación de los dos valores es: " +
      numbers[0] * numbers[1]
    );
    console.log(
      "El resultado de la división de los dos valores es: " +
      numbers[0] / numbers[1]
    );
    console.log(
      "El resultado del módulo de los dos valores es: " +
      (numbers[0] % numbers[1])
    );
  };

  valueSort();
  checkStrings();
  useBooleans();
  mathematicalOperations();
}