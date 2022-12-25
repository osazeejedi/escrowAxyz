// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// deployed address: 0x96BBbF9779707ead27E1294Cb64001EF5F736B09
// deployed address: 0x5C938a0962d587662fb278f4f02A285F9B7A17d6
import "./escrowAxyz.sol";

contract EscrowFactory {
    EscrowService[] public escrowaddresses;
    event EscrowCreated(EscrowService escrow);
    

    //address private escrowOwner;

    // constructor(address _escrowOwner ) {
    //     escrowOwner = _escrowOwner ;
    // }

    function createEscrow(address payable buy,address payable sell, uint32 price,address _SBC) external {
        EscrowService escrow = new EscrowService(buy,sell,price,_SBC);

        escrowaddresses.push(escrow);
        emit EscrowCreated(escrow);
    }

    function getescrow() external view returns (EscrowService[] memory) {
        return escrowaddresses;
    }
    function getNumberofescrowMade() external view returns (uint256) {
        return escrowaddresses.length;
    }
}