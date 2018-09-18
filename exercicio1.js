function plusClick(event) {
  let result = event.target.parentNode.classList.toggle("expandido");
  if (result) {
    event.target.innerHTML = "-";
  } else {
    event.target.innerHTML = "+";
  }
}

function inicia() {
  let buttoms = document.querySelectorAll(".botao-expandir-retrair");
  for (let b of buttoms) {
    b.addEventListener("click", plusClick, false);
  }
}

document.addEventListener("DOMContentLoaded", inicia, false);
