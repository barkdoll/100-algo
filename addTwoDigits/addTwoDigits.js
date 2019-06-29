var addTwoDigits = function (n) { return (n.toString()
    .split('')
    .map(function (dig) { return parseInt(dig); })
    .reduce(function (all, x) { return all + x; })); };
console.time('addTwoDigits x4');
console.log(addTwoDigits('29'));
console.log(addTwoDigits(333));
console.log(addTwoDigits('872'));
console.log(addTwoDigits(46345));
console.timeEnd('addTwoDigits x4');
