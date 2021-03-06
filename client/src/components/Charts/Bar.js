import React from "react";
import ReactEcharts from "echarts-for-react";

const Bar = ({ data }) => {
  const getYAxis = () => {
    let yAxisData = [];
    data.forEach((element) => {
      yAxisData.push(element.name);
    });
    return yAxisData;
  };

  const getSeries1 = () => {
    let series1 = [];
    data.forEach((element) => {
      series1.push(element.caseDaysToClose);
    });
    return series1;
  };

  const getSeries2 = () => {
    let series2 = [];
    data.forEach((element) => {
      series2.push(element.openCasesAge);
    });
    return series2;
  };

  const getSeries = () => {
    let series = [];
    data.forEach((element) => {
      let value = element.caseDaysToClose - element.openCasesAge;
      let obj = {
        value: value.toFixed(2),
        label: {
          show: true,
          position: value > 1 ? "right" : "left",
          color: "rgb(91,207,198)",
        },
      };
      series.push(obj);
    });
    return series;
  };
  const optionForBarWithNegativeValues = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      position: "top",
      boundaryGap: [0.1, 0.05],
    },
    yAxis: {
      type: "category",
      data: getYAxis(),
    },
    series: [
      {
        type: "bar",
        label: {
          show: true,
          position: "left",
        },
        itemStyle: {
          borderColor: "rgb(91,207,198)",
          color: "rgb(91,207,198)",
        },
        data: getSeries(),
      },
    ],
  };

  const optionForNormalBarChart = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Case Days to Close", "Open Cases Age"],
    },
    grid: {
      left: "1%",
      right: "1%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
    },
    yAxis: {
      type: "category",
      data: getYAxis(),
    },
    series: [
      {
        name: "Case Days to Close",
        type: "bar",
        barGap: "0%",
        barCategoryGap: "25%",
        barWidth: "30%",
        data: getSeries1(),
        itemStyle: {
          borderColor: "rgb(97,180,230)",
          color: "rgb(97,180,230)",
        },
        label: {
          show: true,
          position: "right",
          color: "rgb(97,180,230)",
        },
      },
      {
        name: "Open Cases Age",
        type: "bar",
        barGap: "0%",
        barCategoryGap: "25%",
        barWidth: "30%",
        data: getSeries2(),
        itemStyle: {
          borderColor: "rgb(253,143,126)",
          color: "rgb(253,143,126)",
        },
        label: {
          show: true,
          position: "right",
          color: "rgb(253,143,126)",
        },
      },
    ],
  };

  return (
    <>
      <ReactEcharts option={optionForBarWithNegativeValues} />
      <ReactEcharts option={optionForNormalBarChart} />
    </>
  );
};

export default Bar;
