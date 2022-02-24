const sidebarToggle = document.querySelector(".sidebar .toggle");
const sidebarNav = document.querySelector(".sidebar nav");

sidebarNav.classList.add("hidden");

sidebarToggle.addEventListener("click", () => {
  sidebarToggle.setAttribute("aria-expanded",
    !("true" === sidebarToggle.getAttribute("aria-expanded")));
  sidebarNav.classList.toggle("hidden");
});
