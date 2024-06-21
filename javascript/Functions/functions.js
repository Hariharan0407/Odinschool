//FUNCTION DECLARATIONS AND EXPRESSIONS//
//Function declaration//
walk()
//function declaration can be accessed even before defining them due to hoisting by JS engine//
function walk(){
    console.log('walk');
}

//function expression//
//declaring a variabe or constant and setting it to a function//
let run = function(){
    console.log('run');
};

//HOISTING - It is the process of moving function declarations to the top of the file. This is done automatically by javascript//
//engine that is executing the code//

//ARGUMENTS//
//arguments comes in handy when we want to pass varying number of arguments to a function//
function sum1(){
    let total =0;
    for(let value of arguments)
        total += value;
    return total;
    
};
console.log(sum1(1,2,3,4,5,6));
//a better way to code this is by using rest operator//

//REST OPERATOR//
// we can use rest operator when we want to create a function with varying numeber of parameters //
//it is similar to spread operator but used in pplace of functon paramaeters//
//rest operator stores all the arguments in an array and we can use reduce emthod on this array//
//rest operator argument should always be the last argument. There cant be any arguemtns passed after that//
function sum2(discount,...prices){
    const total2 = prices.reduce((a,b) => a + b);
    return total2 * (1-discount);
}
console.log(sum2(0.1, 23,37,345,67,45,89));

//DEFAULT PARAMETERS//
//assigning default arguments to parameters//
//method 1//
function interest2(capital, rate, years){
    rate = rate||2.5;
    years =years||5; //if the years value is not given or not truthy, by default it will take the value 5//
    return capital*rate/100*years
}
console.log(interest2(10000));
//method 2//
//This is an ES6 feature//
//once you give a default value to a parameter then all the following parameters should also be given a default value//
//better to make the parameter with the default value the last one//
function interest3(capital,rate =2.5, years = 5){
    return capital*rate/100*years;
};
console.log(interest3(10000));
console.log(interest3(10000,2,3));
console.log(interest3(10000,undefined,3));

//GETTER AND SETTERS//
//these are special methods in objects//
//when we create a function or method inside an object we can drop the function keyword. The syntax will look like. functionName(){} //
//getters are sed to access roperties of an object//
//setters are used to mutate(change) the properties//
//using getters we can access the method of an object like a peoperty. in below code we use person1.fullName instead of person1.fullName()//

const person1= {
    firstName: 'bruce',
    lastName : 'wayne',
    get fullName() {
        return this.firstName +' '+ this.lastName
    },
    set fullName(value){
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
console.log(person1.fullName);
person1.fullName = 'clark kent';
console.log(person1.fullName); //set the first and last names of person1 to clark kent//
console.log(person1);
let person2 = person1;          // created a copy of person1 object//
console.log(person2.fullName);
person2.fullName = 'arthur curry' //set the first and last names of new object to arthur curry//
console.log(person2.fullName);  
console.log(person1.fullName);  //changes made in the new object are reflected in original object as well//

//TRY AND CATCH - ERROR HANDLING//

const person3= {
    firstName: 'john',
    lastName : 'rambo',
    set fullName(value) {
    //here we need to make sure the setter method sends only a valid string data type with 2 parts separated by cspace for splitting//
        if (typeof value !== 'string')
            throw new Error('the value entered is not a string');
    //when an error is thrown the rest of the statements in the code block will not be executed and the control will move to the catch block//
        if (value.split !== 2)
            throw new Error('Enter both first and last name');
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};  
// try {
//     person3.fullName = 'john';
// }
// catch(e){
//     alert(e);
// };

//LET,CONST, VAR//
//let, const keywords were introduced in ES6 and they have block level scope. var keyword ahs function level scope//
// the scope of the variable i created inside for loop is limited to the code block{} of the for loop. This is block level scope//
function display(){
    var a1= 5;
    for (var i=0;i<a1;i++){
        console.log(i)
    }
    console.log(i)  
}
display();
// the scope of the variable i created inside for loop is not limited to the code block{} of the for loop it is accessible inside the//
//entire function block. This is function level scope//
function display2(){
    let a1= 5;
    for (let i=0;i<a1;i++){
        console.log(i)
    }
    console.log(i)  
}
// display2();

//THIS KEYWORD//
//this references to the object that is executing the current function//
//when this keyword is used while creating a method for an object then it will refer to the object//
//if it is used in creation of a object using function keyword then it will refer to the global object//
//arrow functions inherit this from the conatainer function//
//In the below code the this keyword of the showTags method will refer to the video1 object. The this keyword used in the callback function of//
//forEach method will refer to the window object as it is declared directly using function keyword.
 const video1 = {
    title : 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
            console.log(this);
        },);
    }
};

