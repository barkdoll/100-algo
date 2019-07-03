const areSimilar = (a: number[], b: number[]): boolean => {
	
	if ( a.length !== b.length ) 
	{
		return false;
	}

	let aSorted: number[] = [...a].sort((a,b) => a-b)
	let bSorted: number[] = [...b].sort((a,b) => a-b)
	
	if ( aSorted.toString() !== bSorted.toString() ) 
	{
		return false;
	}

	const diffs: number = a.filter((n, idx) => n !== b[idx]).length;

	return diffs <= 2;
}


const inputs: number[][][] = [
	[[1, 2, 3], [1, 2, 3]],
	[[1, 2, 3], [2, 1, 3]],
	[[1, 2, 2], [2, 1, 1]]
];

console.time('areSimilar x3');

inputs.forEach(inp => {
	console.log(
		`${inp.map(thing => `[${thing}]`)} -> ${(<any>areSimilar)(...inp)}`); 
});

console.timeEnd('areSimilar x3');
