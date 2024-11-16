import * as echarts from "echarts/core";
import {
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
} from "echarts/components";
import { BarChart, BarSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BarChart,
  CanvasRenderer,
]);

type EChartsOption = echarts.ComposeOption<
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | BarSeriesOption
>;

const stackBarData: BarSeriesOption[] = [
  {
    name: "Revenue",
    type: "bar",
    stack: "Total",
    data: [
      15000, 20000, 18000, 25000, 23000, 22000, 21000, 26000, 24000, 27000,
      29000, 31000,
    ],
    itemStyle: {
      color: "#3DC256",
    },
  },
  {
    name: "Expenses",
    type: "bar",
    stack: "Total",
    data: [
      10000, 15000, 16000, 20000, 18000, 17000, 19000, 21000, 20000, 22000,
      23000, 24000,
    ],
    itemStyle: {
      color: "#C2563D",
    },
  },
];

export const barChartOptions: EChartsOption = {
  title: {
    text: "Monthly Net Cash Flow",
    left: 0,
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    formatter: (params) => {
      // Ensure params is treated as an array
      const dataParams = Array.isArray(params) ? params : [];

      // Retrieve the axis label (category value)
      const axisValue = dataParams[0]?.name || "";

      const revenue =
        dataParams.find((p) => p.seriesName === "Revenue")?.value || 0;
      const expenses =
        dataParams.find((p) => p.seriesName === "Expenses")?.value || 0;
      const netCashFlow = Number(revenue) - Number(expenses);

      return `
    <b>${axisValue}</b><br>
    Revenue: ₵ ${revenue}<br>
    Expenses: ₵ ${expenses}<br>
    Net Cash Flow: ₵ ${netCashFlow}
  `;
    },
  },
  legend: {
    data: ["Revenue", "Expenses"],
    orient: "horizontal",
    bottom: 0,
  },
  xAxis: {
    type: "category",
    data: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: (value: number) => `₵ ${value}`,
    },
  },
  series: stackBarData,
};
