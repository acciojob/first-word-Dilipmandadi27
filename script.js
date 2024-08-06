function firstWord(s) {
		str= str.trim()
const spaceIndex = (' ')
if (spaceIndex=== -1) {
	return str
}
   return str.substring(0,spaceIndex)
	
	}
// console.log(firstWord())
	

Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
