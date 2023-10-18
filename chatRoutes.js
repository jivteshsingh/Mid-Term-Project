const express = require("express");
const { protect } = require("./authMiddleware");
const { accessChat, fetchChat, createGroupChat, renameGroup, addToGroup, removeFromGroup } = require("./chatControllers");

const router = express.Router();

router.route('/').post(protect, accessChat);
router.route('/').get(protect, fetchChat);
router.route('/group').post(protect, createGroupChat);
router.route('/rename').put(protect, renameGroup);
router.route('/groupadd').put(protect, addToGroup);
router.route('/groupremove').put(protect, removeFromGroup);

module.exports = router;
