for (let index = 1; index <=10; index++) {
    const element = index;
    if (element==5){
       // console.log("8 is the best number"); 
}
//console.log(element)
}

for (let i = 1; i <=20; i++) {
   // console.log("Outer loop");
    for (let j = 1; j <=12; j++) {
       //console.log(`inner loop value ${j} and outer loop ${i}`);
//console.log(i+'*'+j+'='+i*j);
        
    }
    
}

let myarray = ["ironman","thor","spiderman"]
console.log(myarray.length)
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    //console.log(element);
    
}

// break and continue

for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log('5 is detected');
        break;
    }
   //console.log(`value of i is ${index}`);   
}
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log('5 is detected');
        continue;
    }
   console.log(`value of i is ${index}`);   
}

