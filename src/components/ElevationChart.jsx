import "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const ElevationChart = ({ data, onHover }) => {
  const chartData = {
    labels: data.map((point) => (point.distance / 1609.34).toFixed(2)),
    datasets: [
      {
        label: "Elevation (ft)",
        data: data.map((point) => (point.altitude / 3.28084).toFixed(2)),
        borderColor: "#08ff08",
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#080808",
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const index = context.dataIndex;
            const point = data[index];
            if (onHover) onHover(point);
            return `Elevation: ${(point.altitude / 3.28084).toFixed(2)}ft`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Distance (miles)",
          color: "#080808",
        },
        ticks: {
          color: "#080808",
        },
        grid: {
          color: "#080808",
        },
      },
      y: {
        title: {
          display: true,
          text: "Elevation (ft)",
          color: "#080808",
        },
        ticks: {
          color: "#080808",
        },
        grid: {
          color: "#080808",
        },
      },
    },
    onHover: (event, chartElements) => {
      if (chartElements.length) {
        const index = chartElements[0].index;
        const point = data[index];
        if (onHover) onHover(point);
      } else if (onHover) {
        onHover(null);
      }
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

// PropTypes validation
ElevationChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      altitude: PropTypes.number.isRequired,
      distance: PropTypes.number.isRequired,
    })
  ).isRequired,
  onHover: PropTypes.func,
};

export default ElevationChart;



