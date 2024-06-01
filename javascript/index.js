//Assignment operators//

let x= 3;
x >>= 1;
console.log(x);
console.log(3>='5');
console.log(3>=5);
console.log(3<='5');
console.log(3<=5);

//Bitwise operators//
console.log(1 | 2);
console.log(1 & 2);

//Bitwise Assignment operators//
let a = 2;
let b = 5;
console.log(a,b);
// a &&= b is same as a& (a=b) if a is truthy value then the value of b will be assigned to a
// a ||= b is same as a| (a=b) if a is falsy value then the value of b will be assigned to a
//Logical AND assignment operator
a = 2;
a &&= b;
console.log(a);
//Logical OR assignment operator//
a = 2;
a ||= b;
console.log(a);
//Nullish coalescing Assignment//
//value of b will be assigned to a only if a has a nullish(null or undefined) value//
a = null;
a ??= b;
console.log(a);
a = undefined;
a ??= b;
console.log(a);
//Bitwise AND assignment operator//
a = 2;
a &= b;
console.log(a);
//Bitwise OR assignment operator//
a = 2;
a |= b;
console.log(a);
//Bitwise XOR assignment operator//
a = 2;
a ^= b;
console.log(a);

let sbl = Symbol();
console.log(sbl)

//Boolean conversions//
console.log('Converting other data types to boolean');

let str1 = 'hi';
let str2 = '';
let str3 = '0';
let str4 ='50'
let num1 = 50;
let num2 = 0;
let num3 = -10;
let num4 = 0.5;
let nul = null;
let undef = undefined;
let nan = NaN
let bool1 = true;
let bool2 = false;

let str1_bool = new Boolean(str1).valueOf();
let str2_bool = new Boolean(str2).valueOf();
let str3_bool = new Boolean(str3).valueOf();
let num1_bool = new Boolean(num1).valueOf();
let num2_bool = new Boolean(num2).valueOf();
let num3_bool = new Boolean(num3).valueOf();
let num4_bool = new Boolean(num4).valueOf();
let nul_bool = new Boolean(nul).valueOf();
let undef_bool = new Boolean(undef).valueOf();
let nan_bool = new Boolean(nan).valueOf();

console.log('str1_bool:',str1_bool);
console.log('str2_bool:',str2_bool);
console.log('str3_bool:',str3_bool);
console.log('num1_bool:',num1_bool);
console.log('num2_bool:',num2_bool);
console.log('num3_bool:',num3_bool);
console.log('num4_bool:',num4_bool);
console.log('nul_bool:',nul_bool);
console.log('undef_bool:',undef_bool);
console.log('nan_bool:',nan_bool);

//Number conversions//
console.log('Converting other data types to Number');

let str1_num = new Number(str1).valueOf();
let str2_num = new Number(str2).valueOf();
let str4_num = new Number(str4).valueOf();
let bool1_num = new Number(bool1).valueOf();
let bool2_num = new Number(bool2).valueOf();
let nul_num = new Number(nul).valueOf();
let undef_num = new Number(undef).valueOf();
let nan_num = new Number(nan).valueOf();

console.log('str1_num:',str1_num);
console.log('str2_num:',str2_num);
console.log('str4_num:',str4_num);
console.log('bool1_num:',bool1_num);
console.log('bool2_num:',bool2_num);
console.log('nul_num:',nul_num);
console.log('undef_num:',undef_num);
console.log('nan_num:',nan_num);

//Multidimensional Matrix addition//

let mat1 = [[2, 5, 3], [6, 8, 11]];
let mat2 = [[4, 1, 7], [9, 7, 2]];
let mat3 = [[], []];
for (let i = 0; i < mat1.length; i++) {
for (let j = 0; j < mat1[i].length; j++) {
mat3[i][j] = mat1[i][j] + mat2[i][j];
 }
}
console.log(mat3);
