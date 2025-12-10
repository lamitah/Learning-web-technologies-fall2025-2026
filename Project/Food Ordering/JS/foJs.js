// helper: get price per food item
function getItemPrice(item) {
    if (item === "burger") return 300;
    if (item === "pizza") return 500;
    if (item === "pasta") return 400;
    if (item === "coffee") return 150;
    return 0;
}

// update price display when item changes
document.getElementById("foodItem").addEventListener("change", function () {
    var item = this.value;
    var price = getItemPrice(item);
    document.getElementById("itemPriceDisplay").innerText =
        "Price per item: " + price + " TK";
});

function handleFoodSubmit(event) {
    event.preventDefault();

    var customerName = document.getElementById("customerName").value;
    var roomNumber = document.getElementById("roomNumber").value;
    var foodItem = document.getElementById("foodItem").value;
    var quantity = document.getElementById("quantity").value;
    var addToBill = document.getElementById("addToBill").checked;

    // clear previous errors
    document.querySelectorAll('.error').forEach(e => e.innerText = "");
    document.getElementById("formError").style.display = "none";

    var valid = true;

    // validation (same pattern as your sample)
    if (!customerName) {
        document.getElementById("customerNameError").innerText =
            "Customer name is required!";
        valid = false;
    }

    if (!roomNumber || roomNumber <= 0) {
        document.getElementById("roomNumberError").innerText =
            "Valid room number is required!";
        valid = false;
    }

    if (!foodItem) {
        document.getElementById("foodItemError").innerText =
            "Please select a food item!";
        valid = false;
    }

    if (!quantity || quantity <= 0) {
        document.getElementById("quantityError").innerText =
            "Quantity must be at least 1!";
        valid = false;
    }

    if (!valid) {
        document.getElementById("formError").style.display = "block";
        return false;
    }

    // price calculation
    var pricePerItem = getItemPrice(foodItem);
    var total = pricePerItem * Number(quantity);

    // fake order id
    var orderId = "ORD" + Math.floor(Math.random() * 10000);

    // fill confirmation section
    document.getElementById("orderId").innerText = orderId;
    document.getElementById("confirmCustomerName").innerText = customerName;
    document.getElementById("confirmRoomNumber").innerText = roomNumber;
    document.getElementById("confirmItem").innerText = foodItem;
    document.getElementById("confirmQuantity").innerText = quantity;
    document.getElementById("confirmTotal").innerText = total;
    document.getElementById("confirmBilling").innerText =
        addToBill ? "Added to room bill" : "Pay on delivery";
    document.getElementById("confirmStatus").innerText = "Preparing";

    document.getElementById("orderConfirmation").style.display = "block";

    return false;
}

// bind submit
document
    .getElementById("foodOrderForm")
    .addEventListener("submit", handleFoodSubmit); 
