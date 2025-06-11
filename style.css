/* Reset & basics */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

:root {
  /* Colors */
  --primary-color: #4624df;
  --secondary-color: #00c3ff; /* Accent color */
  --text-color-light: #000000;
  --bg-color-light: #f9f9f9;
  --card-bg-light: #ffffff;
  --about-bg-light: #ededf7; /* Will be used in gradient */
  --skill-box-bg-light: #ebe7ff;
  --skill-box-border-light: #c7c3f7;
  --stat-bg-light: #f5f5f5;
  --header-text-light: #e0e0e0;
  --nav-link-light: #f8f6f6;

  --text-color-dark: #e0e0e0;
  --bg-color-dark: #121212;
  --card-bg-dark: #1f1f1f;
  --about-bg-dark: #222; /* Will be used in gradient */
  --skill-box-bg-dark: #333;
  --skill-box-border-dark: #555;
  --stat-bg-dark: #e7e0e0; /* Dark mode stats background for contrast */
  --header-text-dark: #ccc;
  --nav-link-dark: #bbb;

  /* Spacing */
  --spacing-unit: 8px;
  --section-padding: 60px 20px;

  /* Typography */
  --font-family-body: 'Poppins', sans-serif;
  --font-family-heading: 'Montserrat', sans-serif;
  --line-height-body: 1.75;

  /* Project Section Colors */
  --project-bg-light-start: #e0e7ff;
  --project-bg-light-end: #f0f4ff;
  --project-bg-light-mid: #d1d9f0;

  --project-bg-dark-start: #1c1c2f;
  --project-bg-dark-end: #28283d;
  --project-bg-dark-mid: #222233;

  /* About Section Gradient Colors */
  --about-bg-light-start: #e0e7ff; /* A lighter blueish tint */
  --about-bg-light-end: #d1d9f0; /* A slightly darker blueish tint */
  --about-bg-light-mid: #f0f3ff; /* An even lighter almost white blue */

  --about-bg-dark-start: #1e1e2c; /* Dark blue-grey */
  --about-bg-dark-end: #2a2a3f; /* Slightly lighter dark blue-grey */
  --about-bg-dark-mid: #222233; /* Mid-tone dark blue-grey */
}

body {
  font-family: var(--font-family-body);
  background-color: var(--bg-color-light);
  color: var(--text-color-light);
  transition: background-color 0.6s ease, color 0.6s ease;
  line-height: var(--line-height-body);
  font-size: 16px;
}

