/* testing for the url parsing file */
// loading the utlitity class ====================================
const Utils = require('../lib/utils');

let urlTest = new Utils();
let newUrl = 'https://obe.sandals.com';

// testing the promise of the url parsing, we're sending the url 
urlTest.validateUrl(newUrl).then(function(response){
    console.log('Success', response)
}, function(error){
    console.log('Failed!', error);
})