console.log('arrays');

//Adding elements to arrays//
//PUSH, UNSHIFT,SPLICE//
//push method to add numebrs in the beginning of array
 const numbers1 =[3,4];
 console.log('numbers1', numbers1);
 numbers1.push(5,6)
 console.log('numbers1.push(5,6)',numbers1);
 
 //UNSHIFT method to add numebrs at the end of array
 
 numbers1.unshift(1,2);
 console.log('numbers1.unshift(1,2)', numbers1);
 
 //splice method to add elements at a particular index in array//
 //splice(index, no of elements to delete, elements to be added)
 
 numbers1.splice(2,0,'a','b');
 console.log(`numbers1.splice(2,0,'a','b')`, numbers1);
    
 //FINDING ELEMENTS (Primitives)//
 //indexOf, lastIndexOf, Includes//
 const numbers2 =[1,2,3,4,2];
 console.log('numbers2',numbers2);
 console.log('numbers2.indexOf(2)',numbers2.indexOf(2));
 console.log('numbers2.lastIndexOf(2)',numbers2.lastIndexOf(2));
 console.log('numbers2.indexOf(z)',numbers2.indexOf(99));
 //If the element is not present in the array then it will return -1//
 //to check the presence of an element in a an array//
 console.log('numbers2.includes(3)',numbers2.includes(3));
 //in the above methods we can have an optional second argument- an index number from where the search will start//

  //FINDING ELEMENTS (Reference Types)//
 
const courses1 = [
    {id:1, name:'a'},
    {id:2, name:'b'}
]
console.log('courses1:',courses1);
console.log(`courses1.includes({id:1, name:'a'})`,courses1.includes({id:1, name:'a'}))
//the above code will return a false because when we look for equality in objects we are checking for equality of references of both objects
//here the object inside the array and the object passed as arguement to the includes method are two different objects, 
//two different refrences and they refer to different memory locations so it will will return a false// 
// array1.find(function(element){
//     return element>10;
// });      OR
    
//array1.find((element) => element > 10);

const course = courses1.find(function(element){
    return element.name ==='a';
});

//using ARROW Functions//
//() => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {statements}

// param => {statements}

// (param1, paramN) => {statements} 

const course2 = courses1.find(course => course.name ==='b');
console.log(`courses1.find(course => course.name ==='b')`, course2);
const course3 = courses1.find(element => element.name ==='b');
console.log(`courses1.find(element => element.name ==='b')`, course3);
const course4 = courses1.find(element => element.name ==='c');
console.log(`courses1.find(element => element.name ==='c')`, course4);
// If the object is not present them it will return udefined//

//Removing elements from an array//
const numbers3 = [1,2,3,4,5,6];
console.log('numbers3',numbers3);
numbers3.pop()
console.log('numbers3.pop()',numbers3);
numbers3.shift();
console.log('numbers3.shift()',numbers3);
numbers3.splice(2,2);
//array.splice(starting index, no of elemnts to delete, no of elements to add)//
console.log('numbers3.splice(2,2)',numbers3);

//EMPTYING AN ARRAY//

//Method 1//
let numbers4 =[1,2,3,4,5,6,7,8];
let numbers5 =numbers4;
console.log('numbers4',numbers4)
console.log('numbers5',numbers5)
numbers4 = []
console.log('numbers4',numbers4)
console.log('numbers5',numbers5)
//In this method the old array is not erased from memory and is still accessible because another vairable numbers5 
//is still pointing to the old array. The number4 =[] will create a new object and will point the variable to it.
//this is because whenenver we use array literals [] a new array object is created.

//Method 2//
console.log('Method 2');
numbers4 =[1,2,3,4,5,6,7,8];
numbers5 =numbers4;
console.log('numbers4',numbers4)
console.log('numbers5',numbers5)
numbers4.length = 0
console.log('numbers4.length =0',numbers4)
console.log('numbers5',numbers5)

