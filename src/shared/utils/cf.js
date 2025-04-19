export const cf = (_class = '', ...classes) => {
	if (_class && classes)
		return [_class, ...classes].reverse().reduce((a, b) => '' + a + ' ' + b)
	return String(_class)
}
