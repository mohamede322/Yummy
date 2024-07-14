import Meals from "./pages/Meals.js";
import Categories from "./pages/Categories.js";
import Areas from "./pages/Areas.js";
import Ingredients from "./pages/Ingredients.js";
import Search from "./pages/Search.js";
import Details from "./pages/Details.js";
import Contact from "./pages/Contact.js";
$(() => {
  const toggleMenuBtn = $(".toggleMenuBtn");
  let menuWidth = document.querySelector(".nav-content").clientWidth;
  const links = $(".nav-links li button");
  $("nav").animate({ left: `-${menuWidth}px` }, 500);
  toggleMenuBtn.on("click", () => {
    toggleMenu();
  });
  function toggleMenu() {
    toggleMenuBtn.toggleClass("active");
    $(".toggleMenuBtn i").toggleClass("fa-solid fa-bars");
    $(".toggleMenuBtn i").toggleClass("fa-solid fa-xmark");
    if (toggleMenuBtn.hasClass("active")) {
      links.css("transform", "translateY(0)");
      $("nav").animate({ left: "0" }, 500);
    } else {
      links.css("transform", "translateY(100%)");
      $("nav").animate({ left: `-${menuWidth}px` }, 500);
    }
  }
  $(".pagesBtn").on("click", (e) => {
    let parameter = $(e.currentTarget).attr("value");
    getData(parameter);
    toggleMenu();
  });
  Meals();
  function getData(method) {
    $("html").scrollTop(0);
    $(".loader-container").css({ display: "flex" });
    switch (method) {
      case "categories":
        Categories();
        break;
      case "areas":
        Areas();
        break;
      case "ingredients":
        Ingredients();
        break;
      case "search":
        Search();
        break;
      case "details":
        Details();
        break;
      case "contact":
        Contact();
        break;
      default:
        Meals();
    }
  }
});
