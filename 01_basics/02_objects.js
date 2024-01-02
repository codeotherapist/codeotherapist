//const twitterUser = new Object()   //singleton object
const twitterUser = {}  //nonsingleton object
twitterUser.id = "codeo995"
twitterUser.name = "codeo"
twitterUser.isLoggedIn = false
//console.log(twitterUser);

const proUser = {
    email:"doggo@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Codeo",
            lastname: "therapist"
        }
    }
}
//console.log(proUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2, ...obj4}  //spread method mostly used
//console.log(obj3);


console.log(Object.keys(twitterUser));   //important
console.log(Object.values(proUser));
console.log(Object.entries(twitterUser));
console.log(twitterUser.hasOwnProperty('isLoggedIn'));


