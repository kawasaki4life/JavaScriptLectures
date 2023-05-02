const arr = [1, 2, 3, 4, 5];

arr.reverse();

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const index = arr2.indexOf(5);
if (index > -1) {
  arr2.splice(index, 1);
}

const arr3 = [...arr1, ...arr2];

console.log(arr3);