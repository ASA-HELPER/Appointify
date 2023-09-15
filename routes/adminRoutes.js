const express = require("express");
const {
  getAllUsersController,
  getAllConsultantsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || Consultants
router.get("/getAllConsultants", authMiddleware, getAllConsultantsController);

//POST ACCOUNT STATUS
router.post("/changeAccountStatus",authMiddleware,changeAccountStatusController);

module.exports = router;