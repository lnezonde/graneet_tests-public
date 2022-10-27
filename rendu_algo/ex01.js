// Algorithme : Des 1 et des 0 à devenir fou !

function dec_to_bin(num) {
    let s_num = (num % 2).toString();
    num = parseInt(num / 2);

    while (num / 2) {
        s_num = (num % 2).toString() + s_num;
        num = parseInt(num / 2);
    }
    return s_num;
}

function main(m) {
    let s_num = dec_to_bin(m);
    let i = 0;
    let l = 0;

    for (const n of s_num) {
        if (n === '0') {
            i++;
        } else {
            i = 0;
        }
        if (i > l) {
            l = i;
        }
    }
	return l;
}

console.log(main(123456) === 6);
console.log(main(65535) === 0);
console.log(main(0) === 1);
console.log(main(4294967296) === 32);
