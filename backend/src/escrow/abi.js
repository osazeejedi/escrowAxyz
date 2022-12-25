exports.ABI = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "contract EscrowService",
                    "name": "escrow",
                    "type": "address"
                }
            ],
            "name": "EscrowCreated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address payable",
                    "name": "buy",
                    "type": "address"
                },
                {
                    "internalType": "address payable",
                    "name": "sell",
                    "type": "address"
                },
                {
                    "internalType": "uint32",
                    "name": "price",
                    "type": "uint32"
                },
                {
                    "internalType": "address",
                    "name": "_SBC",
                    "type": "address"
                }
            ],
            "name": "createEscrow",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "escrowaddresses",
            "outputs": [
                {
                    "internalType": "contract EscrowService",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNumberofescrowMade",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getescrow",
            "outputs": [
                {
                    "internalType": "contract EscrowService[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
]

