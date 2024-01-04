// for of
const arr=[1,2,3,4,5,]
for(const num of arr){        ///here the num is important
   // console.log(num);
 }


const greetings = "Hello world!"
for(const greet of greetings){
   // console.log(`${greet}`);
}  

const map = new Map()
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('fr',"France")

//console.log(map);

const myObject ={
    M: "MongoDB",
   E: "Expressjs",
   R: "Reactjs",
   N: "Nodejs"
 }
for (const key in myObject) {        
 // console.log(key);     
   // console.log(myObject[key]);                          //////for in loop      
   }

   const prog = ["js","rb","py","cpp"]
for (const key in prog ){
  //  console.log(prog[key]);
}

