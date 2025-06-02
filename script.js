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


document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  fetch("https://formsubmit.co/ajax/21129saurabh@gmail.com", {
    method: "POST",
    headers: { 'Accept': 'application/json' },
    body: formData
  })
  .then(response => {
    if (response.ok) {
      document.getElementById("form-response").textContent = "✅ Message sent successfully!";
      this.reset();
    } else {
      document.getElementById("form-response").textContent = "❌ Something went wrong. Try again.";
    }
  })
  .catch(() => {
    document.getElementById("form-response").textContent = "⚠️ Network error. Check your internet.";
  });
});