body.dark-mode {
  background-color: var(--bg-color-dark);
  color: var(--text-color-dark);
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
body.dark-mode ::-webkit-scrollbar-track {
  background: #222;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
body.dark-mode ::-webkit-scrollbar-thumb {
  background: #555;
}
body.dark-mode ::-webkit-scrollbar-thumb:hover {
  background: #777;
}


/* Container */
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px; /* Default padding, will be overridden by #about .container */
}

/* Header (Hero Section) */
header {
  background: linear-gradient(135deg, #3a10d3, #04be04, #000000,#f00505);
  background-size: 400% 400%; /* Applied directly to header */
  animation: gradientBG 12s ease infinite; /* Animation applied directly to header */
  color: white;
  padding: var(--section-padding);
  text-align: center;
  position: relative;
  transition: background 0.6s ease, color 0.6s ease;
  z-index: 1; /* Retained z-index from .hero-section */
}

body.dark-mode header {
  background: linear-gradient(135deg, #333333, #000000, #006644);
  color: var(--header-text-dark);
}

header h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-family: var(--font-family-heading);
  letter-spacing: -0.03em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.tagline {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-top: 10px;
  font-weight: 400;
  color: var(--header-text-light);
  animation: scaleIn 1s ease-out;
  letter-spacing: -0.03em;
}

body.dark-mode .tagline {
  color: var(--header-text-dark);
}

header p {
  font-size: 1.2rem;
  margin-top: 10px;
}

/* Social Icons */
.social-icons {
  margin-top: 20px;
}
.social-icons a {
  color: white;
  font-size: 1.8rem;
  margin: 0 10px;
  transition: color 0.3s ease, transform 0.3s ease;
}
.social-icons a:hover {
  color: var(--secondary-color);
  transform: translateY(-3px);
}
body.dark-mode .social-icons a {
  color: #eee;
}
body.dark-mode .social-icons a:hover {
  color: var(--secondary-color);
}

/* Navigation */
nav {
  margin-top: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

nav a {
  color: var(--nav-link-light);
  margin: 0 12px;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  padding-bottom: 5px;
}

nav a:hover {
  color: var(--secondary-color);
}

nav a.active { /* Consolidated active state */
  border-bottom: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}

body.dark-mode nav a {
  color: var(--nav-link-dark);
}

body.dark-mode nav a:hover {
  color: var(--secondary-color);
}


#about {
  padding: 0;
  margin-bottom: 40px;
  transition: background 1s ease-in-out, color 0.6s ease;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    -45deg,
    var(--about-bg-light-start),
    var(--about-bg-light-mid),
    var(--about-bg-light-end),
    var(--about-bg-light-mid)
  );
  background-size: 400% 400%;
  animation: aboutGradientBG 18s ease infinite;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
}

body.dark-mode #about {
  background: linear-gradient(
    -45deg,
    var(--about-bg-dark-start),
    var(--about-bg-dark-mid),
    var(--about-bg-dark-end),
    var(--about-bg-dark-mid)
  );
  background-size: 400% 400%;
  animation: aboutGradientBG 18s ease infinite;
  color: var(--text-color-dark);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

#about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px);
  background-size: 5px 5px;
  opacity: 0.5;
  z-index: 0;
  pointer-events: none;
  transition: background-image 0.6s ease;
}

body.dark-mode #about::before {
  background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
}

/* Ensure the .about-content is above the pseudo-element */
#about .container.about-content {
  position: relative;
  z-index: 1;
}
body.dark-mode #about .container.about-content {
  background-color: var(--card-bg-dark);
  box-shadow: 0 8px 30px rgba(0,0,0,0.15);
}


.about-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  align-items: flex-start;
}

.about-image {
  flex: 0 0 350px;
  text-align: center;
}

.about-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(7, 7, 7, 0.1);
  border: 3px solid transparent;
  transition: box-shadow 0.3s ease, border-color 0.3s ease, transform 0.3s ease;
}
body.dark-mode .about-image img {
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.05);
}

.about-image:hover img {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 5px rgba(70, 36, 223, 0.2), 0 5px 15px rgba(0,0,0,0.15);
  transform: scale(1.03);
}
body.dark-mode .about-image:hover img {
  border-color: var(--secondary-color);
  box-shadow: 0 0 0 5px rgba(0, 195, 255, 0.2), 0 5px 15px rgba(0,0,0,0.2);
  transform: scale(1.03);
}


.about-text {
  flex: 1;
  max-width: 700px;
}

.about-text h2 {
  font-family: var(--font-family-heading);
  letter-spacing: -0.02em;
  margin-bottom: calc(var(--spacing-unit) * 0.1);
  font-size: 2.2rem;
}
.about-text h3 {
  font-family: var(--font-family-heading);
  letter-spacing: -0.01em;
  margin-top: calc(var(--spacing-unit) * 5);
  margin-bottom: calc(var(--spacing-unit) * 3);
  font-size: 1.5rem;
}


.about-text p {
  margin-bottom: calc(var(--spacing-unit) * 2);
  font-size: 1.2rem;
}

/* Highlight Text */
.highlight-text {
  font-weight: 600;
  color: var(--primary-color);
  padding: 0 2px;
  border-radius: 3px;
  transition: color 0.3s ease;
}
body.dark-mode .highlight-text {
  color: var(--secondary-color);
}

.about-list {
  list-style: none;
  padding-left: 0;
}

