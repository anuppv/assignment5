function sphereVolume(){
    let volume;
    let radius = document.getElementById("radius").value;
    volume = (4/3)*(22/7)*Math.pow(radius, 3);
    volume = volume.toFixed(3);
    document.getElementById("volume").value = volume;
    return false;
}
window.onload = document.getElementById("sphere_volume").onsubmit = sphereVolume;
