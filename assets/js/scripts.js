const navMenuToggle = document.querySelector(".nav-menu-toggle");
const navMenu = document.querySelector(".nav-menu");

navMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
}
);