document.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");
    // ✅ Formatter for South Africa Standard Time (SAST, UTC+2)
    const formatter = new Intl.DateTimeFormat("en-ZA", {
        timeZone: "Africa/Johannesburg",
        weekday: "long",   // e.g. Saturday
        year: "numeric",   // e.g. 2025
        month: "long",     // e.g. November
        day: "numeric",    // e.g. 29
        hour: "numeric",   // e.g. 11
        minute: "2-digit", // e.g. 54
        hour12: true       // AM/PM format
    });

    // Set hidden input value to current South Africa time
    timestampField.value = formatter.format(new Date());

    const modals = {
        npModal: document.getElementById("npModal"),
        bronzeModal: document.getElementById("bronzeModal"),
        silverModal: document.getElementById("silverModal"),
        goldModal: document.getElementById("goldModal"),
    };

    const buttons = {
        npButton: document.getElementById("npButton"),
        bronzeButton: document.getElementById("bronzeButton"),
        silverButton: document.getElementById("silverButton"),
        goldButton: document.getElementById("goldButton"),
    };

    const modalContent = {
        npModal: {
            title: "Non Profit Membership Benefits",
            content: "Complimentary access to community programs, shared resources, and visibility within the chamber network.",
        },
        bronzeModal: {
            title: "Bronze Membership Benefits",
            content:
                "Affordable entry-level membership with discounted services, networking opportunities, and invitations to select events.",
        },
        silverModal: {
            title: "Silver Membership Benefits",
            content:
                "All Bronze benefits plus enhanced marketing support, premium resources, and greater visibility in chamber directories.",
        },
        goldModal: {
            title: "Gold Membership Benefits",
            content:
                "Comprehensive membership including full premium support, priority services, and exclusive access to elite events and leadership forums.",
        },
    };

    function displayModal(modal, { title, content }) {
        modal.innerHTML = `
            <div class="modal-content">
                <button class="close-button" aria-label="Close">&times;</button>
                <h3>${title}</h3>
                <p>${content}</p>
            </div>
        `;
        modal.showModal();

        modal.querySelector(".close-button").addEventListener("click", () => {
            modal.close();
        });
    }

    Object.keys(buttons).forEach((key) => {
        buttons[key].addEventListener("click", () => {
            const modalKey = key.replace("Button", "Modal");
            displayModal(modals[modalKey], modalContent[modalKey]);
        });
    });

    const words = document.querySelectorAll(".word");

    words.forEach((word) => {
        word.innerHTML = [...word.textContent]
            .map((letter) => `<span class="letter">${letter}</span>`)
            .join("");
    });

    let currentWordIndex = 0;
    const maxWordIndex = words.length - 1;

    words[currentWordIndex].style.opacity = "1";

    function rotateText() {
        const currentWord = words[currentWordIndex];
        const nextWord =
            currentWordIndex === maxWordIndex
                ? words[0]
                : words[currentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => (letter.className = "letter out"), i * 80);
        });

        nextWord.style.opacity = "1";
        Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = "letter behind";
            setTimeout(() => (letter.className = "letter in"), 340 + i * 80);
        });

        currentWordIndex =
            currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    }

    setInterval(rotateText, 4000);
    rotateText();
});