
const areEquallyStrong = 
	(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean => {
			
		const yourWeakest = Math.min(yourLeft, yourRight);
		const yourStrongest = Math.max(yourLeft, yourRight);
		const friendsWeakest = Math.min(friendsLeft, friendsRight);
		const friendsStrongest = Math.max(friendsLeft, friendsRight);

		return (yourStrongest === friendsStrongest) 
			&& (yourWeakest === friendsWeakest);
	}


const inputs = [
	[10, 15, 15, 10],
	[15, 10, 15, 10],
	[15, 10, 15, 9]
];

console.time('areEquallyStrong x3');

inputs.forEach( inp => { 
	console.log(`${inp} -> ${areEquallyStrong(...inp)}`); });

console.timeEnd('areEquallyStrong x3');
