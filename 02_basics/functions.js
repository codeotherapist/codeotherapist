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
console.log("Result: ", result);


function loginUserMessage(username ){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("codeo"))
// console.log(loginUserMessage("codeo"))


