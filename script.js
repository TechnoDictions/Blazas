
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

