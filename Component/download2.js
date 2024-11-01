document.getElementById("downloadParallelSession").addEventListener("click", function() {
    const sessionElement = document.querySelector(".parallel-session-rundown");
    const sessionContent = sessionElement.innerText; // Get the text content

    const blob = new Blob([sessionContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "Parallel_Session_Rundown.txt"; // File name for download
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
