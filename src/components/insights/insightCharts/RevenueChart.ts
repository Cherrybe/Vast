import * as echarts from "echarts/core";
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption,
  GridComponent,
  GridComponentOption,
} from "echarts/components";
import { LineChart, LineSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  GridComponent,
]);

type EChartsOption = echarts.ComposeOption<
  | TooltipComponentOption
  | TitleComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | GridComponentOption
>;

const trendData: LineSeriesOption[] = [
  {
    data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290, 1330, 1320],
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
    data: [620, 732, 101, 900, 2290, 1230, 320, 101, 900, 2290, 1230, 320],
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

export const RevenueExpenseOptions: EChartsOption = {
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
  legend: {
    data: trendData
      .map((series) => series.name) // Get names
      .filter((name): name is string => name !== undefined),
    orient: "horizontal",
    left: "right",
    top: 0,
  },
  tooltip: {
    trigger: "axis",
  },
  color: ["#fa9744", "#ac57ab"],
  series: trendData,
};
