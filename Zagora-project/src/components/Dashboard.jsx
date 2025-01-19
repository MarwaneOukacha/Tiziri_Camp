import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../Dashboard.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const chartdata = [
  { class: "Nursery", boys: 21, girls: 18 },
  { class: "LKG", boys: 14, girls: 11 },
  { class: "UKG", boys: 9, girls: 15 },
  { class: "Class 1", boys: 19, girls: 24 },
  { class: "Class 2", boys: 26, girls: 8 },
  { class: "Class 3", boys: 10, girls: 12 },
  { class: "Class 4", boys: 14, girls: 12 },
  { class: "Class 5", boys: 15, girls: 9 },
];

const kpiData = [
  { title: "Users Strength", metric: "114" },
  { title: "No. of Booking", metric: "54" },
  { title: "No. of Activities", metric: "60" },
];

function Dashboard() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 60,
        ticks: {
          stepSize: 15,
        },
        grid: {
          color: "#f0f0f0",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
      },
      title: {
        display: true,
        text: "Activities-wise Booking distribution",
        align: "start",
        padding: {
          bottom: 30,
        },
        font: {
          size: 14,
          weight: "normal",
        },
      },
    },
  };

  const chartData = {
    labels: chartdata.map((item) => item.class),
    datasets: [
      {
        label: "Number of activities",
        data: chartdata.map((item) => item.boys),
        backgroundColor: "rgb(255, 165, 0)", // Orange
        borderColor: "rgb(255, 140, 0)", // Darker orange
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: "Number of booking",
        data: chartdata.map((item) => item.girls),
        backgroundColor: "rgb(128, 0, 0)", // Maroon
        borderColor: "rgb(139, 0, 0)", // Darker maroon
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h3 className="header-title">Hello Admin!</h3>
      </header>

      <div className="dashboard-content">
        {/* KPI Cards */}
        <div className="kpi-grid">
          {kpiData.map((item) => (
            <div key={item.title} className="kpi-card">
              <h4>{item.title}</h4>
              <p>{item.metric}</p>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="chart-card">
          <Bar options={chartOptions} data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
