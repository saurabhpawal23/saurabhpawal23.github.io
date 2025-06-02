// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Typing effect
new Typed("#typed", {
  strings: [
    "Combining Software Solutions",
    "Building AI Tools",
    "Delivering Scalable Systems"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

// Tilt effect
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2
});

// Scroll progress bar
window.onscroll = () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Particles.js background
tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 40 },
    color: { value: "#ffffff" },
    move: { enable: true, speed: 1 },
    size: { value: 2 },
    opacity: { value: 0.5 },
  }
});

// Contact form AJAX with feedback
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  fetch("https://formsubmit.co/ajax/21129saurabh@gmail.com", {
    method: "POST",
    headers: { 'Accept': 'application/json' },
    body: formData
  })
  .then(response => {
    const msg = document.getElementById("form-response");
    if (response.ok) {
      msg.textContent = "✅ Message sent successfully!";
      msg.style.color = "limegreen";
      this.reset();
    } else {
      msg.textContent = "❌ Something went wrong. Try again.";
      msg.style.color = "crimson";
    }
  })
  .catch(() => {
    const msg = document.getElementById("form-response");
    msg.textContent = "⚠️ Network error. Check your internet.";
    msg.style.color = "orange";
  });
});


const toggle = document.querySelector('.theme-toggle');
const toggleText = toggle.querySelector('.toggle-text');
const toggleIcon = toggle.querySelector('.toggle-icon');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleText.textContent = 'Dark Mode';
    toggleIcon.classList.remove('fa-moon');
    toggleIcon.classList.add('fa-sun');
  } else {
    toggleText.textContent = 'Light Mode';
    toggleIcon.classList.remove('fa-sun');
    toggleIcon.classList.add('fa-moon');
  }
});


// Project filter logic
const filterButtons = document.querySelectorAll(".filter-buttons button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
