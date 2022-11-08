import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverviewComponent } from "./overview/overview.component";

import { MaterialModule } from "../material.module";

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, MaterialModule],
  exports: [OverviewComponent],
})
export class OverviewModule {}
