// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function position(arr) {
    if (arr === "Waldo") {
      found(arr);   // execute callback
    }
  });
}

function actionWhenFound(arr) {
  console.log("Found " + arr "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);