let re;
// Literal Characters
re = /lorem/;
re = /lorem/i;

// Metacharacters Symbols
re = /^l/i; 			// Must start with
re = /am!$/i; 		// Must ends with
re = /^hello$/i; 	// Must begin and end with
re = /i.sum/i; 		// Matches any ONE character
re = /s*t/i; 			// Matches any character 0 or more times
re = /gre?a?y/i; 	// Optional character
re = /gre?a?y\?/i; 	// Escapre character


// String to match
const str ='Gray?';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
	if (re.test(str)) {
		console.log(`STR matches '${re.source}'`);
	} else {
		console.log(`STR does NOT match '${re.source}'`);
	}
}

reTest(re, str);