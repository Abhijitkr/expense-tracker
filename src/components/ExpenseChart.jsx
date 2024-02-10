import { useContext } from "react";
import Charts from "react-apexcharts";
import { GlobalContext } from "../context/GlobalContext";

const options = {
  labels: ["Income", "Expense"],
  colors: ["#213ebf", "#FD5E53"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: true,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#213ebf", "#FD5E53"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

export default function ExpenseChart() {
  const { totalIncome, totalExpense } = useContext(GlobalContext);

  return (
    <Charts
      options={options}
      type="pie"
      height="100%"
      width="100%"
      series={[totalIncome, totalExpense]}
    />
  );
}
