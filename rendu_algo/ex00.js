// Algorithme : Rends l'argent !

function main(l, m) {
	let p = 0;
	let amount = 0;

	for (const x of l) {
		while (amount + x <= m) {
			amount += x;
			p++;
		}
	}
	if (m === amount)
		return p;
	return -1;
}

console.log(main([500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01], 626.5) === 6);
console.log(main([500, 200, 100, 50, 20, 10, 5], 626.5) === -1);
