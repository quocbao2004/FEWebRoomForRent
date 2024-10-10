const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll("active").forEach(n => 
    n.addEventListener("click", () => {
    hamburger.classList.remove("active");
}))

document.getElementById("header").innerHTML = fetch('partials/header.html').then(response => response.text());
document.getElementById("footer").innerHTML = fetch('partials/footer.html').then(response => response.text());