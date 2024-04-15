function change(type) {
    var name = window.location.search.split("=")[1];

    var path;
    if (type == "lesson") {
        path = "html/" + type + "/" + tables[type][name]["Materia"] + "/" + name + ".html";
    } else {
        path = "html/" + type + "/" + name + ".html";
    }

    fetch(path)
        .then(response => response.text())
        .then((data) => {
            document.getElementById(type).innerHTML = data;
            
            switch (type) {
                case 'lesson':
                    document.getElementById("title").innerHTML = "Lezione " + tables[type][name]["Nome"]; 
                    break;
                case 'code': 
                    document.getElementById("title").innerHTML = "Codice " + tables[type][name]["Nome"]; 
                    break;
                case 'article': 
                    document.getElementById("title").innerHTML = "Articolo " + tables[type][name]["Nome"]; 
                    break;
            }

            document.getElementById("description").innerHTML = tables[type][name]["Descrizione"];

            MathJax.typeset();

            Prism.highlightAll();

            if (tables[type][name]["Plots"] !== undefined) {
                tables[type][name]["Plots"].forEach(element => {
                    if (element[4] !== undefined) {
                        plot(element[0], element[1], element[2], element[3], element[4]);
                    } else {
                        plot(element[0], element[1], element[2], element[3]);
                    }
                });
            }
        });
}