.about-list li {
  margin-bottom: var(--spacing-unit);
  font-size: 1rem;
  padding: 10px;
  border-radius: 6px;
  border-bottom: none;
  display: flex;
  align-items: flex-start;
  transition: transform 0.2s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}
.about-list li:hover {
  transform: translateX(5px) scale(1.01);
  background-color: var(--skill-box-bg-light);
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
body.dark-mode .about-list li:hover {
  background-color: var(--skill-box-bg-dark);
  box-shadow: 0 2px 8px rgba(255,255,255,0.07);
}

.about-list i {
  color: var(--primary-color);
  margin-right: 12px;
  font-size: 1.1rem;
  margin-top: 4px;
}

body.dark-mode .about-list li {
  color: var(--text-color-dark);
}
body.dark-mode .about-list i {
  color: var(--secondary-color);
}

.education-section {
  flex: 1; /* Allows education-section to take available space */
  min-width: 280px; /* Minimum width before wrapping */
  padding: 20px;
  background-color: rgba(0, 0, 255, 0.247); /* Use your theme variables */
  border-radius: 8px;
  box-shadow: var(--shadow);
}

.education-section h2 {
  color: var(--heading-color);
  margin-bottom: 20px;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 10px;
}

.education-item {
  margin-bottom: 15px;
}

.education-item h3 {
  color: var(--text-color);
  font-size: 1.5em;
  margin-bottom: 5px;
}

.education-item p {
  color: var(--text-color-light);
  font-size: 0.9em;
  line-height: 1.4;
}


/* Floating Icons */
.floating-icons {
  text-align: center;
  margin-bottom: calc(var(--spacing-unit) * 3);
}
.floating-icons i {
  font-size: 2.5rem;
  margin: 0 15px;
  color: var(--primary-color);
  animation: float 3s ease-in-out infinite;
}
.floating-icons i:nth-child(2) {
  animation-delay: 0.5s;
  color: var(--secondary-color);
}
.floating-icons i:nth-child(3) {
  animation-delay: 1s;
}


/* Skills */
.skills-grid,
.extended-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 25px;
}

.skill-box {
  background-color: var(--skill-box-bg-light);
  color: #2a2a2a;
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  border: 1px solid var(--skill-box-border-light);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.08);
  cursor: default;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
}

.skill-box i {
  color: #4caf50;
}

.skill-box:hover {
  background-color: #e0f2e9;
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}

body.dark-mode .skill-box {
  background-color: var(--skill-box-bg-dark);
  color: var(--text-color-dark);
  border-color: var(--skill-box-border-dark);
}
body.dark-mode .skill-box:hover {
  background-color: #444;
  box-shadow: 0 5px 15px rgba(0,0,0,0.25);
}

/* Stats */
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-size: 0.9rem;
  margin-bottom: 25px;
  justify-content: center;
}

.stats div {
  flex: 1 1 150px;
  background-color: var(--stat-bg-light);
  padding: 12px 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}
.stats div:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 20%;
  height: 60%;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}
body.dark-mode .stats div:not(:last-child)::after {
  background-color: rgba(255, 255, 255, 0.1);
}


.stats strong {
  font-size: 1.5rem;
  color: var(--primary-color);
  display: block;
}

body.dark-mode .stats div {
  background-color: var(--stat-bg-dark);
  color: var(--text-color-light);
}

/* Section Divider */
.section-divider {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin: calc(var(--spacing-unit) * 6) 0;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  transition: border-color 0.3s ease;
}
body.dark-mode .section-divider {
  border-top-color: rgba(255, 255, 255, 0.1);
}


