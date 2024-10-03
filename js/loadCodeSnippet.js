function loadSnippet(code, file, location) {
    var path = "html/code/" + code + "/" + file + ".html";

    fetch(path)
        .then(response => response.text())
        .then((data) => {
            document.getElementById(location).innerHTML = data;

            MathJax.typeset();

            Prism.highlightAll();
        });
}