const scrollToTopBtn = document.getElementById("back-top");

function scrollUp() {
    if (window.scrollY > 100) { // Mostra il pulsante dopo uno scroll di 100 pixel
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Mostra il pulsante per tornare in cima alla pagina
    window.addEventListener('scroll', scrollUp);
})





