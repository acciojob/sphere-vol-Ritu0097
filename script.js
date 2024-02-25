function volume_sphere() {
    var radius = document.getElementById("radius").value;
    radius = parseFloat(radius);
    if (isNaN(radius) || radius < 0){
        document.getElementById("volume").value = 'NaN';
    } 
    else {
        var volume = (4/3) * Math.PI * Math.pow(radius, 3);
        volume = volume.toFixed(4);
        document.getElementById("volume").value = volume;
    }
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;