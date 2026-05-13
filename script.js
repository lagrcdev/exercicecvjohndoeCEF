// Bouton retour en haut
window.addEventListener('scroll', function() {
    const btnTop = document.getElementById('btn-top');
    if (window.scrollY > 300) {
        btnTop.style.display = 'flex';
    } else {
        btnTop.style.display = 'none';
    }
});