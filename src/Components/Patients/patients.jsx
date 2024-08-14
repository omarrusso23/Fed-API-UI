import React from "react";
import { ReactComponent as SearchSVG } from "./../../Assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as MoreSVG } from "./../../Assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import "./patients.css";

const Patients = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>Loading patient information...</div>;
  }

  return (
    <div className="patients-container">
      <div className="patient-title">
        <span>Patients</span>
        <div className="search-icon">
          <SearchSVG />
        </div>
      </div>
      <div className="patient-list-container">
        <ul className="patient-list">
          {data.map((patient, index) => (
            <li
              key={index}
              className={`patient-item ${
                patient.name === "Jessica Taylor" ? "active" : ""
              }`}
            >
              <img
                src={patient.profile} // Display the profile picture
                alt={`${patient.name}'s profile`}
                className="patient-profile-picture"
              />
              <div className="patient-details">
                <p>
                  <strong>{patient.name}</strong>
                </p>
                <p className="patient-gender">
                  {patient.gender}, {patient.age}
                </p>
              </div>
              <span className="menu-dots"><MoreSVG /></span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Patients;
