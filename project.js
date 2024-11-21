// Handle form submission for Donate Food
document.getElementById("donateForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Donation Submitted Successfully! Thank you for your kindness.");
    // Optionally, you can clear the form or send data to the server
    document.getElementById("donateForm").reset();
});

// Handle form submission for Request Food
document.getElementById("requestForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Request Submitted Successfully! We will notify you when we have a match.");
    // Optionally, you can clear the form or send data to the server
    document.getElementById("requestForm").reset();
});