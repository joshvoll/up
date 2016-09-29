/* This class will do the ping for the website and bring all the data to another interface */
// loading constant, this case will be request and http ========================
const Request = require('request');
const Http = require('http');
const Url = require('url');
const EventEmitter = require('events').EventEmitter;




// defining the class ======================================
class Ping  {
    /* contructor method:
       params: website, timer, protoctol
    */
    constructor(website, timeouts, handler) {
        // globla properties
       
        this.website = website || null;
        this.timeouts = timeouts || 15;
        this.hander = handler;

        this.event = new EventEmitter();

    }

    // initialize the method
    get start() {
        // local properties
        let self = this;
        let time = Date.now();
        let parameters = JSON.stringify({
            webssite: this.website,
            currentTime: time,
            timeouts: this.timeouts 
        });


        // set the handler with the interval to check the website each time
        this.handler = setInterval(function(){
            // calling the ping method to request the websties
            self._ping();

        }, Number(self.timeouts));
    };

    // testing method
    test() {
        console.log(this.timeouts);
    }

    // ping method
    _ping() {
       
        // local properties
        let self = this;
        let currentTime = Date.now();
        
        Request(self.website, (err, res, body) => {
            // if ther is an error send it
            if (!err && res.statusCode === 200) {
               
                this.event.emit('up');
                this._isUp('Up', self.website, currentTime, res.statusCode);

            } else if (!err) {

                
                self._isDown('Error', err);

            } else {

                self._isDown('Down', err);
            }
        });

    }

    // method to stop de method
    _stop() {
        clearInterval(this.hander);
        this.hander = null;
    }

    _isUp(mgs, website, currentTime, statusCode) {
        // save everything to the db
        let message = JSON.stringify({
            message: mgs,
            website: website,
            time: currentTime, 
            status: statusCode
        });
        
       
        // log the status
        console.log(`${message}`);
    }

    // error log when the server is down
    _isDown(mgs, err) {
        this._changeState(status, err);
    }

    // change state, console logging for all process
    _changeState(type, newState) {
        if (newState !== this.state) {
            this.state = newState;
            console.log(type, this.state);
        }

    }
};

// exposing the module
module.exports = Ping;