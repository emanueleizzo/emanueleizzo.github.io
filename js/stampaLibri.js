function stampaLibri() {
    const container = document.getElementById('libri-container');
    console.log("Container trovato:", container);
    const libri = tabelle.libri;
    console.log("Libri trovati:", libri);
    if (libri.saghe.length > 0) {
        libri.saghe.forEach(saga => {
            console.log("Saga trovata:", saga);
            const sagaTitolo = document.createElement('h3');
            sagaTitolo.textContent = saga.nome;
            sagaTitolo.classList.add('text-gold', 'text-bold', 'divisor-end', 'w-100', 'mb-4');
            container.appendChild(sagaTitolo);

            const riga = document.createElement('div');
            riga.classList.add('row', 'mb-3', 'justify-content-around', 'scroll-horizontal');
            saga.libri.forEach(libro => {
                const link = document.createElement('a');
                link.href = libro.link;
                link.target = '_blank';
                link.classList.add('col-3', 'mb-3');
                const img = document.createElement('img');
                img.classList.add('w-100');
                img.src = 'img/libri/' + saga.nome.toLowerCase().replaceAll(' ', '_') + '/' + libro.immagine;
                img.alt = libro.nome;
                link.appendChild(img);
                riga.appendChild(link);
            });
            container.appendChild(riga);
        });
    }
    if (libri.misti.length > 0) {
        const sagaTitolo = document.createElement('h3');
        sagaTitolo.textContent = 'Libri misti';
        sagaTitolo.classList.add('text-gold', 'text-bold', 'divisor-end', 'w-100', 'mb-3');
        container.appendChild(sagaTitolo);
    }
}