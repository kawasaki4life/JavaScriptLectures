let x;

//Array Literal
const numbers = [12,45,33,29,39,102];
const mixed = [12, "Hello", true, null];

//Array Constructor
const fruits = new Array("apple", "grape", "orange", "banana");

//Get value by index
x=numbers[3];
x=numbers[0] + numbers[3];

//Using template literals with array
x=`My favotite fruit is a ${fruits[0]}`;

//chaning banana with mango
fruits[3]="mango";

//length is not read-only
//fruits.length =2;

//hardcoing the additional content for the array
fruits[4]="strawberry"; //this is not the right way to do this
fruits[fruits.length]="blueberry"

console.log(x);

console.log(fruits);