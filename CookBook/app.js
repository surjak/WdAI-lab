const btn = document.querySelector("#addRecipe");
const recipes = document.querySelector(".recipes");
let listofRecipes = document.querySelectorAll(".grid-item");
function addRecipe() {
  let recipe = document.createElement("div");
  let readmore = document.createElement("div");
  readmore.classList.add("readmore");
  let h1 = document.createElement("h1");
  h1.innerHTML = "Read More";
  readmore.appendChild(h1);
  let btn = document.createElement("button");
  btn.classList.add("btn-remove");
  btn.innerHTML = "X";
  let img = document.createElement("img");
  let div = document.createElement("div");
  img.src = "./images/chef-gallery-2.jpg";
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  h3.innerHTML = "Pizza";
  p.innerHTML = "ajjksajdjshdjkshjkadhashdjkashjkdhasjkdhn";
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(btn);
  recipe.classList.add("grid-item");
  recipe.appendChild(readmore);
  recipe.appendChild(img);
  recipe.appendChild(div);
  recipe.addEventListener("click", () => {
    recipes.removeChild(recipe);
  });
  recipes.appendChild(recipe);
}

const formularz = document.querySelector(".formularz");
const tl = new TimelineMax({ paused: true, reversed: true });

tl.fromTo(formularz, 0.5, { x: "100%" }, { opacity: 1, x: "0%" }, "-=0.1");

btn.addEventListener("click", () => {
  // addRecipe();
  tl.reversed() ? tl.play() : tl.reverse();
});

listofRecipes.forEach(recipe => {
  recipe.addEventListener("click", () => {
    recipes.removeChild(recipe);
  });
});

// const addRecipe = document.querySelector("#addRecipe");

// .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.1")
// .fromTo(social, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.5")
// .fromTo(logo, 0.2, { color: "white" }, { color: "black" }, "-=1")
// .fromTo(
//   hamburgerLines,
//   0.2,
//   { stroke: "white" },
//   { stroke: "black" },
//   "-=1"
// );

// addRecipe.addEventListener("click", () => {
//   tl.reversed() ? tl.play() : tl.reverse();
// });
