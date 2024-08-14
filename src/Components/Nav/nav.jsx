import React from "react";
import LogoNavSVG from "./../../Assets/TestLogo.svg";
import { ReactComponent as OverviewSVG } from "./../../Assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as PatientsSVG } from "./../../Assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as ScheduleSVG } from "./../../Assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as MessageSVG } from "./../../Assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as TransactionsSVG } from "./../../Assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as SettingsSVG } from "./../../Assets/settings_FILL0_wght300_GRAD0_opsz24.svg";
import { ReactComponent as VerticalMenuSVG } from "./../../Assets/more_vert_FILL0_wght300_GRAD0_opsz24.svg";
import NavImage from "./../../Assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <img src={LogoNavSVG} alt="Page Logo" />
      </div>
      <div className="nav-buttons">
        <button className="nav-button">
          <OverviewSVG className="nav-icon" />
          Overview
        </button>
        <button className="nav-button-active">
          <PatientsSVG className="nav-icon" />
          Patients
        </button>
        <button className="nav-button">
          <ScheduleSVG className="nav-icon" />
          Schedule
        </button>
        <button className="nav-button">
          <MessageSVG className="nav-icon" />
          Message
        </button>
        <button className="nav-button">
          <TransactionsSVG className="nav-icon" />
          Transactions
        </button>
      </div>
      <div className="nav-user">
        <div className="nav-img">
          <img src={NavImage} alt="user" />
        </div>
        <div className="nav-info">
          <span>
            <strong>Dr. Jose Simmons</strong>
          </span>
          <span>General Practitioner</span>
        </div>
        <div className="nav-settings">
          <SettingsSVG />
          <VerticalMenuSVG />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
