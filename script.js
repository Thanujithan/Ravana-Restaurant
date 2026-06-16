// Food data
const formatLKR = amount => `Rs. ${amount.toLocaleString("en-LK")}`;
// const USD_TO_LKR = 300; // or current rate



const foodData = [
    {
        id: 1,
        name: "Chicken Briyani",
        price: 800.00,
        category: "briyani",
        image: "img/food/cb.jpg",
        description: "Flavorful chicken biryani made with basmati rice, traditional spices, and herbs"
    },
    {
        id: 2,
        name: "Mutton Briyani",
        price: 900.00,
        category: "briyani",
        image: "img/food/mb.jpg",
        description: "Hot and spicy mutton biryani cooked with bold traditional spices"
    },
     {
        id: 3,
        name: "Beef Briyani",
        price: 1100.00,
        category: "briyani",
        image: "img/food/bb.jpg",
        description: "Slow-cooked beef biryani layered with fragrant basmati rice and rich spices"
    },
    {
        id: 4,
        name: "Rice & Fish Curry",
        price: 350.00,
        category: "rice&curry",
        image: "img/food/rcf.jpg",
        description: "Steamed rice accompanied by a traditionally prepared fish curry"
    },
    {
        id: 5,
        name: "Rice & Chicken Curry",
        price: 480.00,
        category: "rice&curry",
        image: "img/food/rcc.jpg",
        description: "Hot and spicy chicken curry served with steamed rice"
    },
    {
        id: 6,
        name: "Rice & Veg Curry",
        price: 280.00,
        category: "rice&curry",
        image: "img/food/rcv.jpg",
        description: "Nutritious rice served with gently spiced vegetable curry"
    },
    {
        id: 7,
        name: "Chicken Kottu",
        price: 900.00,
        category: "kottu",
        image: "img/food/ck.jpeg",
        description: "Sri Lankan chicken kottu prepared with shredded roti and flavorful spices"
    },
    {
        id: 8,
        name: "Beef Kottu",
        price: 1000.00,
        category: "kottu",
        image: "img/food/bk.jpg",
        description: "Hot and spicy beef kottu tossed with vegetables and rich spices"
    },
    {
        id: 9,
        name: "Egg Kottu",
        price: 650.00,
        category: "kottu",
        image: "img/food/ek.jpg",
        description: "Classic egg kottu stir-fried with roti, vegetables, and scrambled egg"
    },
    {
        id: 10,
        name: "Chicken Fried Rice",
        price: 1000.00,
        category: "friedrice",
        image: "img/food/fr.jpg",
        description: "Hot and spicy chicken fried rice tossed with sauces and spices"
    },
    {
        id: 11,
        name: "Egg Fried Rice",
        price: 750.00,
        category: "friedrice",
        image: "img/food/br.jpg",
        description: "Beef rice prepared with seasoned rice and fresh vegetables"
    },
    {
        id: 12,
        name: "Beef Fried Rice",
        price: 980.00,
        category: "friedrice",
        image: "img/food/er.jpg",
        description: "Classic egg fried rice wok-tossed with fluffy eggs and vegetables"
    },
    {
        id: 13,
        name: "Margherita Pizza",
        price: 950.00,
        category: "pizza",
        image: "img/food/p1.jpg",
        description: "Classic pizza with tomato sauce, mozzarella, and basil"
    },
    {
        id: 14,
        name: "Pepperoni Pizza",
        price: 1250.00,
        category: "pizza",
        image: "img/category/pizza.jpg",
        description: "Pizza topped with pepperoni and mozzarella cheese"
    },
    {
        id: 15,
        name: "Sicilian Pizza",
        price: 1560.00,
        category: "pizza",
        image: "img/food/p2.jpg",
        description: "Authentic Sicilian pizza baked with a thick, airy crust and rich toppings"
    },
    {
        id: 16,
        name: "Cheeseburger",
        price: 400.00,
        category: "burger",
        image: "img/food/b1.jpg",
        description: "Juicy beef burger with cheese, lettuce, and tomato"
    },
    {
        id: 17,
        name: "Chicken Burger",
        price: 380.00,
        category: "burger",
        image: "img/category/burger.jpg",
        description: "Grilled chicken breast with special sauce"
    },
    {
        id: 18,
        name: "Salmon Burger",
        price: 300.00,
        category: "burger",
        image: "img/category/sb.jpg",
        description: "Juicy salmon burger made with fresh herbs and a toasted bun"
    },
    {
        id: 19,
        name: "Club Sandwich",
        price: 450.00,
        category: "sandwich",
        image: "img/food/s1.jpg",
        description: "Triple-decker sandwich with turkey, bacon, and vegetables"
    },
    {
        id: 20,
        name: "Veggie Sandwich",
        price: 250.00,
        category: "sandwich",
        image: "img/category/sandwich.jpg",
        description: "Fresh vegetables with hummus and sprouts"
    },
    {
        id: 21,
        name: "Samosa Sandwich",
        price: 350.00,
        category: "sandwich",
        image: "img/food/ss.jpg",
        description: "Toasted sandwich stuffed with crushed samosa and flavorful sauces"
    },
    {
        id: 22,
        name: "Egg Noodles",
        price: 250.00,
        category: "noodles",
        image: "img/food/en.jpg",
        description: "Soft noodles stir-fried with egg and vegetables"
    },
    {
        id: 23,
        name: "Chicken Noodles",
        price: 350.00,
        category: "noodles",
        image: "img/food/cn.jpg",
        description: "Spicy chicken noodles tossed with sauces, tender chicken, and fresh vegetables"
    },
     {
        id: 24,
        name: "Pasta",
        price: 400.00,
        category: "noodles",
        image: "img/food/ps.png",
        description: "Traditional pasta cooked with rich tomato or cream sauce"
    },
    
];

