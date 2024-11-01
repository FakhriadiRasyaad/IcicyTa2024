function showSession(dayId) {
    // Hide all session content
    document.querySelectorAll('.session-content').forEach(content => {
        content.classList.remove('active');
    });

    // Deactivate all date buttons
    document.querySelectorAll('.date-button').forEach(button => {
        button.classList.remove('active');
    });

    // Activate selected day
    document.getElementById(`sessionDec${dayId.slice(-2)}`).classList.add('active');
    document.getElementById(`btnDec${dayId.slice(-2)}`).classList.add('active');
}

function showDetails(sessionId) {
    // Deactivate all session buttons
    document.querySelectorAll('.session-button').forEach(button => {
        button.classList.remove('active');
    });

    // Activate the clicked button
    document.querySelector(`button[onclick="showDetails('${sessionId}')"]`).classList.add('active');

    // Hide all session details
    document.querySelectorAll('.table-container tbody').forEach(table => {
        table.style.display = 'none';
    });

    // Show the selected session details
    document.getElementById(sessionId).style.display = 'table-row-group';
}
