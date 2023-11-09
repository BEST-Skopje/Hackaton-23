







// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});



// Scroll
const links = document.querySelectorAll(".nav-link");

Array.from(links).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navigation.getBoundingClientRect().height;
    const fix = navigation.classList.contains("fix");
    let position = element.offsetTop - navHeight;

    // if (!fix) {
    //   position = position - navHeight;
    // }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navList.classList.remove("open");
  });
});

// Scroll Reveal

const scroll = ScrollReveal({
  distance: "100px",
  duration: 2500,
  reset: true,
});

scroll.reveal(`.main-partner-content h1, .main-partner-content .image-description, .main-partner-content .btn`, {
  origin: "left",
  interval: 150,
});

// Main partner image reveal
scroll.reveal(`.main-partner-image`, {
  origin: "right",
  interval: 150,
});

// Scroll Reveal for all h2 elements in sections with the class 'about'
scroll.reveal('.about h2', {
  origin: 'left',
  distance: '30px',
  duration: 1000,
  delay: 300,
  reset: true
});

// Scroll Reveal for all images in sections with the class 'about'
scroll.reveal('.about img', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  delay: 400,
  reset: true
});

scroll.reveal('.about .btn', {
  origin: 'bottom',
  distance: '20px',
  duration: 800,
  delay: 500,
  reset: true
});

// Scroll Reveal for all image descriptions in sections with the class 'about'
scroll.reveal('.about .image-description', {
  origin: 'bottom',
  distance: '30px',
  duration: 1000,
  delay: 600,
  reset: true
});


