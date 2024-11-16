const lineSeriesData = [
  {
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: "line",
    smooth: true,
    name: "Expense",
    areaStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: "rgba(250, 151, 68, 0.5)" },
          { offset: 1, color: "rgba(250, 151, 68, 0)" },
        ],
      },
    },
    lineStyle: {
      color: "#fa9744",
      width: 3,
    },
  },
  {
    data: [620, 732, 101, 900, 2290, 1230, 320],
    type: "line",
    smooth: true,
    name: "Revenue",
    areaStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: "rgba(172, 87, 171, 0.5)" },
          { offset: 1, color: "rgba(172, 87, 171, 0)" },
        ],
      },
    },
    lineStyle: {
      color: "#ac57ab",
      width: 3,
    },
  },
];

export const lineOptions = {
  title: {
    text: "Revenue and Expense Trend",
    left: "0",
  },
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: (value: number) => `₵ ${value}`,
    },
  },
  legend: {
    data: lineSeriesData.map((series) => series.name),
    orient: "horizontal",
    left: "center",
    bottom: 0,
  },
  tooltip: {
    trigger: "axis",
  },
  color: ["#fa9744", "#ac57ab"],
  series: lineSeriesData,
};
