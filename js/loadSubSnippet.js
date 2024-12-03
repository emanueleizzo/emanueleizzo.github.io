function loadSubSnippet(subject) {
    var path = "html/subject/" + subject + ".html";

    fetch(path)
        .then(response => response.text())
        .then((data) => {
            document.getElementById("subject").innerHTML = data;
        });
}