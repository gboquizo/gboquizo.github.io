/**
 * Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por
 * pantalla los doce nombres utilizando la función alert().
 * @author Guillermo Boquizo Sánchez
 */

{
  let arrayMonths = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  let stringMonths = "";
  for (i in arrayMonths) {
    stringMonths += arrayMonths[i] + "\n";
  }

  alert(stringMonths);
}