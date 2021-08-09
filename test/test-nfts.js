// const { expect } = require("chai");

// describe("NFT Contract", function() {

//   let NFT;
//   let nft;
//   let URI;

//   beforeEach(async function() {

//     NFT = await ethers.getContractFactory("Nfts");
//     nft = await NFT.deploy();
    
//   });

//   describe("NFT", function () {
//     it("It should deploy the contract, mint a token, and resolve to the right URI", async function () {
      
//       URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
//       console.log("URI is: ", URI)
//       await nft.deployed();
//       await nft.mint("0xd72203a26D887b60Af3a11178eF4A48BE8DecbA6", URI)
//       expect(await nft.tokenURI(1)).to.equal(URI);
//     });
//   });  
// });

const { expect } = require("chai");
describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("Nfts");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmcQr7mGTfbZZMkeU7qMuZqrR58u6ebWTpNtUXBmnaCkDg";
    await nft.deployed();
    await nft.mint("0xd72203a26D887b60Af3a11178eF4A48BE8DecbA6", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});