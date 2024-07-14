import Data from "../ui-module.js";
export default async function getData(id) {
  $(".search-container").addClass("d-none");
  const myData = $("#myData");
  let data = new Data("details", id).getData();
  let finalData = await data;
  let content = "";
  let recipeTags = [];
  let tags = [];
  finalData.meals.forEach((meal) => {
    for (let i = 0; i <= 20; i++) {
      meal[`strMeasure${i}`] != null &&
      meal[`strMeasure${i}`] != "" &&
      meal[`strMeasure${i}`] != undefined &&
      meal[`strMeasure${i}`] != " "
        ? recipeTags.push(
            `${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`
          )
        : "";
    }
    meal.strTags != null ? tags.push(meal.strTags.split(",")) : "";
    content += `          <div class="col-md-4 text-light">
            <img src="${meal.strMealThumb}" alt="" class="w-100 mb-3" />
            <h3>${meal.strMeal}</h3>
          </div>
          <div class="col-md-8 text-light">
            <h4 class="fs-2">Instructions</h4>
            <p>
              ${meal.strInstructions}
            </p>
            <h5 class="fs-3">Area : <span>${meal.strArea}</span></h5>
            <h5 class="fs-3">Category : <span>${meal.strCategory}</span></h5>
            <div>
              <span class="fw-semibold fs-3">Recipes :</span>
              <ul class="recipes list-unstyled d-flex flex-wrap">
                ${recipeTags
                  .map(
                    (tag) => `<li class="alert m-2 p-1 alert-info">${tag}</li>`
                  )
                  .join("")}
      
              </ul>
            </div>
            <div>
              <span class="fw-semibold fs-3">Tags :</span>
              <ul class="tags list-unstyled d-flex flex-wrap">
              ${
                tags[0] != null
                  ? tags[0]
                      .map(
                        (tag) =>
                          `<li class="alert m-2 p-1 alert-danger">${tag}</li>`
                      )
                      .join("")
                  : ""
              }
                
              </ul>
            </div>
            <div class="links">
              <a class="btn btn-success" href="${
                meal.strSource != null ? meal.strSource : ""
              }" target='_blank'>Source</a>
              <a class="btn btn-danger" href="${
                meal.strYoutube != null ? meal.strYoutube : ""
              }" target='_blank'>Youtube</a>
            </div>
          </div>`;
  });
  myData.html(content);
  return myData;
}
