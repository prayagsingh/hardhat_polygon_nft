# Hardhat-Polygon-Nft example
An Nft example using hardhat and Polygon blockchain


**Commands to create a new project using Hardhat**

`mkdir hardhat-example3-nfts`
`cd hardhat-example3-nfts`
`npm init --yes`
`npm install --save-dev hardhat`
`npx hardhat`

**NOTE:** create a `.env` file and add the private-key and rpc api-key in this file. Please add `.env` file to `.gitignore` as well.

we will use above keys in hardhat.config.js file. 

`npm i dotenv`

If using openzeppelin then `npm install @openzeppelin/contracts` command to add the packages.

**Compile Project**

`npx hardhat compile`

**Test Project**

`npx hardhat test`

**Deploy Project**

`npx hardhat run scripts/deploy.js --network <network_name from hardhat.config.js file>`
for eg: `npx hardhat run scripts/deploy.js --network polygon_test`

**Reference:** Hardhat [docs]("https://hardhat.org/tutorial/setting-up-the-environment.html")
