var employee={

    code:"123er",
    name:"thanveer",
    department:"it",
}

console.log(employee.name);

employee.salary="60000"
//console.log(employee);

if("department" in employee){

    //console.log("found");
}
else{
    //console.log("not found");
}

var bike={

    name:"dominar",
    brand:"bajaj",
    price:250000,
    model:2023,
    offer:5000,

}

if ("offer" in bike){

    bike.offer+=2000
}
else{

    bike.offer=10000
}

console.log(bike);