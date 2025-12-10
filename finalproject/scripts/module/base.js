export function initializeCommon() {
    document.addEventListener("DOMContentLoaded", () => {
        const hamButton = document.querySelector("#menu");
        const navList = document.querySelector("nav ul");

        // Toggle navigation menu
        hamButton.addEventListener("click", () => {
            hamButton.classList.toggle("open");   // switches ≡ to X
            navList.classList.toggle("show");     // shows/hides nav links
        });

        // Footer info
        document.getElementById("currentyear").textContent =
            new Date().getFullYear();
        document.getElementById("lastModified").textContent =
            `Last Modified: ${document.lastModified}`;

        // Active nav link highlighting
        const bodyId = document.body.id;
        const navLinks = document.querySelectorAll("nav .nav-a");

        navLinks.forEach((link) => {
            if (link.getAttribute("href").includes(bodyId.replace("-page", ""))) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });
}