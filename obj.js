var items={tea:12,coffee:20,milk:15,fifty_fifty:25,oreo:45}

var data=Object.entries(items)

var costly_product=data.reduce((o1,o2)=>o1[1]>o2[1]?o1:o2)
//console.log(costly_product);

data.sort((o1,o2)=>o2[1]-o1[1])
console.log(data);