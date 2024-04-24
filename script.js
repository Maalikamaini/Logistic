// Testimonial Content Array
const testimonials = [
    "Very good services. Best quality web and mobile applications. Specialist in Courier and retail applications.Deepak Pandey",
    "Another testimonial",
    "Yet another testimonial"
];

// Function to rotate testimonials
function rotateTestimonials() {
    let index = 0;
    setInterval(() => {
        document.getElementById("testimonialContent").textContent = testimonials[index];
        index = (index + 1) % testimonials.length;
    }, 3000); // Change content every 3 seconds
}

// Call the function
rotateTestimonials();
// Function to scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Hamburger
$(document).ready(function () {
    $('#navbar-toggler-btn').click(function () {
        if ($(this).hasClass('collapsed')) {
            // Change to close icon
            $(this).find('.navbar-toggler-icon').addClass('d-none');
            $(this).find('.navbar-close-icon').removeClass('d-none');
        } else {
            // Change back to hamburger icon
            $(this).find('.navbar-toggler-icon').removeClass('d-none');
            $(this).find('.navbar-close-icon').addClass('d-none');
        }
    });
});
// Function to show/hide scroll to top button based on scroll position
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-to-top').style.display = 'block';
    } else {
        document.querySelector('.scroll-to-top').style.display = 'none';
    }
}

$(document).ready(function () {
    $('.hover-item').hover(
        function () {
            $(this).css('color', '#007BFF');
            $(this).find('.fa-chevron-right').addClass('animate-chevron');
        },
        function () {
            $(this).css('color', '#000');
            $(this).find('.fa-chevron-right').removeClass('animate-chevron');
        }
    );

    $('.sub-hover-item').hover(
        function () {
            $(this).css('background-color', '#e9e9e9');
            $(this).find('.sub-chevron').addClass('animate-sub-chevron');
        },
        function () {
            $(this).css('background-color', '#f7f7f7');
            $(this).find('.sub-chevron').removeClass('animate-sub-chevron');
        }
    );
});