const adjacentElementsProduct = (inputArray: number[]): number => {
	const products = inputArray
		.map( (x, i) => inputArray[i+1] 
			? x * inputArray[i+1] 
			: false )
		.filter(x=>x)

	return Math.max.apply(null, products);
}


console.time('adjacentElementsProduct x3');

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 2, 9, 7, 4, 5]));
console.log(adjacentElementsProduct([-1, -5, -9, -3, 4, 7]));

console.timeEnd('adjacentElementsProduct x3');
