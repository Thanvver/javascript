var text="a quick brown fox jumps over the lazy dog"
var new_text=text.toLowerCase()
var alphabets="abcdefghijklmnopqrstuvwxyz"
var isPanagram=true

for (let ch of alphabets){

    if(! new_text.includes(ch)){
        isPanagram=false
        break
    }
}

console.log(isPanagram);

