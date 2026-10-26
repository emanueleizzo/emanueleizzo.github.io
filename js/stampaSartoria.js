function caricaGalleriaSartoria() {
    const container = document.getElementById('sartoria-container');
    const cards = generaFotoSartoria();
    cards.forEach(card => container.appendChild(card));
}

function ritornaGalleriaSartoria() {
    const container = document.getElementById('sartoria-container');
    resettaAnimazioni(container);
    container.classList.add("dissolve-right");
    container.addEventListener("animationend", function handleDissolveEnd(event) {
        if (event.target !== container || event.animationName !== "dissolve-right") return;
        container.innerHTML = "";
        container.removeEventListener("animationend", handleDissolveEnd);
        container.classList.remove("dissolve-right");
        container.classList.remove("d-flex-inline");
        container.classList.add("d-flex");
        caricaGalleriaSartoria();
        void container.offsetWidth;
        container.classList.add("fade-in-left");
    });
}

function stampaProgettoSartoria(progetto) {
    const container = document.getElementById("sartoria-container");
    resettaAnimazioni(container);
    container.classList.add("dissolve-left");
    container.addEventListener("animationend", function handleDissolveEnd(event) {
        if (event.target !== container || event.animationName !== "dissolve-left") return;
        container.innerHTML = "";
        container.removeEventListener("animationend", handleDissolveEnd);
        container.classList.remove("dissolve-left");
        container.classList.remove("d-flex");
        container.classList.add("d-flex-inline");
        container.appendChild(creaGoBackButton());
        const sezioni = generaSezioni(progetto);
        container.appendChild(sezioni);
        void container.offsetWidth;
        container.classList.add("fade-in-right");
    });
}

function resettaAnimazioni(container) {
    container.classList.remove("dissolve-left", "dissolve-right", "fade-in-right", "fade-in-left");
    void container.offsetWidth;
}

function generaFotoSartoria() {
    const progetti = tabelle.progetti_sartoria;
    const cards = [];
    progetti.sort((a, b) => a.nome.localeCompare(b.nome));
    progetti.forEach(progetto => {
        const card = document.createElement('div');
        const cartella = progetto.nome.replace(" ", "_").toLowerCase();
        card.classList.add('col-3', 'mb-4');
        card.style.transform = 'rotate(' + (Math.random() * 10 - 5) + 'deg)';
        card.innerHTML = `
            <div class="polaroid" onclick="stampaProgettoSartoria('${progetto.nome}')">
                <img src="img/sartoria/${cartella}/${progetto.immagine}" alt="${progetto.nome}" class="w-100 mb-3">
                <em class="handwriting">${progetto.nome}</em>
            </div>
        `;
        cards.push(card);
    });
    return cards;
}

function generaSezioni(progetto) {
    const progettoTrovato = tabelle.progetti_sartoria.find(p => p.nome === progetto);
    const cartella = progettoTrovato.nome.replace(" ", "_").toLowerCase();
    const row = document.createElement('div');
    row.classList.add('row', 'align-items-start');
    const card = document.createElement('div');
    card.classList.add('col-4', 'px-3', 'mb-3');
    card.style.transform = 'rotate(' + (Math.random() * 10 - 5) + 'deg)';
    card.innerHTML = `
        <div class="polaroid">
            <img src="img/sartoria/${cartella}/${progettoTrovato.immagine}" alt="${progettoTrovato.descrizione_foto}" class="w-100 mb-3">
            <em class="handwriting-s">${progettoTrovato.descrizione_foto}</em>
        </div>
    `;
    row.appendChild(card);
    const contenuto = document.createElement('div');
    contenuto.classList.add('col-8', 'px-5', 'mb-3');
    contenuto.innerHTML = `
        <div>
            <h2 class="text-gold mb-2">${progettoTrovato.nome}</h2>
            <h3>${progettoTrovato.descrizione_costume}</h3>
        </div>
    `;
    const moodboard = document.createElement('div');
    moodboard.classList.add('mt-4');
    moodboard.innerHTML = `
        <h2 class="mb-2">Moodboard</h2>
        <img src="img/sartoria/${cartella}/moodboard.png" alt="Moodboard ${progettoTrovato.nome}" class="w-100 mb-3">
    `;
    contenuto.appendChild(moodboard);
    row.appendChild(contenuto);
    for (const [pezzo, dettagli] of Object.entries(progettoTrovato.pezzi)) {
        
    }
    return row;
}

function creaGoBackButton() {
    const container = document.createElement('div');
    container.classList.add('w-100','d-flex', 'justify-content-start', 'mb-3');
    const button = document.createElement('button');
    button.type = "button";
    button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" width=24px height=24px xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#d4af6a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>Torna alla galleria';
    button.classList.add('btn-transparent');
    button.addEventListener("click", ritornaGalleriaSartoria);
    container.appendChild(button);
    return container;
}