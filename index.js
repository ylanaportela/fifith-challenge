window.onload = function () {

  const body = document.querySelector(".mode-light");

  document.querySelector("input").addEventListener('change', function (e) {
    body.classList.toggle("mode-dark");
  })
}