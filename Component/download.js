document.getElementById("downloadRundown").addEventListener("click", function() {
    const scheduleElement = document.getElementById("schedule");
    const scheduleContent = scheduleElement.innerText; // Get the text content

    const blob = new Blob([scheduleContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "Event_Rundown.txt"; // File name for download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
