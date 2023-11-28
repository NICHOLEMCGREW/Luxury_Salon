let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    menu.classList.remove('fas-times');
    navbar.classList.remove('active');
});

// Typed js

var typed = new Typed('#home-title', {
    strings: [
        'Hello <br> Beautiful'
    ],
    typeSpeed: 80,
    startDelay: 500,
  });
  

// scroll-to-down 
// document.addEventListener('DOMContentLoaded', function () {
//   // Get all the links with the class "scroll-to-down"
//   const scrollDownLinks = document.querySelectorAll('.scroll-to-down');

//   // Add click event listener to each link
//   scrollDownLinks.forEach(function (link) {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();

//       // Get the parent section of the clicked link
//       const parentSection = link.closest('section');

//       // Get the next section (assuming each section follows the previous one)
//       const targetSection = parentSection.nextElementSibling;

//       // Scroll smoothly to the target section
//       if (targetSection) {
//         targetSection.scrollIntoView({
//           behavior: 'smooth'
//         });
//       }
//     });
//   });
// });