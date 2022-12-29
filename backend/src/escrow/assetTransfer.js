"use_strict";
const express = require('express');
const router = express.Router();
const {ethers, BigNumber} = require('ethers');
const {RPC_URL, PRIVATE_KEY, ASSET_CONTRACT_ADDRESS} = require('../../config/index');
const { ASSET_TRANSFER_ABI } = require('./assetTransferABI');

const provider = new ethers.providers.JsonRpcProvider(RPC_URL)

router.post("/participant/create", async(req,res,next) => {
    try{
        const {name, id, pAdd, pType} = req.body
        let walletKey = new ethers.Wallet(PRIVATE_KEY);
        let wallet = walletKey.connect(provider);
        const assetTransferContract = new ethers.Contract(ASSET_CONTRACT_ADDRESS, ASSET_TRANSFER_ABI, wallet)
        const tx = await assetTransferContract.addParticipant(name, id, pAdd, pType, {
            gasLimit: BigNumber.from("300000"),
            gasPrice: BigNumber.from("170000000000"),
            nonce: await wallet.getTransactionCount(),
        })
        console.log("tx", tx)
        const receipt = await tx.wait()
        res.status(200).json({
            statusCode:200, 
            message:"success", 
            data: receipt.transactionHash
        })
    }
    catch(e){

        res.status(500).json({statusCode:500, message:e.message})
    }
})

router.get("/participant", async(req,res,next) => {
    try{
        const {id} = req.query
        const assetTransferContract = new ethers.Contract(ASSET_CONTRACT_ADDRESS, ASSET_TRANSFER_ABI, provider)
        const getParticipants = await assetTransferContract.getParticipant(id)
        res.status(200).json({
            statusCode:200, 
            message:"success", 
            data: getParticipants
        })
    }
    catch(e){
        res.status(500).json({statusCode:500, message:e.message})
    }
})


router.post("/products", async(req,res,next) => {
    try{
        const {ownerId, name, prodIdentity, productCost} = req.body
        let walletKey = new ethers.Wallet(PRIVATE_KEY);
        let wallet = walletKey.connect(provider);
        const assetTransferContract = new ethers.Contract(ASSET_CONTRACT_ADDRESS, ASSET_TRANSFER_ABI, wallet)
        const tx = await assetTransferContract.addProduct(ownerId, name, prodIdentity, productCost, {
            gasLimit: BigNumber.from("300000"),
            gasPrice: BigNumber.from("170000000000"),
            nonce: await wallet.getTransactionCount(),
        })
        console.log("tx", tx)
        const receipt = await tx.wait()
        res.status(200).json({
            statusCode:200, 
            message:"success", 
            data: receipt.transactionHash
        })
    }
    catch(e){
        res.status(500).json({statusCode:500, message:e.message})
    }
})


router.get("/products", async(req,res,next) => {
    try{
        const {id} = req.query
        const assetTransferContract = new ethers.Contract(ASSET_CONTRACT_ADDRESS, ASSET_TRANSFER_ABI, provider)
        const product = await assetTransferContract.getProduct(id)
        res.status(200).json({
            statusCode:200, 
            message:"success", 
            data: product
        })
    }
    catch(e){
        res.status(500).json({statusCode:500, message:e.message})
    }
})


router.post("/owner", async(req,res,next) => {
    try{
        const {user1Id, user2Id, prodId} = req.body
        let walletKey = new ethers.Wallet(PRIVATE_KEY);
        let wallet = walletKey.connect(provider);
        const assetTransferContract = new ethers.Contract(ASSET_CONTRACT_ADDRESS, ASSET_TRANSFER_ABI, wallet)
        const tx = await assetTransferContract.newOwner(user1Id, user2Id, prodId, {
            gasLimit: BigNumber.from("300000"),
            gasPrice: BigNumber.from("170000000000"),
            nonce: await wallet.getTransactionCount(),
        })
        console.log("tx", tx)
        const receipt = await tx.wait()
        res.status(200).json({
            statusCode:200, 
            message:"success", 
            data: receipt.transactionHash
        })
    }
    catch(e){
        res.status(500).json({statusCode:500, message:e.message})
    }
})


router.get("/provenance", async(req,res,next) => {
    try{
        const {prodId} = req.query
        const assetTransferContract = new ethers.Contract(ASSET_CONTRACT_ADDRESS, ASSET_TRANSFER_ABI, provider)
        const getProvenance = await assetTransferContract.getProvenance(prodId)
        res.status(200).json({
            statusCode:200, 
            message:"success", 
            data: getProvenance
        })
    }
    catch(e){
        res.status(500).json({statusCode:500, message:e.message})
    }
})

router.get("/ownership", async(req,res,next) => {
    try{
        const {regId} = req.query
        const assetTransferContract = new ethers.Contract(ASSET_CONTRACT_ADDRESS, ASSET_TRANSFER_ABI, provider)
        const getOwnership = await assetTransferContract.getOwnership(regId)
        res.status(200).json({
            statusCode:200, 
            message:"success", 
            data: getOwnership
        })
    }
    catch(e){
        res.status(500).json({statusCode:500, message:e.message})
    }
})

router.get("/participant/authenticate", async(req,res,next) => {
    try{
        const {uid, uname,id, utype} = req.query
        const assetTransferContract = new ethers.Contract(ASSET_CONTRACT_ADDRESS, ASSET_TRANSFER_ABI, provider)
        const participant = await assetTransferContract.authenticateParticipant(uid, uname, id, utype)
        res.status(200).json({
            statusCode:200, 
            message:"success", 
            data: participant
        })
    }
    catch(e){
        res.status(500).json({statusCode:500, message:e.message})
    }
})


module.exports = router