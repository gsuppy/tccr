import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-footprint",
  templateUrl: "./footprint.component.html",
  styleUrls: ["./footprint.component.scss"],
})
export class FootprintComponent implements OnInit {
  main = new Chart({
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total fruit consumption",
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      {
        name: "John",
        type: "column",
        data: [5, 3, 4, 7, 2],
      },
      {
        name: "Jane",
        type: "column",
        data: [2, 2, 3, 2, 1],
      },
      {
        name: "Joe",
        type: "column",
        data: [3, 4, 4, 2, 5],
      },
    ],
  });

  scope1 = new Chart({
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total fruit consumption",
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      {
        name: "John",
        type: "column",
        data: [5, 3, 4, 7, 2],
      },
      {
        name: "Jane",
        type: "column",
        data: [2, 2, 3, 2, 1],
      },
      {
        name: "Joe",
        type: "column",
        data: [3, 4, 4, 2, 5],
      },
    ],
  });

  scope2 = new Chart({
    chart: {
      type: "zoomXY",
    },
    subtitle: {
      text:
        "Source: " +
        '<a href="https://www.yr.no/nb/historikk/graf/5-97251/Norge/Troms%20og%20Finnmark/Karasjok/Karasjok?q=2021"' +
        'target="_blank">YR</a>',
    },
    xAxis: [
      {
        categories: [
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
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}°C",
        },
        title: {
          text: "Temperature",
        },
      },
      {
        // Secondary yAxis
        title: {
          text: "Precipitation",
        },
        labels: {
          format: "{value} mm",
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      align: "left",
      x: 80,
      verticalAlign: "top",
      y: 80,
      floating: true,
      backgroundColor: "rgba(255,255,255,0.25)",
    },
    series: [
      {
        name: "Precipitation",
        type: "column",
        yAxis: 1,
        data: [
          27.6, 28.8, 21.7, 34.1, 29.0, 28.4, 45.6, 51.7, 39.0, 60.0, 28.6,
          32.1,
        ],
        tooltip: {
          valueSuffix: " mm",
        },
      },
      {
        name: "Temperature",
        type: "spline",
        data: [
          -13.6, -14.9, -5.8, -0.7, 3.1, 13.0, 14.5, 10.8, 5.8, -0.7, -11.0,
          -16.4,
        ],
        tooltip: {
          valueSuffix: "°C",
        },
      },
    ],
  });

  scope1_2 = new Chart({
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total fruit consumption",
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: [
      {
        name: "John",
        type: "column",
        data: [5, 3, 4, 7, 2],
      },
      {
        name: "Jane",
        type: "column",
        data: [2, 2, 3, 2, 1],
      },
      {
        name: "Joe",
        type: "column",
        data: [3, 4, 4, 2, 5],
      },
    ],
  });

  scope2_intensity = new Chart({
    chart: {
      type: "zoomXY",
    },
    title: {
      text: "Average Monthly Weather Data for Tokyo",
      align: "left",
    },
    subtitle: {
      text: "Source: WorldClimate.com",
      align: "left",
    },
    xAxis: [
      {
        categories: [
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
        crosshair: true,
      },
    ],
    yAxis: [
      {
        // Primary yAxis
        labels: {
          format: "{value}°C",
        },
        title: {
          text: "Temperature",
        },
        opposite: true,
      },
      {
        // Secondary yAxis
        gridLineWidth: 0,
        title: {
          text: "Rainfall",
        },
        labels: {
          format: "{value} mm",
        },
      },
      {
        // Tertiary yAxis
        gridLineWidth: 0,
        title: {
          text: "Sea-Level Pressure",
        },
        labels: {
          format: "{value} mb",
        },
        opposite: true,
      },
    ],
    tooltip: {
      shared: true,
    },
    legend: {
      layout: "vertical",
      align: "left",
      x: 80,
      verticalAlign: "top",
      y: 55,
      floating: true,
      backgroundColor: "rgba(255,255,255,0.25)",
    },
    series: [
      {
        name: "Sea-Level Pressure",
        type: "spline",
        yAxis: 2,
        data: [
          1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1,
          1016.9, 1018.2, 1016.7,
        ],
        marker: {
          enabled: false,
        },
        dashStyle: "ShortDot",
        tooltip: {
          valueSuffix: " mb",
        },
      },
      {
        name: "Temperature",
        type: "spline",
        data: [
          7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
        ],
        tooltip: {
          valueSuffix: " °C",
        },
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              floating: false,
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
              x: 0,
              y: 0,
            },
            yAxis: [
              {
                labels: {
                  align: "right",
                  x: 0,
                  y: -6,
                },
              },
              {
                labels: {
                  align: "left",
                  x: 0,
                  y: -6,
                },
              },
              {
                visible: false,
              },
            ],
          },
        },
      ],
    },
  });

  constructor() {}

  ngOnInit(): void {}
}
