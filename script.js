//This  is  header component
// Dynamically resolve path to header.html based on current HTML location
let headerPath;

if (window.location.pathname.includes("/Pages/")) {
  // For files inside /Pages (like Pages/Careers.html)
  headerPath = "../component/header.html";
} else {
  // For index.html or any root-level file
  headerPath = "component/header.html";
}

fetch(headerPath)
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header-container")?.innerHTML = data;
    document.getElementById("headerComponent")?.innerHTML = data;
    setupHeaderScripts();
  });

function setupHeaderScripts() {
  // Android icon hover effect
  const androidIcon = document.querySelector('.androidicon');
  const playStore = document.querySelector('.playStore');
  if (androidIcon && playStore) {
    androidIcon.addEventListener('mouseenter', () => playStore.classList.add('showPlay'));
    androidIcon.addEventListener('mouseleave', () => playStore.classList.remove('showPlay'));
    playStore.addEventListener('mouseenter', () => playStore.classList.add('showPlay'));
    playStore.addEventListener('mouseleave', () => playStore.classList.remove('showPlay'));
  }

  // Apple icon hover effect
  const appleIcon = document.querySelector('.appleicon');
  const appStore = document.querySelector('.appStore');
  const wrapper = document.querySelector('.downloadWrapper');
  if (appleIcon && appStore && wrapper) {
    appleIcon.addEventListener('mouseenter', () => wrapper.classList.add('hoverApple'));
    appleIcon.addEventListener('mouseleave', () => wrapper.classList.remove('hoverApple'));
    appStore.addEventListener('mouseenter', () => wrapper.classList.add('hoverApple'));
    appStore.addEventListener('mouseleave', () => wrapper.classList.remove('hoverApple'));
  }

  // Mobile menu toggle functionality
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const heroSection = document.getElementById('heroSection');
  let isOpen = false;
  if (menuToggle && mobileMenu && menuIcon) {
    menuToggle.addEventListener('click', () => {
      isOpen = !isOpen;
      mobileMenu.classList.toggle('hidden');
      menuIcon.src = isOpen ? './Images/cross.png' : './Images/menu-11 copy.svg';
      if (window.innerWidth < 768 && heroSection) {
        heroSection.classList.toggle('hidden', isOpen);
      }
    });
  }

  // Mobile nav product dropdown
  const productToggleMobile = document.getElementById('productToggleMobile');
  const productDropdownMobile = document.getElementById('productDropdownMobile');
  const arrowIcon = document.getElementById('arrowIcon');
  let isDropdownOpen = false;
  if (productToggleMobile && productDropdownMobile && arrowIcon) {
    productToggleMobile.addEventListener('click', function (e) {
      e.stopPropagation();
      productDropdownMobile.classList.toggle('hidden');
      isDropdownOpen = !isDropdownOpen;
      arrowIcon.style.transform = isDropdownOpen ? 'rotate(90deg)' : 'rotate(0deg)';
    });
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
  }
}

function alertCTA() {
  alert("Thank you for showing interest! We'll get back to you soon.");
}

// 



   
  
      