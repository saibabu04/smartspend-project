import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto'; // Using 'chart.js/auto' for simpler imports

const ReportChart = ({ type, data, options }) => {
  // useRef holds a reference to the DOM element (the <canvas>)
  const chartRef = useRef(null);
  // useRef holds a reference to the Chart.js instance itself
  const chartInstance = useRef(null);

  useEffect(() => {
    // 1. Destroy old chart instance on cleanup (important!)
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // 2. Create the new chart instance
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: type,
      data: data,
      options: {
        responsive: true,
        ...options
      },
    });

    // 3. Cleanup function: runs when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]); // Re-run effect if these props change

  // The component simply returns the canvas element
  return <canvas ref={chartRef}></canvas>;
};

export default ReportChart;