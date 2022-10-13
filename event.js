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

const fr = document.querySelector(".free");
fr.addEventListener("click", (evt) => {
  console.log(evt.currentTarget);
  evt.currentTarget.style.color = "green";
});

const ip = document.querySelector(".char");
ip.addEventListener("click", (evt) => {
  console.log(evt.currentTarget);
  evt.currentTarget.style.color = "gray";
});
