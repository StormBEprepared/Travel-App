document.addEventListener('DOMContentLoaded', function() {
    const placeInput = document.getElementById('placeInput');
    const addButton = document.getElementById('addButton');
    const wishlistItems = document.getElementById('wishlistItems');

    // Load existing wishlist items from LocalStorage on page load
    const existingItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    renderWishlistItems(existingItems);

    addButton.addEventListener('click', function() {
        const placeName = placeInput.value.trim();
        if (placeName) {
            const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            currentWishlist.push(placeName);
            localStorage.setItem('wishlist', JSON.stringify(currentWishlist));
            renderWishlistItems(currentWishlist);
            placeInput.value = ''; // Clear the input field
        }
    });

    function renderWishlistItems(items) {
        wishlistItems.innerHTML = '';
        items.forEach(function(item) {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
                const currentWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
                const updatedWishlist = currentWishlist.filter(i => i !== item);
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
                renderWishlistItems(updatedWishlist);
            });
            listItem.appendChild(removeButton);

            // Add the UpdateMap function with location as an argument
            listItem.addEventListener('click', function() {
                UpdateMap(item);
            });

            wishlistItems.appendChild(listItem);
        });
    }
});
