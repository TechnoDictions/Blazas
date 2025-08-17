
/*
========
spacer
=======
*/
 const vh = document.querySelector("header");
  const header_height = vh.offsetHeight; // height in pixels

  // Pass it to CSS as a variable
  document.querySelector(".spacer").style.height = header_height + "px";


/*
=============
Slider script
=============
*/
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.btn.right');
  const prevBtn = document.querySelector('.btn.left');
  let currentIndex = 0;
  let autoSlideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlideFunc() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener('click', () => {
    prevSlideFunc();
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000); // every 4s
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  startAutoSlide();
/*
=========
scroll-btn
=========
*/

document.getElementById("btn-scroll").addEventListener("click", function() {
    const target = document.querySelector(".products-section").offsetTop; // position of target
    const start = window.scrollY; // starting scroll position
    const distance = target - (start+100); // how far to scroll
    const duration = 800; // time in ms (2 seconds)
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smooth effect
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
});
/*
=============
Dynamic Cards
=============
*/

function DynamicCards(img,alt){
  let html=`<div class="cards"><img src="${img}" alt="${alt}"></div>`
  document.querySelector(".products-cards").innerHTML+=html
}
DynamicCards("img/Bracelets/b1.jpg" , "Bracelet beads with charms")
DynamicCards("img/Bracelets/b2.jpg" , "Bracelet beads with charms")
DynamicCards("img/Bracelets/b3.jpg" , "Bracelet beads with charms")
DynamicCards("img/Bracelets/b4.jpg" , "Bracelet beads with charms")


/*
================
Dynamic Cards 2
================
*/
function DynamicCards2(img,alt){
  let html=`<div class="cards"><img src="${img}" alt="${alt}"></div>`
  document.querySelector(".products-cards-2").innerHTML+=html
}
DynamicCards2("img/Bracelets/b5.jpg" , "Bracelet beads with charms")
DynamicCards2("img/Bracelets/b6.jpg" , "Bracelet beads with charms")
DynamicCards2("img/Bracelets/b7.jpg" , "Bracelet beads with charms")
DynamicCards2("img/Bracelets/b8.jpg" , "Bracelet beads with charms")

/*
=========================
For scrolling of products
=========================
*/
function scrollRight(){
const scroll_x = document.querySelector(".products-container")
if(scroll_x){
  scroll_x.scrollBy({
    left:-340,
    behavior:"smooth"
  });
  
}
}
function scrollleft(){
const scroll_y = document.querySelector(".products-container")
if(scroll_y){
  scroll_y.scrollBy({
    left:340,
    behavior:"smooth"
  });
  
  
}
}
/*
=============================
For scrolling of products 2
=============================
*/
function scrollRight2(){
const scroll_x = document.querySelector(".products-container-2")
if(scroll_x){
  scroll_x.scrollBy({
    left:-340,
    behavior:"smooth"
  });
  
}
}
function scrollleft2(){
const scroll_y = document.querySelector(".products-container-2")
if(scroll_y){
  scroll_y.scrollBy({
    left:340,
    behavior:"smooth"
  });
  
  
}
}
