// file for testing, there is a lot a crazy code here
const Utils = require('../lib/utils');

let urltest = new Utils();
let newUrl = 'https://www.sandals.com';

// testing the promises for url validation
urltest.validateUrl(newUrl).then(function(response){
    console.log('Success', response)
}, function(error){
    console.error('Failed!', error);
});

