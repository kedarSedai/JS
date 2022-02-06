console.log("Printing in console");
// document.write("Printing in window");

//variable 
var a = 5;
console.log(typeof(a));

var b = "javascript";
console.log(typeof(b));

var c = true;
console.log(typeof(c));

var d;
console.log(typeof(d));

// it can assigned to the varibale as a repreentaion of no value;
var e = null;
console.log(typeof(e));


//OBJECT IN JS
//Object has an entity 
//By creating literals:

var obj = {
    name: "javascript",
    id: 12
}
console.log(obj.id);

//By creating an instance of object 
var obj1 = new Object();
obj1.name= "JavaScript",
obj1.id = 123;
console.log(obj1);


// JAVA OR C++ class A {} A varName = new A();


//ARRAY
//Collection of same Data types []
//length starts from 1
//index strats from 0
var names = ['javaScript', 'java', 'c++']
console.log("Lenth of array is: " + names.length);
console.log("Accessing 0 index from Array" + names[0]);

names.push("c");
console.log("After Pushing : " + names);

names.unshift("c#");
console.log("After Pushing at Begining : " + names);

names.pop("c++");
console.log("After Removing at last Index : " + names);

names.shift("c#");
console.log("After Removing at First Index : " + names);

//Function 
//Block of code {}

//Function Signature in C
//int main(){} void main(){}

//Function Signature in JS
function funtionName(greet){
    // console.log("Hello from Function " + greet);
      console.log(`Hello from Function ${greet}`);
}

//Calling a function
funtionName("javascript");


//Operators
//Assignment Assign a = b ; b = c

a = 5;
b = 6;
// console.log(a == b);
var z = (a > b) ? 100 : 200
console.log(z);

// if(a  > b){
//     console.log(100)
// }else{
//     console.log(200)
// }


console.log(1 == 1) // true
console.log(1 == "1") // true
console.log(1 === "1") // false 


var y = 10;
var a  = 30;

if( a > 20){
    console.log("Hello");
}else{
    console.log("Hey");
}


//switch
// switch(expresssion)
// case : 
// break:

var grade = 'D';
var result; 
switch(grade){
    case 'A':
        result = "A grade";
        break;
    case 'B':
        result = "b GRADE";
        break;
        default: 
        result = "Default";
}
console.log(result);



//BREAk:
//It ends

// for(var i = 0; i < 10; i++){
//     if(i == 5){
//         console.log(`Loop breaks at ${i}`);
//         break;
//     }
//     console.log(i);
// }


// for(var i = 0; i < 10; i++){
//     if(i == 5){
//         console.log(`Loop Continue at ${i}`);
//         continue;
//     }
//     console.log(i);
// }



//DOM (Document Object Model)
//It is used to intearct with the HTML page


var para = document.getElementById("paragraph").innerHTML="Hello From JavaScript";


function getValue(){
    var names = document.getElementById("text").value;
    // console.log(names);

    if(names == ''){
        // console.log("Enter Field first")
        alert("Enter Field first")
        // prompt("ENter name")
    }
}