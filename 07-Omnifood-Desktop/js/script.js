const btnNavEl = document.querySelector(".btn-mobile-nav");
// console.log(btnNavEl);
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  // console.log(link);
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log("test");
    const href = link.getAttribute("href");
    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  });
});
