// const Cutcoin = require('cutcoinjs'); // Used when accessing class outside of library
const Cutcoin = require('./index.js'); // Used when accessing class from within library

// Autoconnect asynchronously (with a promise)
var daemonRPC = new Cutcoin.daemonRPC({ autoconnect: true, random: true })
.then(daemon => {
  daemonRPC = daemon; // Store daemon interface in global variable
  
  daemonRPC.getblockcount()
  .then(blocks => {
    console.log(`Block count: ${blocks['count'] - 1}`);
  });
})
.catch(err => {
  console.error(err);
});

var walletRPC = new Cutcoin.walletRPC()
.then(wallet => {
  walletRPC = wallet; // Store wallet interface in global variable

  walletRPC.create_wallet('cutcoin_wallet', '')
  .then(new_wallet => {
    walletRPC.open_wallet('cutcoin_wallet', '')
    .then(wallet => {
      walletRPC.getaddress()
      .then(balance => {
        console.log(balance);
      });
    });
  });
})
.catch(err => {
  console.error(err);
});
