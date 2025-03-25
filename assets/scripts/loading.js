document.addEventListener("DOMContentLoaded", function() {
    let loaderRemoved = false;
    document.body.classList.add('loading');

    const removeLoader = () => {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen && !loaderRemoved) {
            loadingScreen.setAttribute('transition-style', 'out:circle:hesitate');
            setTimeout(function() {
                loadingScreen.remove();
                document.body.classList.remove('loading');
                loaderRemoved = true;
            }, 1500);
        }
    };

    window.onload = function() {
        setTimeout(removeLoader, 1000);
    };

    setTimeout(function() {
        if (!loaderRemoved) {
            removeLoader();
        }
    }, 1000);
});