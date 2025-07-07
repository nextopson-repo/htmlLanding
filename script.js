function alertCTA() {
  alert("Thank you for showing interest! We'll get back to you soon.");
}

 function toggleFaq(el) {
      const icon = el.querySelector('i');
      const isOpen = el.classList.toggle('open');
      const answer = el.querySelector('.faq-answer');
      
      icon.classList.toggle('fa-chevron-down', !isOpen);
      icon.classList.toggle('fa-chevron-up', isOpen);
      
      if (isOpen) {
        answer.style.display = 'block';
      } else {
        answer.style.display = 'none';
      }
    }



    // android icon hover effect
      const androidIcon = document.querySelector('.androidicon');
      const playStore = document.querySelector('.playStore');
      androidIcon.addEventListener('mouseenter', () => playStore.classList.add('showPlay'));
      androidIcon.addEventListener('mouseleave', () => playStore.classList.remove('showPlay'));
      playStore.addEventListener('mouseenter', () => playStore.classList.add('showPlay'));
      playStore.addEventListener('mouseleave', () => playStore.classList.remove('showPlay'));
    
    // apple icon hover effect
      const appleIcon = document.querySelector('.appleicon');
      const appStore = document.querySelector('.appStore');
      const wrapper = document.querySelector('.downloadWrapper');
      appleIcon.addEventListener('mouseenter', () => wrapper.classList.add('hoverApple'));
      appleIcon.addEventListener('mouseleave', () => wrapper.classList.remove('hoverApple'));
      appStore.addEventListener('mouseenter', () => wrapper.classList.add('hoverApple'));
      appStore.addEventListener('mouseleave', () => wrapper.classList.remove('hoverApple'));
   
      // Mobile menu toggle functionality
      const menuToggle = document.getElementById('menuToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      const menuIcon = document.getElementById('menuIcon');
      const heroSection = document.getElementById('heroSection');
      const wrapperr = document.getElementById('downloadWrapper');
      let isOpen = false;

      menuToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        mobileMenu.classList.toggle('hidden');
     
        menuIcon.src = isOpen ? './Images/cross.png' : './Images/menu-11 copy.svg';
        if (window.innerWidth < 768) {
          heroSection.classList.toggle('hidden', isOpen); 
          
        }
      });
   
  document.addEventListener('DOMContentLoaded', function () {
    const productToggleMobile = document.getElementById('productToggleMobile');
    const productDropdownMobile = document.getElementById('productDropdownMobile');
    const arrowIcon = document.getElementById('arrowIcon');

    let isDropdownOpen = false;

    productToggleMobile.addEventListener('click', function (e) {
      e.stopPropagation();
      productDropdownMobile.classList.toggle('hidden');

      // Toggle rotation using inline style
      isDropdownOpen = !isDropdownOpen;
      if (isDropdownOpen) {
        arrowIcon.style.transform = 'rotate(90deg)';
      } else {
        arrowIcon.style.transform = 'rotate(0deg)';
      }
    });

    // Optional: click outside to close 
    document.addEventListener('click', function () {
      if (!productDropdownMobile.classList.contains('hidden')) {
        productDropdownMobile.classList.add('hidden');
        isDropdownOpen = false;
        arrowIcon.style.transform = 'rotate(0deg)';
      }
    });

    productDropdownMobile.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });


  // Categery icons
 
    // Slides for Row 1
    const slides1 = [
      { img: "./Images/building-02-solid-rounded.svg", text: "Builder Floors" },
      { img: "./Images/house-03-solid-rounded.svg", text: "House/Villa" },
      { img: "./Images/house-04-solid-rounded.svg", text: "Farmhouse" },
      { img: "./Images/qq-plot-solid-rounded.svg", text: "Plots" }
    ];

    // Slides for Row 2
    const slides2 = [
     
      { img: "./Images/store-03-solid-rounded.svg", text: "Shops/Showroom" },
      { img: "./Images/office-solid-rounded.svg", text: "Office Spaces" },
      { img: "./Images/hotel-01-solid-rounded.svg", text: "Hotels" },
      { img: "./Images/hotel-02-solid-rounded.svg", text: "Hostel/PG" }
    ];

    // Set up each carousel
    function setupCarousel(slides, containerId, delay = 2000) {
      let current = 0;
      const carousel = document.getElementById(containerId);

      function showSlide(index) {
        const slide = slides[index];
        carousel.innerHTML = `
          <img src="${slide.img}" class="w-16 h-16 object-contain" />
          <span class="text-md font-medium mt-2">${slide.text}</span>
        `;
      }

      // Start interval
      setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
      }, delay);
    }

    // Start both carousels
    setupCarousel(slides1, "carousel1");
    setupCarousel(slides2, "carousel2");

      