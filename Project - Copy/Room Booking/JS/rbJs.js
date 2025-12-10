function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form inputs
    let customerName = document.getElementById("customerName").value;
    let email = document.getElementById("email").value;
    let roomType = document.getElementById("roomType").value;
    let bookingDays = document.getElementById("bookingDays").value;
    let discountCode = document.getElementById("discountCode").value;

    var valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(e => e.innerText = "");

    // Validate Customer Name
    if (!customerName) {
        document.getElementById("errorCustomerName").innerText = "Please enter your name.";
        valid = false;
    }

    // Validate Email
    if (!email) {
        document.getElementById("errorEmail").innerText = "Please enter your email.";
        valid = false;
    }

    // Validate Room Type
    if (!roomType) {
        document.getElementById("errorRoomType").innerText = "Please select a room type.";
        valid = false;
    }

    // Validate Number of Days
    if (!bookingDays) {
        document.getElementById("errorBookingDays").innerText = "Please enter the number of days.";
        valid = false;
    }

    if (!valid) {
        return false; // Prevent form submission if validation fails
    }

    // Price logic
    let price = 0;
    if (roomType === "single") {
        price = 100;
    } else if (roomType === "double") {
        price = 150;
    } else if (roomType === "suite") {
        price = 250;
    }

    // Apply discount if any
    if (discountCode === "DISCOUNT10") {
        price = price * 0.9; // Apply 10% discount
    }

    // Calculate total price
    const totalPrice = price * bookingDays;

    // Generate booking ID
    const bookingID = "BOOK" + Math.floor(Math.random() * 10000);

    // Display confirmation
    document.getElementById("bookingID").textContent = bookingID;
    document.getElementById("confirmationName").textContent = customerName;
    document.getElementById("confirmationDays").textContent = bookingDays;

    document.getElementById("confirmation").style.display = "block";

    return false; // Optional: prevent form submission to handle it via JavaScript
}

// Bind the handleSubmit function to the form submit event
document.getElementById("bookingForm").addEventListener("submit", handleSubmit);
