const alternatingSums = (a: number[]): number[] => ([
	a.filter( (x, i) => i % 2 === 0)
		.reduce( (a, b) => a + b, 0),
	a.filter( (x, i) => i % 2 !== 0)
		.reduce( (a, b) => a + b, 0)
])

const inputs: number[][] = [
	[50, 60, 60, 45, 70],
	[50, 90, 20],
	[65, 105, 40, 95],
];

console.time('alternatingSums x3');

inputs.forEach(inp => {
	console.log(`${inp} -> ${alternatingSums(inp)}`); });

console.timeEnd('alternatingSums x3');
