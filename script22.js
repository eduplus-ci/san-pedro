let currentIndex = 0;
const temoignages = document.querySelectorAll('.testimonial');

// Fonction pour afficher un témoignage spécifique
function afficherTemoignage(index) {
    temoignages.forEach((temoignage) => temoignage.classList.remove('active'));
    temoignages[index].classList.add('active');
}

// Fonction pour changer de témoignage
function changerTemoignage(direction) {
    currentIndex += direction;

    // Boucle du carrousel
    if (currentIndex < 0) {
        currentIndex = temoignages.length - 1;
    } else if (currentIndex >= temoignages.length) {
        currentIndex = 0;
    }

    afficherTemoignage(currentIndex);
}

// Fonction pour le défilement automatique
function defilementAutomatique() {
    changerTemoignage(1); // Passe au témoignage suivant
}

// Défilement automatique toutes les 3 secondes
setInterval(defilementAutomatique, 6000);

// Afficher le premier témoignage par défaut
afficherTemoignage(currentIndex);
