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

btn.addEventListener("click", () => {
  addRecipe();
});

listofRecipes.forEach(recipe => {
  recipe.addEventListener("click", () => {
    recipes.removeChild(recipe);
  });
});
