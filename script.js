//Object Problem 4

/*
Create an object, then write a JavaScript function that checks whether 
an object contains the specified key.
*/

const conferences = {

	sec: {
		georgia: 'Bulldogs',
		florida: 'Gators',
	},

	acc: {
		kentucky: 'Cardinals',
		indiana: 'Fighting Irish',
	},

	michigan: 'Wolverines',
	missouri: 'Tigers',
}
console.log(conferences.hasOwnProperty(florida))