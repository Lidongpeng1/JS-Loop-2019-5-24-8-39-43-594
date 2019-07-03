for(let i = 1; i < 10; i++) {
	str = '';
	for(let j = 1; j <= i; j++) {
		str += i + '*' + j + '=' + i * j + '\t';
	}
	console.log(str);
}
