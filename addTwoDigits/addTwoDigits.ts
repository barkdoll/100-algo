
const addTwoDigits = (n: string|number): number => (
	n.toString()
		.split('')
		.reduce( (all, digit) => (
			all + parseInt(digit)), 0) 
)


console.time('addTwoDigits x4');

console.log(addTwoDigits('29'));
console.log(addTwoDigits(333));
console.log(addTwoDigits('872'));
console.log(addTwoDigits(46345));

console.timeEnd('addTwoDigits x4');
