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

var menur = document.querySelector(".menu-responsive");
var btn_img = document.querySelector('.logo-btn>img')
var btn_menu = document.querySelector('.logo-btn')
var menu = document.querySelector(".menu");

window.addEventListener('resize', function() {
  if(window.innerWidth >= 900){
    menur.style.display = "none";
  }else if(btn_img.src = 'imagens/menu.svg'){
    menur.style.display = "none";
  }
});

if(window.innerWidth >= 900){
  menur.style.display = "none";
}
else{
  btn_menu.addEventListener('click',
    ()=>{
      if (menur.style.display == "block") {
        menur.style.display = "none";
        btn_img.src = 'imagens/menu.svg'
      }
      else{
        menur.style.display = "block";
        btn_img.src = 'imagens/close.svg'
      }
    }
  )
}