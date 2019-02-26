const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "20205bf374eb43108a10341a51321bd6";
//
// const fs = require('fs');
const mnemonic = "smoke ski frown science type sad home apology initial spot select hello";

module.exports = {

  networks: {
    
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: '4',       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    }
  }
}
