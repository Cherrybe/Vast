const doughnutData = {
  name: "Expenses",
  type: "pie",
  radius: ["40%", "70%"],
  avoidLabelOverlap: false,
  itemStyle: {
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 2,
  },
  label: {
    show: false,
    position: "center",
  },
  emphasis: {
    label: {
      show: true,
      fontSize: "18",
      fontWeight: "bold",
    },
  },
  labelLine: {
    show: false,
  },
  data: [
    { value: 55, name: "Rent", itemStyle: { color: "#ec4887" } },
    { value: 12, name: "Bills", itemStyle: { color: "#ffb82c" } },
    { value: 33, name: "Email", itemStyle: { color: "#875fc0" } },
    {
      value: 42,
      name: "Employee Salary",
      itemStyle: { color: "#5e9ee0" },
    },
  ],
};

export const doughnutOptions = {
  title: {
    text: "Top 4 Expenses",
    left: "0",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal",
    left: "center",
    top: "90%",
  },
  series: doughnutData,
};
