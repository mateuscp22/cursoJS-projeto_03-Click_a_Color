const colors = ["Red", "Blue", "Yellow", "Purple", "Green"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//No click
btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.background = colors[randomColor]; // Aplicando a cor ao background
  color.textContent = colors[randomColor];
});

//Gerar numeros randomicos
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
