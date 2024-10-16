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
let count = 0;

const nameDiv = document.getElementById("my-name");
const letters = Array.from(document.querySelectorAll(".name-letters"));
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
  changeLetters(targetWords[count % targetWords.length], true);
  count++;
  setTimeout(() => {
    changeLetters(myName);
    mouseIsOver ? hover(e) : addHover();
  }, 1000);
  nameDiv.removeEventListener("mouseenter", hover);
};

nameDiv.addEventListener("mouseenter", (e) => {
  mouseIsOver = true;
});
nameDiv.addEventListener("mouseleave", (e) => {
  mouseIsOver = false;
});

const addHover = () => {
  nameDiv.addEventListener("mouseenter", hover);
};

addHover();
