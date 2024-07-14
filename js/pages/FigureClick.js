import Details from "./Details.js";
import Meals from "./Meals.js";
export default function Click(method, val) {
  $("html").scrollTop(0);
  $(".loader-container").css({ display: "flex" });
  switch (method) {
    case "details":
      Details(val);
      break;
    default:
      Meals(method, val);
  }
}
