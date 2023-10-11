// Get a reference to the input element
const locationInput = document.getElementById("location-input");
const harta = document.getElementById("harta");

// Add an event listener to the input field for the "keyup" event
locationInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission

        // Get the value from the input field
        const location = locationInput.value.trim();

        if (location) {
            UpdateMap(location);
            locationInput.value = ""; // Clear the input text box
        }
    }
});

function UpdateMap(destination) {
    harta.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDwf4mpx0OpW5_KDK3ui9b8B6GwVHlR4n4&q=${destination}&maptype=satellite&zoom=10`;
}

