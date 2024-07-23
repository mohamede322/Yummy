import Data from "../ui-module.js";
import Click from "./FigureClick.js";

export default function getData() {
  $(".search-container").removeClass("d-none");
  $("#searchName").on("input", (e) => {
    let val = $(e.currentTarget).val();
    searching(val, "search");
  });
  $("#searchFLetter").on("input", (e) => {
    let val = $(e.currentTarget).val();
    searching(val, "searchF");
  });
  function searching(val, method) {
    if (val != "") {
      $(".loader-container").css({ display: "flex" });
      $(".loader-container").removeClass("top-fixed");
      $(".loader-container").addClass("position-absolute");
      $("html").css({ overflow: "hidden" });
      search(method, val).finally(() => {
        $(".loader-container").fadeOut(500);
        $(".loader-container").addClass("top-fixed");
        $(".loader-container").removeClass("position-absolute");
      });
    }
  }
  $(".loader-container").fadeOut(500);
  const myData = $("#myData");
  myData.html("");
  async function search(method, input) {
    let content = "";
    let data = new Data(method, input).getData();
    let finalData = await data;
    if (finalData.meals != null) {
      finalData.meals.forEach((meal) => {
        content += ` 
  <div class="col-lg-3 col-md-4">
              <figure id="${meal.idMeal}" class="content position-relative rounded-3 overflow-hidden">
                   <figcaption
                class="position-absolute  bottom-0 start-0 bg-light bg-opacity-75 text-dark w-100 h-100 closed  p-2 d-flex justify-content-center align-items-start flex-column"
              >
                <span class="fw-semibold fs-2">${meal.strMeal}</span>
      
                </figcaption>
                <img src="${meal.strMealThumb}" class="w-100" alt="" />
              </figure>
            </div>`;
      });
    }
    myData.html(content);

    $("figure").on("click", (e) => {
      let id = e.currentTarget.id;
      Click("details", id);
    });
  }
  return myData;
}
