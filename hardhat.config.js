require("@nomiclabs/hardhat-waffle");
// for using .env file which contains private info. 
require('dotenv').config();
const POLYGON_TEST_PRIVATE_KEY = process.env.POLYGON_TEST_PRIVATE_KEY;
const POLYGON_TEST_API_KEY = process.env.POLYGON_TEST_API_KEY;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // You can customize which network is used by default when running Hardhat by setting
  // the config's defaultNetwork field. If you omit this config, its default value is "hardhat"
  defaultNetwork: "polygon_test",
  networks: {
    hardhat: {
    },
    // rinkeby: {
    //   url: "https://eth-mainnet.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
    //   accounts: [privateKey1, privateKey2, ...]
    // }
    polygon_test: {
      url: `https://rpc-mumbai.maticvigil.com/v1/${POLYGON_TEST_API_KEY}`,
      chainId: 80001,
      // The address to use as default sender. If not present the first account of the node is used
      //from: ,
      // Its value should be "auto" or a number. If a number is used, it will be the gas limit used by default in every transaction.
      // If "auto" is used, the gas limit will be automatically estimated. Default value: "auto"
      gas: "auto",
      // Its value should be "auto" or a number. This parameter behaves like gas. Default value: "auto"
      gasPrice: "auto",
      // A number used to multiply the results of gas estimation to give it some slack due to the uncertainty 
      // of the estimation process. Default value: 1
      //gasMultiplier: 1,
      // This field controls which accounts Hardhat uses. It can use the node's accounts (by setting it to "remote"), a list
      // of local accounts (by setting it to an array of hex-encoded private keys), or use an HD Wallet. Default value: "remote"
      accounts: [`0x${POLYGON_TEST_PRIVATE_KEY}`],
      // You can use this field to set extra HTTP Headers to be used when making JSON-RPC requests. It accepts a JavaScript
      // object which maps header names to their values. Default value: undefined
      //httpHeaders: '',
      timeout: 20000
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
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
