const arrayChange = (inputArray: number[]): number => {
	return inputArray.reduce((increments, x, i) => {
		if ( i === 0 )
		{
			return increments;
		}

		if ( x <= (inputArray[i-1]) )
		{
			increments += ((inputArray[i-1]+1) - x);
			inputArray[i] += increments;
		}

		return increments;
	}, 0);
}



const inputs: number[][] = [[1, 1, 1], [1, 3, 0], [3, 9, 5]];

console.time('arrayChange x3');

inputs.forEach(inp => {
	console.log(`[${inp}] -> ${(<any>arrayChange)(inp)}`); });

console.timeEnd('arrayChange x3');
