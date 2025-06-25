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