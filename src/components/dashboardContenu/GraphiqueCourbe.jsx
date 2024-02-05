import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Button from "react-bootstrap/Button";

const GraphiqueCourbe = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Détruire le graphique précédent
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Courbe",
            data: [1, 2, 2, 3, 3, 4, 3],
            fill: false,
            borderColor: "blue",
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Jour de la semaine",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Valeur de la courbe",
            },
            min: 0,
            max: 5,
          },
        },
      },
    });

    // Nettoyer le graphique lors du démontage du composant
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div className="card border-0 shadow-sm" style={{ background: "#ACEBFD" }}>
      <div className="p-4 d-flex justify-content-between align-items-center" style={{ borderBottom: "0.0625rem solid rgba(46,54,80,.125)", }}>
        <div className="">
            <p>Sales Value</p>
            <h4>$10,567</h4>
            <p>Yesterday <span className="text-success">10.57%</span></p>
        </div>
        <div>
        <Button className="me-2" variant="info">Month</Button>{ "" }
        <Button variant="dark">Week</Button>
        </div>
      </div>
      <div className="card-body">
      <canvas ref={chartRef} width={400} height={200}></canvas>
      </div>
      </div>
    </div>
  );
};

export default GraphiqueCourbe;
