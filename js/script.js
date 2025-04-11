document.addEventListener("DOMContentLoaded", function () {
    // Carousel functionality (only if elements exist)
    const slides = document.querySelectorAll(".slide");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
  
    if (slides.length > 0 && prev && next) {
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
    }
  
    // Hamburger menu toggle (works on all pages)
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector("nav .menu");
  
    if (hamburger && menu) {
      hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
      });
    }

    // Get the modal element which contains the overlay and modal content
    const modal = document.getElementById("foodModal");

    // Get the clickable image element that will trigger the modal to open
    const img = document.querySelector(".clickable-food-img");

    // Get the image element inside the modal where the clicked image will be displayed
    const modalImg = document.getElementById("modalFoodImg");

    // Get the element that serves as the 'close' button (e.g., an 'X' icon)
    const span = document.querySelector(".modal .close");

    // If the clickable image exists, attach event listeners for both click and touchend
    // These events ensure that the modal opens correctly on both desktop and mobile devices
    if (img) {
      // When the image is clicked on desktop
      img.onclick = function () {
        // Display the modal by setting its display style to "block"
        modal.style.display = "block";
        // Set the source of the modal image to the source of the clicked image
        modalImg.src = this.src;
      };

      // When the image is tapped on a touch device
      img.addEventListener("touchend", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
      });
    }

    // For the close button, ensure it works on both click and touchend events
    if (span) {
      // When the close button is clicked
      span.onclick = function () {
        // Hide the modal by setting its display style to "none"
        modal.style.display = "none";
      };

      // When the close button is tapped on a touch device
      span.addEventListener("touchend", function () {
        modal.style.display = "none";
      });
    }

    // Add an event listener on the window to detect when a user clicks/taps outside the modal content
    // This will allow closing the modal by tapping on the overlay (background)
    window.addEventListener("click", function (event) {
      // Check if the event target is the modal itself (i.e., the overlay)
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Also, add a touchend listener on the window for mobile devices
    window.addEventListener("touchend", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
    
  });
  