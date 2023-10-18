const express = require("express");
const { registeruser, authoriseduser, allusers } = require("./userControllers");
const { protect } = require("./authMiddleware");

const router = express.Router();

router.route('/').post(registeruser);
router.route('/').get(protect, allusers);
router.post('/login',authoriseduser);

module.exports = router;
