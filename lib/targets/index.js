/* This file well get all the targe files */

// declaring internals ========================================
const internals = {};

// get all websites ==========================================
internals.websites = [
    {
        url: 'http://www.sandals.com',
        timeouts: 15
    },
    {
        url: 'https://obe.sandals.com',
        timeouts: 20
    }
];

// exposing the websites ====================================
module.exports = internals;