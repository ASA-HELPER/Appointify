const express = require("express");
const {
    getConsultantInfoController,
    updateProfileController,
    getConsultantByIdController,
    updateStatusController,
    consultantAppointmentsController,
} = require("../controllers/consultantCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE consultant INFO
router.post("/getConsultantInfo", authMiddleware, getConsultantInfoController);

//POST UPDATE PROFILE
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST  GET SINGLE consultant INFO
router.post("/getConsultantById", authMiddleware, getConsultantByIdController);

//GET Appointments
router.get("/consultant-appointments",authMiddleware,consultantAppointmentsController);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;