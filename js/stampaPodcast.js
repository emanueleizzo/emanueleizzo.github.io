function stampaPodcast() {
    const container = document.getElementById("podcast-container");
    const podcast = tabelle.podcast;
    const numeroPodcast = podcast.length;
    let count = 0;

    podcast.forEach(p => {
        count++;

        const riga = document.createElement("div");
        riga.classList.add("row", "mb-5");

        const copertina = document.createElement("img");
        copertina.src = "img/podcast/" + p.copertina;
        copertina.alt = p.nome;
        copertina.classList.add("col-2", "podcast-pic", "p-0");

        const info = document.createElement("div");
        info.classList.add("col-10", "ps-5");

        const titolo = document.createElement("h3");
        titolo.classList.add("text-gold", "mb-3");
        titolo.textContent = p.nome;
        info.appendChild(titolo);

        const sottotitolo = document.createElement("h4");
        sottotitolo.classList.add("mb-3");
        sottotitolo.textContent = p.sottotitolo;
        info.appendChild(sottotitolo);

        const descrizione = document.createElement("p");
        descrizione.textContent = p.descrizione;
        descrizione.classList.add("mb-3");
        info.appendChild(descrizione);

        const link = document.createElement("a");
        link.href = p.link;
        link.target = "_blank";
        link.classList.add("btn", "btn-gold");
        link.textContent = "Vai al podcast";
        info.appendChild(link);

        riga.appendChild(copertina);
        riga.appendChild(info);

        container.appendChild(riga);

        let innerCount = 0;
        p.puntate.forEach(pp => {
            innerCount++;

            const rigaPuntate = document.createElement("div");
            rigaPuntate.classList.add("row");

            const puntata = document.createElement("iframe");
            puntata.classList.add("col-4", "px-3", "mb-3");
            puntata.src = pp.link;
            puntata.width = "100%";
            puntata.height = "152";
            puntata.frameBorder = "0";
            puntata.allowFullscreen = "";
            puntata.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
            puntata.loading = "lazy";
            rigaPuntate.appendChild(puntata);

            const descrizione = document.createElement("div");
            descrizione.classList.add("col-8", "px-3", "mb-3");

            const titolo = document.createElement("h4");
            titolo.classList.add("mb-2");
            titolo.textContent = pp.nome;
            descrizione.appendChild(titolo);

            const testo = document.createElement("p");
            testo.textContent = pp.descrizione;
            descrizione.appendChild(testo);

            if ((numeroPodcast > 1 && count < numeroPodcast) && (innerCount === p.puntate.length)) {
                rigaPuntate.classList.add("divisor-end", "mb-5", "pb-4");
            }

            rigaPuntate.appendChild(descrizione);
            container.appendChild(rigaPuntate);
        });
    });
}