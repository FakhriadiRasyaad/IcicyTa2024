function toggleAnswer(button) {
    // Toggle the answer visibility
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";

    // Toggle the active class for arrow rotation
    button.classList.toggle("active");
}