// Cart array
let cart = [];

// DOM Elements
const cartLink = document.getElementById('cartLink');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const featuredFoods = document.getElementById('featuredFoods');
const checkoutBtn = document.getElementById('checkoutBtn');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromLocalStorage();
    displayFeaturedFoods();
    updateCartUI();
    
    // Event Listeners
    if (cartLink) {
        cartLink.addEventListener('click', function(e) {
            e.preventDefault();
            openCart();
        });
    }
    closeCart.addEventListener('click', closeCartModal);
    checkoutBtn.addEventListener('click', checkout);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            closeCartModal();
        }
    });
});

// Display featured foods
function displayFeaturedFoods() {
    featuredFoods.innerHTML = '';
    
    // Get first 3 items as featured
    const featuredItems = foodData.slice(0, 3);
    
    featuredItems.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
          <span class="price">${formatLKR(food.price)}</span>


                <button class="add-to-cart" data-id="${food.id}">Add to Cart</button>
            </div>
        `;
        featuredFoods.appendChild(foodCard);
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            addToCart(foodId);
        });
    });
}

// Add item to cart
function addToCart(foodId) {
    const food = foodData.find(item => item.id === foodId);
    
    if (food) {
        // Check if item already in cart
        const existingItem = cart.find(item => item.id === foodId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: food.id,
                name: food.name,
                price: food.price,
                image: food.image,
                quantity: 1
            });
        }
        
        saveCartToLocalStorage();
        updateCartUI();
        
        // Show confirmation
        alert(`${food.name} added to cart!`);
    }
}

// Remove item from cart
function removeFromCart(foodId) {
    cart = cart.filter(item => item.id !== foodId);
    saveCartToLocalStorage();
    updateCartUI();
}

// Update item quantity
function updateQuantity(foodId, change) {
    const item = cart.find(item => item.id === foodId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(foodId);
        } else {
            saveCartToLocalStorage();
            updateCartUI();
        }
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart modal
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-info">
                <h4>${item.name}</h4>
                <p class="item-price">${formatLKR(item.price)} each</p>
            </div>
            <div class="item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <p class="item-total">${formatLKR(itemTotal)}</p>

            <button class="remove-item" data-id="${item.id}">x</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
         cartTotal.textContent = formatLKR(total);

    
    // Add event listeners to cart buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            updateQuantity(foodId, -1);
        });
    });
    
    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            updateQuantity(foodId, 1);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            removeFromCart(foodId);
        });
    });
}

// Open cart modal
function openCart() {
    cartModal.style.display = 'flex';
}

// Close cart modal
function closeCartModal() {
    cartModal.style.display = 'none';
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // total calculation
    let total = 0;
    cart.forEach(item => total += item.price * item.quantity);

    const order = {
        items: [...cart],
        total: total,
        timestamp: new Date().toISOString()
    };

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    generateBillPreview(order);

    cart = [];
    saveCartToLocalStorage();
    updateCartUI();
    closeCartModal();
}

// Generate bill preview
function generateBillPreview(order) {
    let billContent = `
=====================================
          FOODIE CART
      ORDER RECEIPT & BILL
=====================================

Date: ${new Date(order.timestamp).toLocaleString()}

Items:
-------------------------------------
`;

    order.items.forEach(item => {
        const itemTotal = item.price * item.quantity;

        billContent += `${item.name}
    Price: ${formatLKR(item.price)} x ${item.quantity} = ${formatLKR(itemTotal)}
-------------------------------------
`;
    });

    billContent += `
Total Amount: ${formatLKR(order.total)}

=====================================
    Thank you for your order!
  Visit us again at Foodie Cart
=====================================
`;

    showBillPreview(billContent, order);
}

// Show bill preview modal
function showBillPreview(billContent, order) {
    // Create modal if it doesn't exist
    let billModal = document.getElementById('billModal');
    if (!billModal) {
        billModal = document.createElement('div');
        billModal.id = 'billModal';
        billModal.className = 'cart-modal';
        billModal.innerHTML = `
            <div class="cart-content" style="width: 90%; max-width: 700px;">
                <div class="cart-header">
                    <h2>Order Bill Preview</h2>
                    <span class="close-btn" id="closeBill">&times;</span>
                </div>
                <div class="cart-body" style="padding: 20px;">
                    <div id="billPreview" style="white-space: pre-wrap; font-family: monospace; background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; max-height: 400px; overflow-y: auto;">
                        <!-- Bill content will be inserted here -->
                    </div>
                    <div class="cart-footer" style="display: flex; gap: 10px; justify-content: center;">
                        <button class="btn-primary" id="downloadTxt" style="background: #28a745;">Download as TXT</button>
                        <button class="btn-primary" id="downloadPdf" style="background: #dc3545;">Download as PDF</button>
                        <button class="btn-primary" id="closeBillBtn">Close</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(billModal);
        
        // Add event listeners
        document.getElementById('closeBill').addEventListener('click', () => {
            billModal.style.display = 'none';
        });
        
        document.getElementById('closeBillBtn').addEventListener('click', () => {
            billModal.style.display = 'none';
        });
        
        document.getElementById('downloadTxt').addEventListener('click', () => {
            downloadBillAsTxt(billContent, order);
        });
        
        document.getElementById('downloadPdf').addEventListener('click', () => {
            downloadBillAsPdf(billContent, order);
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === billModal) {
                billModal.style.display = 'none';
            }
        });
    }
    
    // Update bill content
    document.getElementById('billPreview').textContent = billContent;
    
    // Show modal
    billModal.style.display = 'flex';
}

