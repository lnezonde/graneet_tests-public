// Algorithme : Pic pic pic !

function calc_max_pic(tab, i, j) {
	let n = tab[i][j];
	let m = tab[i][j];


	if (i !== 0) {
		n += tab[i-1][j];
	}
	if (j !== 0) {
		m += tab[i][j-1];
	}

	return Math.max(n, m);
}

function main(tab) {
	let i = 0;
	let j = 0;

	while (i < tab.length) {
		while (j < tab[0].length) {
			tab[i][j] = calc_max_pic(tab, i, j);
			j++;
		}
		i++;
		j = 0;
	}

	return tab[tab.length - 1][tab[0].length - 1];
}

let E1 =	[[0, 0, 0, 0],
			[0, 1, 0, 0],
			[0, 0, 1, 0],
			[0, 0, 0, 1]]

let E2 =	[[1, 2, 3],
			[4, 5, 6],
			[7, 0, 9]]

let E3 =	[[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]]

let E4 =	[[42]]

console.log(main(E1) === 3);
console.log(main(E2) === 25);
console.log(main(E3) === 0);
console.log(main(E4) === 42);
