import React from "react";
import BirthPng from "./../../Assets/BirthIcon@2x.png";
import GenderPng from "./../../Assets/FemaleIcon@2x.png";
import ContactPng from "./../../Assets/PhoneIcon@2x.png";
import InsurancePng from "./../../Assets/InsuranceIcon@2x.png";
import ProfilePng from "./../../Assets/Layer 2@2x.png";
import "./info.css";

const Info = ({ data }) => {
  return (
    <div className="info-body">
      <div className="info-container">
        {/* This is how you would call the picture from the api and show it but because low resolution I will use a png*/}
        {/*<img
          src={data.profile}
          alt={`${data.name}'s profile`}
          className="info-profile-picture"
        />*/}
        <img
          src={ProfilePng}
          alt={`${data.name}'s profile`}
          className="info-profile-picture"
        />
        <div className="info-details">
          <p className="info-name">
            <strong>{data.name}</strong>
          </p>
          <div className="info-item">
            <img src={BirthPng} alt="Birth icon" className="info-icon" />
            <div className="info-text">
              <span className="info-text-title">Date Of Birth:</span>
              <span className="info-text-subtitle">
                <strong>{data.dateOfBirth}</strong>
              </span>
            </div>
          </div>
          <div className="info-item">
            <img src={GenderPng} alt="Gender icon" className="info-icon" />
            <div className="info-text">
              <span className="info-text-title">Gender:</span>
              <span className="info-text-subtitle">
              <strong>{data.gender}</strong>
              </span>
            </div>
          </div>
          <div className="info-item">
            <img src={ContactPng} alt="Conctact icon" className="info-icon" />
            <div className="info-text">
              <span className="info-text-title">Contact:</span>
              <span className="info-text-subtitle">
              <strong>{data.contact}</strong>
              </span>
            </div>
          </div>
          <div className="info-item">
            <img src={ContactPng} alt="Emergency Conctact icon" className="info-icon" />
            <div className="info-text">
              <span className="info-text-title">Emergency Contact:</span>
              <span className="info-text-subtitle">
              <strong>{data.emergency}</strong>
              </span>
            </div>
          </div>
          <div className="info-item">
            <img src={InsurancePng} alt="Insurance icon" className="info-icon" />
            <div className="info-text">
              <span className="info-text-title">Insurance Type:</span>
              <span className="info-text-subtitle">
              <strong>{data.insurance}</strong>
              </span>
            </div>
          </div>
        </div>
        <button><strong>Show All Information</strong></button>
      </div>
    </div>
  );
};

export default Info;
