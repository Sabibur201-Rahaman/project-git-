const liElm = document.querySelector(".lap");
liElm.addEventListener("click", (evt) => {
  console.log(evt.currentTarget);
  evt.currentTarget.style.color = "yellow";
});

const mobliElm = document.querySelector(".mob");
mobliElm.addEventListener("click", (evt) => {
  console.log(evt.currentTarget);
  evt.currentTarget.style.color = "red";
});
