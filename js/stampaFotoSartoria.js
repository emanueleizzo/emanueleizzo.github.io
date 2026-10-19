function stampaFotoSartoria() {
    const container = document.getElementById('foto-sartoria-container');
    console.log("Container trovato:", container);
    const progetti = tabelle.progetti_sartoria;
    console.log("Progetti di sartoria trovati:", progetti);

    progetti.sort((a, b) => a.nome.localeCompare(b.nome));

    progetti.forEach(progetto => {
        const card = document.createElement('div');
        card.className = 'col-3 mb-4';
        const cartella = progetto.nome.replace(" ", "_").toLowerCase();
        card.style.transform = 'rotate(' + (Math.random() * 10 - 5) + 'deg)';
        card.innerHTML = `
            <div class="polaroid" onclick="stampaProgettoSartoria('${progetto.nome}')">
                <img src="img/sartoria/${cartella}/${progetto.immagine}" alt="${progetto.nome}" class="w-100 mb-3">
                <em class="handwriting">${progetto.nome}</em>
            </div>
        `;
        container.appendChild(card);
    });
}