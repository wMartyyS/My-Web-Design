document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                swiper.autoplay.start();
            } else {
                swiper.autoplay.stop();
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.swiper-slide').forEach(function(slide) {
        observer.observe(slide);
    });
});