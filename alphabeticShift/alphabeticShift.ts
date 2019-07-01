const alphabeticShift = (inputString: string): string => (
	
	inputString
		.split('')
		.map(char => char.charCodeAt(0) === 122 // charCode for 'z'
			? 'a' 
			: String.fromCharCode(char.charCodeAt(0)+1) )
		.join('') 
)

console.time('alphabeticShift x3')

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('bonkers'));
console.log(alphabeticShift('whattup'));

console.timeEnd('alphabeticShift x3')
