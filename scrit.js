// Set the target date and time (YYYY-MM-DD HH:MM:SS format)
const targetDate = new Date("2024-11-17T00:00:00");

// Select the countdown and message elements
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");

// Function to update the countdown
function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference > 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Display the countdown
    countdownElement.textContent = `Time Remaining: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    // Stop the countdown
    clearInterval(timer);

    // Hide the countdown and show the message
    countdownElement.style.display = "none";
    messageElement.style.display = "block";
  }
}

// Start the countdown
const timer = setInterval(updateCountdown, 1000);

// Initialize the countdown on page load
updateCountdown();
