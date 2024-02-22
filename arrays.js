// //var arr=[1,2,3,4,5,6,2,3]

// //console.log(arr[4]);

// // for (let i=0;i<arr.length;i++){

// //     //console.log(arr[i]);
// // }

// // for(let num of arr){
// //     //console.log(num);
// // }

// arr.push(10)
// //console.log(arr);

// arr.unshift(4)
// //console.log(arr);

// arr.pop()
// //console.log(arr);

// arr.shift()
// //console.log(arr);

// var cube=arr.map((n)=>n**3)
// //console.log(cube);

// var addFive=arr.map((n)=>n+5)
// //console.log(addFive);

// var lessthanFour=arr.filter((n)=>n<4)
// //console.log(lessthanFour);

// var even=arr.filter((n)=>n%2==0)
// //console.log(even);

// var sum=arr.reduce((n1,n2)=>n1+n2)
// //console.log(sum);

// var maxElement=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// //console.log(maxElement);

// var minElement=arr.reduce((n1,n2)=>n1<n2?n1:n2)
// //console.log(minElement);

// arr.sort((o1,o2)=>o1-o2)
// //console.log(arr);

// arr.sort((o1,o2)=>o2-o1)
// //console.log(arr);

var arr=[8,70,9,1]

arr.reverse()
//console.log(arr);

var total=arr.sort().reverse().join("")
//console.log(total);

if (arr.includes(100)){
    console.log("found");
}

else{
    console.log("not found");
}