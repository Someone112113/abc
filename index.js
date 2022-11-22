fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => response.json())
  // {
  //   var test = response.json();
  //   console.log(test);
  // }
  .then((data) => {
    console.log(data);
  });
