import Data from "../ui-module.js";
import Click from "./FigureClick.js";
export default async function getData(x, i) {
  $(".search-container").addClass("d-none");
  const myData = $("#myData");
  let data = new Data(x, i).getData();
  let finalData = await data;
  let content = "";
  finalData.meals.forEach((meal) => {
    content += `<div class="col-lg-3 col-md-4">
  <figure id=${meal.idMeal} class="content meal position-relative rounded-3 overflow-hidden">
       <figcaption
    class="position-absolute  bottom-0 start-0 bg-light bg-opacity-75 text-dark w-100 h-100 closed  p-2 d-flex justify-content-center align-items-start flex-column"
  >
    <span class="fw-semibold fs-2">${meal.strMeal}</span>

    </figcaption>
    <img src="${meal.strMealThumb}" class="w-100" alt="" />
  </figure>
</div>`;
  });
  myData.html(content);
  $("figure").on("click", (e) => {
    let id = e.currentTarget.id;
    Click("details", id);
  });
  return myData;
}
