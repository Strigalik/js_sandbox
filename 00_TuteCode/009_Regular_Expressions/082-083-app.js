let re;
// Literal Characters
re = /lorem/;
re = /lorem/i;

// Metacharacters Symbols
re = /^l/i; 				// Must start with
re = /am!$/i; 			// Must ends with
re = /^hello$/i; 		// Must begin and end with
re = /i.sum/i; 			// Matches any ONE character
re = /s*t/i; 				// Matches any character 0 or more times
re = /gre?a?y/i; 		// Optional character
re = /gre?a?y\?/i; 	// Escapre character

/**
 * 083 Regular Expressions Part 3 - Character Sets Quantifiers
 */

// Brackets [] - Character Sets
re = /gr[ae]y/i;			// Must be an a or e
re = /[GF]ray/i;			// Must be a G or F
re = /[^GF]ray/i;			// Match anything except a G or F
re = /[A-Z]ray/;			// Match any uppercase letter
re = /[A-Za-z]ray/;		// Match any letter
re = /[0-9]ray/;			// Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;			// Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;		// Must occur exactly from {m1} to {m2} times
re = /Hel{2,}o/i;		// Must occur at least {m} times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// String to match
const str ='0x1x2x';

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