// Smooth Scrolling for Navigation Links
// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         window.scrollTo({
//             top: target.offsetTop - 70, // Adjust for fixed navbar
//             behavior: 'smooth'
//         });
//     });
// });

// // Contact Form Validation
// const form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent form submission (since it's not functional)
    
//     const name = document.querySelector('input[name="name"]').value;
//     const email = document.querySelector('input[name="email"]').value;
//     const message = document.querySelector('textarea[name="message"]').value;
    
//     if (name === '' || email === '' || message === '') {
//         alert('Please fill out all fields.');
//     } else if (!validateEmail(email)) {
//         alert('Please enter a valid email address.');
//     } else {
//         alert('Thank you for your message!');
//     }
// });

// // Simple Email Validation
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// }

// // Button Hover Effect for Interactive Buttons
// const buttons = document.querySelectorAll('button');
// buttons.forEach(button => {
//     button.addEventListener('mouseover', () => {
//         button.style.backgroundColor = '#00b4d8'; // Change color on hover
//     });
//     button.addEventListener('mouseout', () => {
//         button.style.backgroundColor = '#0077b6'; // Revert to original color
//     });
// });
// Scroll smoothly to sections when clicking on navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
