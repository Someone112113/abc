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

      const ingredients = document.querySelector("div.ingredients");
      ingredients.innerHTML = "";
      const ingredient1 = document.createElement("p");
      ingredient1.innerHTML = meal.strIngredient1;
      ingredients.appendChild(ingredient1);
      const ingredient2 = document.createElement("p");
      ingredient2.innerHTML = meal.strIngredient2;
      ingredients.appendChild(ingredient2);
      const ingredient3 = document.createElement("p");
      ingredient3.innerHTML = meal.strIngredient3;
      ingredients.appendChild(ingredient3);
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
