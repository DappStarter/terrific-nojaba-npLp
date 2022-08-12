require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remember social heavy arch obscure ghost'; 
let testAccounts = [
"0xc137aa1927b422cf0037bb0d37a04579a5d6e7fd47cb7ed6ec56514fc2b72148",
"0xf718c22c975a88a3f9176174a327fb7a63f08c4c0516566e388a297ff94e267f",
"0x09ff06037309d0f632c89188da81f565da78b28ae9c0a4b7d9dd0683af9ac8c5",
"0x1ce0451ed03b423d68f9caf8a3abb89c13ec8ed7a6868979e569111e8e4e8370",
"0x616dc3685094b2249655c58c0a576ee59246d1a38f6a56d6ec5d95758b80f1e2",
"0x34874e0efb7876329bf3cf0b7df5d6d83686893cccfd4de41328df5433711283",
"0xe860088da48c8c38ce3d010c485af29187cd2760f26d9af38228d24676b2f834",
"0x123e537c7ac5d21ef826f7cc0ea19db6fc0ea7c17bd6151462b52f48e32a7e6d",
"0x5bae0d5bec94e746dfec75e7282da001aa76baa00012733fe8016890e7f95378",
"0x72c9af06a05ec59c65463effa0bbaaa2e18ba65096e13a457728debccb6876da"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

