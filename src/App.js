import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav/nav";
import Info from "./Components/Info/info";
import History from "./Components/History/history";
import List from "./Components/List/list";
import Lab from "./Components/Lab/lab";
import Patients from "./Components/Patients/patients";
import "./App.css";

function App() {
  const [jessicaData, setJessicaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [patientInfo, setPatientInfo] = useState([]);

  useEffect(() => {
    const username = "coalition";
    const password = "skills-test";
    const base64Credentials = btoa(`${username}:${password}`);

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: `Basic ${base64Credentials}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Save all names, genders, ages, and profile pictures
        const allPatientInfo = data.map((patient) => ({
          name: patient.name,
          gender: patient.gender,
          age: patient.age,
          profile: patient.profile_picture,
        }));

        setPatientInfo(allPatientInfo);

        // Find and store Jessica Taylor's information
        const jessica = data.find(
          (patient) => patient.name === "Jessica Taylor"
        );

        if (jessica) {
          const jessicaInfo = {
            profile: jessica.profile_picture,
            name: jessica.name,
            dateOfBirth: jessica.date_of_birth,
            gender: jessica.gender,
            contact: jessica.phone_number,
            emergency: jessica.emergency_contact,
            insurance: jessica.insurance_type,
            diagnosisHistory: jessica.diagnosis_history,
            diagnosticList: jessica.diagnostic_list,
            labResults: jessica.lab_results,
          };
          setJessicaData(jessicaInfo);
        } else {
          throw new Error("Jessica Taylor not found in the data.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <nav className="nav">
        <Nav/>
      </nav>
      <div className="bodyContainer">
        <div className="column-patients">
          <Patients data={patientInfo} />
        </div>
        <div className="column-history">
          {jessicaData && (
            <>
              <History data={jessicaData.diagnosisHistory} className="a" />
              <List data={jessicaData.diagnosticList} />
            </>
          )}
        </div>
        <div className="column-info">
          {jessicaData && (
            <>
              <Info data={jessicaData} />
              <Lab data={jessicaData.labResults} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
