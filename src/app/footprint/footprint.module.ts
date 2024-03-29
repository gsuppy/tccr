import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FootprintComponent } from "./footprint/footprint.component";
import { ChartModule } from "angular-highcharts";

import { MaterialModule } from "../material.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [FootprintComponent],
  imports: [CommonModule, MaterialModule, ChartModule, SharedModule],
  exports: [FootprintComponent],
})
export class FootprintModule {}
