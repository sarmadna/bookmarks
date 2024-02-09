const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
var element = document.body;
if (darkThemeMq.matches) {
    element.classList.toggle("bg-dark");
  } else {
    element.classList.toggle("bg-light");
  }