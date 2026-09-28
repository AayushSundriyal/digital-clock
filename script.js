function updateClock() {
    const now = new Date();   // gets current date & time

    let hours = now.getHours();      // 0–23
    let minutes = now.getMinutes();  // 0–59
    let seconds = now.getSeconds();  // 0–59

    // Add 0 in front if less than 10 (like 04 instead of 4)
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Show in H1 tag
    document.getElementById("time").textContent = 
        `${hours}:${minutes}:${seconds}`;
}

// Call the function every 1 second
setInterval(updateClock, 1000);

// Call once immediately so it appears instantly
updateClock();
 