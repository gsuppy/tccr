import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-optimizer",
  templateUrl: "./optimizer.component.html",
  styleUrls: ["./optimizer.component.scss"],
})
export class OptimizerComponent implements OnInit {
  insights = [
    {
      title: "Demand-Response insight",
      description:
        "Reduce load during periods of peak grid carbon to decrease scope 2 footprint by 7%.",
      co2: -1989,
      energy: "-$121K",
    },
    {
      title: "Load redistribution insight",
      description:
        "Reduce footprint by shifting 20% of load from 5-10am to 11-2pm.",
      co2: -1162,
      energy: "-$99",
    },
    {
      title: "Operating curve insight",
      description:
        "Pump P20a is running outside its target operating curve, reducing efficiency by 11%.",
      co2: -24.6,
      energy: "-$1.4K",
    },
    {
      title: "Maintenance insight",
      description:
        "Maintenance on HVAC condenser M07x is 141 days overdue, and could reduce energy usage by up to 20%.",
      co2: -19.1,
      energy: "-$1.1K",
    },
  ];

  forms = ["2023-Goal-Scenario"];

  constructor() {}

  ngOnInit(): void {}
}
