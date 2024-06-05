verificarPrimeiraVisita();

function verificarPrimeiraVisita() {
  if (!sessionStorage.getItem("visitou")) {
    setTimeout(function () {
      alert("Você será redirecionada para a tela de Login/Cadastro!");
      location.href = "html/tela.html"; // Redireciona para a página de login/cadastro após 2 segundos
    }, 5000);
    sessionStorage.setItem("visitou", "true"); // Marca que o usuário já visitou o site
  }
}
function galeriaBtn() {
  location.href = "html/galeria.html";
}

var menur = document.querySelector(".menu-responsive");
var btn_img = document.querySelector(".logo-btn>img");
var btn_menu = document.querySelector(".logo-btn");
var menu = document.querySelector(".menu");

window.addEventListener("resize", function () {
  if (window.innerWidth >= 900) {
    menur.style.display = "none";
  } else if ((btn_img.src = "imagens/menu.svg")) {
    menur.style.display = "none";
  }
});

if (window.innerWidth >= 900) {
  menur.style.display = "none";
} else {
  btn_menu.addEventListener("click", () => {
    if (menur.style.display == "block") {
      menur.style.display = "none";
      btn_img.src = "imagens/menu.svg";
    } else {
      menur.style.display = "block";
      btn_img.src = "imagens/close.svg";
    }
  });
}

const modal = [...document.querySelectorAll("dialog")];
const img_modal = [...document.querySelectorAll("dialog>img")];
const pos = [...document.querySelectorAll(".posicoe")];
const img_pos = [
  [
    "imagens/curry-pos.png",
    "imagens/irvirg-pos.png",
    "imagens/magic-pos.png",
    "imagens/iverson-pos.png",
    "imagens/paul-pos.png",
  ],
  [
    "imagens/mj-pos.png",
    "imagens/iverson-pos.png",
    "imagens/kobe-pos.png",
    "imagens/leandro-pos.png",
    "imagens/west-pos.png",
  ],
  [
    " imagens/lebron-pos.png",
    "imagens/durant-pos.png",
    "imagens/butler-pos.png",
    "imagens/leonard-pos.png",
    "imagens/carlos-pos.png",
  ],
  [
    "imagens/ducan-pos.png",
    "imagens/durant-pos.png",
    "imagens/giannis-pos.png",
    "imagens/antony-pos.png",
    "imagens/larry-pos.png",
  ],
  [
    "imagens/antony-pos.png",
    "imagens/suaq-pos.png",
    "imagens/russel-pos.png",
    "imagens/jabbar-pos.png",
    "imagens/ducan-pos.png",
  ],
];

// const armador = document.querySelector("#armador>img");
// const ala_armador = document.querySelector("#ala-armador>img");
// const ala = document.querySelector("#ala>img");
// const ala_pivo = document.querySelector("#ala-pivo>img");
// const pivo = document.querySelector("#pivo>img");

pos.forEach((e, i) => {
  e.addEventListener("click", () => {
    modal[i].showModal();
  });
});
modal.forEach((e, i) => {
  e.addEventListener("click", () => {
    e.close();
  });

  const imgs = e.querySelectorAll("img");
  imgs.forEach((el, ind) => {
    el.addEventListener("click", () => {
      pos[i].src = img_pos[i][ind];
    });
  });
});



const header = document.querySelector('header');


function scrollHeader() {
  const scrollTop = window.scrollY;
  const link_btn = [...document.querySelectorAll('.btn-menu>a')]
  const btn_menu = [...document.querySelectorAll('.btn-menu')]
  console.log(scrollTop);

  if (scrollTop > 60) {
    header.style.background = '#696969';
    link_btn.forEach(
      (e,i)=>{
        e.style.color = 'white';
      }
    )
    btn_menu.forEach(
      (e,i)=>{
        e.style.background = '#696969';
      }
    )
  } else {
    header.style.background = ''; 
    link_btn.forEach(
      (e,i)=>{
        e.style.color = '';
      }
    )
    btn_menu.forEach(
      (e,i)=>{
        e.style.background = '';
      }
    )
  }
}
window.addEventListener('scroll',
  ()=>{
    scrollHeader()
  }
)