// Download bill as TXT
function downloadBillAsTxt(billContent, order) {
    const blob = new Blob([billContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `foodie-delight-bill-${new Date(order.timestamp).getTime()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Download bill as PDF
function downloadBillAsPdf(billContent, order) {
    // For simplicity, we'll create a print-friendly version and trigger print
    // In a real application, you might use a library like jsPDF
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Foodie Delight Bill</title>
            <style>
                body { font-family: monospace; margin: 20px; }
                pre { white-space: pre-wrap; }
            </style>
        </head>
        <body>
            <pre>${billContent}</pre>
            <script>
                window.onload = function() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Menu page functions
function displayMenuFoods(category = 'all') {
    const menuFoods = document.getElementById('menuFoods');
    if (!menuFoods) return;
    
    menuFoods.innerHTML = '';
    
    const filteredFoods = category === 'all' 
        ? foodData 
        : foodData.filter(food => food.category === category);
    
    filteredFoods.forEach(food => {
        const foodCard = document.createElement('div');
        foodCard.className = 'food-card';
        foodCard.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <span class="price">${formatLKR(food.price)}</span>


                <button class="add-to-cart" data-id="${food.id}">Add to Cart</button>
            </div>
        `;
        menuFoods.appendChild(foodCard);
    });
    
    // Add event listeners to add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const foodId = parseInt(this.getAttribute('data-id'));
            addToCart(foodId);
        });
    });
}

// Filter functionality for menu page
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get category and display foods
            const category = this.getAttribute('data-category');
            displayMenuFoods(category);
        });
    });
}

// Initialize menu page if on menu page
if (document.querySelector('.menu-page')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartFromLocalStorage();
        updateCartUI();
        displayMenuFoods();
        setupFilterButtons();
        
        // Event Listeners
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        closeCart.addEventListener('click', closeCartModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
    });

    if (checkoutBtn) {
    checkoutBtn.addEventListener('click', checkout);
}

}

// Initialize about page if on about page
if (document.querySelector('.about-page')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartFromLocalStorage();
        updateCartUI();
        
        // Event Listeners
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        closeCart.addEventListener('click', closeCartModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
    });
}

// Initialize contact page if on contact page


document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send(
        "service_ouai0nn",   // un SERVICE ID
        "template_dfpr9jl",   // un TEMPLATE ID
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
    ).then(
        function() {
            alert("Message sent successfully ✅");
            document.getElementById("contactForm").reset();
        },
        function(error) {
            alert("Message not sent. Please try again ❌");
            console.log(error);
        }
    );
});



if (document.querySelector('.contact-page')) {
    document.addEventListener('DOMContentLoaded', function() {
        loadCartFromLocalStorage();
        updateCartUI();
        
        // Event Listeners
        const cartLink = document.getElementById('cartLink');
        if (cartLink) {
            cartLink.addEventListener('click', function(e) {
                e.preventDefault();
                openCart();
            });
        }
        closeCart.addEventListener('click', closeCartModal);
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === cartModal) {
                closeCartModal();
            }
        });
        
        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                
                // Create contact message object
                const contactMessage = {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: new Date().toISOString()
                };
                
                // Save to localStorage
                const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];
                messages.push(contactMessage);
                localStorage.setItem('contactMessages', JSON.stringify(messages));
                
                // Reset form
                contactForm.reset();
                
                // Show confirmation
                alert('Thank you for your message! We will get back to you soon.');
            });
        }
    });
}