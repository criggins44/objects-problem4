//Object Problem 4

/*
Create an object, then write a JavaScript function that checks whether 
an object contains the specified key.
*/

 const teams = {
 	georgia: 'Bulldogs',
 	flroida: 'Gators',
 	lousiana: 'tigers',
 	alabama: {
 		elephant: 'roll tide',
 		tiger: 'war eagle'
 	}
 }

//console.log(teams.hasOwnProperty('georgia'))

const checkProperty = (object, key) => {

	 return object.hasOwnProperty(key);
}

console.log(checkProperty(teams.alabama, 'tiger'));
//console.log(teams.alabama)