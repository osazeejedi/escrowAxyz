// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
// deployed address: 0x96BBbF9779707ead27E1294Cb64001EF5F736B09
import "./escrowAxyz.sol";

contract EscrowFactory {
    EscrowService[] public escrowaddresses;
    event EscrowCreated(EscrowService escrow);
    

    //address private escrowOwner;

    // constructor(address _escrowOwner ) {
    //     escrowOwner = _escrowOwner ;
    // }

    function createEscrow(address payable buy,address payable sell, uint32 price) external {
        EscrowService escrow = new EscrowService(buy,sell,price);

        escrowaddresses.push(escrow);
        emit EscrowCreated(escrow);
    }

    function getescrow() external view returns (EscrowService[] memory) {
        return escrowaddresses;
    }
}