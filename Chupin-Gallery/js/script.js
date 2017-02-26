$(document).ready(function() {
    var currentChupin = 1;

    $('.roll-dice').on('click', function() {
        var random = Math.floor((Math.random() * 6 + 1));
        $('#change-chupin').attr('src', 'img/bild00' + random + '.jpg');
        currentChupin = random;
    });

    $('#previous').on('click', function() {
        var previousChupin = currentChupin - 1;
        if (previousChupin !== 0) {
            $('#change-chupin').attr('src', 'img/bild00' + previousChupin + '.jpg');
            currentChupin--;
        } else {
            window.alert('Beginning of Chupas reached');
        }


        // if abfrage, falls currentChupin == 1
    });

    $('#next').on('click', function() {
        var nextChupin = currentChupin + 1;
        if (nextChupin !== 7) {
            $('#change-chupin').attr('src', 'img/bild00' + nextChupin + '.jpg');
            currentChupin++;
        } else {
            window.alert('End of Chupas reached');
        }

        // if abfrage, falls currentChupin == 6
    });
});
