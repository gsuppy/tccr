import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReportingComponent } from "./reporting/reporting.component";

import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [ReportingComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ReportingComponent],
})
export class ReportingModule {}
