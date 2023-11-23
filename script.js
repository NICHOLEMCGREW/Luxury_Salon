let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// Typed js

var typed = new Typed('#home-title', {
    strings: [
        'Hello <br> Beautiful'
    ],
    typeSpeed: 80,
    startDelay: 500,
  });
  

//   document.addEventListener('DOMContentLoaded', function () {
//     const contactLink = document.getElementById('contact-link');
//     const contactForm = document.getElementById('book');

//     // Toggle the display of the contact form on click
//     contactLink.addEventListener('click', function (event) {
//         event.preventDefault();
//         contactForm.style.display = (contactForm.style.display === 'block') ? 'none' : 'block';
//     });

//     // Hide the contact form when clicking outside of it
//     document.addEventListener('click', function (event) {
//         const isClickInsideContactLink = contactLink.contains(event.target);
//         const isClickInsideContactForm = contactForm.contains(event.target);

//         if (!isClickInsideContactLink && !isClickInsideContactForm) {
//             contactForm.style.display = 'none';
//         }
//     });
// });