//Method 3//
console.log('Method 3');
numbers4 =[1,2,3,4,5,6,7,8];
console.log('numbers4',numbers4)
numbers4.splice(0,numbers4.length);
console.log('numbers4.splice(0,numbers4.length)',numbers4)

//Method 4//
console.log('Method 4');
numbers4 =[1,2,3,4,5,6,7,8];
console.log('numbers4',numbers4)
while(numbers4.length >0){
    numbers4.pop();
};
console.log(`while(numbers4.length >0){
    numbers4.pop();
};`,numbers4)


//COMBINING AND SLICING ARRAYS//
// concat and slice methods wont alter the original arrays if the array elements are primitive data types.
//The changes made in original will not be reflected in the new array.//
//If the array elemts are reference types like objects, functio, array then only the references are copied to the new array
//so changes made to original objects will reflect in the new object as well.
console.log('Concat method')
let first = [1,2,3,4,5];
let second = [6,7,8,9,10];
console.log('first',first);
console.log('second',second);
console.log('first.concat(second)',first.concat(second));
console.log('first',first);
console.log('Slice Method');
console.log('first.slice(2,5)',first.slice(2,5));
//array.slice(start index, end index(excluded))

first = [{id:1},2,3,4,5]
third = first.concat(second)
console.log('first.concat(second) = third',third);
first[0].id= 10;
console.log('After first[0].id= 10,','first',first,'third',third)


//Spread Operator//
console.log('spread operator');
let combined = [...first,'a','b',...second];
console.log(`combined = [...first,'a','b',...second]`, combined);

//ITERATING OVER AN ARRAY//
//for of loop can be used for arrays with promotives data types//
console.log('Inerating over an array');
console.log('USing for of loop');

const numbers6=[1,2,3,4,5]
console.log('numbers6',numbers6);
console.log('for of loop will interate over values and return it, wont return index')
console.log(`for(let number of numbers6){
    console.log(number,number)
    }`)
    for(let number of numbers6){
        console.log(`value`,number)
    };
    
//Using for in method like below will return the index instead of the values. to get values have to use numbers6[number]//
console.log('Using for in loop');
console.log('with for in loop we can get both index and values, to get values log numbers6[number] instead of number ')
console.log('numbers6',numbers6);
console.log(`for(let number in numbers6){
    console.log(number);
}`)
for(let number in numbers6){
    console.log(number);
}; //==> 0 1 2 3 4
//forEach method
console.log('Using forEach method');
numbers6.forEach((value,index) => value*value);
console.log('numbers6', numbers6);


//JOINING ARRAYS//
//Join method//
console.log('.join method');
let numbers7 = [1,2,3,4,5];
console.log('numbers7',numbers7)
console.log(`numbers7.join('a'):`,numbers7.join('a'));
console.log(`output type:`,typeof numbers7.join('a'));
//join method returns a string and has an optional separator parameter//
//it compliments the split method of strings which return an array//

//SORTING ARRAYS//
// Javascrpts sorts the elemnts based on each elements ASCII code number. So its sensitive to uppercase,lowercase etc
let list1 =[35,11,23,12,5,2,89,19];
console.log('list1',list1);
console.log(list1.sort(function(a,b){
    console.log(a,b);
    if(a>b) return 1;
    if(a<b) return -1;
    return 0;
}));
console.log('Original list1 after sorting',list1);

//sorting objects
console.log('Sorting objects')
const list2 =[{id:1,name:'John'},{id:2,name:'deere'}];
console.log('list2', list2);
const list3 =list2.sort(function(a,b){
    const nameA= a.name.toUpperCase();
    const nameB= b.name.toUpperCase();
    if(nameA>nameB) return 1;
    if(nameA<nameB) return -1;
    return 0;
});
console.log('sortedlist',list3);

