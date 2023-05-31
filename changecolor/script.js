function changeColor(){
    let colors = document.getElementById("colorSelect");
    let pColor = document.getElementsByTagName("p")[0];
    pColor.style.color = colors.value;
}