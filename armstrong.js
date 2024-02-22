var num=154
var originl=num
var digitCount=String(num).length
var sum=0

while (num!=0){

    let digit=num%10
    let exp=digit**digitCount
    sum=sum+exp
    num=Math.floor(num/10)


}

console.log(originl==sum?"armstrong":"not armstrong");