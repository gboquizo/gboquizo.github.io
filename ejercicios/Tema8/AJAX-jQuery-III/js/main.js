{
    let init = function () {
        $('#suggestedSearch').keyup(function () {
            let value = $(this).val() !== '' ? $(this).val() : '';
            if (value.length >= 0) {
                $.ajax({
                    type: 'GET',
                    url: './info.php',
                    data: {
                        suggestedSearch: value
                    },
                    dataType: 'text',
                    success: function (results) {
                        let resultsJson =
                            results !== '' && results !== 'No se encontraron resultados' ? JSON.parse(results) : {};
                        if (!$.isEmptyObject(resultsJson)) {
                            $('#searchedInfo').html('');
                            let html = ``;
                            for (let i in resultsJson) {
                                html += `<p class="suggest">${resultsJson[i].first_name} ${resultsJson[i].last_name}</p>`;
                            }
                            $('#searchedInfo').append(html);
                            $('.suggest').click(function () {
                            $('#suggestedSearch').val($(this).text());
                            });
                        } else {
                            $('#searchedInfo').html(`<p>No se encontraron resultados</p>`);
                        }
                    },
                    complete: function () {
                        $('#searchedInfo').css('background', 'rgba(255,255,255,0.2)');
                    }
                });
            }
        });
    };
    $(init);
}