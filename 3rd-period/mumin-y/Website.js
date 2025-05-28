const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

function updateDetails(url, title, author) {
  memeImage.src = url;
  memeTitle.textContent = title;
  memeAuthor.textContent = `Meme by: ${author || "Unknown"}`;
}

function generateMeme() {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then(res => res.json())
    .then(data => updateDetails(data.url, data.title, data.author));
}

generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();

document.getElementById("kginput").addEventListener("input", function (e) {
  const kg = parseFloat(e.target.value);
  const output = document.getElementById("output");
  if (!kg || kg <= 0) {
    output.style.visibility = "hidden";
    return;
  }
  output.style.visibility = "visible";
  document.getElementById("grams").textContent = (kg * 1000).toFixed(2);
  document.getElementById("pounds").textContent = (kg * 2.20462).toFixed(2);
  document.getElementById("ounce").textContent = (kg * 35.274).toFixed(2);
});

document.getElementById("switch-btn").addEventListener("click", function () {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  document.body.style.backgroundColor = randomColor;
  document.getElementById("color-code").textContent = randomColor.toUpperCase();
});








