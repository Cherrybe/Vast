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
import {
  LineChart,
  LineSeriesOption,
  BarChart,
  BarSeriesOption,
} from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  GridComponent,
  BarChart,
]);

type EChartsOption = echarts.ComposeOption<
  | TooltipComponentOption
  | TitleComponentOption
  | LegendComponentOption
  | LineSeriesOption
  | GridComponentOption
  | BarSeriesOption
>;

const stackLineBarData: Array<BarSeriesOption | LineSeriesOption> = [
  {
    name: "Revenue",
    type: "bar",
    stack: "Total",
    data: [
      15000, 20000, 18000, 25000, 23000, 22000, 21000, 26000, 24000, 27000,
      29000, 31000,
    ],
    itemStyle: {
      color: "rgba(70, 243, 75, 0.2)",
    },
    emphasis: {
      itemStyle: {
        color: "#46f34b",
      },
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
      color: "rgba(236, 72, 133, 0.2)",
    },
    emphasis: {
      itemStyle: {
        color: "#ec4885",
      },
    },
  },
  {
    data: [
      18000, 17000, 12000, 18000, 20000, 19000, 16000, 21000, 20000, 42000,
      30000, 44000,
    ],
    type: "line",
    smooth: true,
    name: "Monthly Net Cash",
    lineStyle: {
      color: "#fa9744",
      width: 3,
    },
  },
];

export const NetOptions: EChartsOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      crossStyle: {
        color: "#999",
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ["line", "bar"] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    data: ["Revenue", "Expenses", "Monthly Net Cash"],
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
    axisPointer: {
      type: "shadow",
    },
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: (value: number) => `₵ ${value}`,
    },
  },
  series: stackLineBarData,
};
