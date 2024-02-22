var string1="ABCD"
var string2="PQR"

var output=""
var smString=string1.length<string2.length?string1:string2

for(let i=0;i<smString.length;i++){

    output+=string1[i]+string2[i]
}
var bal=""

if (string1.length>string2.length){
    bal=string1.slice(smString.length)
}
else{
    bal=string2.slice(smString.length)

}

output+=bal
console.log(output)