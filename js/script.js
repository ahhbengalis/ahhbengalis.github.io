document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval = setInterval(showNextSlide, 5000); // 5 seconds
  
    function showSlide(index) {
      slides.forEach((slide, idx) => {
        slide.classList.remove("active");
        if (idx === index) {
          slide.classList.add("active");
        }
      });
    }
  
    function showNextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    function showPrevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }
  
    next.addEventListener("click", function () {
      clearInterval(slideInterval);
      showNextSlide();
      slideInterval = setInterval(showNextSlide, 5000);
    });
  
    prev.addEventListener("click", function () {
      clearInterval(slideInterval);
      showPrevSlide();
      slideInterval = setInterval(showNextSlide, 5000);
    });
  });
  