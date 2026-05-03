// ===============================
// FADE + SCALE ANIMATION (SMOOTH)
// ===============================
const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, i * 120); // stagger effect
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


// ===============================
// LOADER (SAFE - NO FREEZE)
// ===============================
const loader = document.querySelector(".loader");

if (loader) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 800);
  });
}


// ===============================
// CUSTOM CURSOR (SAFE)
// ===============================
const cursor = document.querySelector(".cursor");

if (cursor) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });
}


// ===============================
// SCROLL PROGRESS BAR (SAFE)
// ===============================
const progressBar = document.querySelector(".progress-bar");

if (progressBar) {
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;

    const progress = (scrollTop / height) * 100;
    progressBar.style.width = progress + "%";
  });
}