video1.showTags();
//this can be handled using the second parameter of the forEach method. It takes an optional second argument(this) which will point to//
//an object the this keyword inside the callback function can refer to//
console.log('changing the reference of this with forEach method')
const video2 = {
    title : 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
            console.log(this);
        },this);
    }
};
video2.showTags();
 
//there are other ways to achieve this as well//
//method 1//
console.log('changing the reference of this by creating a variable self')
const video3 = {
    title : 'a',
    tags: ['a','b','c'],
    showTags(){
        const self= this;
        this.tags.forEach(function(tag){
            console.log(self.title, tag);
            console.log(self);
        });
    }
};
video3.showTags();

//methos 2//
//call, apply and bind are function mehtods used to change the refreence of this//
console.log('changing the reference of this by using function.bind method')
const video4 = {
    title : 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
            console.log(this);
        }.bind(this));
    }
};
video4.showTags();

//methos 3//
console.log('changing the reference of this by using an arrow function')
const video5= {
    title: 'a',
    tags: ['a','b','c'],
    showTags(){
        this.tags.forEach(tag => {
        console.log(this.title, tag)
        console.log(this)
        })
    }
}
video5.showTags();
console.log('call method of functions')
//using call method we can change the context of this keyword to any other object than the one it was  caleed on. we can pass multiple//
//parameters as well//
function video6 (a,b) {
    console.log(a,b)     
    console.log(this)
    };
video6.call({name:'john'}, 5,6);

console.log('apply method of functions')
//using apply method we can change the context of this keyword to any object than the one it was called on. BUt unike call method//
//we can pass multiple parameters inside an array//
//.//
function video7 (a,b) {
    console.log(a,b)     
    console.log(this)
    };
video7.apply({name:'deere'}, [8,9]);

//exercie 1//
function sum2(...args){
    let sum3 = 0;
    console.log(args);
    console.log(Array.isArray(args[0])); 
    if(Array.isArray(args[0])){
        for(i=0; i<args[0].length; i++){
            sum3 += args[0][i]
        }; 
    }
    else for(let i=0; i < args.length; i++){
        sum3 += args[i];
    }
    return console.log(sum3)
}
console.log('sum of parameters in an array')
sum2([1,2,3,4,5]);
console.log('sum of individual parameters')
sum2(1,2,3,4,5);
//optimized solution//
console.log('optimized solution')
console.log('sum of parameters in an array',sum3([1,2,3,4,5]));
console.log('sum of individual parameters',sum3(1,2,3,4,5));
function sum3(...items){
    if(items.length === 1 && Array.isArray(items[0]))
        items=[...items[0]]
    return items.reduce((a,b) => a+b);
}

//exercise 2//

const circle1 = {
    radius : 1,
    area(){return Math.PI * this.radius * this.radius}
}
console.log('initial radius',circle1.radius)
circle1.radius= 10
console.log('updated radius',circle1.radius)
console.log('circle1 area',circle1.area())
console.log(this);

//exercise 3//

const nums1 = [1,2,3,4,5,1,4,1,2,1]

function countOccurences(array,searchElement){
    console.log(array,searchElement);
    // console.log(array.reduce((accumulator,currentElement) => {if (currentElement === searchElement) accumulator++},0));
    let count = 0
    array.reduce((accumulator,currentElement) => {if (currentElement === searchElement) count++; console.log(searchElement,currentElement,count)},0);
    return console.log(count);
}
countOccurences(nums1,1);
countOccurences(nums1,2);

let arr1 =[1,2,3,4,5]
console.log('arr1',arr1);
console.log(arr1.reduce((a,b) => a + b));