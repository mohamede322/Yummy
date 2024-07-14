import Data from "../ui-module.js";
import Click from "./FigureClick.js";
export default async function getData() {
  $(".search-container").addClass("d-none");
  const myData = $("#myData");
  let data = new Data("areas").getData();
  let finalData = await data;
  let content = "";
  finalData.meals.forEach((area) => {
    content += `<div class="col-lg-3 col-md-4">
  <figure id=${area.strArea} class="content area position-relative text-center text-light rounded-3 overflow-hidden">
  <i class="fa-solid fa-house-laptop fa-4x "></i>
    <h3 class="fw-semibold">${area.strArea}</h3>
  </figure>
</div>`;
  });
  myData.html(content);
  $("figure").on("click", (e) => {
    let val = e.currentTarget.id;
    Click("area", val);
  });
  return myData;
}
