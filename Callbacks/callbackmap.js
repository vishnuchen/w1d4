var words = ["ground", "control", "to", "major", "tom"];

function map(word, callback) {
  var result = [];
  word.forEach(function operation (word){
      result.push(callback(word));
  })
  return result;
}

var wordLength = map(words, function(word) {
  return word.length;
});
console.log(wordLength);

var wordUpper = map(words, function(word) {
  return word.toUpperCase();
});
console.log(wordUpper);

var wordReverse = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(wordReverse);