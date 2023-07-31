require("@nomiclabs/hardhat-waffle");

const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString()
const projectID = "9532a1fbc51b4f22a426f824d20778a9";

module.exports = {
  networks: {
    hardhat: {
      chainID: 1337
    },
    mumbia: {
      url: "https://polygon-mumbai.infura.io/v3/9532a1fbc51b4f22a426f824d20778a9",
      accounts: [privateKey]
    },
    maintnet: {
      url: "https://polygon-mainnet.infura.io/v3/9532a1fbc51b4f22a426f824d20778a9",
      accounts: [privateKey]
    },
  },
  solidity: "0.8.19",
};


