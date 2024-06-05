
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
