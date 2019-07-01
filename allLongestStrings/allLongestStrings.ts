
// Fun with ternaries :D
const allLongestStrings = (inputArray: string[]): string[] => (
	inputArray.reduce( (total, curr) => (
		total[0] === undefined 
			? [ curr ]
			: ( total[0].length === curr.length 
					? [ ...total, curr ]
				: total[0].length > curr.length 
					? total
				: [ curr ] // current is longest 
			) 
	), [])
);

const inputs: string[][] = [
	['aba', 'aa', 'ad', 'vcd', 'aba'],
	['vvx', 'ikl', 'kpp', 'md', 'kjd'],
	['asdfad', 'sskl', 'irojgoe', 'irjeioj', 'gojkfd'],
	['r', 'qepotwe', 'rejwgo', 'd', 'optr'],
	['plsdfk', 'njbjowiq', 'mweobupo', 'jeoiwzxf', 'dv']
];

console.time('allLongestStrings x4');

inputs.forEach( inp => { 
	console.log(`${inp} -> ${allLongestStrings(inp)}`); })

console.timeEnd('allLongestStrings x4');
