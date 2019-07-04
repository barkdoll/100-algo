const arrayConversion = (inputArray: number[]): number => {
	const sum = (a, b): number => a + b;
	const product = (a, b): number => a * b;
	const alternate = (bundle: number[], iteration: number = 0) => {
		if ( bundle.length === 1 )
		{
			return bundle.pop();
		}

		const processed = iteration % 2 === 0
			? bundle.reduce( (gatherer, x, i) => i % 2 === 0
				? [...gatherer, sum(x, bundle[i+1]) ]
				: gatherer, [] )
			: bundle.reduce( (gatherer, x, i) => i % 2 === 0
				? [...gatherer, product(x, bundle[i+1]) ]
				: gatherer, [] )

		return alternate(processed, iteration+1);
	}

	return alternate(inputArray);
}


const inputs: number[][] = [
	[1, 2, 3, 4, 5, 6, 7, 8],
	[2, 5, 9, 4, 1, 6, 5, 2]
];

console.time('arrayConversion x2');

inputs.forEach( inp => {
	console.log(`${inp} -> ${(<any>arrayConversion)(inp)}`) });

console.timeEnd('arrayConversion x2');

