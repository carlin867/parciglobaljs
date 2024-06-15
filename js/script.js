verificarPrimeiraVisita();

function verificarPrimeiraVisita() {
  if (!localStorage.getItem("visitou")) {
    setTimeout(function () {
      alert("Você será redirecionada para a tela de Login/Cadastro!");
      location.href = "html/tela.html"; // Redireciona para a página de login/cadastro após 2 segundos
    }, 5000);
    localStorage.setItem("visitou", "true"); // Marca que o usuário já visitou o site
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
      pos[i].src = el.src;
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
