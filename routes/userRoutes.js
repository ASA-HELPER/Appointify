const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyConsultantController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllConsultantsController,
  bookeAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//LOGIN || POST
router.post("/login", loginController);

//REGISTER || POST
router.post("/register", registerController);

// Auth || POST
router.post('/getUserData',authMiddleware,authController)

//Apply consultant || POST
router.post("/apply-consultant", authMiddleware, applyConsultantController);

//Notifiaction consultant || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notifiaction Consultant || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//GET ALL consultant
router.get("/getAllConsultants", authMiddleware, getAllConsultantsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmentController);

//Booking Avliability
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;