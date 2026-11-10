let libroAttivo = null;

function generaDescrizione(libro, descrizioneElemento) {
    const descrizioneTesto = document.createElement("p");
    descrizioneTesto.textContent = libro.descrizione;
    descrizioneTesto.id = libro.id + "_descrizioneTesto";
    descrizioneTesto.classList.add("mb-3", "text-wrap", "hidden");

    const link = document.createElement("a");
    link.href = libro.link;
    link.id = libro.id + "_descrizioneLink";
    link.target = "_blank";
    link.classList.add("btn", "btn-gold", "hidden");
    link.textContent = "Vai al libro";

    descrizioneElemento.appendChild(descrizioneTesto);
    descrizioneElemento.appendChild(link);
}

function pulisciDescrizione(libro) {
    if (libro !== null) {
        const descrizioneAttiva = document.getElementById(libro.id + "_descrizioneBox");
        if (descrizioneAttiva) {
            descrizioneAttiva.innerHTML = "";
        }
    }
}

function stampaLibri() {
    const container = document.getElementById("libri-container");
    const libri = tabelle.libri;

    if (libri.saghe.length > 0) {
        libri.saghe.forEach((saga) => {
            const sagaTitolo = document.createElement("h3");
            sagaTitolo.textContent = saga.nome;
            sagaTitolo.classList.add(
                "text-gold",
                "text-bold",
                "divisor-end",
                "w-100",
                "mb-4",
            );
            container.appendChild(sagaTitolo);

            const riga = document.createElement("div");
            riga.classList.add(
                "row",
                "mb-3",
                "justify-content-center",
                "scroll-horizontal",
            );

            generaLibri(saga.libri, saga.nome, riga);

            container.appendChild(riga);
        });
    }

    if (libri.misti.length > 0) {
        const sagaTitolo = document.createElement("h3");
        sagaTitolo.textContent = "Libri misti";
        sagaTitolo.classList.add(
            "text-gold",
            "text-bold",
            "divisor-end",
            "w-100",
            "mb-3",
        );
        container.appendChild(sagaTitolo);

        const riga = document.createElement("div");
        riga.classList.add(
            "row",
            "mb-3",
            "justify-content-around",
            "scroll-horizontal",
        );

        generaLibri(libri.misti, "misti", riga);

        container.appendChild(riga);
    }
}

function generaLibri(libri, folder, riga) {
    libri.forEach((libro) => {
        const libroElemento = document.createElement("div");
        libroElemento.onclick = () => mostraInfo(libro);
        libroElemento.classList.add("col-2", "flex", "mb-3", "row");
        libroElemento.style.width = "fill";

        const immagine = document.createElement("img");
        immagine.classList.add("copertina-libro");
        immagine.src = "img/libri/" + folder.toLowerCase().replaceAll(" ", "_") + "/" + libro.immagine;
        immagine.alt = libro.nome;

        const descrizioneElemento = document.createElement("div");
        descrizioneElemento.id = libro.id + "_descrizioneBox";
        descrizioneElemento.classList.add("d-flex-block", "hidden");

        libroElemento.appendChild(immagine);

        riga.appendChild(libroElemento);
        riga.appendChild(descrizioneElemento);
    });
}

async function mostraInfo(libro) {
    console.log("Libro selezionato: ", libro, "\nLibro attivo: ", libroAttivo);
    if (libroAttivo !== libro) {
        if (libroAttivo !== null) {
            animateChiusura(libroAttivo);
            animateApertura(libro);

            libroAttivo = libro;
        } else {
            animateApertura(libro);

            libroAttivo = libro;
        }
    }
}

function animateApertura(libro) {
    console.log("Apertura animata per libro: ", libro);
    const descrizione = document.getElementById(libro.id + "_descrizioneBox");

    descrizione.classList.remove("hidden");
    descrizione.classList.remove("shrink-right");
    descrizione.classList.add("enlarge-right");

    generaDescrizione(libro, descrizione);

    const descrizioneTesto = document.getElementById(libro.id + "_descrizioneTesto");
    const link = document.getElementById(libro.id + "_descrizioneLink");

    setTimeout(() => {
        descrizioneTesto.classList.remove("hidden");
        descrizioneTesto.classList.remove("dissolve-left");
        descrizioneTesto.classList.add("fade-in-left");

        link.classList.remove("hidden");
        link.classList.remove("dissolve-left");
        link.classList.add("fade-in-left");
    }, 500);
}

function animateChiusura(libro) {
    console.log("Chiusura animata per libro: ", libro);
    const descrizione = document.getElementById(libro.id + "_descrizioneBox");
    const descrizioneTesto = document.getElementById(libro.id + "_descrizioneTesto");
    const link = document.getElementById(libro.id + "_descrizioneLink");
    console.log("Box descrizione trovata: ", descrizione, "\nTesto descrizione trovata: ", descrizioneTesto, "\nLink descrizione trovato: ", link);

    descrizioneTesto.classList.remove("hidden");
    descrizioneTesto.classList.remove("fade-in-left");
    descrizioneTesto.classList.add("dissolve-left");

    link.classList.remove("hidden");
    link.classList.remove("fade-in-left");
    link.classList.add("dissolve-left");

    pulisciDescrizione(libroAttivo);

    setTimeout(async () => {
        descrizione.classList.remove("hidden");
        descrizione.classList.remove("enlarge-right");
        descrizione.classList.add("shrink-right");
    }, 501);
}