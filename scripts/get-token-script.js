const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("Nfts");
  const CONTRACT_ADDRESS = "0x4f68A51e0fBdE421c378b8b4c5325b44F19920D4"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(1);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(1);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});