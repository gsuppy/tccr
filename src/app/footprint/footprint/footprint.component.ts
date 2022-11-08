import { Component, OnInit } from "@angular/core";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-footprint",
  templateUrl: "./footprint.component.html",
  styleUrls: ["./footprint.component.scss"],
})
export class FootprintComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: "column",
        name: "column 1",
        data: [1, 2, 3],
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
    credits: {
      enabled: false,
    },
    series: [
      {
        type: "column",
        name: "column 1",
        data: [1, 2, 3],
      },
    ],
  });

  scope2 = new Chart({
    chart: {
      type: "column",
    },
    title: {
      text: "",
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: "column",
        name: "column 1",
        data: [1, 2, 3],
      },
    ],
  });

  constructor() {}

  ngOnInit(): void {}
}
