var items=[
    {code:"10ac",title:"onion",price:45,avlQty:50},
    {code:"11ad",title:"potatto",price:55,avlQty:75},
    {code:"10ae",title:"tomatto",price:35,avlQty:50},
    {code:"10af",title:"cabbage",price:30,avlQty:25},
    {code:"10ag",title:"brinjal",price:23,avlQty:0},
    {code:"10ah",title:"garlic",price:400,avlQty:0},
    {code:"10ai",title:"ginger",price:350,avlQty:80},

]

var productTitle=items.map((p)=>p.title)
//console.log(productTitle);

var outofStockitems=items.filter((p)=>p.avlQty==0).map((p)=>p.title)
//console.log(outofStockitems);

var inStockitems=items.filter((p)=>p.avlQty>0).map((p)=>p.title)
//console.log(inStockitems);

var costlyItem=items.reduce((p1,p2)=>p1.price>p2.price?p1:p2)
//console.log(costlyItem.title);

var isAvailable=items.some((p)=>p.title=="onion")
//console.log(isAvailable);

var aboveFiftyitems=items.filter((p)=>p.price>50 && p.avlQty>0).map((p)=>p.title)
//console.log(aboveFiftyitems);

//var sortItems=items.sort((p1,p2)=>p1.price-p2.price).map((p)=>p)
//console.log(items);
items.sort((p1,p2)=>p1.price-p2.price).forEach(p=>console.log(p.title,p.price))
