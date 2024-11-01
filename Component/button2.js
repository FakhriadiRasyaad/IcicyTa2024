function showSession(session) {
    // Toggle active class for date buttons
    document.getElementById("btnDec17").classList.remove("active");
    document.getElementById("btnDec18").classList.remove("active");

    // Show or hide the session content based on selected date
    if (session === 'dec17') {
        document.getElementById("btnDec17").classList.add("active");
        document.getElementById("sessionDec17").style.display = 'block';
        document.getElementById("sessionDec18").style.display = 'none';
    } else if (session === 'dec18') {
        document.getElementById("btnDec18").classList.add("active");
        document.getElementById("sessionDec17").style.display = 'none';
        document.getElementById("sessionDec18").style.display = 'block';
    }
}
