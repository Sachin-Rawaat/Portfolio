let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

const typed = new Typed('.multiple-text' ,{
    strings: [ 'Web Developer' , 'Frontend Developer' , 'Backend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true
        }
    )


// Initialize EmailJS with your user ID
emailjs.init('xPtS5E_j7LJH56tAl');

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way

    // Send the form data using EmailJS
    emailjs.sendForm('service_942xq2r', 'template_74kf6z1', this)
        .then(function() {
            alert('Your message has been sent!');
        }, function(error) {
            alert('Oops... Something went wrong! Please try again later.');
        });
});