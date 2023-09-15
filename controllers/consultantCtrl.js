const consultantModel = require("../models/consultantModel");
const appointmentModel = require("../models/appointmentModel");
const userModel = require("../models/userModel");
const getConsultantInfoController = async (req, res) => {
  try {
    const consultant = await consultantModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "consultant data fetch success",
      data: consultant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching consultant Details",
    });
  }
};

// update consultant profile
const updateProfileController = async (req, res) => {
  try {
    const consultant = await consultantModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "consultant Profile Updated",
      data: consultant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "consultant Profile Update issue",
      error,
    });
  }
};

//get single consultant
const getConsultantByIdController = async (req, res) => {
  try {
    const consultant = await consultantModel.findOne({ _id: req.body.consultantId });
    res.status(200).send({
      success: true,
      message: "Single consultant Info Fetched",
      data: consultant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Single consultant info",
    });
  }
};

const consultantAppointmentsController = async (req, res) => {
  try {
    const consultant = await consultantModel.findOne({ userId: req.body.userId });
    const appointments = await appointmentModel.find({
      consultantId: consultant._id,
    });
    res.status(200).send({
      success: true,
      message: "Consultant Appointments fetch Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in consultant Appointments",
    });
  }
};

const updateStatusController = async (req, res) => {
  try {
    const { appointmentsId, status } = req.body;
    const appointments = await appointmentModel.findByIdAndUpdate(
      appointmentsId,
      { status }
    );
    const user = await userModel.findOne({ _id: appointments.userId });
    const notification = user?.notification;
    notification?.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onCLickPath: "/consultant-appointments",
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Appointment Status Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status",
    });
  }
};

module.exports = { getConsultantInfoController, updateProfileController,getConsultantByIdController,consultantAppointmentsController,updateStatusController };