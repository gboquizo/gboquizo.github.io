/** 
 *  Entrega un ejemplo donde utilices el formato JSON
 * 
 *  Para ello implementa una página con tres botones donde descargues y muestres, según el botón:
 *      Habilidades para la vida y una breve descripción.
 *      Perfiles IT más demandados y una breve descripción
 *      Tipos de desarrolladores web y una lista de habilidades
 *
 *  https: //www.eoi.es/blogs/madeon/2013/05/21/habilidades-y-destreza-en-una-persona/
 *  https: //es.wikipedia.org/wiki/Habilidades_para_la_vida
 *  https: //www.observatoriorh.com/orh-posts/los-5-perfiles-it-mas-demandados-en-las-empresas-espanolas.html
 *  https: //www.campusmvp.es/recursos/post/Desarrollador-web-Front-end-back-end-y-full-stack-Quien-es-quien.aspx
 * @author Guillermo Boquizo Sánchez
 */
{

    let init = function () {
        $("button").click(function () {
            showJSON("./json/" + $(this).attr("json"));
            $("button").css("background", "#4334E8")
            $("#boxInfo").css({
                "width": "900px",
                "padding": "15px 20px",
                "overflow": "hidden",
                "background": "#fff",
                "border-radius": "5px",
                "font-size": "1.3rem",
                "margin-top": "20px",
                "margin-right": "20px",
                "margin-bottom": "20px",
                "-webkit-box-shadow": "0 3px 6px rgba(0, 0, 0, 0.32), 0 3px 6px rgba(0, 0, 0, 0.64)",
                "-moz-box-shadow": "0 3px 6px rgba(0, 0, 0, 0.32), 0 3px 6px rgba(0, 0, 0, 0.64)",
                "-ms-box-shadow": "0 3px 6px rgba(0, 0, 0, 0.32), 0 3px 6px rgba(0, 0, 0, 0.64)",
                "-o-box-shadow": "0 3px 6px rgba(0, 0, 0, 0.32), 0 3px 6px rgba(0, 0, 0, 0.64)",
                "box-shadow": "0 3px 6px rgba(0, 0, 0, 0.32), 0 3px 6px rgba(0, 0, 0, 0.64)"
            });
        });
    }

    let showJSON = function (url) {
        $.getJSON(url, function (data) {
            let html = ``;
            $.each(data, function (index, value) {
                $("#boxInfo").css("text-align", "justify");
                if (value.aptitude && value.report) {
                    html += `<h4><b>${value.aptitude}</b>.</h4><p>${value.report}</p>`
                } else if (value.itProfile && value.definition) {
                    html += `<h4><b>${value.itProfile}</b>.</h4><p>${value.definition}</p>`
                } else if (value.type && value.skills) {
                    $("#boxInfo").css("text-align", "center");
                    html += `<h4><b>${value.type}</b></h4>`;
                    for (let skill of value.skills) {
                        html += `<p>${skill}</p>`
                    }
                }
            });
            $("#boxInfo").html(html)
        });
    }
    $(init);

}