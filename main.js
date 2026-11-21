// Fill in the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the navigation link for the section currently in view.
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveLink() {
  const scrollPos = window.scrollY + 120;
  sections.forEach((section) => {
    const inView =
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight;
    if (inView) {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === "#" + section.id
        );
      });
    }
  });
}

window.addEventListener("scroll", setActiveLink);
setActiveLink();
