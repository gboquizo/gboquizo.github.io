{

    let btnWindowClose;

    function init() {
        btnWindowClose = document.getElementById("windowClose");
        btnWindowClose.addEventListener("click", windowClose);
    }

    let windowClose = function () {
        window.close();
    }

    document.addEventListener("DOMContentLoaded", init);
}