"use_strict";
const express = require('express');
const router = express.Router();
const {ethers, BigNumber} = require('ethers');
const { ABI } = require('./abi');
const {CONTRACT_ADDRESS, RPC_URL, PRIVATE_KEY} = require('../../config/index')

const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

router.post("/new", async(req,res,next) => {
    try{
        const {buyer, seller, price,_SBC} = req.body
        let walletKey = new ethers.Wallet(PRIVATE_KEY);
        let wallet = walletKey.connect(provider);
        const escrowContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet)
        const tx = await escrowContract.createEscrow(buyer, seller, price, _SBC, {
            gasLimit: BigNumber.from("3000000"),
            gasPrice: BigNumber.from("170000000000"),
            nonce: await wallet.getTransactionCount(),
        })
        console.log("tx", tx)
        const receipt = await tx.wait()
        res.status(200).json({
            statusCode:200, 
            message:"success", 
            data: receipt.logs[3].transactionHash
        })
    }
    catch(e){
        res.status(500).json({statusCode:500, message:e.message})
    }
})



module.exports = router