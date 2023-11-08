// <!-- JavaScript to control the modal -->
   
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("book-now");

        // Get the close button
        var closeBtn = document.getElementById("closeModal");

        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        }

        // When the user clicks on the close button, close the modal
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // When the user clicks outside the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }



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


