const myName = "Tariq Saleh";
const targetWords = [
  "Visionary",
  "Passionate",
  "Ambitious",
  "Resourceful",
  "Attentive",
  "Adaptable",
  "Cooperative",
  "Dependable",
  "Committed",
];

const smallerTargetWords = ["Tech Savvy", "Work  Ready", "Hire  Fast"];
let count = 0;

const nameDiv = document.getElementById("my-name");
const letters = Array.from(document.querySelectorAll(".name-letters"));
const email = document.getElementById("email");
const emailContainer = document.getElementById("email-container");
const phone = document.getElementById("phone");
const phoneContainer = document.getElementById("phone-container");
let mouseIsOver = false;

const changeLetters = (targetWord, rotate) => {
  for (let i = 0; i < letters.length; i++) {
    setTimeout(() => {
      letters[i].innerText = targetWord[i] || " ";
      letters[i].style.backgroundPosition = rotate ? "bottom" : "top";
      letters[i].style.transform = `translate(0%, ${
        rotate ? Math.floor(Math.random() * 20 - 10) : 0
      }%) rotate(${rotate ? Math.floor(Math.random() * 20 - 10) : 0}deg)`;
    }, (letters.length - 1) * 35 - i * 35);
  }
};

const hover = (e) => {
  changeLetters(
    window.innerWidth > 600
      ? targetWords[count % targetWords.length]
      : smallerTargetWords[count % smallerTargetWords.length],
    true
  );
  count++;
  setTimeout(() => {
    changeLetters(myName);
    mouseIsOver ? hover(e) : addHover();
  }, 1000);
  nameDiv.removeEventListener("mouseenter", hover);
};

const addHover = () => {
  nameDiv.addEventListener("mouseenter", hover);
};

document.addEventListener("DOMContentLoaded", () => {
  nameDiv.addEventListener("mouseenter", (e) => {
    mouseIsOver = true;
  });
  nameDiv.addEventListener("mouseleave", (e) => {
    mouseIsOver = false;
  });
  phoneContainer.addEventListener("mouseenter", (e) => {
    phone.innerText = "+1 313 6004575";
  });
  phoneContainer.addEventListener("click", (e) => {
    navigator.clipboard.writeText("+1 313 6004575");
    phone.innerText = "Copied!";
  });
  phoneContainer.addEventListener("mouseleave", (e) => {
    phone.innerText = "Phone";
  });
  emailContainer.addEventListener("mouseenter", (e) => {
    email.innerText = "salehtariq@proton.me";
  });
  emailContainer.addEventListener("click", (e) => {
    navigator.clipboard.writeText("salehtariq@proton.me");
    email.innerText = "Copied!";
  });
  emailContainer.addEventListener("mouseleave", (e) => {
    email.innerText = "Email";
  });

  addHover();
});
