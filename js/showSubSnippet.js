var active = null;

function showSubSnippet(id, index) {
    if (active != null) document.getElementById(active).style.display = "none";
    document.getElementById(id).style.display = "block";

    if (index == true) {
        if (active != null) document.getElementById("index_"+active).style.display = "none";
        document.getElementById("index_"+id).style.display = "block";
    }

    active = id;
}