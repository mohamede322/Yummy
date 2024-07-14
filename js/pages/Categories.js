import Data from "../ui-module.js";
import Click from "./FigureClick.js";
export default async function getData() {
  $(".search-container").addClass("d-none");
  const myData = $("#myData");
  let data = new Data("categories").getData();
  let finalData = await data;
  let content = "";
  finalData.categories.forEach((category) => {
    content += ` <div class="col-lg-3 col-md-4">
  <figure id=${
    category.strCategory
  } class="content  cat position-relative rounded-3 overflow-hidden">
    <figcaption
      class="position-absolute p-2 text-center bottom-0 start-0 bg-light bg-opacity-75 text-dark w-100 h-100 closed  d-flex justify-content-start align-items-center flex-column"
    >
      <span class="fw-semibold fs-2">${category.strCategory}</span>
      <span class="fs-6 w-100">${category.strCategoryDescription
        .split(" ")
        .splice(0, 20)
        .join(" ")}</span>
    </figcaption>
    <img src="${category.strCategoryThumb}" class="w-100" alt="" />
  </figure>
</div>`;
  });
  myData.html(content);
  $("figure").on("click", (e) => {
    let val = e.currentTarget.id;
    Click("category", val);
  });
  return myData;
}
