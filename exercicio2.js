// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = "https://fegemo.github.io/cefet-web/images/",
  todasAsImagens = [
    "philae-parts.jpg",
    "philae-rosetta.jpg",
    "philae-separation.jpg",
    "philae-67-picture.jpg",
    "philae-collecting.jpg"
  ];

let i = 0;
let nButtom = document.querySelector("#proximo");
let bButton = document.querySelector("#anterior");
let slide = document.querySelector("#slide");
nButtom.addEventListener("click", function(e) {
  i = (i + 1) % 5;
  slide.src = servidorDasImagens + todasAsImagens[i];
});
bButton.addEventListener("click", function(e) {
  i = i - 1;
  if (i < 0) {
    i = 4;
  }
  slide.src = servidorDasImagens + todasAsImagens[i];
});
