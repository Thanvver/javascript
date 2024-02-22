var num=14
var isPrime=true

for(let i=2;i<num;i++){

    if (num%i==0){
        isPrime=false
        break
    }
}

console.log(isPrime);