// Update current year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Update last modified date
  const modifiedSpan = document.getElementById("lastModified");
  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
  }
});