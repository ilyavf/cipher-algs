console.log('Modular ariphmetics');
var add = function (a, b, m) {
	return (a + b) % m;
};
var multi = function (a, b, m) {
	return (a * b) % m;
};
var obrat = function (a,m) {
	for (var b = 0; b < m; b++) {
		if (add(a, b, m) == 0) return b;
	}
}
module.exports = {
	add: add,
	multi: multi,
	obrat: obrat
}

