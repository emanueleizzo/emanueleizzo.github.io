function change(type) {
    var name = window.location.search.split("=")[1];

    var path = "html/lesson/" + tables[type][name]["Materia"] + "/" + name + ".html";

    fetch(path)
        .then(response => response.text())
        .then((data) => {
            document.getElementById("lesson").innerHTML = data;
            document.getElementById("title").innerHTML = "Lezione " + tables[type][name]["Nome"];
            document.getElementById("description").innerHTML = tables[type][name]["Descrizione"];

            MathJax.typeset();

            if (tables[type][name]["plots"] !== undefined) {
                tables[type][name]["plots"].forEach(element => {
                    if (element[4] !== undefined) {
                        plot(element[0], element[1], element[2], element[3], element[4]);
                    } else {
                        plot(element[0], element[1], element[2], element[3]);
                    }
                });
            }
        });
}