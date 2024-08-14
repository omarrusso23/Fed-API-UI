import React from "react";
import BloodPressureChart from "./BloodPressureChart";
import { ReactComponent as ResperatoryRateSVG } from "./../../Assets/respiratory rate.svg";
import { ReactComponent as TemperatureSVG } from "./../../Assets/temperature.svg";
import  HeartBPMSVG  from "./../../Assets/HeartBPM.svg";
import { ReactComponent as ExpandPng } from "./../../Assets/expand_more_FILL0_wght300_GRAD0_opsz24.svg";
import ArrowUp from "./../../Assets/ArrowUp@2x.png";
import ArrowDown from "./../../Assets/ArrowDown@2x.png";
import "./history.css";

const History = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No diagnostic history available for Jessica Taylor.</div>;
  }

  // Sort data by year and month in descending order
  const sortedData = data.sort((a, b) => {
    if (b.year === a.year) {
      return b.month.localeCompare(a.month);
    }
    return b.year - a.year;
  });

  // Get the 6 most recent entries
  const filteredData = sortedData.slice(0, 6);

  // Get the most recent entry for pictograms
  const filteredDataForPictograms = sortedData.slice(0, 1);

  console.log(filteredDataForPictograms);

  return (
    <div className="history-container">
      <span className="history-title">
        <b>Diagnosis History</b>
      </span>
      <div className="chart-container">
        <div className="column1">
          <div className="chart-column-1">
            <span className="chart-column-1-title">Blood Pressure</span>
            <span className="chart-column-1-time">Last 6 months <span className="span-svg"><ExpandPng></ExpandPng></span></span>
          </div>
          <div className="chart-column-2">
            <BloodPressureChart data={filteredData} />
          </div>
        </div>
        <div className="column2">
          {filteredDataForPictograms.map((entry, index) => (
            <React.Fragment key={index}>
              <div className="systolic-container">
                <div className="systolic-title">
                  <div className="systolic-circle"></div>
                  <span>Systolic</span>
                </div>
                <div className="systolic-value">
                  {entry.blood_pressure.systolic.value}
                </div>
                <div className="systolic-levels">
                  <img src={ArrowUp}></img>{entry.blood_pressure.systolic.levels}
                </div>
              </div>
              <hr></hr>
              <div className="diastolic-container">
                <div className="systolic-title">
                  <div className="diastolic-circle"></div>
                  <span>Diastolic</span>
                </div>
                <div className="systolic-value">
                  {entry.blood_pressure.diastolic.value}
                </div>
                <div className="systolic-levels">
                <img src={ArrowDown}></img>{entry.blood_pressure.diastolic.levels}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="history-info">
        {filteredDataForPictograms.map((entry, index) => (
          <React.Fragment key={index}>
            <div className="respiratory-card">
              <div className="card-logo">
                <ResperatoryRateSVG />
              </div>
              <div className="card-value">
                <span className="card-subtitle">Respiratory Rate</span>
                <b>{entry.respiratory_rate.value} bpm</b>
              </div>
              <div className="card-levels">{entry.respiratory_rate.levels}</div>
            </div>
            <div className="TemperatureCard">
              <div className="card-logo">
                <TemperatureSVG />
              </div>
              <div className="card-value">
                <span className="card-subtitle">Temperature</span>
                <b>{entry.temperature.value}°F</b>
              </div>
              <div className="card-levels">{entry.temperature.levels}</div>
            </div>
            <div className="HeartCard">
              <div className="card-logo">
                <img src={HeartBPMSVG}></img>
              </div>
              <div className="card-value">
                <span className="card-subtitle">Heart Rate</span>
                <b>{entry.heart_rate.value} bpm</b>
              </div>
              <div className="card-levels"><img src={ArrowDown}></img>{entry.heart_rate.levels}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default History;
