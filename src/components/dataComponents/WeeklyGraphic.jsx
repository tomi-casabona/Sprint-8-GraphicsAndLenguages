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
import { useDispatch, useSelector } from "react-redux";
import {
  setTodayData,
  setYesterdayData,
} from "../../redux/slices/compareSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const WeeklyGraphic = () => {
  const dispatch = useDispatch();
  const weekData = useSelector((state) => state.data.weekData);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const days = Object.keys(weekData);

  const handleClick = (index) => {
    setSelectedIndex(index);
    const today = days[index];
    const yesterday = index === 0 ? null : days[index - 1];
    dispatch(setTodayData({ day: today, value: weekData[today] }));
    dispatch(setYesterdayData({ day: yesterday, value: weekData[yesterday] }));
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
        const index = elements[0].index;
        handleClick(index);
      }
    },
  };

  const BarChartData = {
    labels: days,
    datasets: [
      {
        label: "Expenses",
        data: days.map((day) => weekData[day]),
        backgroundColor: [
          selectedIndex === 0
            ? "rgba(255, 99, 123, .9)"
            : "rgba(255, 99, 123, 0.4)",
          selectedIndex === 1
            ? "rgba(155, 99, 123, .9)"
            : "rgba(155, 99, 123, 0.4)",
          selectedIndex === 2
            ? "rgba(55, 99, 123, .9)"
            : "rgba(55, 99, 123, 0.4)",
          selectedIndex === 3
            ? "rgba(0, 99, 123, .9)"
            : "rgba(0, 99, 123, 0.4)",
          selectedIndex === 4
            ? "rgba(255, 50, 0, .9)"
            : "rgba(255, 50, 0, 0.4)",
          selectedIndex === 5
            ? "rgba(255, 155, 0, .9)"
            : "rgba(255, 155, 0, 0.4)",
          selectedIndex === 6
            ? "rgba(255, 99, 200, .9)"
            : "rgba(255, 99, 200, 0.4)",
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
    <div className="w-2/6">
      <Bar options={options} data={BarChartData} />;
    </div>
  );
};
