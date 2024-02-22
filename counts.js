var text="Helloworld"
var vowels="aeiou"
v_count=0
c_count=0

var newText=text.toLowerCase()

for (let ch of newText){

    vowels.includes(ch)?v_count+=1:c_count+=1
}

console.log(v_count,"vowels");
console.log(...c_count,"consonants");