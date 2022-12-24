//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./escrowAxyz.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Factory is Ownable {
   EscrowService[] public EscrowArray;

   function CreateNewEscrow(address payable _buyer_address, address payable _seller_address, uint32 _price) public {
     EscrowService escrow = new EscrowService(_buyer_address,_seller_address,_price);
     EscrowArray.push(escrow);
   }
   function getAllescrowClone() external view returns (EscrowService[] memory) {
        return EscrowArray;
    }

    function getNumberofescrowMade() external view returns (uint256) {
        return EscrowArray.length;
    }

}