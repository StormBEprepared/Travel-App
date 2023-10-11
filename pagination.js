// JavaScript for Pagination
const cardContainers = document.querySelectorAll('.card-container');
const prevButton = document.getElementById('prevPage');
const nextButton = document.getElementById('nextPage');
let currentPage = 1;

function showPage(page) {
    currentPage = page;
    cardContainers.forEach(container => {
        container.style.display = 'none';
    });
    document.getElementById(`page${currentPage}`).style.display = 'flex';
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        showPage(currentPage - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < cardContainers.length) {
        showPage(currentPage + 1);
    }
});

// Function to create card elements and populate them with data
function createCard(city, text, folderLink) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Apply your existing CSS class
    card.classList.add('your-existing-card-class');

    const card2 = document.createElement('div');
    card2.className = 'card2';

    const contentOfTravelled = document.createElement('div');
    contentOfTravelled.className = 'contentOfTravelled';

    const title = document.createElement('h4');
    title.textContent = city;

    const description = document.createElement('p');
    description.textContent = text;

    const folderLinkElement = document.createElement('a');
    folderLinkElement.href = folderLink;
    folderLinkElement.textContent = 'Resources/Pictures';
    // Remove the underline by setting the textDecoration style property
    folderLinkElement.style.textDecoration = 'none';

    contentOfTravelled.appendChild(title);
    contentOfTravelled.appendChild(description);
    contentOfTravelled.appendChild(folderLinkElement);

    card2.appendChild(contentOfTravelled);
    card.appendChild(card2);

    // Add an event listener to each card to call the UpdateMap function
    card.addEventListener('click', () => {
        UpdateMap(city);
    });

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '35%';

    // Add an event listener to the delete button
    deleteButton.addEventListener('click', () => {
        removeLocation(city);
    });

    // Append the delete button to the card
    card2.appendChild(deleteButton);

    return card;
}

// Function to add a new location card
function addLocation() {
    const cityInput = document.getElementById('cityInput').value;
    const textInput = document.getElementById('textInput').value;
    const folderLinkInput = document.getElementById('folderLinkInput').value;

    // Create a new card with the provided data
    const card = createCard(cityInput, textInput, folderLinkInput);

    // Append the new card to the appropriate page (you might need to manage page numbering)
    const currentPageContainer = document.getElementById(`page${currentPage}`);
    currentPageContainer.appendChild(card);

    // Add your existing CSS class to the card
    card.classList.add('your-existing-card-class');
    
    // Add a class to the card container for better layout control
    currentPageContainer.classList.add('card-row');

    // Save the data in local storage
    const locationData = {
        city: cityInput,
        text: textInput,
        folderLink: folderLinkInput,
    };

    // Retrieve existing data from local storage
    const existingData = JSON.parse(localStorage.getItem('locations')) || [];

    // Add the new data to the existing data
    existingData.push(locationData);

    // Store the updated data in local storage
    localStorage.setItem('locations', JSON.stringify(existingData));
}

// Handle the "Add Location" button click
const addLocationButton = document.getElementById('addLocation');
addLocationButton.addEventListener('click', addLocation);

// Load data from local storage when the page is refreshed
window.addEventListener('load', () => {
    const storedData = JSON.parse(localStorage.getItem('locations'));
    if (storedData && Array.isArray(storedData) && storedData.length > 0) {
        storedData.forEach(data => {
            const { city, text, folderLink } = data;
            const card = createCard(city, text, folderLink);

            // Append the card to the appropriate page (you might need to manage page numbering)
            const currentPageContainer = document.getElementById(`page${currentPage}`);
            currentPageContainer.appendChild(card);

            // Add your existing CSS class to the card
            card.classList.add('your-existing-card-class');
            
            // Add a class to the card container for better layout control
            currentPageContainer.classList.add('card-row');
        });
    }
});
// Function to remove a location card based on the city name
function removeLocation(cityName) {
    // Ask for confirmation
    const confirmation = confirm(`Are you sure you want to delete all entries for ${cityName}?`);
    
    if (confirmation) {
        // Find the card with the matching city name
        const cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            const titleElement = card.querySelector('h4');
            if (titleElement.textContent === cityName) {
                // Remove the card's parent, which is the card container
                card.parentNode.remove();

                // Remove the data from local storage
                const storedData = JSON.parse(localStorage.getItem('locations'));
                const updatedData = storedData.filter(data => data.city !== cityName);
                localStorage.setItem('locations', JSON.stringify(updatedData));
                // Refresh the page as if one item gets deleted the rest will disappear and only appear once page refreshed
                location.reload();

            }
        });
    } else {
        // Do nothing if the user clicked "Cancel"
        
    }
}
