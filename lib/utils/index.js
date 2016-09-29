/* Class for utilities for using on all the servers, example url, timers, etc */

// loading modules ===========================================================
const Url = require('url');


// creatint the class ========================================================
class Utils {
    constructor() {
    }

    // validet of and url, this will return a promise with the error handler
    validateUrl(url) {
        // local properties
        this.url = url;
        let urlFromClient = Url.parse(this.url);
        let urlRegex = new RegExp(/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/g);
        let self = this;

        // if the url have no http protocol add one by default with add http
        if (!urlFromClient.protocol) {
            this.url = 'http://' + this.url;
        }
        // building the url 
        return new Promise(function(resolve, reject){
            // if the url have no protocol add one
           if ((urlRegex.test(self.url)) === true) {
               //console.log('resolve inside the if statement');
               resolve(self.url);   

           } else {
               //console.log('rejected inside the if statement');
               reject(`${self.url} not a valid url`);
           }

        });
        
    }

    get timeUp() {

    }
};

// exposing the class =======================================================
module.exports = Utils;