const dotenv = require('dotenv');
dotenv.config()

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const RPC_URL = process.env.RPC_URL || "";
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "";
const ASSET_CONTRACT_ADDRESS = process.env.ASSET_CONTRACT_ADDRESS || "";

module.exports ={
    PRIVATE_KEY,
    RPC_URL,
    CONTRACT_ADDRESS,
    ASSET_CONTRACT_ADDRESS
}