const swiper = new Swiper('.s1', {
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
},
});

const swiper1 = new Swiper('.s2', {
  slidesPerView: 3.5,
  speed: 400,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
},
});
const swiper3 = new Swiper('.s4',{
  speed: 400,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
},
scrollbar: {
  el: '.swiper-pagination1',
  draggable: true,
},
})
const swiper4 = new Swiper('.s5',{
  speed: 400,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination5",
    clickable: true,
},
scrollbar: {
  el: '.swiper-scrollbar',
  draggable: true,
},
})
const swiper2 = new Swiper('.s3',{
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
},

})