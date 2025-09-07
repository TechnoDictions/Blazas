/*
===========
menu-sidebar
===========
*/
let menuDiv = document.querySelector(".menu-sidebar");

document.querySelector(".menu-btn").addEventListener("click", function() {
  menuDiv.classList.toggle("active")
});

let menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
});
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
==============
For search
==============
*/
 const searchContainer = document.querySelector(".search-container");
    const searchBtn = document.querySelector(".search-icon");
    const searchBox = document.querySelector(".search-box");
    const closeBtn = document.querySelector(".close-btn");

    // Open search
   searchBtn.addEventListener("click", (e) => {
  e.stopPropagation(); 
  searchContainer.classList.add("active");
  searchBox.classList.add("active");
  searchBox.focus();
});

    // Close search on X
    closeBtn.addEventListener("click", () => {
      searchBox.classList.remove("active");
      searchContainer.classList.remove("active");
      searchBox.value = "";
    });

    // Close when clicking outside
    document.addEventListener("click", (event) => {
      if (!searchContainer.contains(event.target)) {
        searchBox.classList.remove("active");
        searchContainer.classList.remove("active");
        searchBox.value = "";
      }
    });



      const searchInput = document.querySelector(".search-input");
  const searchBtn2 = document.querySelector(".searching");

  function performSearch() {
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
  }

  searchBtn2.addEventListener("click", performSearch);

  // Enter key
  searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
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
    const duration = 1300; // time in ms (2 seconds)
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
  let html=`<div class="cards"  data-aos="fade-right" data-aos-duration="1000" data-aos-anchor-placement="top-bottom"> <div class="loader"></div><img src="${img}" alt="${alt}" onload="this.style.display='block'; this.previousElementSibling.style.display='none';"></div>`
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
  let html=`<div class="cards"   data-aos="fade-right" data-aos-duration="1400" data-aos-anchor-placement="top-bottom" > <div class="loader"></div><img src="${img}" alt="${alt}" onload="this.style.display='block'; this.previousElementSibling.style.display='none';"></div>`
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
/*
=============
for Milestone
=============
*/
   function countTo(el, target, { duration = 2000, suffix = "" } = {}) {
      let start = null;
      const fmt = new Intl.NumberFormat(); // adds 1,000 separators

      function step(ts) {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1); // 0..1
        const current = Math.round(p * target);
        el.textContent = fmt.format(current) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    function setupCounters() {
      const nodes = document.querySelectorAll(".stat-number");

      if (!("IntersectionObserver" in window)) {
        nodes.forEach(n => {
          const t = Number(n.dataset.target || 0);
          const s = n.dataset.suffix || "";
          countTo(n, t, { suffix: s });
        });
        return;
      }

      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = Number(el.dataset.target || 0);
            const suffix = el.dataset.suffix || "";
            countTo(el, target, { suffix });
            obs.unobserve(el); 
          }
        });
      }, { threshold: 0.5 }); 

      nodes.forEach(n => obs.observe(n));
    }
    document.addEventListener("DOMContentLoaded", setupCounters);
