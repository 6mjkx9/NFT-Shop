const loadPage2Btn = document.getElementById('loadPage2Btn');
const page2 = document.querySelector('.page-2');
const page1 = document.querySelector('.page-1');

function loadPage2Content() {
    fetch('home.html')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load');
            return response.text();
        })
        .then(data => {
            page2.innerHTML = data;
            initPage2Scripts();
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
}

function initPage2Scripts() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeMenuBtn = document.querySelector('.close-menu');
    const popupMenu = document.querySelector('.popup-menu');

    menuBtn.addEventListener('click', () => {
        popupMenu.classList.add('active');
    });

    closeMenuBtn.addEventListener('click', () => {
        popupMenu.classList.remove('active');
    });

    document.addEventListener('click', (event) => {
        if (!popupMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            popupMenu.classList.remove('active');
        }
    });

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

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));

            addToCart(id, name, price);
            updateCartDisplay();
        });
    });

    function addToCart(id, name, price) {
        const existingItem = cartContents.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartContents.push({ id, name, price, quantity: 1 });
        }
    }

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        let total = 0;

        cartContents.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <span>${item.name} x${item.quantity}</span>
                <span>${item.price * item.quantity} ETH</span>
            `;
            cartItems.appendChild(itemElement);

            total += item.price * item.quantity;
        });

        cartTotal.textContent = `Total: ${total.toFixed(2)} ETH`;
    }

    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your purchase! (This is a demo, no actual transaction occurred)');
        cartContents = [];
        updateCartDisplay();
    });
}

loadPage2Btn.addEventListener('click', () => {
    loadPage2Content();
    page1.style.transform = 'translateX(-100vw)';
    page2.style.transform = 'translateX(-100vw)';
});