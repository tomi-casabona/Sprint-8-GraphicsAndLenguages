import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const WeeklyGraphic = () => {
  const weekData = useSelector((state) => state.data.weekData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const BarChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
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
          "rgba(255, 99, 123, 0.4)",
          "rgba(155, 99, 123, 0.4)",
          "rgba(55, 99, 123, 0.4)",
          "rgba(0, 99, 123, 0.4)",
          "rgba(255, 50, 0, 0.4)",
          "rgba(255, 155, 0, 0.4)",
          "rgba(255, 99, 200, 0.4)",
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
          "rgba(255, 99, 123, .9)",
          "rgba(155, 99, 123, .9)",
          "rgba(55, 99, 123, .9)",
          "rgba(0, 99, 123, .9)",
          "rgba(255, 50, 0, .9)",
          "rgba(255, 155, 0, .9)",
          "rgba(255, 99, 200, .9)",
        ],
        borderWidth: 2,
        borderRadius: 15,
      },
    ],
  };

  return <Bar options={options} data={BarChartData} />;
};
