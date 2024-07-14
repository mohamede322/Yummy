import Data from "../ui-module.js";
import Click from "./FigureClick.js";
export default async function getData() {
  $(".search-container").addClass("d-none");
  const myData = $("#myData");
  let data = new Data("ingredients").getData();
  let finalData = await data;
  let content = "";
  finalData.meals.forEach((ingredient) => {
    let ingredientDesc =
      ingredient.strDescription != null
        ? ingredient.strDescription.split(" ").splice(0, 20).join(" ")
        : "";
    content += `<div class="col-lg-3 col-md-4">
  <figure id=${ingredient.strIngredient} class="content ing position-relative text-center text-light rounded-3 overflow-hidden">
  <i class="fa-solid fa-drumstick-bite fa-4x"></i>
    <h3 class="fw-semibold">${ingredient.strIngredient}</h3>
    <span class="text-light">${ingredientDesc}</span>
  </figure>
</div>`;
  });
  myData.html(content);
  $("figure").on("click", (e) => {
    let val = e.currentTarget.id;
    Click("mainIngredient", val);
  });
  return myData;
}
