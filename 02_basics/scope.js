let a=300
if(true){
    let a = 10
    const b = 20
    var c =30
 //   console.log("inner:",a);

}
//console.log(a);
//console.log(b);
///console.log(c);

function one(){
    const user="codeo"
    function two(){
        const website="youtube"
     //   console.log(user);

    }
    //console.log(website);
    two()
    
}

one()

if(true){
    const user ="codeo"
    if(user === "codeo"){
        const website ="yooutube"
      //  console.log(user+website);

    }
    //console.log(website);

}
//console.log(user);

////////////////////////////////////IMPORTANT////////////////////////////

function addone(num){
    return num+1
}
console.log(addone(5))


const addtwo= function(num){
    return num+2
}

console.log(addtwo(10))

