const colors = ["Red", "Blue", "Yellow", "Purple", "Green", "Grey"]; // Array de cores
const btn = document.getElementById("btn"); // Referência ao botão
const color = document.querySelector(".color"); // Posição do nome da cor no HTML usando a class CSS de referência

//No click
btn.addEventListener("click", function () {
  const randomColor = getRandomColor(); // Guarda o numero aleatório criado dentro de uma variavel
  document.body.style.background = colors[randomColor]; // Aplicando a cor ao background
  color.textContent = colors[randomColor]; // Associado a variavel 'color' para exibir o nome da cor
});

//Gerar numeros randomicos
function getRandomColor() {
  //Math.random(): Retorna um numero randomico (número pseudoaleatório)
  //Math.floor(x) retorna o menor número inteiro dentre o número "x"
  return Math.floor(Math.random() * colors.length);
}
