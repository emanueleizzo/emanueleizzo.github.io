function stampaArticoli() {
    const container = document.getElementById('articoli-container');
    const articoli = tabelle.articoli;

    articoli.sort((a, b) => a.nome.localeCompare(b.nome));
    let count = 0;

    articoli.forEach(articolo => {
        count++;

        const cover = document.createElement('div');
        cover.classList.add("col-6", "p-0");

        const link = document.createElement('a');
        link.className = 'paper-item';
        link.href = `pdf/articoli/${articolo.sigla}.pdf`;
        link.target = '_blank';
        link.title = 'Clicca per vedere l\'articolo';
        link.innerHTML = `
            <span class="paper-number">${count.toString().padStart(2, '0')}</span>
            <div class="paper-content">
                <div>${articolo.tipo} - ${articolo.data}</div>
                <h3>${articolo.nome}</h3>
                <p>${articolo.descrizione}</p>
            </div>
        `;

        cover.appendChild(link);
        container.appendChild(cover);
    });
}