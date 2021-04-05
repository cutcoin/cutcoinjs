/**
 * cutcoinjs
 * 
 * ES6 JavaScript Cutcoin library 
 * https://github.com/cutcoin/cutcoinjs
 * 
 * @author     sneurlax <sneurlax@gmail.com> (https://github.com/sneurlax)
 * @copyright  2018
 * @license    MIT
 */
'use strict'

var daemonRPC = require('./lib/daemonRPC.js');
var walletRPC = require('./lib/walletRPC.js');

// Exports

module.exports = {
  daemonRPC: daemonRPC,
  walletRPC: walletRPC
}
