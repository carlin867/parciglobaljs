var easteregg = document.querySelector('#egg')
var img_slides = [...document.querySelectorAll(".imagens")];
var modal = [...document.querySelectorAll(".modal")];

img_slides.forEach((e, i) => {
  e.addEventListener("click", () => {
    modal[i].showModal();
  });
});

modal.forEach((e) => {
  e.addEventListener("click", () => {
    e.close();
  });
});
var c = 0
easteregg.addEventListener('click',
  ()=>{
    
    c = c + 1
    if(c == 3){
      alert("Você encontrou o easter egg! Parabéns!")
      c = 0
      location.href = 'jogo.html'
    }
  }
)
