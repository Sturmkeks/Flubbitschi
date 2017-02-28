$(document).ready(function() {
    //erstes event
    $(".ersteskaestchen").on('click', function() {
        $(".zweiteskaestchen").slideToggle("slow");
        // if ( $('.buttons').hasClass( 'hidden' ) ) {
        //     $( '.buttons' ).removeClass( 'hidden' );
        // } else {
        //     $( '.buttons' ).addClass( 'hidden' );
        // }
        $('.buttons').toggleClass('hidden');
    });
    //zweites event

    var like = 89;
    var dislike = 23;
    $('.like-container button').on('click', function() {
        like++;
        $('.like-container .counter').html(like);
        if (like == 100) {
            var test = prompt('Gewinner eines Chupinis, weil 100ter Like!');
            console.log(test);
        }
    });

    $('.dislike-container button').on('click', function() {
        dislike++;
        $('.dislike-container .counter').html(dislike);
    });

});
