function stampaArticoli() {
    const container = document.getElementById('articoli-container');
    console.log("Container trovato:", container);
    const articoli = tabelle.articoli;
    console.log("Articoli trovati:", articoli);

    articoli.sort((a, b) => a.nome.localeCompare(b.nome));

    let count = 0;
    const righe = Math.ceil(articoli.length / 4);
    console.log("Numero di righe:", righe);

    articoli.forEach(articolo => {
        count++;
        const card = document.createElement('div');
        if (count < (righe - 1) * 4) {
            card.className = 'col-3 mb-4';
        } else {
            card.className = 'col-3';
        }
        card.innerHTML = `
            <div class="m-3 p-3">
                <h5 class="fblog-post-title fw-bold text-center mb-2">${articolo.nome}</h5>
                <a href="pdf/articoli/${articolo.sigla}.pdf" class="btn btn-primary w-100 glass-card" target="_blank" title="">Clicca per vedere l'articolo</a>
            </div>
        `;
        container.appendChild(card);
    });
}