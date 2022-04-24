require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy repeat noise atom grace clinic bottom genre'; 
let testAccounts = [
"0x5f771a6a38834d5dcb294d00f2f45801cd338a617039afa1757000dc8c906036",
"0x4ac38d020d0dfa0ea4254e3be748737624791287291aa1dae419644e0e3c1142",
"0x3cdeac8fa02af166051fccfc71b8c1c77ce493f60f67d539a7a69bb0a50d57ab",
"0xd922a5d1e5cdac86df9f853079c9546df3faa54a359ff69f26e41ef63b76e54a",
"0xf5502eeb7f17e2633495321681d2deddaa2acbec13adeae6546003f5fedb0144",
"0x3933406c29af5d482b3df3cd2ebdb7128bcb5e4454516dd0797960608a7493be",
"0x2d5decd960afbcb93fc2860ab33ac89641beb4a8eda2043a0b1cbcf77443145b",
"0xb1307aaff65bed3fc1504536ecbb8e7dc943d7cb6ef95599749b28bffcf6bcb2",
"0x66bbb6cbd72fe67108146524858e183bd6978b11b7bbb91bdd47dc862378295e",
"0x295ba85a214400c43088647016c95e0477d3f48669992a4e823e6549ff2090fa"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


