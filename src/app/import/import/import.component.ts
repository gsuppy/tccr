import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-import",
  templateUrl: "./import.component.html",
  styleUrls: ["./import.component.scss"],
})
export class ImportComponent implements OnInit {
  usage = this.formBuilder.group({
    machine: false,
    fuel: false,
    process: false,
    transport: false,
    other: false,
  });

  types = this.formBuilder.group({
    carbon: false,
    usage: false,
    cost: false,
  });

  granularity = this.formBuilder.group({
    machine: false,
    aggregate: false,
  });

  formats: string[] = ["XLS", "PDF", "CSV"];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
