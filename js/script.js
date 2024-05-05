verificarPrimeiraVisita();
function verificarPrimeiraVisita() {
    if (!sessionStorage.getItem('visitou')) {
        setTimeout(function() {
            alert('Você será redirecionada para a tela de Login/Cadastro!')
            location.href = 'html/tela.html'; // Redireciona para a página de login/cadastro após 2 segundos
        }, 5000);
        sessionStorage.setItem('visitou', 'true'); // Marca que o usuário já visitou o site
    }
}
function menuResponsivo(){
    var menu = document.querySelector('.menu-responsive')
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
}

