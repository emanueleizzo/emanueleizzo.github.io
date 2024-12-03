function showSubSnippet(id_list, id_target) {
    id_list.forEach((id) => document.getElementById(id).style.display = "none");
    document.getElementById(id_target).style.display = "block";
}