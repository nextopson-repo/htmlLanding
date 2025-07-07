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
