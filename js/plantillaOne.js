// SECCION PROYECTOS
function showProjectsDetails(container) {
    let projectDetails = container.querySelector(".project-click");
    projectDetails.classList.toggle("active");
}

// MENU MOBILE
const menuToggle = document.getElementById('mobile-menu');
const mobileNav = document.getElementById('mobile-nav');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});