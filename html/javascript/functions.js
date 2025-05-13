function test (params){
    console.log(params);
    return 60;
}
const data = test(20);
console.log(data);
 //Higher order functions - A function that accepts another function as a parameter 

function Hello() {
    console.log("hello !! Welcome"); //-->call back function
}
 function greet(anotherFunctionParam){
    anotherFunctionParam(); //-->Higher Order function
 }
 greet(Hello);
//Arrow Functions ES6
let arrowFuntion = (a,b) =>{
    console.log(a+b);//function expression
};
arrowFunction(50,60);
let arr2 = (_) =>{
    console.log("New Arrow Fun");
}

//Anonymous function there is no data init 
let AnonymousFunction = function (){
    console.log("Calling from anonymous funtion");
};
AnonymousFunction();