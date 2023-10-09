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

// Show the initial page
showPage(currentPage);
