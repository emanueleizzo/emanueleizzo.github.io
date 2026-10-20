function stampaProgettoSartoria(progetto) {
    const container = document.getElementById('progetto-sartoria-container');
    const riga = document.getElementById('riga-informazioni');
    console.log("Container trovato:", container);
    const progettoTrovato = tabelle.progetti_sartoria.find(p => p.nome === progetto);
    console.log("Progetto di sartoria trovato:", progettoTrovato);
    const cartella = progettoTrovato.nome.replace(" ", "_").toLowerCase();

    if (container.style.display == 'none') {
        container.style.display = 'flex';
    } 

    const sezioni = progettoTrovato.informazioni ? progettoTrovato.informazioni.sezioni : [];

    for (const sezione of sezioni) {
        console.log("Sezione:", sezione);
        const informazioni = progettoTrovato.informazioni ? progettoTrovato.informazioni[sezione.toLowerCase()] : {};

        const segmento = document.createElement('div');
        segmento.classList.add(`col-${informazioni.formato}`, "mb-3");
        segmento.innerHTML += `
            <h2 class="text-center">${sezione}</h2>
            <img src="img/${cartella}/${informazioni.immagine}" alt="${sezione}"><p>${informazioni.descrizione}</p>
        `;
        riga.appendChild(segmento);
    }
}