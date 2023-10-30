require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

const ALCHEMY_API_KEY = "D9GoZ_b9KwqQOe0i7ddlFyFiVfR_7Xoe";

const SEPOLIA_PRIVATE_KEY = "253fd2992ec4811e77575c82e414a589073fa481f032a2c722d64c9486d53582";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
        }
      }
    },
  etherscan: {
    apiKey: "KWSJAQQ8SB1AB9ERJ2K7WUDE3ZDRTDKD2K",
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d`,
      //accounts: [process.env.privateKey]
    },
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/nAhiCHKvZkhkp4A7PkkCIBON0-BXW26d",
      //accounts: [process.env.privateKey]
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [ SEPOLIA_PRIVATE_KEY ],
    } 
  }
};