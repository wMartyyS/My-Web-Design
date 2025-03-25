( function( $ ) {

    "use strict";

    $(".card, .card1").tilt({
        maxTilt: 40,
        perspective: 1400,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1200,
        maxGlare: 0.2,
        scale: 1.04
    });

}( jQuery ) );