//on page load, execute
document.addEventListener("load", fadeInImage());

document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.parallax');
  M.Parallax.init(elems);
});

function fadeInImage() {
  $(".header-img").hide().fadeIn(1000);
}