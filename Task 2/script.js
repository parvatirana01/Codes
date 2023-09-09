    // Function to add a product to the wishlist
    function addToWishlist(productName) {
        const wishlistItems = document.getElementById('wishlist-items');
        const listItem = document.createElement('li');
        listItem.textContent = productName;
        wishlistItems.appendChild(listItem);
    }

    // Function to remove a product from the wishlist
    function removeFromWishlist(productName) {
        const wishlistItems = document.getElementById('wishlist-items');
        const items = wishlistItems.getElementsByTagName('li');
        for (let i = 0; i < items.length; i++) {
            if (items[i].textContent === productName) {
                wishlistItems.removeChild(items[i]);
                break;
            }
        }
    }

    // Attach event listeners to the wishlist buttons
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const productName = button.getAttribute('data-product');
            const isAdded = button.classList.contains('added');

            if (!isAdded) {
                addToWishlist(productName);
                button.classList.add('added');
                button.textContent = 'Remove from Wishlist';
            } else {
                removeFromWishlist(productName);
                button.classList.remove('added');
                button.textContent = 'Add to Wishlist';
            }
        });
    });
