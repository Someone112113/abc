function toggleCategory() {
  const categories = document.querySelector("#categories");
  if (categories.style.display == "none") {
    categories.style.display = "block";
  } else {
    categories.style.display = "none";
  }
}
function randomMeal() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      const div = document.querySelector("div.random-meal");
      const img = div.querySelector("img");
      img.src = meal.strMealThumb;
      const p = div.querySelector("p");
      p.innerHTML = meal.strMeal;
    });
}
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => response.json())
  .then((data) => {
    const categories = document.querySelector("#categories");
    data.categories.forEach((category) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = category.strCategoryThumb;
      const p = document.createElement("p");
      p.innerHTML = category.strCategory;
      li.appendChild(img);
      li.appendChild(p);
      categories.appendChild(li);
    });
  });
