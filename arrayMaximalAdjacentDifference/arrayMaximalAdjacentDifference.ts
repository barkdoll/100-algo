const arrayMaximalAdjacentDifference = (
	(inputArray: number[]): number => inputArray.reduce(
		(highest, curr, idx) => {

			const next = inputArray[idx+1];

			if ( next === undefined )
			{
				return highest;
			}

			const evalDiff = Math.abs(curr - next);

			return evalDiff > highest ? evalDiff : highest;
		}
		, 0 )
);


const inputs: number[][] = [
	[2, 4, 1, 0],
	[2, 9, 4, 0]
];

console.time('arrayMaximalAdjacentDifference x2');

inputs.forEach(inp => {
	console.log(`${inp} -> ${arrayMaximalAdjacentDifference(inp)}`);
});

console.timeEnd('arrayMaximalAdjacentDifference x2');

