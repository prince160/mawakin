// Vérifier si l'utilisateur a déjà accepté la bannière
const isBannerAccepted = localStorage.getItem('bannerAccepted');

// Si la bannière n'a pas encore été acceptée, afficher la bannière
if (!isBannerAccepted) {
    document.getElementById('banner').style.display = 'block';
}

// Fonction pour cacher la bannière et enregistrer la décision de l'utilisateur
function hideBanner() {
    document.getElementById('banner').style.display = 'none';
    localStorage.setItem('bannerAccepted', true);
}

// Ajouter un écouteur d'événement au bouton J'accepte
document.getElementById('acceptButton').addEventListener('click', hideBanner);