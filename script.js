const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("show");
  });
});
