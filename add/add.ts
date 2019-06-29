


const add = (param1: number, param2: number): number => param1 + param2;

console.log(add(1, 2));
console.log(add(3, 2));

const total = (...nums: number[]): number => (
    nums.reduce( (total, current) => total + current ));

console.log(total(1,2,3,4,5));
console.log(total(2,3));
