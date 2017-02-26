$(document).ready(function() {
    // show cookie event
    $( '.button1' ).on( 'click', function() {
        $( '.img2' ).show();
        $( '#headline' ).html( 'chupa is satisfied' );
    });

    // hide cookie event
    $( '.button2' ).on( 'click', function() {
        $( '.img2' ).hide();
        $( '#headline' ).html( 'feed da chupa with da cookie' );
    });

});
