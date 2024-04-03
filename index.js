let bar = document.querySelector("#bars");
let navbar = document.querySelector(".navigation");
bar.onclick = () => {
  bar.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

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
