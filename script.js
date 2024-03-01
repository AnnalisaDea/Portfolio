const scrollToTopBtn = document.getElementById("back-top");
const galleryImages = document.querySelectorAll(".img-works img");
const chipsBtn = document.getElementsByClassName("chips");
let filterValue = "all";


function scrollUp() {
    if (window.scrollY > 100) { // Mostra il pulsante dopo uno scroll di 100 pixel
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
}

function activeChips(e) {
    //Guardo quale chips era attiva prima e tolgo la classe "active"
    let beforeChipActive = document.querySelector(".chips.active")
    beforeChipActive.className = beforeChipActive.className.replace(" active", "");


    //Guardo quale chips è stata cliccata e aggiungo la classe "active"
    let cuttentChipActive = e.target;
    cuttentChipActive.className += " active";


    //Guardo qual è il valore di 'data-filter' della chips cliccata
    const filterValue = cuttentChipActive.getAttribute('data-filter');
    console.log(filterValue)


    //filtro in base al valore della chips
    galleryImages.forEach(image => {
        if (filterValue === 'all' || image.dataset.category === filterValue) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    })
}


document.addEventListener('DOMContentLoaded', function () {
    // Mostra il pulsante per tornare in cima alla pagina
    window.addEventListener('scroll', scrollUp);

    //per ciascuna chisp controllo se si verifica l'evento click
    for (let i = 0; i < chipsBtn.length; i++) {
        chipsBtn[i].addEventListener('click', (e) => {
            activeChips(e);
        });
    }
})






