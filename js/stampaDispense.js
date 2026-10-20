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

        const cover = document.createElement('div');
        if (count < (righe - 1) * 4) {
            cover.className = 'col-3 mb-4';
        } else {
            cover.className = 'col-3';
        }
        cover.classList.add('p-3');

        const link = document.createElement('a');
        link.className = 'book-cover';
        link.style.setProperty("--book-color", getRandomColor());
        link.href = `pdf/dispense/${dispensa.sigla}.pdf`;
        link.target = '_blank';
        link.title = 'Clicca per vedere la dispensa';
        link.innerHTML = `<h5 class="text-center mb-2 w-100">${dispensa.nome}</h5>`;

        cover.appendChild(link);
        container.appendChild(cover);
    });
}

function getRandomColor() {
    const letters = '01234567';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
}