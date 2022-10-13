// console.log("hello!!!");
// console.log("adding comment features");
const linkElm = document.querySelectorAll("a");
console.log(linkElm);
const linksElm = linkElm[0];
linksElm.style.color = "yellow";
linksElm.textContent = "Lets's Play a Luck Game";
linksElm.innerHTML = "<span>Lets's Play a Luck Game</span>";
linksElm.setAttribute(
  "href",
  "https://sabibur201-rahaman.github.io/player1vsplayer2Game/"
);
linksElm.style.textDecoration = "none";
