var jogador = document.querySelector(".jogador");
var cesta = document.querySelector(".cesta");
var pontos = document.querySelector(".pontos");
var c = 0;

var x = 0;
var y = 0;
var velocidade = 10;

// w = 87
// a = 65
// s = 83
// d = 68
// cima = 38
// baixo = 40
// esquerda = 37
// direita = 39

function colisao(div1, div2) {
  const rct1 = div1.getBoundingClientRect();
  const rct2 = div2.getBoundingClientRect();
  const buffer = 65; // adjust this value to increase or decrease the buffer

  return !(
    rct1.left + buffer > rct2.right - buffer ||
    rct2.left + buffer > rct1.right - buffer
  );
}
var timeoutId = null;
window.addEventListener("keydown", (e) => {
  var t = e.keyCode;
  if (t == 68 || t == 39) {
    x = x + velocidade + 10;
    jogador.style.left = x + "px";
    jogador.style.background = "url(../imagens/movimentopf.png)";
    if(jogador.style.background = "url(../imagens/movimentopf.png)"){
        jogador.style.animationName = "frente";
    }
    jogador.style.animationPlayState = "running";

    timeoutId = setTimeout(() => {
        jogador.style.animationPlayState = "paused";
    }, 500);

  } else if (t == 65 || t == 37) {
    x = x - velocidade;
    jogador.style.left = x + "px";
    jogador.style.background = "url(../imagens/movimentopt.png)";
    if(jogador.style.background = "url(../imagens/movimentopt.png)"){
        jogador.style.animationName = "tras";
    }
    jogador.style.animationPlayState = "running";
    timeoutId = setTimeout(() => {
        jogador.style.animationPlayState = "paused";
    }, 500);

  }
  if (colisao(jogador, cesta)) {
    alert("+2!");

    c = c + 2;
    pontos.innerHTML = c;
    if (c == 10) {
      setTimeout(() => {
        alert("Parabébs, Você venceu!");
        window.location.href = "../index.html";
      }, 3000);
    }

    x = 0;
    jogador.style.left = x + "px";
    velocidade = 10;
  }
});
