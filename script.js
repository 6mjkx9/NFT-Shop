// Menu functionality
const menuBtn = document.querySelector('.menu-btn');
const closeMenuBtn = document.querySelector('.close-menu');
const popupMenu = document.querySelector('.popup-menu');

menuBtn.addEventListener('click', () => {
    popupMenu.classList.add('active');
});

closeMenuBtn.addEventListener('click', () => {
    popupMenu.classList.remove('active');
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!popupMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        popupMenu.classList.remove('active');
    }
});

// Cart functionality
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const cart = document.querySelector('.cart');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const checkoutBtn = document.querySelector('.checkout-btn');
const buyButtons = document.querySelectorAll('.buy-btn');


let cartContents = [];

cartBtn.addEventListener('click', () => {
    cart.classList.add('active');
});

closeCartBtn.addEventListener('click', () => {
    cart.classList.remove('active');
});

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex === -1) {
        cart.push({ id, name, price, quantity: 1 });
    } else {
        cart[itemIndex].quantity += 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}
function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalContainer = document.querySelector('.cart-total');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name} (${item.quantity}) - ${item.price} ETH</span>
            <button class="remove-btn" data-id="${item.id}">🗑️</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotalContainer.textContent = `Total: ${total.toFixed(2)} ETH`;

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            removeFromCart(id);
        });
    });
}

checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your purchase! (This is a demo, no actual transaction occurred)');
    cartContents = [];
    updateCartDisplay();
});

// NFT data
const nftData = [
    {
        id: 1,
        name: "MoonBirds",
        artist: "comand MoonBirds",
        image: "images/mb (2).jpg",
        price: 4.9,
        chips: []
    },
    {
        id: 2,
        name: "Azuki",
        artist: "Team Azyki",
        image: images/az  (8).jpg,
        price: 7.3,
        chips: [""]
    },
    {
        id: 3,
        name: "Doodles",
        artist: "Burnt Toast",
        image: images/D (1).jpg,
        price: 2.56,
        chips: [""]
    },
    {
        id: 4,
        name:  "KaijuKing Composition",
        artist: "LinesMaster",
        image: images/6,
        price: 1.9,
        chips: [""]
    },
    {
        id: 5,
        name: "Bored Ape Yacht Club",
        artist: "YugaLabs",
        image: "images/BAYC (2).jpg",
        price: 15,
        chips: []
    },
    {
        id: 6,
        name: "Lil Pudgy",
        artist: "ThelglooCompani",
        image: "images/mb (2).jpg",
        price: 5.88,
        chips: [""]
    }
];

// Function to create NFT cards
function createNFTCard(nft) {
    const card = document.createElement('div');
    card.classList.add('nft-card');
    card.innerHTML = `
        <img src="${nft.image}" alt="${nft.name} NFT">
        <div class="nft-info">
            <h3>${nft.name}</h3>
            <p>By ${nft.artist}</p>
            <div class="chip-container">
                ${nft.chips.map(chip => `<span class="chip">${chip}</span>`).join('')}
            </div>
            <p class="nft-price">${nft.price} ETH</p>
            <button class="buy-btn" data-id="${nft.id}" data-name="${nft.name}" data-price="${nft.price}">Add to Cart</button>
        </div>
    `;
    return card;
}

// Function to display NFTs
function displayNFTs() {
    const nftGrid = document.querySelector('.nft-grid');
    nftData.forEach(nft => {
        const card = createNFTCard(nft);
        nftGrid.appendChild(card);
    });

    // Add event listeners to buy buttons
    document.querySelectorAll('.buy-btn').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            addToCart(id, name, price);
            updateCartDisplay();
        });
    });
}

// Call displayNFTs when the page loads
window.addEventListener('load', displayNFTs);
window.addEventListener('load', updateCartDisplay);