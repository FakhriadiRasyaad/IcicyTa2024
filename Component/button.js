function showDay(dayId, element) {
    // Hide all day sections
    document.getElementById("day1").style.display = "none";
    document.getElementById("day2").style.display = "none";

    // Show the selected day section
    document.getElementById(dayId).style.display = "table-row-group";

    // Remove active class from all buttons
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));

    // Add active class to the clicked button
    element.classList.add("active");
}
