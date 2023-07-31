# Full Stack NFT Marketplace Built w/ Polygon, Solidity, IPFS, & Next.js

This marketplace is built using Solidity, Polygon, IPFS, Next.js, Ethers.js, and Hardhat and is fully deployable to the Polygon (MATIC) network using a custom RPC provider (Infura).

- When a user puts an NFT for sale, the ownership of the item will be transferred from the creator to the marketplace contract.
- When a user purchases an NFT, the purchase price will be transferred from the buyer to the seller and the item will be transferred from 
  the marketplace to the buyer.
- The marketplace owner will be able to set a listing fee. This fee will be taken from the seller and transferred to the contract owner upon 
  completion of any sale, enabling the owner of the marketplace to earn recurring revenue from any sale transacted in the marketplace.

![lx8avrmuwqswx9roub2g](https://github.com/ashaine16/nft-marketplace/assets/122938754/df7d588c-d06b-48cf-a9f9-c30bbd736712)


## Local Setup Intructions

To run this project locally, follow these steps.

_**Clone the project locally, change into the directory, and install the dependencies:**_

- git clone https://github.com/ashaine16/nft-marketplace.git
- cd nft-marketplace
- npm install


_**Start the local Hardhat node**_

- npx hardhat node
  
  ![image](https://github.com/ashaine16/nft-marketplace/assets/122938754/1e639128-03f1-46b6-809a-9cc7ff8fd2c3)


_With the network running, deploy the contracts to the local network in a separate terminal window using:_
- npx hardhat run scripts/deploy.js --network localhost

  ![image](https://github.com/ashaine16/nft-marketplace/assets/122938754/b57da9c4-9a28-4ccf-9e0d-28c656e13764)

  update your .config with this address ^


**_Start the app_** 
- npm run dev

## Configuration
To deploy to Polygon test or main networks, update the configurations located in hardhat.config.js to use a private key and, optionally, deploy to a private RPC like Infura. (Note: Do **NOT** use a Private Key from a Wallet you have funds in, create a throwaway wallet and use the PK of that instead)

```
require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

// infuraId is optional if you are using Infura RPC
const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    },
    matic: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      url: "https://rpc-mainnet.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
```

If you choose to use Infura, update .infuraid with your Infura project ID.
