# `cutcoinjs`
A Cutcoin library written in ES6 JavaScript

This library has two main parts: a Cutcoin daemon (`cutcoind`) JSON-RPC API wrapper, `daemonRPC.js`, and a Cutcoin wallet (`cutcoin-wallet-rpc`) JSON-RPC API wrapper, `walletRPC.js`.

### Requirements
 - Node.js

## Installation
```bash
npm install git+https://github.com/cutcoin/cutcoinjs.git
```
*`--save` optional*

## Testing

Install dependencies (`npm install`) and then run [mocha](https://mochajs.org/) tests with `npm test`

## Usage

JSON-RPC interfaces and their methods are wrapped in promises.  Much more exhaustive examples can be found in the [tests](https://github.com/cutcoin/cutcoinjs/blob/master/test/index_test.js)

#### Autoconnect to Cutcoin daemon (`cutcoind`)

```js
const Cutcoin = require('cutcoinjs');

var daemonRPC = new Cutcoin.daemonRPC({ autoconnect: true })
.then((daemon) => {
  daemonRPC = daemon; // Store daemon interface in global variable
  
  daemonRPC.getblockcount()
  .then(blocks => {
    console.log(blocks);
  })
  .catch(err => {
    console.error(err);
  });
})
.catch(err => {
  throw new Error(err);
});
```

#### Connect to specific Cutcoin daemons

```js
// const daemonRPC = new Cutcoin.daemonRPC().then(...).catch(...); // Connect with defaults
// const daemonRPC = new Cutcoin.daemonRPC('127.0.0.1', 24248, 'user', 'pass', 'http').then(...).catch(...); // Example of passing in parameters
// const daemonRPC = new Cutcoin.daemonRPC({ port: 24248, protocol: 'https' }).then(...).catch(...); // Parameters can be passed in as an object/dictionary
const daemonRPC = new Cutcoin.daemonRPC() // Connect with defaults
.then(daemon => {
  daemonRPC = daemon; // Store daemon interface in global variable

  daemonRPC.getblockcount()
  .then(height => {
    console.log(height);
  })
  .catch(err => {
    console.error(err);
  });
})
.catch(err => {
  throw new Error(err);
});
```

#### Connect to Cutcoin wallet (`cutcoin-wallet-rpc`)

```js
// const walletRPC = new Cutcoin.walletRPC('127.0.0.1', 24250, 'user', 'pass', 'http').then(...).catch(...); // Example of passing in parameters
// const walletRPC = new Cutcoin.walletRPC({ port: 24250, protocol: 'https' }).then(...).catch(...); // Parameters can be passed in as an object/dictionary
// const walletRPC = new Cutcoin.walletRPC({ autoconnect: true }).then(...).catch(...); // Autoconnect
const walletRPC = new Cutcoin.walletRPC() // Connect with defaults
.then(wallet => {
  walletRPC = wallet; // Store wallet interface in global variable

  walletRPC.create_wallet('cutcoin_wallet', '')
  .then(new_wallet => {
    walletRPC.open_wallet('cutcoin_wallet', '')
    .then(wallet => {
      walletRPC.getaddress()
      .then(balance => {
        console.log(balance);
      })
      .catch(err = {
        console.error(err);
      });
    })
    .catch(err = {
      console.error(err);
    });
  })
  .catch(err = {
    console.error(err);
  });
})
.catch(err = {
  throw new Error(err);
});
```