//TESTING ELEMENTS OF AN ARRAY/
//every and some methods are used to test whether elements in an array satisfy a particular criteria//
//every method tests whether all the elements satisfy the criteria and returns a boolean putput//
//some method tests whether atleast one of the elements satisfy the criteria and returns a boolean putput//
//both methods take a callback function. the callbacl function has optional paraments of value, index, completeArray//
//in every method if an element fails the search criteria then the search will terminate immediately//
//in some method the if an element passes the search criteria then the search will terminate immediately//
console.log('every and some methods')
let numbers8 = [1,2,3,-4,5,6];
console.log('numbers8',numbers8)
let isAllPositive = numbers8.every(function(value){
    console.log(value);
    return value >= 0
})
console.log('isPositive',isAllPositive);
let numbers9 =[1,2,3,4,5];
console.log('numbers9',numbers9)
let atleastOnePositive = numbers9.some(function(value){
    console.log(value);
    return value >2 ;
});
console.log('atleastOnePositive',atleastOnePositive);

//FILTERING AN ARRAY//
//filter method returns all the elemets which satisfy the given condition and returns those elements in a new array//

console.log('Filter method');
const numbers10 = [1,2,-3,5,-6,7];
console.log('numbers10',numbers10)
// let positiveNumbers = numbers10.filter(function(value){    //
//     return value >=0 ;                                     //
// });                                                         //
let positiveNumbers = numbers10.filter(value => value>=0);
console.log('positiveNumbers',positiveNumbers)
    
//MAPPING AN ARRAY//
//map method is used to map each element in an array to a string or a condition or object//
//map methid returns a new array and the riginal array is unchanged//
console.log('Map Method');
console.log('Mapping array elements to a string (<li> elements)');

const numbers11= [1,-1,2,3];
console.log('numbrs11', numbers11)
const filtered = numbers11.filter(n => n>=0);
const items1 = filtered.map( n => '<li>' + n + '<li>');
const html1 ='<ul>'+ items1.join('')+ '<ul>';
console.log(html1);

console.log('Mapping array elements to an object');
//Notice the arrow function syntax. We use brackets instead of curly braces because javascript will read curly brackets as //
//start of a code block and not as an object//
const numbers12= [1,-1,2,3];
const filtered2 = numbers11.filter(n => n>=0);
const items2 = filtered.map( n => ({value:n}));
console.log(items2);

//chaining of methods//
console.log('chaining of methods');
const numbers14 = [1,2,-1,3,4,5];
const filtered3 = numbers14
    .filter(n => n>=0)
    .map(n => ({value:n}))
    .filter(n => n.value>1)
    .map(n => n.value)
console.log(filtered3);

//REDUCING AN ARRAY//
//reduce method is used to reduce all the lements in an array to a single element , like sum of all numbers//
let cost1 =[1,2,3,4,5];
// let sum = 0;
// for (let n of cost1){
//     sum = sum + n;
// };
// console.log(sum);
// let total1 = cost1.reduce((accumulator, currentValue) => {return accumulator + currentValue}, initialValue);//
//we can set initial value to 0 or omit it//
let total1 = cost1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total1);


//exercise 1//
console.log('array from range');
function arrayFromRange(min,max){
    if(max<min) {return console.log('max cannot be lese than min')}
    else{
        let arr1= []
        for (let i=min;i<=max; i++){
                arr1.push(i)
        }
        return arr1;}      
};
 console.log(arrayFromRange(-2,10));

 //exercise 2//
 console.log('solution using some method');
 function includes(array,searchElement){
    return array.some((value) => value===searchElement);
 }
console.log(includes([1,2,3,4,5],1));
 
//solution using for loop//
console.log('solution using for loop');
function includes2(array,searchElement){
    let output1 = false
    for(let i=0; output1!==true&&i<array.length;i++){
        // console.log(i,array[i],searchElement);
        if(array[i]!==searchElement)
            output1=false;
        else{output1=true}
    }
    return output1
}
console.log(includes2([1,2,3,4,5],3));

//exercise 3//
console.log('excluding elements from an aray')
function except(array, excluded){
    console.log(array.length, excluded.length)
    let output2 = []
    for (let element of array){
        if (!excluded.includes(element))
            output2.push(element);
    }
    return output2;
}   
console.log(except([1,2,3,4,5,6,1],[1,3]));

