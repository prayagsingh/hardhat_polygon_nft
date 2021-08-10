# Hardhat-Polygon-Nft example
An Nft example using Hardhat, Polygon blockchain and OpenZeppelin.


**Commands to create a new project using Hardhat**

1. `mkdir hardhat_polygon_nft`

2. `cd hardhat_polygon_nft`

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

**References:** 

Hardhat [docs](https://hardhat.org/tutorial/setting-up-the-environment.html)

OpenZeppelin [docs v4.x](https://docs.openzeppelin.com/contracts/4.x/erc721)

Medium [Article](https://medium.com/pinata/how-to-create-layer-2-nfts-with-polygon-and-ipfs-aef998ff8ef2)

**Credits**

Special thanks to [Justin Hunter](https://polluterofminds.medium.com/) for creating a detailed medium article.
