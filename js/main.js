'use strict';

$(document).ready(function () {
    $('#button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $('body').append('<div id="dane-programisty"></div>');
            $('#dane-programisty').append('<p>Imie: ' + data.imie + '</p>');
            $('#dane-programisty').append('<p>Nazwisko: ' + data.nazwisko + '</p>');
            $('#dane-programisty').append('<p>Zawod: ' + data.zawod + '</p>');
            $('#dane-programisty').append('<p>Firma: ' + data.firma + '</p>');
        });
    });
});
