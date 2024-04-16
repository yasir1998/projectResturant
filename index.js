let bar = document.querySelector("#bars");
let navbar = document.querySelector(".navigation");
bar.onclick = () => {
  bar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};



document.addEventListener("DOMContentLoaded", function () {
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.getElementById("search-bar");
  const closeSearchButton = document.getElementById("close-search");

  // Toggle search bar visibility when clicking the search icon
  searchIcon.addEventListener("click", function () {
    console.log("Search icon clicked");

    searchBar.style.display =
      searchBar.style.display === "none" || searchBar.style.display === ""
        ? "block"
        : "none";
  });

  // Close the search bar when clicking the close button
  closeSearchButton.addEventListener("click", function () {
    console.log("Search icon clicked");
    searchBar.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Set current time
  var currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("timeInput").value = currentTime;
  // Set current date
  var currentDate = new Date().toISOString().slice(0, 10);
  document.getElementById("dateInput").value = currentDate;
});


document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.swiper-slide');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach((slide) => (slide.style.display = 'none'));
    slides[index].style.display = 'block';
  }

  function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    intervalId = setInterval(moveToNextSlide, 5000);
  }

  function stopAutoSlide() {
    clearInterval(intervalId);
  }

  prevButton.addEventListener('click', () => {
    moveToPrevSlide();
    stopAutoSlide();
  });

  nextButton.addEventListener('click', () => {
    moveToNextSlide();
    stopAutoSlide();
  });

  startAutoSlide();
  showSlide(currentIndex);
});