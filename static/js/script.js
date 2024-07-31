// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    let top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let hour = new Date().getHours();
    let greeting = hour < 12 ? "Good Morning" : (hour < 18 ? "Good Afternoon" : "Good Evening");
    alert(`${greeting}, Welcome to Lujaja Portfolio Website!`);
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarSupportedContent');

    // Toggle the menu when the button is clicked
    navbarToggler.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        navbarCollapse.classList.toggle('show');
    });

    // Close the menu when clicking outside of the navbar
    document.addEventListener('click', function(event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove('show');
        }
    });

    // Close the menu when the user scrolls
    window.addEventListener('scroll', function() {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});

