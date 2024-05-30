document.addEventListener("DOMContentLoaded", function() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");
  const mainContent = document.querySelector("#main-content");

  navbarToggler.addEventListener("click", function() {
    setTimeout(() => {
      if (navbarCollapse.classList.contains("show")) {
        mainContent.style.paddingTop = `${navbarCollapse.scrollHeight}px`;
      } else {
        mainContent.style.paddingTop = "0";
      }
    }, 300); // Wait for the collapse animation to finish
  });

  window.addEventListener("resize", function() {
    if (window.innerWidth >= 992) {
      mainContent.style.paddingTop = "0";
    } else if (navbarCollapse.classList.contains("show")) {
      mainContent.style.paddingTop = `${navbarCollapse.scrollHeight}px`;
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var theater = theaterJS();

  theater
    .addActor('logo-text', { accuracy: 0.8, speed: 0.8 })
    .addScene('logo-text:Arne Wiseman', 400);
    theater

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name) {
          alert('Please enter your name.');
          return;
      }
      if (!email || !emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          return;
      }
      if (!message) {
          alert('Please enter your message.');
          return;
      }
      alert('Form submitted successfully!');
    });
  }
});
