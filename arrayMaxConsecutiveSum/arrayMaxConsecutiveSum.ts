const arrayMaxConsecutiveSum = (inputArray: number[], k: number): number => {

	const sum = (...args) => {
		return args.reduce((a, b) => a + b);
	}


	return inputArray.reduce( (highest, curr, currIdx) => {

		// if ( typeof inputArray[currIdx+k] === undefined )
		// {
		// 	return highest;
		// }

		const evalSum: number = curr + sum(...inputArray.slice(currIdx, k));

		console.log(evalSum)
		
		return evalSum > highest
			? evalSum
			: highest;
	}, 0)
};


const inputs: [] = [
	[[2, 3, 5, 1, 6], 2],
	[[2, 3, 5, 1, 6], ]
];
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
