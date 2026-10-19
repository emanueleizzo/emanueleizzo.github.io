function stampaProgettoSartoria(progetto) {
    const container = document.getElementById('progetto-sartoria-container');
    console.log("Container trovato:", container);
    const progettoTrovato = tabelle.progetti_sartoria.find(p => p.nome === progetto);
    console.log("Progetto di sartoria trovato:", progettoTrovato);
    const cartella = progettoTrovato.nome.replace(" ", "_").toLowerCase();

    if (container.style.display === 'none') {
        container.style.display = 'flex';
        container.classList.add("container", "parchment-box", "p-5");
    }

    const sezioni = progettoTrovato.informazioni ? progettoTrovato.informazioni.sezioni : [];

    for (const sezione of sezioni) {
        console.log("Sezione:", sezione);

        const segmento = document.createElement('div');
        segmento.classList.add(`col-${sezione.formato}`);
        segmento.innerHTML += `<h3>${sezione}</h3>`;

        container.appendChild(segmento);
    }
}