const btn = document.querySelector("#addRecipe");
const recipes = document.querySelector(".recipes");
let listofRecipes = document.querySelectorAll(".grid-item");
function addRecipe(nazwa, opis, skladniki, url) {
  let recipe = document.createElement("div");
  let readmore = document.createElement("div");
  readmore.classList.add("readmore");
  let h1 = document.createElement("h1");
  h1.innerHTML = "Read More";
  readmore.appendChild(h1);
  let btn = document.createElement("button");
  btn.classList.add("btn-remove");
  btn.innerHTML = "X";
  btn.addEventListener("click", () => {
    recipes.removeChild(recipe);
  });
  let img = document.createElement("img");
  let div = document.createElement("div");
  img.src = url;
  let h3 = document.createElement("h3");
  let p = document.createElement("p");
  h3.innerHTML = nazwa;
  p.innerHTML = opis;
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(btn);
  recipe.classList.add("grid-item");
  recipe.appendChild(readmore);
  recipe.appendChild(img);
  recipe.appendChild(div);
  recipes.appendChild(recipe);
}

const formularz = document.querySelector(".formularz");
const tl = new TimelineMax({ paused: true, reversed: true });

tl.fromTo(formularz, 0.5, { x: "100%" }, { opacity: 1, x: "0%" }, "-=0.1");

btn.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});

const listOfButtons = document.querySelectorAll(".btn-remove");
listOfButtons.forEach(btn =>
  btn.addEventListener("click", () => {
    recipes.removeChild(btn.parentNode.parentNode);
  })
);

const submitBtn = document
  .querySelector("#submitBtn")
  .addEventListener("click", e => {
    e.preventDefault();
    const form = document.getElementById("form");
    const isValidForm = form.checkValidity();

    const opis = document.querySelector("#opis");

    const skladniki = document.querySelector("#skladniki");
    const url = document.querySelector("#url");
    const nazwa = document.querySelector("#nazwa");
    document.querySelector("#error-nazwa").innerHTML = nazwa.validationMessage;
    document.querySelector("#error-opis").innerHTML = opis.validationMessage;
    document.querySelector("#error-skladniki").innerHTML =
      skladniki.validationMessage;
    document.querySelector("#error-url").innerHTML = url.validationMessage;

    if (!isValidForm) return;

    addRecipe(nazwa.value, opis.value, skladniki.value, url.value);

    tl.reversed() ? tl.play() : tl.reverse();
    opis.value = "";
    skladniki.value = "";
    url.value = "";
    nazwa.value = "";
  });

document.querySelector("#clearBTN").addEventListener("click", () => {
  const opis = document.querySelector("#opis");
  const skladniki = document.querySelector("#skladniki");
  const url = document.querySelector("#url");
  const nazwa = document.querySelector("#nazwa");
  document.querySelector("#error-nazwa").innerHTML = "";
  document.querySelector("#error-opis").innerHTML = "";
  document.querySelector("#error-skladniki").innerHTML = "";
  document.querySelector("#error-url").innerHTML = "";
  opis.value = "";
  skladniki.value = "";
  url.value = "";
  nazwa.value = "";
});
