const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];
const gift = document.querySelector(".gift"); // Select the gift image
const clickSound = document.getElementById("click-sound");

let yesClickCount = 0; // Counter for Yes button clicks

yesBtn.addEventListener("click", () => {
    clickSound.play(); // Play sound on click
    yesClickCount++; // Increment the click count

    if (yesClickCount === 1) {
      question.innerHTML = "I like you..";
      question.classList.add("large-text");
        secondQuestion.innerHTML = "How about you?(bisikkan padaku)";
        img.src = "1.jpeg";
    } else if (yesClickCount === 2) {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";

        question.innerHTML = "Here's a gift for you!"; // Change question text
        img.src = "3.gif";
        secondQuestion.innerHTML = "";
        gift.style.display = "block"; // Show the gift image

    }
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = 'absolute'; // Ensure button can move freely
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    clickSound.play(); // Play sound on hover
});