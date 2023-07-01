

$(document).ready(function() {
  $("#img-1").on("click", function() {
    window.location.href = "about.html";
  }).css("cursor", "pointer");
});

$(document).ready(function() {
    $("#img-2").on("click", function() {
      window.location.href = "expencetrack.html";
    }).css("cursor", "pointer");
  });
  $(document).ready(function() {
    $("#img-3").on("click", function() {
      window.location.href = "insights.html";
    }).css("cursor", "pointer");
  });
  
  // Get the carousel container element
const carouselContainer = document.querySelector('.carousel-container');

// Get all carousel items
const carouselItems = document.querySelectorAll('.carousel-item');

// Function to handle carousel slide event
function handleCarouselSlide() {
  const activeItem = document.querySelector('.carousel-item.active');
  const activeItemIndex = Array.from(carouselItems).indexOf(activeItem);

  const colors = ['#EAE0DA', '#FAEAB1', '#B5D5C5']; // Define the colors for each slide

  carouselContainer.style.backgroundColor = colors[activeItemIndex]; // Set the background color

  // Remove the transition class to reset the transition effect
  carouselContainer.classList.remove('carousel-transition');

  // Trigger a reflow by accessing the offsetHeight property
  carouselContainer.offsetHeight;

  // Add the transition class to apply the transition effect
  carouselContainer.classList.add('carousel-transition');
}

// Attach the handleCarouselSlide function to the carousel slide event
carouselContainer.addEventListener('slide.bs.carousel', handleCarouselSlide);