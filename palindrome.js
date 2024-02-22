var text="malayalam"

var rev=""

for(let i=text.length-1;i>=0;i--){
    rev+=text[i]
}

console.log(text==rev?"palindrome":"not palindrome");