var slide_centro = document.querySelector(".slide-centro");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img_centro = document.querySelector(".img-centro");
var p_centro = document.querySelector(".frs-slide");

img1.addEventListener("click", () => {
  img_centro.src = "../imagens/kobe.png";
  p_centro.innerHTML = "Los Angeles Lakers é uma das maiores franquias da historia da NBA, na qual formou e fez parte da história dos maiores atletas da liga, possue em torno de 17 titulos,e 32 aparicões em finais. ";
});
img2.addEventListener("click", () => {
  img_centro.src = "../imagens/mj.png";
  p_centro.innerHTML = "Chicago Bulls é um franquia que teve muito sucesso nos anos 90 conquistando 2 tricampeonatos nessa década, é o time onde o melhor jogador da hístoria da NBA jogou, Michal Jordan";
});
img3.addEventListener("click", () => {
  img_centro.src = "../imagens/curry.png";
  p_centro.innerHTML = "Golden State Warriors é a franquia com sede em São Francisco, Califórnia. Equipe que conseguiu conquistar 7 campeonatos da liga, e atualmente tem em seu arsenal o jogador com mais cesta de 3 pontos.";
});
img4.addEventListener("click", () => {
  img_centro.src = "../imagens/murray.png";
  p_centro.innerHTML = "Os Denver Nuggets são uma equipa profissional de basquetebol sediada em Denver, Colorado. Fundada em 1967 como membro da Associação Americana de Basquetebol (ABA), a equipa tem uma história rica e tem sido um pilar fundamental na cidade de Denver durante mais de 50 anos.";
});
img5.addEventListener("click", () => {
  img_centro.src = "../imagens/white.png";
  p_centro.innerHTML = "É conhecido mundialmente por obter 17 títulos da NBA, o que o deixa como o maior vencedor da história da liga junto ao Los Angeles Lakers. Boston Basketball Partners L.L.C. Tanto o apelido de 'Celtics' quanto o mascote 'Lucky the Leprechaun' são uma homenagem à população irlandesa historicamente grande de Boston.";
});
