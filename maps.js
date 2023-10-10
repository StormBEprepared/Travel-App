function UpdateMap(destination) {
    var harta = document.getElementById("harta");
    harta.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDwf4mpx0OpW5_KDK3ui9b8B6GwVHlR4n4&q=${destination}&maptype=satellite`
}
let DestinationNameRef = document.getElementById("destination-name");
let getInfo = () => {
    let DestinationName = DestinationNameRef.value;
    UpdateMap(DestinationName);
}
window.addEventListener("load", getInfo);
DestinationNameRef.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
        getInfo();
    }
});
