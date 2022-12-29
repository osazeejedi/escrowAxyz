const express = require('express');
const router = express.Router();


router.use("/asset", require('../escrow/assetTransfer'))
router.use("/escrow", require('../escrow/index'))

module.exports = router