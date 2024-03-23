var regex = /pattern/;
var text = "This is a pattern example.";
var isMatch = regex.test(text);
console.log(isMatch); // Output: true

var regex = /pattern/;
var text = "This is a pattern example.";
var result = regex.exec(text);
console.log(result);

var regex = /pattern/g;
var text = "This is a pattern example. Another pattern example.";
var matches = text.match(regex);
console.log(matches); // Output: ["pattern", "pattern"]

var regex = /pattern/;
var text = "This is a pattern example.";
var index = text.search(regex);
console.log(index); // Output: 10

var regex = /pattern/;
var text = "This is a pattern example.";
var modifiedText = text.replace(regex, "new pattern");
console.log(modifiedText); // Output: "This is a new pattern example."

var regex = /[, ]+/;
var text = "Apple, Banana, Orange";
var fruits = text.split(regex);
console.log(fruits); // Output: ["Apple", "Banana","Orange"]

var regex = /pattern/gi;
console.log(regex.flags); // Output: "gi"

