import React from "react";
import { useNavigate } from "react-router-dom";

const ConsultantList = ({ consultant }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/consultant/book-appointment/${consultant._id}`)}
      >
        <div className="card-header">
          {consultant.firstName} {consultant.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization : </b> {consultant.specialization}
          </p>
          <p>
            <b>Experience : </b> {consultant.experience}
          </p>
          <p>
            <b>Fees Per Consultation : </b> {consultant.feesPerConsultation}
          </p>
          <p>
            <b>Timings : </b> {consultant.timings[0]} - {consultant.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default ConsultantList;