import { items } from "../../data/discover.mjs";

const container = document.querySelector(".discover");

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
    <address id="modal-address"></address>
    <p id="modal-description"></p>
    <div id="modal-extra"></div>
  </div>
`;
document.body.appendChild(modal);

const modalTitle = modal.querySelector("#modal-title");
const modalImage = modal.querySelector("#modal-image");
const modalAddress = modal.querySelector("#modal-address");
const modalDescription = modal.querySelector("#modal-description");
const modalExtra = modal.querySelector("#modal-extra");
const closeBtn = modal.querySelector(".close");

items.forEach((item, index) => {
  const card = document.createElement("section");
  card.classList.add("card");
  card.style.gridArea = `card${index + 1}`;

  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure>
      <img src="${item.image}" alt="${item.name}">
    </figure>
    <address>${item.address}</address>
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
    //modalAddress.textContent = item.address;
    modalDescription.textContent = item.description;
    modalExtra.innerHTML = `<p>${getExtraDetails(item.name)}</p>`;
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

// Extra details for modal
function getExtraDetails(name) {
  switch (name) {
    case "Apartheid Museum":
      return "Opened in 2001, the museum uses film, text, and artifacts to illustrate apartheid’s impact and South Africa’s transition to democracy.";
    case "Constitution Hill":
      return "Former prison complex turned museum, housing the Constitutional Court — a symbol of justice and human rights.";
    case "Maboneng Precinct":
      return "Known as 'Place of Light,' Maboneng is a hub for street art, local markets, and creative entrepreneurship.";
    case "Gold Reef City":
      return "Features thrilling rides, a casino, and tours of an authentic gold mine, reflecting Johannesburg’s mining heritage.";
    case "Johannesburg Zoo":
      return "Established in 1904, the zoo spans 55 hectares and is home to over 320 species.";
    case "Nelson Mandela Square":
      return "A popular Sandton landmark with a 6-meter statue of Mandela, surrounded by restaurants and luxury shops.";
    case "Soweto Vilakazi Street":
      return "Unique for being the only street where two Nobel laureates lived — Nelson Mandela and Archbishop Desmond Tutu.";
    case "Walter Sisulu Botanical Gardens":
      return "Home to the Witpoortjie Waterfall and nesting black eagles, offering tranquil walks and biodiversity.";
    default:
      return "More information coming soon.";
  }
}

