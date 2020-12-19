// var str = "Hello";
// var num = 1;
// var bool = true;

// var foo = "string";
// console.log(typeof foo);
// foo = 1;
// console.log(typeof foo);

var integer = 10;
var double = 10.12;
var negative = -20;
var binary = 0b01000001;
var octal = 0o101;
var hex = 0x41;

console.log(binary);
console.log(octal);
console.log(hex);

console.log(binary == octal);
console.log(octal == hex);
console.log(1 == 1.0);

var result = 4 / 2;
console.log(result);
result = 3 / 2;
console.log(result);

var pInf = 10 / 0;
console.log(pInf);

var nInf = 10 / -0;
console.log(nInf);

var nan = 1 * "string";
console.log(nan);

var str = "string";

for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
}

str[0] = 'S';
console.log(str);

str = "String";
console.log(str);

str += ' test';
console.log(str);

str = str.substring(0, 3);
console.log(str);

str = str.toUpperCase();
console.log(str);

// var foo = null;
// console.log(foo);

var key = Symbol("key");
console.log(typeof key);

var obj = {};
obj[key] = "value";
console.log(obj[key]);

var x = 1;
console.log(x);

var x = 100;
console.log(x);

console.log(foo);
var foo = 123;
console.log(foo);
{
    var foo = 456;
}
console.log(foo);