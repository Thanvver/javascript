var text="helloworld"

var wc={}
var characters=text.split("")

for (let ch of characters){

    if(ch in wc){
        wc[ch]+=1
    }
    else{
        wc[ch]=1
    }
}

console.log(wc);

for(let k in wc){
    if(wc[k]==1)
    console.log(k);
}