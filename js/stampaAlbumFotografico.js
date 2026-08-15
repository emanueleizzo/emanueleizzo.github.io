function shuffle(array) {
  let indice = array.length;

  // While there remain elements to shuffle...
  while (indice != 0) {

    // Pick a remaining element...
    let idiceRandom = Math.floor(Math.random() * indice);
    indice--;

    // And swap it with the current element.
    [array[indice], array[idiceRandom]] = [
      array[idiceRandom], array[indice]];
  }
}

function stampaAlbumFotografico() {
    const containers = [
        document.getElementById('foto-container-1'),
        document.getElementById('foto-container-2'),
        document.getElementById('foto-container-3'),
        document.getElementById('foto-container-4')
    ];
    console.log("Container trovati:", containers);
    const foto = tabelle.foto;
    console.log("Foto trovate:", foto);

    shuffle(foto);

    let count = 0;
    const righe = Math.ceil(foto.length / 4);
    console.log("Numero di righe:", righe);

    foto.forEach(foto => {
        const card = document.createElement('div');
        if (count < (righe - 1) * 4) {
            card.className = 'mb-4';
        }
        card.innerHTML = `
            <img src="img/foto/${foto.sigla}.${foto.formato}" class="glass-card w-100" onclick="zoomFoto('img/foto/${foto.sigla}.${foto.formato}', '${foto.nome}')" alt="${foto.nome}" title="${foto.nome}"/>
        `;
        containers[count % 4].appendChild(card);
        count++;
    });
}