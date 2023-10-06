// Get references to the content divs and navbar list items
const contentDivs = document.querySelectorAll('.content');
const navbarItems = document.querySelectorAll('.navbar li');

// Function to hide all content divs
function hideAllContent() {
    contentDivs.forEach(content => {
        content.style.display = 'none';
    });
}

// Function to show the content associated with the clicked navbar item
function showContent(targetId) {
    hideAllContent(); // Hide all content first
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
        targetContent.style.display = 'block';
    }
}

// Add click event listeners to navbar list items
navbarItems.forEach(item => {
    item.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        showContent(targetId);
    });
});

// Show the initial content when the page loads
showContent('home-content'); // Change 'home-content' to the default content ID you want to display
