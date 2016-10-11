#!/usr/bin/env node

const commandLineArgs = require('command-line-args');
const randomEmoji = require('random-emoji');
const options = commandLineArgs([{
	name: 'text',
	type: String,
	multiple: true,
	defaultOption: true
}]);

const importantize = function(text) {

	if(!text) {
		throw 'Text argument is required'
	}
	if(typeof text !== 'string' && typeof text !== 'number') {
		throw 'Text must be a string, is '+(typeof text)
	}

	const emoji = randomEmoji.random({count:2});

	const returnable =
		emoji[0].character
		+ ' '
		+ text.toUpperCase().split('').join(' ')
		+ ' '
		+ emoji[1].character
	;

	return returnable;
}

if(require.main === module) {
	if(!options.text) {
		throw 'Text argument is required'
	}
	process.stdout.write(importantize(options.text.join(' ')));
	if(process.stdout.isTTY) {
		process.stdout.write("\n");
	}
}

module.exports = importantize;
