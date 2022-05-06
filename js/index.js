// Navbar Responsive
const toggleButton = document.querySelector(".menu");
const nav = document.querySelector(".show-menu");
const nav_bg = document.querySelector(".Nav-section");
const nav_close = document.querySelector(".close");

toggleButton.addEventListener("click", () => {
  nav.style.display = "block";
  nav_bg.style.backgroundColor = "#181719";
  nav_close.style.display = "block";
  toggleButton.style.display = "none";
});
nav_close.addEventListener("click", () => {
  nav.style.display = "none";
  toggleButton.style.display = "block";
  nav_close.style.display = "none";
  nav_bg.style.backgroundColor = "transparent";
});

// Footer Text
const d = new Date();
document.getElementById("footer").innerHTML =
  "&COPY; Feelchi1star " +
  d.getFullYear() +
  " " +
  `
  <b>
    <a href="https://www.github.com/feelchi1star">
      Created by Felix Chinonso Emmanuel
    </a>
  </b> `;
