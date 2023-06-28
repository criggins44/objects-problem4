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
//if the object has the specified key, then the function will return "true". 
//if not, then it will return "false"
}

console.log(checkProperty(teams.alabama, 'tiger'));
