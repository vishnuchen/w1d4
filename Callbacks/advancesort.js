// var input = [
//   { x: 3, y: 4 },
//   { x: 12, y: 5 },
//   { x: 8, y: 15 }
// ];
// var result = input.map(function(pyt) {
//      return Math.sqrt(Math.pow((pyt.x), 2) + Math.pow((pyt.y), 2));
//     });

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


var list = students.sort(function(a,b){
  if (a.name > b.name) {
    return 1;
  } else if (a.name === b.name) {
    return b.age - a.age
  } else {
    return -1;
  }
})

console.log(list);


