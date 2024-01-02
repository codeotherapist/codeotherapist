function sayMyName(){
    console.log("C");
    console.log("O");
    console.log("D");
    console.log("E");
    console.log("O");

}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
//console.log("Result: ", result);


function loginUserMessage(username ){
   
        return `${username} is my name`
    }
    

//console.log(loginUserMessage("codeo"))
// console.log(loginUserMessage("codeo"))

function calculatecartprice(...num1) {
    return  num1

}
//console.log(calculatecartprice(200,400,500))
const user = {
    username : "codeo",
    price : 200
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleobject(user)

const mynewarray = [100,200,400,600]
function returnsecondvalue(getArray){
    return getArray[0]

}
//console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([300,500,800,900]));