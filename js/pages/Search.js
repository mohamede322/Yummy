import Data from "../ui-module.js";
export default function getData() {
  $(".search-container").removeClass("d-none");
  $("#searchName").on("input", (e) => {
    let val = $(e.currentTarget).val();
    if (val != "") {
      search("search", val);
    }
  });
  $("#searchFLetter").on("input", (e) => {
    let val = $(e.currentTarget).val();
    if (val != "") {
      search("searchF", val);
    }
  });
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
              <figure class="content position-relative rounded-3 overflow-hidden">
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
  }
  return myData;
}
