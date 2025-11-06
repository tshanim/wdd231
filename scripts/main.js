// Store the selected elements that we are going to use.
document.addEventListener("DOMContentLoaded", () => {
    const hambutton = document.querySelector('#menu');
    const navlinks = document.querySelector('#nav-bar');

    // Toggle the show class off and on
    hambutton.addEventListener("click", () => {
        hambutton.classList.toggle('show');
        navlinks.classList.toggle('show');
    });

    //footer
    document.getElementById("currentyear").textContent =
        new Date().getFullYear();
    document.getElementById(
        "lastModified"
    ).textContent = `Last Modified: ${document.lastModified}`;
});