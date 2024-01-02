const mysym = Symbol("key1")
const JsUser = {
    name : "codeo",
    age: 18,
    location: "Mumbai",
    [mysym]: "key1",
    isLoggedIN: false,
    email: "codeo995@yahoo.com",
    LastLoginDays:["Monday","Saturday"]

}
//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser[mysym])

//JsUser.email = "codeo@ninja.com"
//Object.freeze(JsUser)
//JsUser.email = "codeo@power.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log(`Hello World,${this.name}`);
}

console.log(JsUser.greeting());



