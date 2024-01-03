const user ={
    username: "codeo",
    price:999,
    welcomeMessage(){
        console.log(`${this.username},welcome to website`);
        console.log(this);

    }
}
// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage();
//console.log(this);

function oggy(){
    let username = "codeo"
    //console.log(this.username);

}
//oggy()

//const addition = (num1,num2) =>  num1+num2
//const addition = (num1,num2) =>  (num1+num2)
const addition = (num1,num2) =>  ({username:"codeotherapist"})
console.log(addition(3,4))