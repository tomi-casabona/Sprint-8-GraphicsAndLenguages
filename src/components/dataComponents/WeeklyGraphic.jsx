import React, { useState } from "react";
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
import { useSelector } from "react-redux";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const WeeklyGraphic = () => {
  const weekData = useSelector((state) => state.data.weekData);
  const [selectedIndex, setSelectedIndex] = useState(null);  

  const handleClick = (index) => {
    setSelectedIndex(index);
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const selectedDay = days[index];
    const previousDay = days[index - 1] || days[days.length - 1]; 
    //setSelectedValue(weekData[selectedDay]);
    //setPreviousValue(weekData[previousDay]);
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        handleClick(elements[0].index);
      }
    },
  };

  const BarChartData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Expenses",
        data: [
          weekData.Monday,
          weekData.Tuesday,
          weekData.Wednesday,
          weekData.Thursday,
          weekData.Friday,
          weekData.Saturday,
          weekData.Sunday,
        ],
        backgroundColor: [
          selectedIndex === 0 ? "rgba(255, 99, 123, .9)" : "rgba(255, 99, 123, 0.4)",
          selectedIndex === 1 ? "rgba(155, 99, 123, .9)" : "rgba(155, 99, 123, 0.4)",
          selectedIndex === 2 ? "rgba(55, 99, 123, .9)" : "rgba(55, 99, 123, 0.4)",
          selectedIndex === 3 ? "rgba(0, 99, 123, .9)" : "rgba(0, 99, 123, 0.4)",
          selectedIndex === 4 ? "rgba(255, 50, 0, .9)" : "rgba(255, 50, 0, 0.4)",
          selectedIndex === 5 ? "rgba(255, 155, 0, .9)" : "rgba(255, 155, 0, 0.4)",
          selectedIndex === 6 ? "rgba(255, 99, 200, .9)" : "rgba(255, 99, 200, 0.4)",
        ],
        borderColor: [
          "rgba(255, 99, 123, .9)",
          "rgba(155, 99, 123, .9)",
          "rgba(55, 99, 123, .9)",
          "rgba(0, 99, 123, .9)",
          "rgba(255, 50, 0, .9)",
          "rgba(255, 155, 0, .9)",
          "rgba(255, 99, 200, .9)",
        ],
        hoverBackgroundColor: [
          "rgba(255, 99, 123, 6)",
          "rgba(155, 99, 123, .6)",
          "rgba(55, 99, 123, .6)",
          "rgba(0, 99, 123, .6)",
          "rgba(255, 50, 0, .6)",
          "rgba(255, 155, 0, .6)",
          "rgba(255, 99, 200, .6)",
        ],
        borderWidth: 2,
        borderRadius: 15,
      },
    ],
  };

  return (    
      <Bar options={options} data={BarChartData} />  
  );
};
