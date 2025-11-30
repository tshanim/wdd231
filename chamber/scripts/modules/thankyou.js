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

// Force timestamp to South Africa Standard Time (SAST, UTC+2)
const timestamp =
    urlParams.get("timestamp") ||
    new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" });

document.getElementById("timestamp").textContent = timestamp;