function almostIncreasingSequence(sequence: number[]): boolean {

	const decreases = sequence.reduce( (gatherer, curr, currIdx) => (
			sequence[currIdx+1] < curr 
				? [ ...gatherer, curr ]
				: gatherer )
		, []);

	return decreases.length <= 1;
}

console.time('almostIncreasingSequence x2')

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 

console.timeEnd('almostIncreasingSequence x2')
