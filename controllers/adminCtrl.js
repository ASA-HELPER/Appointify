const consultantModel = require("../models/consultantModel");
const userModel = require("../models/userModel");

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      success: true,
      message: "users data list",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "erorr while fetching users",
      error,
    });
  }
};

const getAllConsultantsController = async (req, res) => {
  try {
    const consultants = await consultantModel.find({});
    res.status(200).send({
      success: true,
      message: "consultants Data list",
      data: consultants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while getting consultants data",
      error,
    });
  }
};

// consultant account status
const changeAccountStatusController = async (req, res) => {
    try {
      const { consultantId, status } = req.body;
      const consultant = await consultantModel.findByIdAndUpdate(consultantId, { status });
      const user = await userModel.findOne({ _id: consultant.userId });
      const notification = user.notification;
      notification.push({
        type: "consultant-account-request-updated",
        message: `Your consultant Account Request Has ${status} `,
        onClickPath: "/notification",
      });
      user.isConsultant = status === "approved" ? true : false;
      await user.save();
      res.status(201).send({
        success: true,
        message: "Account Status Updated",
        data: consultant,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Eror in Account Status",
        error,
      });
    }
  };
  

module.exports = { getAllConsultantsController, getAllUsersController,changeAccountStatusController };