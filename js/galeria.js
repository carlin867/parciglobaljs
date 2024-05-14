var slide_centro = document.querySelector('.slide-centro>img')
var img1 = document.getElementById('img1')
var img2 = document.getElementById('img2')
var img3 = document.getElementById('img3')
var img4 = document.getElementById('img4')
var img5 = document.getElementById('img5')

img1.addEventListener('click',
    ()=>{
        slide_centro.src = '../imagens/Los-Angeles-Lakers-Logo.png'
    }
)
img2.addEventListener('click',
    ()=>{
        slide_centro.src = '../imagens/Chicago_bulls_logo.png'
    }
)
img3.addEventListener('click',
    ()=>{
        slide_centro.src = '../imagens/Golden-State-Warriors-Logo.png'
    }
)
img4.addEventListener('click',
    ()=>{
        slide_centro.src = '../imagens/Sacramento-Kings-Logo.png'
    }
)
img5.addEventListener('click',
    ()=>{
        slide_centro.src = '../imagens/Boston-Celtics-Logo.png'
    }
)


