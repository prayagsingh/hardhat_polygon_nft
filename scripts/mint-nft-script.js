const hre = require("hardhat");
require('dotenv').config();
const METADATA_CID = process.env.METADATA_CID;

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
    const NFT = await hre.ethers.getContractFactory("Nfts");
    const URI = `ipfs://${METADATA_CID}`
    const WALLET_ADDRESS = deployer.address
    const CONTRACT_ADDRESS = "0x4f68A51e0fBdE421c378b8b4c5325b44F19920D4"
    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract.mint(WALLET_ADDRESS, URI);
    console.log("NFT minted:", contract);

}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});