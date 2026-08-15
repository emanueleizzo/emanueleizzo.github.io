document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.createElement('div');
    overlay.id = 'lightbox-overlay';

    const immagine = document.createElement('img');
    immagine.id = 'lightbox-img';
    immagine.classList.add('glass-card');

    const chiudiBtm = document.createElement('button');
    chiudiBtm.id = 'lightbox-close';
    chiudiBtm.textContent = '✕';
    chiudiBtm.setAttribute('aria-label', 'Chiudi');

    overlay.appendChild(chiudiBtm);
    overlay.appendChild(immagine);
    document.body.appendChild(overlay);

    function closeLightbox() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        immagine.src = '';
    }

    chiudiBtm.addEventListener('click', function (e) {
        e.stopPropagation();
        closeLightbox();
    });

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
    });

    window.zoomFoto = function (src, alt) {
        immagine.src = src;
        immagine.alt = alt || '';
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
});