function addToCart() {
    alert('Product added to cart!');
    // Additional code to add the product to the cart can be added here
}

function onProductClick() {
    alert('You clicked on the product!');
    // You can redirect to a detailed page or show more info, e.g.:
    // window.location.href = 'product-detail-page.html'; // Redirect to another page
    // Or dynamically show more details on the same page
}

let slideIndex = 0;
showSlides(slideIndex);

// Function to change the slide index
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to display the slides
function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    
    // Loop back to the first slide if going beyond the last slide
    if (n >= slides.length) {
        slideIndex = 0;
    }
    
    // Loop back to the last slide if going before the first slide
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
    }
}

