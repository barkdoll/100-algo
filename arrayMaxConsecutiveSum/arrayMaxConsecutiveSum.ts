const arrayMaxConsecutiveSum = (inputArray: number[], k: number): number => {

	const sum = (...args: number[]): number => {
		return args.reduce( (a, b) => a + b );
	}

	return inputArray.reduce( (highest, curr, currIdx) => {

		const evalSum: number = sum(
			...inputArray.slice(currIdx, currIdx + k) );

		return evalSum > highest
			? evalSum
			: highest;
	}, 0);
};


const inputs: [] = [
	[[2, 3, 5, 1, 6], 2],
	[[2, 3, 7, 7, 11, 1, 9], 4]
];


console.time('arrayMaxConsecutiveSum x2');

inputs.forEach(inp => {
	console.log(`${inp} -> ${(<any>arrayMaxConsecutiveSum)(...inp)}`);
});

console.timeEnd('arrayMaxConsecutiveSum x2');
