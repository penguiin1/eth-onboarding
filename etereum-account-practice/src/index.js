const { ethers } = require('ethers');

const wallet = ethers.Wallet.createRandom();
console.log('random wallet:',wallet);

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const privateKey = 'c2ca48bb905cbd8c9c7b777bdb230a2634c6f05b7399bd08b0a580e332d96f51';
const keyPair = ec.keyFromPrivate(privateKey);

// const privateKey = wallet.privateKey;
console.log('Private key:', privateKey);

const address = wallet.address;
console.log('My ethereum address:',address);


const myPublicKey = keyPair.getPublic().encodeCompressed('hex');
console.log('myPublicKey:::',myPublicKey);

