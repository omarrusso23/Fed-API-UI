import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

// Register the components with Chart.js
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const BloodPressureChart = ({ data }) => {
  const chartRef = useRef(null);

  // Create a mapping for month abbreviations
  const monthAbbreviations = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec",
  };

  // Sort data by year and month
  const sortedData = [...data].sort((a, b) => {
    if (a.year === b.year) {
      return a.month.localeCompare(b.month);
    }
    return a.year - b.year;
  });

  // Map the months to their abbreviations
  const chartLabels = sortedData.map(
    (entry) => `${monthAbbreviations[entry.month]} ${entry.year}`
  );

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Systolic Blood Pressure",
        data: sortedData.map((entry) => entry.blood_pressure.systolic.value),
        borderColor: "#C26EB4",
        fill: false,
        tension: 0.5,
        pointRadius: 6,
        pointBackgroundColor: "#E66FD2",
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
      },
      {
        label: "Diastolic Blood Pressure",
        data: sortedData.map((entry) => entry.blood_pressure.diastolic.value),
        borderColor: "#7E6CAB",
        fill: false,
        tension: 0.5,
        pointRadius: 6,
        pointBackgroundColor: "#8C6FE6",
        pointBorderColor: "#fff",
        pointBorderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        type: "category",
        grid: {
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: false,
        },
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
  };

  useEffect(() => {
    // Cleanup old chart instance if necessary
    const chartInstance = chartRef.current?.chartInstance;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]); // Ensure effect runs when `data` changes

  return (
    <div>
      <div>
        <Line data={chartData} options={options} ref={chartRef} />
      </div>
    </div>
  );
};

export default BloodPressureChart;
