export default class items {
  baseURL = "https://www.themealdb.com/api/json/v1/1/";
  options = { method: "GET" };
  constructor(method, input) {
    this.method = method;
    this.input = input;
  }
  async getData() {
    let response;
    switch (this.method) {
      case "search":
        response = await fetch(`${this.baseURL}search.php?s=${this.input}`);
        break;
      case "searchF":
        response = await fetch(`${this.baseURL}search.php?f=${this.input}`);
        break;
      case "categories":
        response = await fetch(`${this.baseURL}categories.php`);
        break;
      case "areas":
        response = await fetch(`${this.baseURL}list.php?a=list`);
        break;
      case "ingredients":
        response = await fetch(`${this.baseURL}list.php?i=list`);
        break;
      case "category":
        response = await fetch(`${this.baseURL}filter.php?c=${this.input}`);
        break;
      case "mainIngredient":
        response = await fetch(`${this.baseURL}filter.php?i=${this.input}`);
        break;
      case "area":
        response = await fetch(`${this.baseURL}filter.php?a=${this.input}`);
        break;
      case "details":
        response = await fetch(`${this.baseURL}lookup.php?i=${this.input}`);
        break;
      default:
        response = await fetch(`${this.baseURL}search.php?s=`);
    }
    const data = await response.json().finally(() => {
      $(".loader-container").fadeOut(500);
      $("html").css({ overflow: "auto" });
    });
    return data;
  }
}
