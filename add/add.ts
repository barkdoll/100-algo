


const add = (param1: number, param2: number): number => param1 + param2;

console.time('add x2');

console.log(add(1, 2));
console.log(add(3, 2));

console.timeEnd('add x2');



const total = (...nums: number[]): number => (
    nums.reduce( (total, current) => total + current ));

console.time('total x2');

console.log(total(1,2,3,4,5));
console.log(total(2,3));

console.timeEnd('total x2');
