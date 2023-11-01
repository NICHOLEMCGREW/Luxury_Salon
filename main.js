document.getElementById('book-now').addEventListener('click', function() {
    // Add your booking functionality here
    alert('Booking feature coming soon!');
});

// document.querySelector('.hamburger').addEventListener('click', function() {
//     document.querySelector('.nav-links').classList.toggle('active');
// });


// <!-- JavaScript for the Hamburger Menu -->
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    // Toggle the "active" class on the navigation links when the hamburger is clicked
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });


