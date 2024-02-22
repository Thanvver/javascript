var text="hello world hello world hello"

var wc={}

text.split(" ").map(w=>w in wc? wc[w]+=1:wc[w]=1)
console.log(wc);


