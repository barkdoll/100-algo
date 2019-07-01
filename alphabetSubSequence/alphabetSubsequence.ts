const alphabetSubsequence = (s: string): boolean => {

	const sequence = s.split('')
	const nonSequenced = sequence.find( 
		(char, idx) => sequence[idx+1] === undefined
			? undefined 
			: char.charCodeAt(0) >= sequence[idx+1].charCodeAt(0)
	);

	return nonSequenced === undefined;
}


const inputs: string[] = ['zab', 'effg', 'cdce', 'ace', 'bxz'];

console.time('alphabetSubsequence x5');

inputs.forEach( inp => {
	console.log(`${inp} -> ${alphabetSubsequence(inp)}`); })

console.timeEnd('alphabetSubsequence x5');
