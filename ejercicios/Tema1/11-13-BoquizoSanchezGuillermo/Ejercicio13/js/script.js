/**
Conmpletar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada vez que se pulsa sobre el botón.
Autor: Guillermo Boquizo Sánchez
*/
{
    let list;
    let btnAdd;
    document.addEventListener('DOMContentLoaded', init);

    function addElement() {
        let element = document.createElement('li');

        element.textContent = "Nuevo elemento cargado por JS";

        list.appendChild(element);
    }

    function init() {

        list = document.getElementById("list");

        btnAdd = document.getElementById("add");

        btnAdd.addEventListener("click", addElement);
    }
}