/* Projects */
body.dark-mode #projects {
  background: transparent;
  background-size: 400% 400%;
  animation: projectGradientBG 20s ease infinite;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.project-card {
  background-color: var(--card-bg-light);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.project-card img {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.project-card h3 {
  font-family: var(--font-family-heading);
  margin-bottom: 10px;
  font-size: 1.4rem;
}

.project-card p {
  font-size: 0.95rem;
  color: #555;
  margin-bottom: 15px;
}
body.dark-mode .project-card p {
  color: #bbb;
}

.project-card a {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 16px;
  color: #fff;
  background-color: var(--primary-color);
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  z-index: 2;
  position: relative;
}

.project-card a:hover {
  background-color: #2b16a0;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

body.dark-mode .project-card {
  background-color: var(--card-bg-dark);
  box-shadow: 0 4px 20px rgba(255,255,255,0.05);
}

/* Project card hover overlay */
.project-card::after {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::after {
  opacity: 1;
}


/* Filter buttons */
.filter-buttons {
  text-align: center;
  margin-bottom: 30px;
}

.filter-buttons button {
  padding: 8px 16px;
  margin: 0 8px;
  border: none;
  background: var(--primary-color);
  color: white;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  outline: none;
}

.filter-buttons button:hover,
.filter-buttons button.active {
  background: #2b16a0;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.filter-buttons button:focus-visible {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}


/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

.tags span {
  background: #503bad;
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(76,175,80,0.4);
  transition: transform 0.2s ease, background-color 0.2s ease;
}
.tags span:hover {
  transform: translateY(-2px);
  background-color: #3716c9;
}


/* Footer */
footer {
  background: #000;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 0.9rem;
  transition: background-color 0.6s ease, color 0.6s ease;
}

body.dark-mode footer {
  background-color: var(--bg-color-dark);
  color: var(--nav-link-dark);
}

/* Contact Section */
.contact-dark {
  background-color: #000000;
  color: #fff6f6;
  padding: 60px 20px 40px;
  border-radius: 12px;
  margin-bottom: 40px;
  transition: background-color 0.6s ease, color 0.6s ease;
}

body.dark-mode .contact-dark {
  background-color: #1a1a1a;
  color: var(--header-text-dark);
}

.contact-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
}

.contact-info,
.contact-form {
  flex: 1 1 45%;
}

.contact-info h2,
.contact-form h3 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #fff;
  font-family: var(--font-family-heading);
  letter-spacing: -0.01em;
}
body.dark-mode .contact-info h2,
body.dark-mode .contact-form h3 {
  color: var(--text-color-dark);
}


.contact-info ul {
  list-style: none;
}

.contact-info li {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.contact-info li a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}
.contact-info li a:hover {
  color: var(--secondary-color);
}


.contact-info i {
  color: #403d47;
  margin-right: 10px;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}
body.dark-mode .contact-info i {
  color: var(--primary-color);
}


.contact-form input,
.contact-form textarea {
  width: 100%;
  font-family: var(--font-family-heading);
  background-color: #fff;
  color: #0a0a0a;
  border: 1px solid #333;
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;
}

body.dark-mode .contact-form input,
body.dark-mode .contact-form textarea {
  font-family: var(--font-family-heading);
  background-color: #2a2a2a;
  color: #fff;
  border-color: #555;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(70, 36, 223, 0.2);
}
body.dark-mode .contact-form input:focus,
body.dark-mode .contact-form textarea:focus {
  box-shadow: 0 0 0 3px rgba(0, 195, 255, 0.2);
}


.contact-form button {
  background-color: var(--primary-color);
  color: #161616;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  outline: none;
}

.contact-form button:hover {
  background-color: #080808;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
.contact-form button:focus-visible {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}

#form-response {
  margin-top: 15px;
  font-size: 0.9rem;
  font-weight: 600;
}


/* Floating Resume Button */
.fab-resume {
  position: fixed;
  bottom: 20px;
  right: 25px;
  background-color: rgb(34, 231, 8);
  color: white;
  padding: 15px 18px;
  border-end-end-radius: 20%;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border: none;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  outline: none;
}

.fab-resume:hover {
  background-color: #2b16a0;
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.4);
}
.fab-resume:focus-visible {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}


/* Theme Toggle */
.theme-toggle {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #eee;
  color: #333;
  font-weight: 600;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  outline: none;
}

.theme-toggle:hover {
  background-color: #ddd;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
.theme-toggle:focus-visible {
  outline: 2px solid var(--secondary-color);
  outline-offset: 2px;
}


body.dark-mode .theme-toggle {
  background-color: #222;
  color: var(--text-color-dark);
  box-shadow: 0 2px 5px rgba(255,255,255,0.1);
}
body.dark-mode .theme-toggle:hover {
  background-color: #333;
}


.theme-toggle .toggle-icon {
  font-size: 18px;
  transition: transform 0.3s ease, color 0.3s ease;
}

body.dark-mode .theme-toggle .toggle-icon {
  transform: rotate(180deg);
  color: var(--secondary-color);
}

/* Responsive Breakpoints */
@media (max-width: 1024px) {
  header h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .about-wrapper,
  .contact-wrapper,
  .stats {
    flex-direction: column;
    text-align: center;
  }
  .education-section {
    max-width: 90%; /* Adjust width for smaller screens */
    min-width: unset; /* Remove min-width to allow more flexibility */
  }
  .about-text,
  .contact-info,
  .contact-form {
    flex: 1 1 100%;
  }
  .about-image {
    margin-bottom: 20px;
  }
  .contact-info ul {
    justify-content: center;
    padding: 0;
  }
  .contact-info li {
    justify-content: center;
  }
  .about-list li {
    justify-content: center;
  }
  .about-list i {
    margin-top: 0;
  }


  nav a {
    margin: 8px;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
  .filter-buttons button {
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .fab-resume {
    bottom: 15px;
    right: 15px;
    padding: 12px;
    font-size: 0.9rem;
  }

  header p,
  .tagline {
    font-size: 1rem;
  }
  .container {
    padding: 20px 10px;
  }
  #about .container.about-content {
    padding: 40px 15px;
  }
  .about-text h2, #projects h2 {
    font-size: 1.8rem;
  }
  .contact-info h2, .contact-form h3 {
    font-size: 1.3rem;
  }
}

/* Keyframe Animations */
@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes aboutGradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes scaleIn {
  0% { transform: scale(0.95); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes projectGradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Modal styles */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top of everything else */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.85); /* Increased opacity for better background darkening */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 20px;
  box-sizing: border-box; /* Include padding in width/height calculation */
}

/* Modal Content styles */
.modal-content {
  background-color: var(--card-bg-light); /* Uses light mode card background */
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  width: 90%;
  max-width: 800px; /* Max width for readability */
  position: relative;
  animation: fadeIn 0.3s ease-out; /* Smooth entrance animation */
  color: var(--text-color-light); /* Uses light mode text color */
  text-align: left; /* Align content inside modal */
  max-height: 90vh; /* Limit the height to 90% of the viewport height */
  overflow-y: auto; /* Enable vertical scrolling for the content if it exceeds max-height */
  overscroll-behavior-y: contain; /* Prevents background scrolling when modal content scrolls */
  -webkit-overflow-scrolling: touch;
  transition: background-color 0.6s ease, color 0.6s ease, box-shadow 0.6s ease; /* Transition for dark mode */
}

body.dark-mode .modal-content {
  background-color: var(--card-bg-dark); /* Uses dark mode card background */
  color: var(--text-color-dark); /* Uses dark mode text color */
  box-shadow: 0 5px 15px rgba(255,255,255,0.15); /* Adjust shadow for dark mode */
}

/* Image styles within the modal */
.modal-content img {
  max-width: 100%; /* Ensure it fits within the modal content width */
  max-height: 220px; /* Set a maximum height for the image */
  width: auto; /* Allow width to adjust based on max-height */
  height: auto;
  object-fit: contain; /* Ensures the entire image is visible within its bounds */
  border-radius: 8px;
  margin-bottom: 20px;
  display: block; /* Ensures image doesn't have extra space below */
  margin-left: auto; /* Center the image */
  margin-right: auto; /* Center the image */
}

.modal-content h3 {
  color: var(--primary-color);
  margin-bottom: 15px;
  font-size: 1.8rem;
  text-align: center;
}

body.dark-mode .modal-content h3 {
  color: var(--secondary-color); /* Adjust heading color for dark mode */
}

.modal-content p {
  line-height: 1.6;
  margin-bottom: 20px;
}

.modal-tech-stack {
  margin-top: 20px;
  margin-bottom: 20px;
}

.modal-tech-stack h4 {
  margin-bottom: 10px;
  color: var(--primary-color);
}

body.dark-mode .modal-tech-stack h4 {
  color: var(--secondary-color); /* Adjust tech stack heading color for dark mode */
}

.modal-tech-stack ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.modal-tech-stack li {
  background-color: var(--skill-box-bg-light); /* Uses light mode skill box background */
  border: 1px solid var(--skill-box-border-light); /* Uses light mode skill box border */
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-color-light); /* Uses light mode text color */
  white-space: nowrap; /* Prevent wrapping for individual tech items */
  transition: background-color 0.6s ease, border-color 0.6s ease, color 0.6s ease; /* Transition for dark mode */
}

body.dark-mode .modal-tech-stack li {
  background-color: var(--skill-box-bg-dark); /* Uses dark mode skill box background */
  border-color: var(--skill-box-border-dark); /* Uses dark mode skill box border */
  color: var(--text-color-dark); /* Uses dark mode text color */
}


.close-button {
  color: var(--text-color-light); /* Uses light mode text color */
  position: absolute;
  top: 15px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s ease;
}

body.dark-mode .close-button {
  color: var(--text-color-dark); /* Uses dark mode text color */
}

.close-button:hover,
.close-button:focus {
  color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;
}

body.dark-mode .close-button:hover,
body.dark-mode .close-button:focus {
  color: var(--secondary-color); /* Adjust hover color for dark mode */
}

/* Keyframe for modal entrance */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Responsive adjustments for modal */
@media (max-width: 768px) {
  .modal-content {
    padding: 20px; /* Reduced padding on smaller screens */
    max-height: 95vh; /* Allow a bit more height on mobile if needed */
    width: 95%; /* Adjust width for small screens */
  }
  .modal-content h3 {
    font-size: 1.5rem;
  }
  .close-button {
    top: 10px;
    right: 15px;
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    padding: 15px; /* Further reduce padding on very small screens */
  }
  .modal-content h3 {
    font-size: 1.3rem;
  }
  .modal-tech-stack li {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}

/* Add to style.css */
.modal-description-details {
  margin-top: 15px; /* Space between summary and details */
}

.modal-description-details ul {
  list-style: disc inside; /* Use bullet points */
  padding-left: 20px; /* Indent the list */
  margin-top: 10px; /* Space between "Technologies Used" and the list */
}

.modal-description-details li {
  margin-bottom: 8px; /* Space between list items */
  line-height: 1.5;
}

/* Two-column About layout */
.about-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
}

/* Stack profile and education vertically */
.left-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 0 0 350px;
}

/* Adjust education width for consistency */
.education-section {
  width: 100%;
}

/* Mobile responsive override */
@media (max-width: 768px) {
  .about-wrapper {
    flex-direction: column;
    align-items: center;
  }

  .left-column,
  .about-text {
    width: 100%;
  }

  .about-text {
    text-align: center;
  }
}

body.dark-mode .education-section {
  background-color: var(--card-bg-dark);
  color: var(--text-color-dark);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.05);
  border: 1px solid var(--skill-box-border-dark);
}

body.dark-mode .education-section h2 {
  color: var(--secondary-color);
  border-bottom-color: var(--secondary-color);
}

body.dark-mode .education-item h3 {
  color: var(--text-color-dark);
}

body.dark-mode .education-item p {
  color: var(--nav-link-dark);
}
