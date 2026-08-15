function stampaDispense() {
    const container = document.getElementById('dispense-container');
    console.log("Container trovato:", container);
    const dispense = tabelle.dispense;
    console.log("Dispense trovate:", dispense);

    dispense.sort((a, b) => a.nome.localeCompare(b.nome));

    let count = 0;
    const righe = Math.ceil(dispense.length / 4);
    console.log("Numero di righe:", righe);

    dispense.forEach(dispensa => {
        count++;
        const card = document.createElement('div');
        if (count < (righe - 1) * 4) {
            card.className = 'col-3 mb-4';
        } else {
            card.className = 'col-3';
        }
        card.innerHTML = `
            <div class="m-3 p-3">
                <h5 class="fblog-post-title fw-bold text-center mb-2">${dispensa.nome}</h5>
                <a href="pdf/tesi/${dispensa.sigla}.pdf" class="m-2 p-2 no-decotarion items-align-center" target="_blank" title="Clicca per vedere la dispensa">
                    <img class="card-img-top" style="width: 75%; display: block; margin: 0 auto; border-radius: 15px;" src="img/dispense/${dispensa.immagine}" data-holder-rendered="true" />
                </a>
            </div>
        `;
        container.appendChild(card);
    });
}