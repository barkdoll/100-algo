
const arrayPreviousLess = (items: number[]): number[] => {
	return items.map( (item, i) => {

		if ( i === 0 )
		{
			return -1;
		}
		
		const inferiors = items.slice(0, i).filter(inf => inf < item);
		
		return inferiors.length === 0 
			? -1 
			: inferiors.pop();
	});	
}


const tests: number[][] = [
	[3, 5, 2, 4, 5],
	[2, 4, 7, 3, 1, 3]
];

console.time('arrayPreviousLess x2');

tests.forEach(test => {
	console.log(`${test} -> ${arrayPreviousLess(test)}`);
});

console.timeEnd('arrayPreviousLess x2');