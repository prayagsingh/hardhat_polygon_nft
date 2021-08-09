//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

//import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
  @title Creating Nfts
  @dev Contract for creating nfts using ERC721. Unlike ERC20, ERC721 lacks a decimals field,
       since each token is distinct and cannot be partitioned
*/
contract Nfts is ERC721URIStorage, Ownable {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  using Strings for uint256;

  mapping (uint256 => string) private _tokenURIs;

  constructor() ERC721("SuperNFT", "SNFT") {}

  /**
    @dev miniting NFT
   */
  function mint(address recepient, string memory _tokenURI) public onlyOwner returns (uint) {

    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _mint(recepient, newItemId);
    _setTokenURI(newItemId, _tokenURI);

    return newItemId;
  }

}
