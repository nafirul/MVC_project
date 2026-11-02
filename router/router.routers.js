const express = require('express');
const {userall} = require('../control/control.controller');
const router = express.Router();
router.get('/',userall)

module.exports=router;