// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({Add commentMore actions
      behavior: "smooth",
    });
  });
});

// Typed.js animated typing effect
new Typed("#typed", {
  strings: [
    "Combining Software Solutions",
    "Building AI Tools",
    "Delivering Scalable Systems",
  ],
  typeSpeed: 50,
  backSpeed: 30,
  startDelay: 500, // Short delay before typing starts
  backDelay: 1500, // Pause before backspacing
  loop: true,
  loopCount: Infinity, // Ensure it loops indefinitely
  showCursor: true, // Show the blinking cursor
  cursorChar: "|", // Custom cursor character
  autoInsertCss: true, // Automatically insert CSS for the cursor
});

// VanillaTilt initialization for tilt effect on elements with class "tilt"
// Ensure VanillaTilt is loaded before this script
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  easing: "cubic-bezier(.03,.98,.52,.99)", // Custom easing for a smoother tilt
  scale: 1.02, // Slight scale on hover
});

// Progress bar & active nav link tracking on scroll
window.onscroll = () => {
  const winScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";

  // Highlight active nav link based on section in viewport
  const sections = document.querySelectorAll("section[id]");
  sections.forEach((section) => {
    const top = window.scrollY;
    // Adjust offset to make the active link highlight slightly before the section reaches the very top
    const offset = section.offsetTop - window.innerHeight * 0.3; // Adjusted offset
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`nav a[href="#${id}"]`);

    if (link) {
      // Check if link exists to avoid errors
      if (top >= offset && top < offset + height) {
        document
          .querySelectorAll("nav a")
          .forEach((a) => a.classList.remove("active"));
        link.classList.add("active");
      }
      // Optional: remove active class if scrolled past all sections or before the first
      if (top === 0 && id === "hero") {
        // If at the very top, ensure no nav link is active or hero is active
        document
          .querySelectorAll("nav a")
          .forEach((a) => a.classList.remove("active"));
      }
    }
  });
};

// particles.js background config
// Ensure tsParticles is loaded before this script
tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 60, density: { enable: true, area: 800 } }, // More particles, slightly denser
    color: { value: "#000000" },
    shape: { type: "circle" }, // Explicitly set shape
    opacity: {
      value: 0.5,
      random: true,
      animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false },
    }, // Opacity variation
    size: {
      value: 3,
      random: true,
      animation: { enable: true, speed: 40, minimumValue: 0.1, sync: false },
    }, // Size variation
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    }, // Connect particles
    move: {
      enable: true,
      speed: 2, // Slightly faster movement
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    // Add interactivity
    detectsOn: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" }, // Repulse on hover
      onclick: { enable: true, mode: "push" }, // Push particles on click
      resize: true,
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 },
    },
  },
  retina_detect: true,
});

// FormSubmit AJAX handling for contact form
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    // Use async/await for better readability
    e.preventDefault();
    const formData = new FormData(this);
    const formResponse = document.getElementById("form-response");
    formResponse.textContent = "Sending message..."; // Provide immediate feedback
    formResponse.style.color = "grey"; // Set initial color

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/21129saurabh@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      if (response.ok) {
        formResponse.textContent = "✅ Message sent successfully!";
        formResponse.style.color = "limegreen";
        contactForm.reset(); // Reset form on success
      } else {
        const data = await response.json(); // Get error message from FormSubmit if available
        formResponse.textContent = `❌ Something went wrong. ${
          data.message || "Please try again."
        }`;
        formResponse.style.color = "crimson";
      }
    } catch (error) {
      console.error("Form submission error:", error);
      formResponse.textContent =
        "⚠️ Network error. Check your internet connection.";
      formResponse.style.color = "orange";
    } finally {
      // Clear message after a few seconds
      setTimeout(() => {
        formResponse.textContent = "";
      }, 5000);
    }
  });
}

// Dark mode toggle logic
const toggle = document.querySelector(".theme-toggle");
if (toggle) {
  const toggleText = toggle.querySelector(".toggle-text");
  const toggleIcon = toggle.querySelector(".toggle-icon");

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleText.textContent = "Dark Mode";
    toggleIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    toggleText.textContent = "Light Mode";
    toggleIcon.classList.replace("fa-sun", "fa-moon");
  }

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggleText.textContent = "Dark Mode";
      toggleIcon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("theme", "dark"); // Save preference
    } else {
      toggleText.textContent = "Light Mode";
      toggleIcon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("theme", "light"); // Save preference
    }
  });
}

