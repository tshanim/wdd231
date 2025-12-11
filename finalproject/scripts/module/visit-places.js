import { items } from "../../data/visit-places.mjs";

const container = document.querySelector(".visit-container");

// Create modal container once
const modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML = `
  <div class="modal-content">
    <span class="close">&times;</span>
    <h2 id="modal-title"></h2>
    <figure>
      <img id="modal-image" alt="">
    </figure>
    <address id="modal-location"></address>
    <p id="modal-description"></p>
    <div id="modal-extra"></div>
  </div>
`;
document.body.appendChild(modal);

const modalTitle = modal.querySelector("#modal-title");
const modalImage = modal.querySelector("#modal-image");
const modalLocation = modal.querySelector("#modal-location"); // matches JSON
const modalDescription = modal.querySelector("#modal-description");
const modalExtra = modal.querySelector("#modal-extra");
const closeBtn = modal.querySelector(".close");

// Build cards from JSON
items.forEach((item, index) => {
  const card = document.createElement("section");
  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}">
    </figure>
    <address>${item.location}</address>
    <p>${item.description}</p>
    <button class="learn-more">Learn More</button>
  `;

  container.appendChild(card);

  // Button functionality
  const button = card.querySelector(".learn-more");
  button.addEventListener("click", () => {
    modalTitle.textContent = item.name;
    modalImage.src = item.image;
    modalImage.alt = item.name;
    modalLocation.textContent = item.location;
    modalDescription.textContent = item.description;
    modalExtra.innerHTML = `<p>${item.extra}</p>`; // pulls extra details directly
    modal.style.display = "block";
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function showVisitorMessage() {
    const messageArea = document.getElementById("visitor-text");
    const banner = document.getElementById("visitor-message");
    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date();

    if (!lastVisit) {
      // First visit
      messageArea.textContent = "Welcome! Let us know if you have any questions.";
    } else {
      const lastVisitDate = new Date(lastVisit);
      const diffTime = now - lastVisitDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays < 1) {
        messageArea.textContent = "Back so soon! Awesome!";
      } else if (diffDays === 1) {
        messageArea.textContent = "You last visited 1 day ago.";
      } else {
        messageArea.textContent = `You last visited ${diffDays} days ago.`;
      }
    }

    // Update localStorage with current visit
    localStorage.setItem("lastVisit", now.toISOString());

    // Close button functionality
    document.getElementById("close-message").addEventListener("click", () => {
      banner.style.display = "none";
    });
  }

  document.addEventListener("DOMContentLoaded", showVisitorMessage); 