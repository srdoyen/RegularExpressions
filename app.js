let re;
//Literal Characters
re = /hello/i;

//Metacharacter Symbols
re = /^h/i; //must start with
re = /d$/; //end with d
re = /^hello$/i; //start with h and end with ello

//Brackets
re = /gr[ae]y/i; //must be a or e
re = /[GF]ray/; //must be a G or F
re = /[^GF]ray/i; //must be anything except a G or F
re = /[A-Z]ray/; //Match any uppercase letter
re = /[0-9]ray/; //Match any digit

//Braces {} - Character sets
re = /Hel{2}o/i;
re = /Hel{2,4}o/i;

//Parentheses () - Grouping
re = /([0-9]x){3}/;

//Shorthand Character Classes
re = /\w/; //Word character - alphanumeric character
re = /\W/; //Non Word character
re = /\d+/; //Match any digit
re = /\D/; //Non-digit
re = /\s/; //Match whitespace char
re = /Hell\b/i; //Word Boundary

//Assertions
re = /x(?=y)/; //Match x only if followed by y
re = /x(?!y)/; //Match x only if NOT followed by y

//String to match
const str = "xy";
//const str = "";
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
