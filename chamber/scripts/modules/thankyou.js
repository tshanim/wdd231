const urlParams = new URLSearchParams(window.location.search);

document.getElementById("first-name").textContent =
    urlParams.get("firstName") || "N/A";
document.getElementById("last-name").textContent =
    urlParams.get("lastName") || "N/A";
document.getElementById("email").textContent =
    urlParams.get("email") || "N/A";
document.getElementById("mobile-number").textContent =
    urlParams.get("phone") || "N/A";
document.getElementById("business-name").textContent =
    urlParams.get("organization") || "N/A";

// Force timestamp to South africa Standard Time (SAST, UTC+2)
const formatter = new Intl.DateTimeFormat("en-ZA", {
    timeZone: "Africa/Johannesburg",
    weekday: "long",   // Saturday
    year: "numeric",   // 2025
    month: "long",     // November
    day: "numeric",    // 29
    hour: "numeric",   // 11
    minute: "2-digit", // 13
    hour12: true       // AM/PM format
});

const timestamp =
    urlParams.get("timestamp") || formatter.format(new Date());

document.getElementById("timestamp").textContent = timestamp;