// Project filter buttons functionality
const filterButtons = document.querySelectorAll(".filter-buttons button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    projectCards.forEach((card) => {
      // Use display property for filtering with transition
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
        // Optionally add an animation class for entrance if filtering
        card.classList.add("fade-in");
        setTimeout(() => {
          card.classList.remove("fade-in");
        }, 300); // Match with CSS transition
      } else {
        card.style.display = "none";
      }
    });
  });
});

// --- Project Details Modal Logic ---

const projectModal = document.getElementById("projectModal");
const closeButton = document.querySelector(".close-button");
const modalProjectTitle = document.getElementById("modalProjectTitle");
const modalProjectImage = document.getElementById("modalProjectImage");
const modalProjectSummary = document.getElementById("modalProjectSummary"); // New
const modalProjectDetailsList = document.getElementById(
  "modalProjectDetailsList"
); // New
const modalTechList = document.getElementById("modalTechList");

// --- IMPORTANT: Define your project data here ---
const projectsData = {
  "melody-manager": {
    // This ID matches data-project-id="melody-manager"
    title: "Melody Manager",
    image: "Melody Manager.jpg", // Path to your project image
    description: {
      // Changed to an object
      summary: "Python-powered Music Library System with MySQL integration",
      details: [
        "Developed a full-fledged music library system that allows users to manage, store, and retrieve songs seamlessly.",
        "Integrated MySQL for robust and scalable data storage, optimizing retrieval speeds.",
        "Implemented CRUD functionalities (Create, Read, Update, Delete) for efficient database management.",
        "Designed advanced search features that filter songs by title, artist, album, and genre.",
        "Optimized query execution, reducing data retrieval time for an enhanced user experience.",
      ],
    },
    tech: ["Python", "MySQL", "Flask", "HTML", "CSS", "JavaScript"], // Example tech stack for Melody Manager
  },
  "learn-trade": {
    // This ID matches data-project-id="learn-trade"
    title: "Learn Trade", // Updated title for clarity
    image: "Learn Trade.png", // Path to your project image
    description: {
      // Changed to an object
      summary:
        "Developed an application capable of Stock Trading Portfolio Management System",
      details: [
        "Tools & technologies used: Python, Pandas, Beautiful Soup, Requests, Tkinter",
        "Developed a tool simulating stock trading with real-time price retrieval via web scraping from Google Finance.",
        "Implemented advanced CSV file handling for the effective storage of user portfolios and account variables.",
        "Enabled users to perform buy and sell transactions, calculate total investment and monitor profit and loss.",
        "Designed an user-friendly interface featuring real-time stock updates, portfolio display and account balance",
      ],
    },
    tech: ["Next.js", "Firebase", "Tailwind CSS", "Chart.js"], // Example tech stack for Learn Trade
  },
  // Add more projects following this new structure:
  // 'your-project-id': {
  //     title: 'Your Project Title',
  //     image: 'path/to/your/image.jpg',
  //     description: {
  //         summary: 'A concise summary of your project.',
  //         details: [
  //             'Detail point 1.',
  //             'Detail point 2.',
  //             'Detail point 3.'
  //         ]
  //     },
  //     tech: ['Technology 1', 'Technology 2', 'Technology 3'],
  // },
};

// Event listener for all "Details" buttons
document.querySelectorAll(".project-card .details-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Get the project ID from the data-project-id attribute
    const projectId = this.dataset.projectId;
    const project = projectsData[projectId];

    // Inside the button.addEventListener('click', ...) function:
    if (project) {
      // Populate modal content
      modalProjectTitle.textContent = project.title;
      modalProjectImage.src = project.image;
      modalProjectImage.alt = project.title;

      // Set the project summary
      modalProjectSummary.textContent = project.description.summary;

      // Clear previous tech list
      modalTechList.innerHTML = "";
      project.tech.forEach((tech) => {
        const li = document.createElement("li");
        li.textContent = tech;
        modalTechList.appendChild(li);
      });

      // Populate the project details list
      modalProjectDetailsList.innerHTML = ""; // Clear previous details
      project.description.details.forEach((detail) => {
        const li = document.createElement("li");
        li.textContent = detail;
        modalProjectDetailsList.appendChild(li);
      });

      // Display the modal
      projectModal.style.display = "flex"; // Use flex to center the modal
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
  });
});

// Close modal when the close button is clicked
closeButton.addEventListener("click", function () {
  projectModal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable background scrolling
});

// Close modal if clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target == projectModal) {
    projectModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
