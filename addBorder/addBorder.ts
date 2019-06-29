const addBorder = (picture: string[]): string[] => {

	const longest = picture.reduce( 
        (a, b) => a.length > b.length ? a : b ).length;

    // Extra space for a cleaner look
	const unframed = picture.map(str => str.length < longest 
		? `* ${str}` + ' '.repeat(longest - (str.length-1)) + '*'
		: `* ${str} *`);
    
    const edge = '*'.repeat(longest + 4);
    const pad = `*${' '.repeat(longest + 2)}*`;

    return [ edge, pad, ...unframed, pad, edge ];
}


console.time('addBorder');

console.log(addBorder(['abc', 'ded']).join('\n'));

console.log(addBorder([
        `Let's try a`, 
        'big sentence', 
        'instead of these', 
        'dumb letters.'])
        .join('\n'));

console.log(
	addBorder(['Eat', 'mor', 'chikin']).join('\n'));

console.timeEnd('addBorder');
