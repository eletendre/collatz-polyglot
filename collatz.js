function collatz(x) {
	var seq  = 'x';
	
	while (x > 1) {
		if (x % 2 == 0:) {
			x = x / 2;
		}
		else {
			x = 3*x + 1;
		}
		seq.append(x);
	}
	return seq
}

var result = collatz(31);
console.log(result);
