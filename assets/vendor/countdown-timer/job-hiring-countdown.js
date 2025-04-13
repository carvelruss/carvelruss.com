// Set the countdown date and time
const countdownDate = new Date("March 31, 2024 12:45:00").getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Check if the countdown is over
  if (distance <= 0) {
    clearInterval(timerInterval);

    // Hide "apply-btn" and show "inactive"
    document.getElementById("apply-btn").classList.add("d-none");
    document.getElementById("inactive").classList.remove("d-none");

    // Show and update status text
    document.getElementById("status-text").classList.remove("d-none");
    document.getElementById("status-text").innerHTML = "Application closed!";
  } else {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = formatTime(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = formatTime(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = formatTime(Math.floor((distance % (1000 * 60)) / 1000));

    // Display the countdown
    document.getElementById("days").innerHTML = `${days}`;
    document.getElementById("hours").innerHTML = `${hours}`;
    document.getElementById("minutes").innerHTML = `${minutes}`;
    document.getElementById("seconds").innerHTML = `${seconds}`;
  }
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

// Function to format time with two decimal places
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
