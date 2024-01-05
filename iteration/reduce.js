const mynum =[1,2,3]
const mytotal = mynum.reduce(function(acc,currval){
   // console.log(`acc:${acc} and currval :${currval}`)
    return acc+currval
},9)
//console.log(mytotal)

const myTotal = mynum.reduce((acc, curr) => acc+curr,5);
//console.log(myTotal);

const shoppingcart =[
    {
    itemname : "jscourse",
    price:3999
    },
    {
    itemname : "cpp",
    price:4999
    },
    {
    itemname : "python",
    price:2999
    },
]
const pricetopay=shoppingcart.reduce((acc,item) =>acc+ item.price,0)
console.log(pricetopay);