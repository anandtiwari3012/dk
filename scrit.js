// Set the target date and time (YYYY-MM-DD HH:MM:SS format)
const targetDate = new Date("2024-12-01T12:00:00");

// Select the countdown container
const countdownElement = document.getElementById("countdown");

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

    // Dynamically add the message
    countdownElement.textContent = "🎉 Good Bye Shrishit  🎉  <br>Thank you so much for being a beautiful moment of my life. But I don't think so I can countiue this friendship";
  }
}

// Start the countdown
const timer = setInterval(updateCountdown, 1000);

// Initialize the countdown on page load
updateCountdown();
