//  The key is restricted from Google Cloud Console. Any bad intentioned usage will only result in errors for the end user.
//The below code prevents users to open Dev Tools from keyboard. It can still be opened by using the mouse only
/*document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode==123) {
     e.stopPropagation();
     e.preventDefault();
    }
   });*/



function UpdateMap(destination) {
    var harta = document.getElementById("harta");
    harta.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDwf4mpx0OpW5_KDK3ui9b8B6GwVHlR4n4&q=${destination}`
}
let DestinationNameRef = document.getElementById("destination-name");
let OriginNameRef = document.getElementById("origin-name");
let searchBtn = document.getElementById("search-btn");
let res = document.getElementById("result");
let AVGfuelCons=document.getElementById("fuelConsMPG");
let getInfo = () => {
    let DestinationName = DestinationNameRef.value;
    UpdateMap(DestinationName);
    calculateDistance();
}
searchBtn.addEventListener("click", getInfo);
window.addEventListener("load", getInfo);


DestinationNameRef.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
        getInfo();
    }
});
OriginNameRef.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
        getInfo();
    }
});
AVGfuelCons.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
        getInfo();
    }
});
function calculateDistance() {
    try {
        var city1 = document.getElementById('origin-name').value;
        var city2 = document.getElementById('destination-name').value;
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
        origins: [city1],
        destinations: [city2],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
    }, function(response, status) {
        if (status === 'OK') {
            var distance = response.rows[0].elements[0].distance.text;
            var duration = response.rows[0].elements[0].duration.text;
            console.log(response.rows[0]);
            let AVGfuelCons = document.getElementById('fuelConsMPG').value;
            //1 gallon = 4.54609 Liters
            //1 Mile = 1.609344 Kilometers
            let L100KM=282.481053/AVGfuelCons;
            L100KM=(Math.round(L100KM * 100) / 100).toFixed(1);
            let L1KM=L100KM/100;
            var num = distance.replace(/km/g, '');
            num=num.replace(",","");
            let totalFuelConsumed=num*L1KM; 
            totalFuelConsumed=(Math.round(totalFuelConsumed * 100) / 100).toFixed(1);
            document.getElementById('result').innerHTML = `
            Distance: ${distance}
            <br><br>
            Duration: ${duration}
            <br><br>
            L/100KM= ${L100KM}
            <br><br>
            Fuel needed: ${totalFuelConsumed} liters.`;
        } else {
            alert('Error: ' + status);
        }
    });
    } catch (error) {
        document.getElementById('result').innerHTML = `<p>${error.message}</p>`;
    }
}