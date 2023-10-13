// CommanJS, every file is module (by default )
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-name');
const sayHi = require('./5-utils');
const alternativeSyntax = require('./6-alternative-flavor');
// console.log(alternativeSyntax);

// sayHi('sam'); 
// sayHi(names.saksham);
// sayHi(names.vika);

require('./7-mindGernade'); // by running this we got the solution bcoz we dont export this and when we dont exports a module its automatically wrap in a function and runs ans we call the function in mindGernade module;