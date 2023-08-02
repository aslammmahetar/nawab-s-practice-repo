import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LinearScale, Title } from 'chart.js';
function App() {
  useEffect(() => {
    // Register chart elements and scales on component mount
    Chart.register(LinearScale, Title);
  }, []);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sample Dataset',
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default App;
