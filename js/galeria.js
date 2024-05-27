var slide_centro = document.querySelector(".slide-centro");
var img_slides = [...document.querySelectorAll(".img-slides")];
var jogadores_gal = [
  "../imagens/kobe.png",
  "../imagens/mj.png",
  "../imagens/curry.png",
  "../imagens/murray.png",
  "../imagens/white.png",
];
var frs_gal = [
  "Los Angeles Lakers é uma das maiores franquias da historia da NBA, na qual formou e fez parte da história dos maiores atletas da liga, possue em torno de 17 titulos,e 32 aparicões em finais. ",
  "Chicago Bulls é um franquia que teve muito sucesso nos anos 90 conquistando 2 tricampeonatos nessa década, é o time onde o melhor jogador da hístoria da NBA jogou, Michal Jordan",
  "Golden State Warriors é a franquia com sede em São Francisco, Califórnia. Equipe que conseguiu conquistar 7 campeonatos da liga, e atualmente tem em seu arsenal o jogador com mais cesta de 3 pontos.",
  "Os Denver Nuggets são uma equipa profissional de basquetebol sediada em Denver, Colorado. Fundada em 1967 como membro da Associação Americana de Basquetebol (ABA), a equipa tem uma história rica e tem sido um pilar fundamental na cidade de Denver durante mais de 50 anos.",
  "É conhecido mundialmente por obter 17 títulos da NBA, o que o deixa como o maior vencedor da história da liga junto ao Los Angeles Lakers. Boston Basketball Partners L.L.C. Tanto o apelido de 'Celtics' quanto o mascote 'Lucky the Leprechaun' são uma homenagem à população irlandesa historicamente grande de Boston.",
];

var img_centro = document.querySelector(".img-centro");
var p_centro = document.querySelector(".frs-slide");

img_slides.forEach((e, i) => {
  e.addEventListener("click", () => {
    img_centro.src = jogadores_gal[i];
    p_centro.innerHTML = frs_gal[i];
  });
});

var back = document.getElementById('back')
var prox = document.getElementById('prox')
var c = 0
prox.addEventListener('click',
  ()=>{
      c = (c + 1) % jogadores_gal.length
      img_centro.src = jogadores_gal[c]
      p_centro.innerHTML = frs_gal[c]
    }
  
)
back.addEventListener('click',
  ()=>{
      c = (c - 1) % jogadores_gal.length
      if(c < 0){
        c = jogadores_gal.length - 1
      }
      img_centro.src = jogadores_gal[c]
      p_centro.innerHTML = frs_gal[c]

    }
  
)