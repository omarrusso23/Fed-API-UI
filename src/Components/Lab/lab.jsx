import React from "react";
import { ReactComponent as DownloadSVG } from "./../../Assets/download_FILL0_wght300_GRAD0_opsz24 (1).svg";
import "./lab.css";

const Lab = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No lab results available.</div>;
  }

  return (
    <div className="lab-container">
      <div className="lab-title">
        <h2>Lab Results</h2>
      </div>
      <div className="lab-list-container">
        <ul className="lab-list">
          {data.map((result, index) => (
            <li
              key={index}
              className={`lab-list-item ${
                result === "CT Scans" ? "active" : ""
              }`}
            >
              <span className="lab-result">{result}</span>
              <DownloadSVG className="download-icon" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lab;
