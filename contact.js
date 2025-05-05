const burger = document.getElementById('burger-menu');
const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

const form = document.getElementById('contact-form');
const spinner = document.getElementById('loading-spinner');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  spinner.style.display = 'block';

  (function(){
      emailjs.init("3MSE_KUO4UrFbew0f");
  })();

emailjs.sendForm('service_yb7fsfs', 'template_gi7gxlj', form)
  .then(function(response) {
      Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for getting in touch.',
          icon: 'success',
          confirmButtonText: 'OK'
      });
      form.reset();
  }, function(error) {
      Swal.fire({
          title: 'Error!',
          text: 'Failed to send message. Try again later.',
          icon: 'error',
          confirmButtonText: 'Close'
      });
      console.error('EmailJS error:', error);
  })
  .finally(() => {
      spinner.style.display = 'none';
  });
});
    
const canvas = document.getElementById('make-me-cool');
const settings = {
    colors: ['#111111', '#4a4a4a', '#c3c3c3'],
    triangleSize: 77,
    bleed: 150,
    noise: -73,
};
ThpaceGL.create(canvas, settings);