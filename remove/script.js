function removeColor() {
    let selectlist = document.getElementById("colorSelect");
    let selected = selectlist.selectedIndex;
    selectlist.remove(selected);
}

