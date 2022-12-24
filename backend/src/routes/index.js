const express = require('express');
const router = express.Router();


router.use("/escrow", require('../escrow/index'))

module.exports = router