import Chart from "chart.js";
import { randomObjectOfDigit } from "./random";

const btn = document.querySelector(".btn");
const len = document.getElementById("length");
const values = document.getElementById("values");
let randomData = [];

btn.addEventListener("click", () => {
  randomData = randomObjectOfDigit(len.value, values.value);

  //   len.value = "";
  //   values.value = "";
  const ctx = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(randomData),
      datasets: [
        {
          label: "# of Votes",
          data: Object.values(randomData),
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      },
      responsive: false,
      maintainAspectRatio: false
    }
  });
});
