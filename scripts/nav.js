// MOBILE NAVIGATION
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function () {
    // TOGGLE ACTIVE CLASS ON HAMBURGER AND NAV LINKS
    this.classList.toggle("active");
    navLinks.classList.toggle("active");

    // TOGGLE ARIA-EXPANDED FOR ACCESSIBILITY
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });

  // CLOSE MOBILE MENU WHEN CLICKING ON A LINK
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  });

  // NAVBAR SCROLL EFFECT
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// Add to your existing nav.js
document.addEventListener('DOMContentLoaded', function() {
    // Existing hamburger menu code...
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(dropdown => {
            if (!event.target.closest('.dropdown')) {
                dropdown.style.display = 'none';
            }
        });
    });
});
