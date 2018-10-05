/**
* Mejorar el ejemplo anterior indicando en todo momento al usuario el número de caracteres que aún puede escribir.
* Además, se debe permitir pulsar las teclas Backspace, Supr.y las flechas
* horizontales cuando se haya llegado al máximo número de caracteres.

* @Author: Guillermo Boquizo Sánchez
*/
{
    const CHARACTERS_LIMIT = 100;

    let text;
    let infoMsg;
    let characterCode;

    document.addEventListener('DOMContentLoaded', init);

    let controlCharacter = function (ev) {

        characterCode = ev.key;

        console.log(characterCode);

        if (characterCode === 'ArrowLeft' || characterCode === 'ArrowRight' || characterCode === 'Delete' || characterCode === 'Backspace') {
            return true;
        } else if (text.value.length >= CHARACTERS_LIMIT) {
            return false;
        } else {
            return true;
        }
    };

    function init() {

        text = document.getElementById('text');

        infoMsg = document.getElementById('infoMsg');

        //text.addEventListener("keypress", controlCharacter);
        text.addEventListener("keyup", updateInfo);

        text.onkeypress = controlCharacter;

        //text.onkeyup = updateInfo;
    }

    let updateInfo = function () {
        if (text.value.length >= CHARACTERS_LIMIT) {
            infoMsg.innerHTML = '<p> El máximo de caracteres posibles es ' + CHARACTERS_LIMIT + '</p>';
            infoMsg.style.color = 'darkred';
        } else {
            infoMsg.innerHTML = 'Te faltan ' + (CHARACTERS_LIMIT - text.value.length) + ' para llegar al tope';
        }
    };
}