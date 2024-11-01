// Set the target date to November 10, 2024 at 00:00:00
const targetDate = new Date("November 10, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the respective elements
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    // If the countdown is finished, clear the interval and show a message
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".timer").innerHTML = "<p>The event has started!</p>";
    }
}, 1000);
