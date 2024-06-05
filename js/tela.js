var formcadastro = document.querySelector('#cadastro')
var formlogin = document.querySelector('#login')
var btncadastro = document.querySelector('#btncadastro')
var btnlogin = document.querySelector('#btnlogin')
var btncolor = document.querySelector('.btnColor')
var entrar = document.querySelector('#submit-entrar')
var cadastro = document.querySelector('#submit-cadastrar')

btncadastro.addEventListener('click',
    ()=>{
        btnlogin.style.color = 'black'
        btncadastro.style.color = 'white'
        formcadastro.style.left = '25px'
        formlogin.style.left = '450px'
        btncolor.style.left = '0px'
    }
)
btnlogin.addEventListener('click',
    ()=>{
        btnlogin.style.color = 'white'
        btncadastro.style.color = 'black'
        formcadastro.style.left = '-450px'
        formlogin.style.left = '25px'
        btncolor.style.left = '95px'
    }
)

entrar.addEventListener('click',
    ()=>{
        let nome = document.getElementById('inomel').value
        let senha = document.getElementById('isenhal').value
        let nome_adm = 'carlin867'
        let senha_adm = 'thecrias'
        if(nome == nome_adm && senha == senha_adm){
            alert(`Bem Vindo de Volta ${nome_adm}`)
            location.href = '../index.html'
        }else{
            alert('Usuário ou senha incorretos')
        }
    }
)
cadastro.addEventListener('click',
    ()=>{
        let nome = document.querySelector('#iusuarioc').value
        let senha = document.querySelector('#isenhac').value
        let email = document.querySelector('#iemailc').value
        let nome_adm = 'carlin867'
        let senha_adm = 'thecrias'
        let email_adm = 'carlinaugustin867@gmail.com'
        if(nome.length === 0 && senha.length === 0 && email.length === 0){
            alert('Digite as informações em todos os campos para o cadastro!')
        }else if(nome == nome_adm && senha == senha_adm && email == email_adm){
            alert('Conta Existente!')
        }
        else{
            alert('Conta Cadastrada Com Sucesso!')
            location.href = '../index.html'
        }
    }
)



