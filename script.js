document.addEventListener('DOMContentLoaded', function() {
    // Check if the infoForm exists before adding the submit event listener
    const infoForm = document.getElementById("infoForm");
    if (infoForm) {
        infoForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting and refreshing the page
            const submissionMessage = document.getElementById("submissionMessage");
            if (submissionMessage) {
                submissionMessage.style.display = 'block'; // Show the submission message
            } else {
                console.error("Submission message element not found!");
            }
        });
    } else {
        console.error("Info form element not found!");
    }

    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    const orderItemsList = document.querySelector('.order-items');
    const orderTypeSelect = document.getElementById('order-type');
    const paymentModeSelect = document.getElementById('payment-mode');
    const placeOrderBtn = document.getElementById('place-order');
    const cancelOrderBtn = document.getElementById('cancel-order');

    // Add event listeners only if the elements exist
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const items = this.nextElementSibling;
            if (items) {
                items.classList.toggle('show');
            } else {
                console.error("Dropdown items not found!");
            }
        });
    });

    function addToOrder(item) {
        const li = document.createElement('');
        li.textContent = item;
        if (orderItemsList) {
            orderItemsList.appendChild(li);
        } else {
            console.error("Order items list not found!");
        }
    }

    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function() {
            const orderType = orderTypeSelect ? orderTypeSelect.value : '';
            const paymentMode = paymentModeSelect ? paymentModeSelect.value : '';
            const orderItems = orderItemsList ? orderItemsList.innerHTML : '';

            alert(`Order Placed!\nOrder Type: ${orderType}\nPayment Mode: ${paymentMode}\nOrder Items:\n${orderItems}`);
            if (orderItemsList) {
                orderItemsList.innerHTML = '';
            } else {
                console.error("Order items list not found!");
            }
        });
    } else {
        console.error("Place order button not found!");
    }

    if (cancelOrderBtn) {
        cancelOrderBtn.addEventListener('click', function() {
            if (orderItemsList) {
                orderItemsList.innerHTML = '';
            } else {
                console.error("Order items list not found!");
            }
            alert('Order Canceled');
        });
    } else {
        console.error("Cancel order button not found!");
    }

    const items = document.querySelectorAll('.items li');
    if (items) {
        items.forEach(item => {
            item.addEventListener('click', function() {
                const selectedItem = this.textContent.trim();
                addToOrder(selectedItem);
            });
        });
    } else {
        console.error("Items not found!");
    }
});

