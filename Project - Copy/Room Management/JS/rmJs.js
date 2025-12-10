function handleRoomManagementSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form inputs
    var roomType = document.getElementById("roomType").value;
    var roomNumber = document.getElementById("roomNumber").value;
    var roomAvailability = document.getElementById("roomAvailability").value;
    var roomStatus = document.getElementById("roomStatus").value;

    var valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(e => e.innerText = "");

    // Validate Room Type
    if (!roomType) {
        document.getElementById("errorRoomType").innerText = "Room Type is required!";
        valid = false;
    }

    // Validate Room Number
    if (!roomNumber || roomNumber <= 0) {
        document.getElementById("errorRoomNumber").innerText = "Room Number is required and must be a positive number!";
        valid = false;
    }

    // Validate Room Availability (Yes/No)
    if (!roomAvailability) {
        document.getElementById("errorRoomAvailability").innerText = "Room Availability is required!";
        valid = false;
    }

    // Validate Room Status (Dirty/Clean)
    if (!roomStatus) {
        document.getElementById("errorRoomStatus").innerText = "Room Status is required!";
        valid = false;
    }

    if (!valid) {
        return false; // Prevent form submission if validation fails
    }

    // Display confirmation
    document.getElementById("confirmationRoomType").textContent = roomType;
    document.getElementById("confirmationRoomNumber").textContent = roomNumber;
    document.getElementById("confirmationRoomAvailability").textContent = roomAvailability;
    document.getElementById("confirmationRoomStatus").textContent = roomStatus;

    document.getElementById("confirmation").style.display = "block";
    return false; // Optional: prevent form submission to handle it via JavaScript
}

// Bind the handleRoomManagementSubmit function to the form submit event
document.getElementById("roomManagementForm").addEventListener("submit", handleRoomManagementSubmit);
