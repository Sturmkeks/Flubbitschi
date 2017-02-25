$(document).ready(function() {
    var currentChupin = 1;

    $('.roll-dice').on('click', function() {
        var random = Math.floor((Math.random() * 6 + 1));
        $('#change-chupin').attr('src', 'img/bild00' + random + '.jpg');
        currentChupin = random;
    });

    $('#previous').on('click', function() {
        var previousChupin = currentChupin - 1;
        $('#change-chupin').attr('src', 'img/bild00' + previousChupin + '.jpg');
        currentChupin--;

        // if abfrage, falls currentChupin == 1
    });

    $('#next').on('click', function() {
        var previousChupin = currentChupin + 1;
        $('#change-chupin').attr('src', 'img/bild00' + previousChupin + '.jpg');
        currentChupin++;

        // if abfrage, falls currentChupin == 6
    });
});
