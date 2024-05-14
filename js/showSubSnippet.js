function showSubSnippet(id_list, id_target, index) {
    id_list.forEach((id) => document.getElementById(id).style.display = "none");
    document.getElementById(id_target).style.display = "block";

    if (index == true) {
        id_list.forEach((id) => document.getElementById("index_"+id).style.display = "none");
        document.getElementById("index_"+id_target).style.display = "block";
    }
}