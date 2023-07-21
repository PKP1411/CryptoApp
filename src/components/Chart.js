
import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({ arr = [], currency, days }) => {
    const prices = [];
    const date = [];

    for (let i = 0; i < arr.length; i++) {
        if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
        else date.push(new Date(arr[i][0]).toLocaleDateString());
        prices.push(arr[i][1]);
    }

    // const color = ((+prices[0]) - (+prices[prices.length - 1])) > 0 ?"rgb(130, 230, 130)" : "rgb(130,30,130)";
    // const bgColor =( (+prices[0]) - (+prices[prices.length - 1])) > 0 ? "rgba(130, 230, 130, 0.2)" : "rgba(130,30,130,0.2)";
  
    const diff = (prices[prices.length-1] - prices[0]);
   

    const col = diff >= 0 ? "rgb(0, 200, 120)" : "rgb(255,99,132)";
    const bgCol = diff >= 0 ? "rgba(130, 230, 130, 0.2)" : "rgba(255,99,132,0.2)"; 

    console.log(diff); 

    console.log(col, typeof col);
    console.log(bgCol, typeof bgCol);

    

    const data = {
        labels: date,
        datasets: [
            {
                label: `Price in ${currency}`,
                data: prices,
                borderColor: `${col}`,
                backgroundColor: `${bgCol}`,
            },
        ],
    };

    return (
        <Line
            options={{
                responsive: true,
            }}
            data={data}
        />
    );
};

export default Chart;