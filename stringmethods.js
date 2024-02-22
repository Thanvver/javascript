var text="Hello world"

console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(1));
console.log(text.includes("ab"));
console.log(text.startsWith("He"));
console.log(text.endsWith("d"));
//console.log(text.slice(4,9));

var newText=text.slice(5)
console.log(newText);
console.log(text.split(" "));