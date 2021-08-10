# Hardhat-Polygon-Nft example
An Nft example using Hardhat, Polygon blockchain and OpenZeppelin.


**Commands to create a new project using Hardhat**

1. `mkdir hardhat-example3-nfts`

2. `cd hardhat-example3-nfts`

3. `npm init --yes`

4. `npm install --save-dev hardhat`

5. `npx hardhat`

6. Create an `.env` file and add the private-key and rpc api-key in this file. we require these keys for configuring hardhat.config.js file.

7. Please add this `.env` file to `.gitignore` to avoid putting private information to github.

8. Install `npm i dotenv` package to use the environment variables from `.env` file

9. If using openzeppelin then `npm install @openzeppelin/contracts` command to add the packages.

**Compile Project**

`npx hardhat compile`

**Test Project**

`npx hardhat test`

**Deploy Project**

`npx hardhat run scripts/deploy.js --network <network_name from hardhat.config.js file>`

Example: `npx hardhat run scripts/deploy.js --network polygon_test`

**Reference:** 

Hardhat [docs](https://hardhat.org/tutorial/setting-up-the-environment.html)
